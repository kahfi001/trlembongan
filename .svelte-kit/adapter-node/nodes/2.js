import * as universal from '../entries/pages/_page.ts.js';
import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.DgAmvTZK.js","_app/immutable/chunks/BigvG9Gq.js","_app/immutable/chunks/CZu2fjw8.js","_app/immutable/chunks/CwHX7vui.js","_app/immutable/chunks/B2K67hgT.js","_app/immutable/chunks/BZ0x716o.js","_app/immutable/chunks/Bl_OthJ0.js","_app/immutable/chunks/t1D9zvhI.js","_app/immutable/chunks/DA4jBAQu.js","_app/immutable/chunks/DfN3wv18.js","_app/immutable/chunks/CYbkLdh3.js","_app/immutable/chunks/BODYIVTi.js"];
export const stylesheets = ["_app/immutable/assets/swiper.CcTDN23P.css"];
export const fonts = [];
