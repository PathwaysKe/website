/**
 * Shared GSAP setup. Import from page scripts; everything respects reduced motion and
 * re-initialises cleanly on view-transition navigations (astro:page-load).
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export { gsap, ScrollTrigger };

export const reduced = () =>
  document.documentElement.classList.contains('reduce') ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Mark that JS owns reveals; CSS hides [data-reveal] until GSAP shows them. */
export function markReady() {
  const html = document.documentElement;
  html.classList.add('js-ready');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) html.classList.add('reduce');
}

/**
 * Generic scroll reveal for every [data-reveal] in `root`.
 * data-reveal="up|left|right|scale|none", data-reveal-delay="0.1", data-reveal-stagger on a parent
 * reveals its direct children with a stagger.
 */
export function reveals(root: ParentNode = document) {
  if (reduced()) {
    root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => (el.style.opacity = '1'));
    return;
  }
  const from = (kind: string | null) => {
    switch (kind) {
      case 'left': return { x: -36, y: 0, scale: 1 };
      case 'right': return { x: 36, y: 0, scale: 1 };
      case 'scale': return { x: 0, y: 0, scale: 0.88 };
      case 'none': return { x: 0, y: 0, scale: 1 };
      default: return { x: 0, y: 28, scale: 1 };
    }
  };
  root.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
    const kids = Array.from(group.children) as HTMLElement[];
    if (!kids.length) return;
    kids.forEach((k) => k.removeAttribute('data-reveal'));
    gsap.fromTo(
      kids,
      { opacity: 0, y: 26 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        stagger: parseFloat(group.dataset.revealStagger || '0.08') || 0.08,
        scrollTrigger: { trigger: group, start: 'top 85%', once: true },
      },
    );
  });
  root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const f = from(el.dataset.reveal ?? null);
    gsap.fromTo(
      el,
      { opacity: 0, ...f },
      {
        opacity: 1, x: 0, y: 0, scale: 1,
        duration: 0.9, ease: 'power3.out',
        delay: parseFloat(el.dataset.revealDelay || '0') || 0,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  });
}

/** Draw every .marker underline when it scrolls into view. */
export function markers(root: ParentNode = document) {
  root.querySelectorAll<SVGPathElement>('.marker svg path').forEach((p) => {
    if (reduced()) return;
    gsap.fromTo(
      p,
      { drawSVG: '0%' },
      { drawSVG: '100%', duration: 0.7, ease: 'power2.inOut', delay: 0.25, scrollTrigger: { trigger: p, start: 'top 85%', once: true } },
    );
  });
}

/** Count-up numbers: <span data-count="1200" data-prefix="KES " data-suffix="/mo"> */
export function counters(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = parseFloat(el.dataset.count || '0');
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const fmt = (n: number) => prefix + Math.round(n).toLocaleString('en-KE') + suffix;
    if (reduced()) { el.textContent = fmt(target); return; }
    const o = { v: 0 };
    gsap.to(o, {
      v: target, duration: 1.4, ease: 'power3.out',
      onUpdate: () => (el.textContent = fmt(o.v)),
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });
}

/** Split a heading into word spans for staggered reveals (keeps markup simple). */
export function splitWords(el: HTMLElement) {
  if (el.dataset.split) return Array.from(el.querySelectorAll<HTMLElement>('.w'));
  const walk = (node: Node): void => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      const frag = document.createDocumentFragment();
      text.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) frag.appendChild(document.createTextNode(part));
        else {
          const s = document.createElement('span');
          s.className = 'w';
          s.style.display = 'inline-block';
          s.textContent = part;
          frag.appendChild(s);
        }
      });
      node.parentNode?.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE && !(node as HTMLElement).classList.contains('w') && (node as Element).tagName !== 'svg') {
      Array.from(node.childNodes).forEach(walk);
    }
  };
  Array.from(el.childNodes).forEach(walk);
  el.dataset.split = '1';
  return Array.from(el.querySelectorAll<HTMLElement>('.w'));
}

/** Kill all ScrollTriggers before a view-transition swap so the next page starts clean. */
export function teardown() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  gsap.globalTimeline.clear();
}

/** Run `fn` now and after every client-side navigation. */
export function onPage(fn: () => void) {
  const run = () => { markReady(); fn(); ScrollTrigger.refresh(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, { once: true });
  else run();
  document.addEventListener('astro:page-load', run);
  document.addEventListener('astro:before-swap', teardown);
}
