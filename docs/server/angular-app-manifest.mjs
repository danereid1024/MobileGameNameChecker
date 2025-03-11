
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: undefined,
  assets: new Map([
['index.csr.html', {size: 21250, hash: '12c68ec9be887109db988da29800862b9e899b17f51d1cc244550e640ca97ede', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 17268, hash: 'abd353cd005b484912dddfcced36f83d5637f04c023dd3a364cf61196c56eb0d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['styles-REK5BYWR.css', {size: 231693, hash: 'SmBbNIO2G9w', text: () => import('./assets-chunks/styles-REK5BYWR_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
