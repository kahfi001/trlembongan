import { i as store_get, h as head, l as slot, u as unsubscribe_stores, p as pop, d as push, a as attr } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
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
export {
  _layout as default
};
