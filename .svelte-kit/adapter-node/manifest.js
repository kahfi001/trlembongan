export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon.webp","fonts/Cormorant_Garamond/CormorantGaramond-Regular.ttf","fonts/Cormorant_Garamond/CormorantGaramond-Regular.woff","fonts/Cormorant_Garamond/CormorantGaramond-Regular.woff2","fonts/EB_Garamond/EBGaramond-Regular.ttf","fonts/EB_Garamond/EBGaramond-Regular.woff","fonts/EB_Garamond/EBGaramond-Regular.woff2","fonts/Manrope/Manrope-Regular.ttf","fonts/Manrope/Manrope-Regular.woff","fonts/Manrope/Manrope-Regular.woff2","fonts/Marcellus/Marcellus-Regular.ttf","fonts/Marcellus/Marcellus-Regular.woff","fonts/Marcellus/Marcellus-Regular.woff2","images/accommodation/One Bedroom Garden Villa/OBGV-1.webp","images/accommodation/One Bedroom Garden Villa/OBGV-2.webp","images/accommodation/One Bedroom Garden Villa/OBGV-3.webp","images/accommodation/One Bedroom Garden Villa/OBGV-4.webp","images/accommodation/One Bedroom Garden Villa/OBGV-5.webp","images/accommodation/One Bedroom Garden Villa/OBGV-6.webp","images/accommodation/One Bedroom Grand Premier Pool Villa/OBGPPPV-10 .webp","images/accommodation/One Bedroom Grand Premier Pool Villa/OBGPPPV-11.webp","images/accommodation/One Bedroom Grand Premier Pool Villa/OBGPPV-1.webp","images/accommodation/One Bedroom Grand Premier Pool Villa/OBGPPV-2.webp","images/accommodation/One Bedroom Grand Premier Pool Villa/OBGPPV-3.webp","images/accommodation/One Bedroom Grand Premier Pool Villa/OBGPPV-4.webp","images/accommodation/One Bedroom Grand Premier Pool Villa/OBGPPV-5.webp","images/accommodation/One Bedroom Grand Premier Pool Villa/OBGPPV-6.webp","images/accommodation/One Bedroom Grand Premier Pool Villa/OBGPPV-7.webp","images/accommodation/One Bedroom Grand Premier Pool Villa/OBGPPV-8.webp","images/accommodation/One Bedroom Premier Private Pool Villa/OBPPPV-1.webp","images/accommodation/One Bedroom Premier Private Pool Villa/OBPPPV-2.webp","images/accommodation/One Bedroom Premier Private Pool Villa/OBPPPV-3.webp","images/accommodation/One Bedroom Premier Private Pool Villa/OBPPPV-4.webp","images/accommodation/One Bedroom Premier Private Pool Villa/OBPPPV-5.webp","images/accommodation/One Bedroom Premier Private Pool Villa/OBPPPV-6.webp","images/accommodation/One Bedroom Premier Private Pool Villa/OBPPPV-7.webp","images/accommodation/One Bedroom Premier Private Pool Villa/OBPPPV-8.webp","images/accommodation/One Bedroom Private Pool Villa/OBPV-1.webp","images/accommodation/One Bedroom Private Pool Villa/OBPV-2.webp","images/accommodation/One Bedroom Private Pool Villa/OBPV-3.webp","images/accommodation/One Bedroom Private Pool Villa/OBPV-4.webp","images/accommodation/One Bedroom Private Pool Villa/OBPV-5.webp","images/accommodation/One Bedroom Private Pool Villa/OBPV-6.webp","images/accommodation/One Bedroom Private Pool Villa/OBPV-7.webp","images/accommodation/One Bedroom Private Pool Villa/OBPV-8.webp","images/accommodation/One Bedroom Private Pool Villa/OBPV-9.webp","images/accommodation/Two Bedroom Private Pool Villa/TBPPV-1.webp","images/accommodation/Two Bedroom Private Pool Villa/TBPPV-2.webp","images/accommodation/Two Bedroom Private Pool Villa/TBPPV-3.webp","images/accommodation/Two Bedroom Private Pool Villa/TBPPV-4.webp","images/accommodation/Two Bedroom Private Pool Villa/TBPPV-5.webp","images/accommodation/Two Bedroom Private Pool Villa/TBPPV-6.webp","images/dine/hero-dine.webp","images/footer/Footer Lembongan.webp","images/footer/lembongan-blacklogo.webp","images/homepage/blog.webp","images/homepage/hero-homepage.webp","images/homepage/section3-image.webp","images/LBC Pool Photo 8.webp","images/logo-line.webp","images/navbar/lembongan-blacklogo.webp","images/navbar/lembongan-whitelogo-mob.webp","images/navbar/lembongan-whitelogo.webp","robots.txt","video/hero-kompres-final.webm"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".txt":"text/plain",".webm":"video/webm"},
	_: {
		client: {start:"_app/immutable/entry/start.B4oappyU.js",app:"_app/immutable/entry/app.CPNo6sRn.js",imports:["_app/immutable/entry/start.B4oappyU.js","_app/immutable/chunks/DfN3wv18.js","_app/immutable/chunks/CZu2fjw8.js","_app/immutable/entry/app.CPNo6sRn.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/CZu2fjw8.js","_app/immutable/chunks/B2K67hgT.js","_app/immutable/chunks/BigvG9Gq.js","_app/immutable/chunks/Bl_OthJ0.js","_app/immutable/chunks/t1D9zvhI.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/accommodations",
				pattern: /^\/accommodations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/accommodations/[slug]",
				pattern: /^\/accommodations\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/contact-us",
				pattern: /^\/contact-us\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/dine",
				pattern: /^\/dine\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/dine/[slug]",
				pattern: /^\/dine\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/explore",
				pattern: /^\/explore\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/special-offer",
				pattern: /^\/special-offer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/special-offer/[slug]",
				pattern: /^\/special-offer\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base = "";