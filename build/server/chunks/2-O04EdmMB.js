import { g as getInformation, a as getAccommodation, b as getOffers, c as apiClient } from './offers-CbI0Iqj7.js';
import { g as getExplore } from './explore-aUz5kJj9.js';
import { g as getSeo } from './seo-C0aigka1.js';
import 'axios';

const prerender = false;

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  prerender: prerender
});

async function getPopup() {
  try {
    const resp = await apiClient.get(
      `/popup`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}
async function getPagehome() {
  try {
    const resp = await apiClient.get(
      `/pagehome`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
}
const load = async () => {
  try {
    const [info, accommodation, offers, popup, explore, seo, pagehome] = await Promise.all([
      getInformation(),
      getAccommodation(),
      getOffers(),
      getPopup(),
      getExplore(),
      getSeo(),
      getPagehome()
    ]);
    return {
      info,
      accommodation,
      offers,
      popup,
      explore,
      seo,
      pagehome
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

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-uCgMxQLS.js')).default;
const universal_id = "src/routes/+page.ts";
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.DgAmvTZK.js","_app/immutable/chunks/BigvG9Gq.js","_app/immutable/chunks/CZu2fjw8.js","_app/immutable/chunks/CwHX7vui.js","_app/immutable/chunks/B2K67hgT.js","_app/immutable/chunks/BZ0x716o.js","_app/immutable/chunks/Bl_OthJ0.js","_app/immutable/chunks/t1D9zvhI.js","_app/immutable/chunks/DA4jBAQu.js","_app/immutable/chunks/DfN3wv18.js","_app/immutable/chunks/CYbkLdh3.js","_app/immutable/chunks/BODYIVTi.js"];
const stylesheets = ["_app/immutable/assets/swiper.CcTDN23P.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=2-O04EdmMB.js.map
