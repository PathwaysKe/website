#!/usr/bin/env bash
# Cuts the raw screen recordings in ~/Desktop/Assets into web clips.
# Produces public/video/<name>.webm (VP9), .mp4 (H.264) and .jpg poster, 540x1212, no audio.
set -euo pipefail
SRC=${SRC:-"$HOME/Desktop/Assets"}
OUT=${OUT:-"public/video"}
mkdir -p "$OUT"
VF_BASE="scale=540:1212:flags=lanczos,format=yuv420p"

enc() { # name, input, filter_complex-free args...
  local name=$1; shift
  echo "== $name"
  ffmpeg -v error -y "$@" -an -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 -deadline good -cpu-used 2 "$OUT/$name.webm"
  ffmpeg -v error -y "$@" -an -c:v libx264 -crf 24 -preset slow -profile:v high -movflags +faststart "$OUT/$name.mp4"
  ffmpeg -v error -y -i "$OUT/$name.mp4" -vframes 1 -c:v mjpeg -q:v 4 "$OUT/$name.jpg"
}

# Hero idle loop: 0-7.0s with the last 0.5s cross-faded into the first 0.5s so it loops cleanly.
MEZ=$(mktemp -d)/hub-loop-mez.mkv
ffmpeg -v error -y -i "$SRC/Recording one.webm" -filter_complex \
  "[0:v]trim=0:7.0,setpts=PTS-STARTPTS,$VF_BASE[a];[0:v]trim=0:0.5,setpts=PTS-STARTPTS,$VF_BASE[b];[a][b]xfade=transition=fade:duration=0.5:offset=6.5[v]" \
  -map "[v]" -an -c:v libx264 -crf 8 -preset fast "$MEZ"
enc hub-loop -i "$MEZ" -vf "format=yuv420p"

# Notes: browse from the hub into a note (1.0s–13.4s, 1.25x).
enc notes-browse -ss 1.0 -t 12.4 -i "$SRC/Notes.webm" -vf "setpts=PTS/1.25,$VF_BASE"
# Notes: the step-by-step worked example (15.4s–22.6s, real time).
enc notes-worked -ss 15.4 -t 7.2 -i "$SRC/Notes.webm" -vf "$VF_BASE"
# Notes: pick the right answer in Check My Learning (31.4s–35.6s).
enc notes-quiz -ss 31.4 -t 4.2 -i "$SRC/Notes.webm" -vf "$VF_BASE"
# Tests: tap Generate, watch it build, see the preview (2.0s–6.4s).
enc tests-generate -ss 2.0 -t 4.4 -i "$SRC/Tests.webm" -vf "$VF_BASE"
# Tests: answer five questions, dwell removed (11.5s–39.4s at 3x).
enc tests-take -ss 11.5 -t 27.9 -i "$SRC/Tests.webm" -vf "setpts=PTS/3,$VF_BASE"
# Tests: the result and confetti (39.8s–46.0s).
enc tests-result -ss 39.8 -t 6.2 -i "$SRC/Tests.webm" -vf "$VF_BASE"
# Walk Through (second recording, cleaner hub): hub → tap Mathematics → notes list → open a note (0.5s–10.8s, 1.2x).
enc walk-browse -ss 0.5 -t 10.3 -i "$SRC/Walk Through.webm" -vf "setpts=PTS/1.2,$VF_BASE"
# Walk Through: long division worked example, step by step (24.5s–29.8s).
enc walk-worked -ss 24.5 -t 5.3 -i "$SRC/Walk Through.webm" -vf "$VF_BASE"
# Walk Through: finishing a note, "Great job" with confetti (58.6s–63.6s).
enc walk-finish -ss 58.6 -t 5.0 -i "$SRC/Walk Through.webm" -vf "$VF_BASE"
# Pricing: the subscription screen and the manage dialog (2.6s–6.6s).
enc pricing-app -ss 2.6 -t 4.0 -i "$SRC/Pricing.webm" -vf "$VF_BASE"
ls -la "$OUT"
