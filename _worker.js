export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);

    return new HTMLRewriter()
      .on('*', new ElementHandler())
      .transform(res)
  }
}

class Rewriter {
  element(element) {
    if (element.tagName === 'title' || element.tagName === 'h1') {
      element.setInenrContent('Walshy is awesome');
    }
  }
}