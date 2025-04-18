import * as universal from '../entries/pages/dine/_page.ts.js';
import * as server from '../entries/pages/dine/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dine/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dine/+page.ts";
export { server };
export const server_id = "src/routes/dine/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.BFnfIgz3.js","_app/immutable/chunks/BigvG9Gq.js","_app/immutable/chunks/CZu2fjw8.js","_app/immutable/chunks/CwHX7vui.js","_app/immutable/chunks/B2K67hgT.js","_app/immutable/chunks/Bl_OthJ0.js","_app/immutable/chunks/t1D9zvhI.js","_app/immutable/chunks/BZ0x716o.js","_app/immutable/chunks/DA4jBAQu.js","_app/immutable/chunks/DfN3wv18.js","_app/immutable/chunks/CYbkLdh3.js","_app/immutable/chunks/BODYIVTi.js","_app/immutable/chunks/DTP2vM-k.js"];
export const stylesheets = ["_app/immutable/assets/swiper.CcTDN23P.css","_app/immutable/assets/aos.DvB2Xm2x.css"];
export const fonts = [];
