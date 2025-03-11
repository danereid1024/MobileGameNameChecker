
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 21228, hash: '765783b11233b14cbc215e810177c94b14f5309431820c2b6c4d6ffe3ec7d104', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 17246, hash: 'f08a490f51b79d0471f180ea6441a50c179bbabb918037b3127a764796d906b6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-REK5BYWR.css', {size: 231693, hash: 'SmBbNIO2G9w', text: () => import('./assets-chunks/styles-REK5BYWR_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
