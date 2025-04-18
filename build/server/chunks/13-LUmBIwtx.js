import { g as getInformation, b as getOffers, e as getOffersDetail, a as getAccommodation } from './offers-CbI0Iqj7.js';
import 'axios';

const prerender = false;

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  prerender: prerender
});

const load = async ({ params }) => {
  try {
    const [info, offers, offersDetail, accommodation] = await Promise.all([
      getInformation(),
      getOffers(),
      getOffersDetail(params.slug),
      getAccommodation()
    ]);
    return {
      info,
      offers,
      offersDetail,
      accommodation
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

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DuLs2-aU.js')).default;
const universal_id = "src/routes/special-offer/[slug]/+page.ts";
const server_id = "src/routes/special-offer/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/13.BRBaizLk.js","_app/immutable/chunks/BigvG9Gq.js","_app/immutable/chunks/CZu2fjw8.js","_app/immutable/chunks/CwHX7vui.js","_app/immutable/chunks/B2K67hgT.js","_app/immutable/chunks/Bl_OthJ0.js","_app/immutable/chunks/t1D9zvhI.js","_app/immutable/chunks/BZ0x716o.js","_app/immutable/chunks/DA4jBAQu.js","_app/immutable/chunks/DfN3wv18.js","_app/immutable/chunks/CYbkLdh3.js","_app/immutable/chunks/Bo1b50gL.js"];
const stylesheets = ["_app/immutable/assets/swiper.CcTDN23P.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=13-LUmBIwtx.js.map
