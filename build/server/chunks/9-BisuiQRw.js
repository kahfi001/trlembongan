import { g as getInformation, b as getOffers, a as getAccommodation } from './offers-CbI0Iqj7.js';
import { a as getDiningDetail, g as getDining } from './dining-CKKpOrfh.js';
import 'axios';

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null
});

const load = async ({ params }) => {
  try {
    const [info, offers, diningDetail, accommodation, dining] = await Promise.all([
      getInformation(),
      getOffers(),
      getDiningDetail(params.slug),
      getAccommodation(),
      getDining()
    ]);
    return {
      info,
      offers,
      diningDetail,
      accommodation,
      dining
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

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-L5qNd6h1.js')).default;
const universal_id = "src/routes/dine/[slug]/+page.ts";
const server_id = "src/routes/dine/[slug]/+page.server.ts";
const imports = ["_app/immutable/nodes/9.B_X5W-Xw.js","_app/immutable/chunks/BigvG9Gq.js","_app/immutable/chunks/CZu2fjw8.js","_app/immutable/chunks/CwHX7vui.js","_app/immutable/chunks/B2K67hgT.js","_app/immutable/chunks/Bl_OthJ0.js","_app/immutable/chunks/t1D9zvhI.js","_app/immutable/chunks/BZ0x716o.js","_app/immutable/chunks/DA4jBAQu.js","_app/immutable/chunks/DfN3wv18.js","_app/immutable/chunks/CYbkLdh3.js","_app/immutable/chunks/Bo1b50gL.js"];
const stylesheets = ["_app/immutable/assets/swiper.CcTDN23P.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=9-BisuiQRw.js.map
