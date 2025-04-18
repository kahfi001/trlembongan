import { g as getInformation, a as getAccommodation, b as getOffers } from './offers-CbI0Iqj7.js';
import { g as getBlog } from './blog-CV7_ua7w.js';
import { g as getSeo } from './seo-C0aigka1.js';
import 'axios';

const prerender = false;

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  prerender: prerender
});

const load = async () => {
  try {
    const [info, blog, accommodation, offers, seo] = await Promise.all([
      getInformation(),
      getBlog(),
      getAccommodation(),
      getOffers(),
      getSeo()
    ]);
    return {
      maxage: 3600,
      info,
      blog,
      accommodation,
      offers,
      seo
    };
  } catch (error) {
    console.error("Error loading data:", error);
    throw new Error("Failed to load data");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CUvxdT0-.js')).default;
const universal_id = "src/routes/blog/+page.ts";
const server_id = "src/routes/blog/+page.server.ts";
const imports = ["_app/immutable/nodes/5.CCLQ9ttY.js","_app/immutable/chunks/BigvG9Gq.js","_app/immutable/chunks/CZu2fjw8.js","_app/immutable/chunks/CwHX7vui.js","_app/immutable/chunks/B2K67hgT.js","_app/immutable/chunks/Bl_OthJ0.js","_app/immutable/chunks/t1D9zvhI.js","_app/immutable/chunks/BZ0x716o.js","_app/immutable/chunks/DA4jBAQu.js","_app/immutable/chunks/DfN3wv18.js","_app/immutable/chunks/BODYIVTi.js","_app/immutable/chunks/DTP2vM-k.js"];
const stylesheets = ["_app/immutable/assets/swiper.CcTDN23P.css","_app/immutable/assets/aos.DvB2Xm2x.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=5-DgMkuiVZ.js.map
