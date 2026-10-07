/**
 * Edge shim in front of the static site: forces HTTPS, sends www.pathways.ke to the apex, and
 * serves everything else from the built assets (which carry their own _headers and _redirects).
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const wantsHttps = url.protocol !== 'https:';
    const isWww = url.hostname.startsWith('www.');
    if (wantsHttps || isWww) {
      url.protocol = 'https:';
      if (isWww) url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
