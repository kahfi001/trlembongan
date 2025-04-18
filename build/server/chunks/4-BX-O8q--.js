import { g as getInformation, a as getAccommodation, d as getAccommodationDetail, b as getOffers } from './offers-CbI0Iqj7.js';
import 'axios';

const prerender = false;

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  prerender: prerender
});

const load = async ({ params }) => {
  try {
    const [info, accommodation, accommodationDetail, offers] = await Promise.all([
      getInformation(),
      getAccommodation(),
      getAccommodationDetail(params.slug),
      getOffers()
    ]);
    return {
      info,
      accommodation,
      accommodationDetail,
      offers
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

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CvLEsmaT.js')).default;
const universal_id = "src/routes/accommodations/[slug]/+page.ts";
const server_id = "src/routes/accommodations/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/4.UbQn07zP.js","_app/immutable/chunks/BigvG9Gq.js","_app/immutable/chunks/CZu2fjw8.js","_app/immutable/chunks/CwHX7vui.js","_app/immutable/chunks/B2K67hgT.js","_app/immutable/chunks/Bl_OthJ0.js","_app/immutable/chunks/t1D9zvhI.js","_app/immutable/chunks/BZ0x716o.js","_app/immutable/chunks/DA4jBAQu.js","_app/immutable/chunks/DfN3wv18.js","_app/immutable/chunks/CYbkLdh3.js","_app/immutable/chunks/BODYIVTi.js"];
const stylesheets = ["_app/immutable/assets/swiper.CcTDN23P.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-BX-O8q--.js.map
