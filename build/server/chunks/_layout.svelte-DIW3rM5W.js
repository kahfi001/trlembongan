import { x as push, S as store_get, T as head, U as slot, V as unsubscribe_stores, z as pop, W as attr } from './exports-Bh0mkxnv.js';
import { p as page } from './stores-DRbwYPTU.js';
import './client-DJ2aW1Ds.js';

function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let canonicalUrl;
  canonicalUrl = store_get($$store_subs ??= {}, "$page", page).url.origin + store_get($$store_subs ??= {}, "$page", page).url.pathname;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="canonical"${attr("href", canonicalUrl)}> <meta property="og:url"${attr("content", canonicalUrl)}> <meta property="og:type" content="website">`;
  });
  $$payload.out += `<div><main><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></main></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-DIW3rM5W.js.map
