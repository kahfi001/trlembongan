import { g as getInformation, b as getOffers, a as getAccommodation } from './offers-CbI0Iqj7.js';
import { a as getBlogDetail, g as getBlog } from './blog-CV7_ua7w.js';
import 'axios';

const prerender = false;

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  prerender: prerender
});

const load = async ({ params }) => {
  try {
    const [info, offers, blogDetail, accommodation, blog] = await Promise.all([
      getInformation(),
      getOffers(),
      getBlogDetail(params.slug),
      getAccommodation(),
      getBlog()
    ]);
    return {
      info,
      offers,
      blogDetail,
      accommodation,
      blog
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

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CH90dUZ0.js')).default;
const universal_id = "src/routes/blog/[slug]/+page.ts";
const server_id = "src/routes/blog/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/6.CiANO-xe.js","_app/immutable/chunks/BigvG9Gq.js","_app/immutable/chunks/CZu2fjw8.js","_app/immutable/chunks/CwHX7vui.js","_app/immutable/chunks/B2K67hgT.js","_app/immutable/chunks/Bl_OthJ0.js","_app/immutable/chunks/t1D9zvhI.js","_app/immutable/chunks/BZ0x716o.js","_app/immutable/chunks/DA4jBAQu.js","_app/immutable/chunks/DfN3wv18.js","_app/immutable/chunks/CYbkLdh3.js","_app/immutable/chunks/Bo1b50gL.js"];
const stylesheets = ["_app/immutable/assets/swiper.CcTDN23P.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=6-Dx0bKbl-.js.map
