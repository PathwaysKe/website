/**
 * Edge shim in front of the static site: sends www.pathways.ke to the apex, serves everything
 * else from the built assets (which carry their own _headers and _redirects).
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
