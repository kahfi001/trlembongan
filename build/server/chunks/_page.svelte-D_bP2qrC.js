import { x as push, Z as ensure_array_like, T as head, W as attr, X as escape_html, _ as stringify, $ as bind_props, z as pop } from './exports-Bh0mkxnv.js';
import { F as Footer } from './swiper-BWfGbDCc.js';
import { H as Header } from './header-HT97qdu5.js';
import 'aos';
import { h as html } from './html-FW6Ia4bL.js';
import 'swiper';
import 'swiper/modules';
import './stores-DRbwYPTU.js';
import './client-DJ2aW1Ds.js';

function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let info = data?.info;
  let offers = data?.offers;
  let rooms = data?.accommodation;
  let seo = data?.seo;
  const each_array = ensure_array_like(rooms);
  const each_array_5 = ensure_array_like(rooms);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(seo[0].title.roomstit)}</title>`;
    $$payload2.out += `<meta name="title"${attr("content", seo[0].meta_title.roomsmettit)}> <meta name="description"${attr("content", seo[0].description.roomsdesc)}> <meta name="keywords"${attr("content", seo[0].keywords.roomskey)}> <meta property="og:site_name"${attr("content", info[0].name)}> <meta property="og:title"${attr("content", seo[0].og_title.roomsogtit)}> <meta name="og:description"${attr("content", seo[0].og_description.roomsogdesc)}> <meta property="og:image"${attr("content", seo[0].images_accommodation[0]?.path ?? "")}> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${attr("content", seo[0].twitter_title.roomstwittit)}> <meta name="twitter:description"${attr("content", seo[0].twitter_description.roomstwitdesc)}> <meta name="twitter:image"${attr("content", seo[0].images_accommodation[0]?.path ?? "")}>`;
  });
  Header($$payload, { info, offers, rooms });
  $$payload.out += `<!----> <section class="w-full h-screen relative bg-slate-40"><div class="relative h-full w-full"><img${attr("src", info[0].hero_images[1]?.path ?? "")} class="h-full w-full object-cover" alt="Hero images"> <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-transparent opacity-50"></div> <div class="absolute inset-0 text-white font-marcel 2xl:text-7xl xl:text-6xl md:text-5xl text-4xl flex justify-center items-center w-full h-full"><h1 class="flex" data-aos="fade-up">Rooms<span class="md:block hidden"> &amp; Suites</span></h1></div></div></section> <section class="relative w-full h-full bg-lightbg"><div class="xl:px-48 xl:py-16 md:px-16 md:py-16 px-16 py-16 container"><p class="font-manrope xl:text-secondary text-gold text-center font-light 2xl:text-2xl xl:text-xl text-base" data-aos="fade-right">Our resort seamlessly blends traditional Balinese charm with modern amenities, offering a tranquil and immersive escape. Unwind in our exclusive private pool villas, designed for privacy, comfort, and luxury. Wake up to stunning views of the ocean or lush greenery from your personal balcony or terrace.</p></div></section> <section class="hidden relative bg-lightbg 2xl:pb-16 xl:pb-16 md:pb-16 pb-16 xl:grid xl:grid-cols-2 grid-cols-1 gap-y-8 2xl:gap-x-20 xl:gap-x-16 2xl:gap-y-44 xl:gap-y-36"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let item = each_array[index];
    if (index % 2 === 1) {
      $$payload.out += "<!--[-->";
      const each_array_1 = ensure_array_like(item.inclusion);
      const each_array_2 = ensure_array_like(item.featured_images);
      $$payload.out += `<div class="2xl:pl-32 xl:pl-28 xl:pr-0 flex flex-col 2xl:gap-16 xl:gap-12 xl:justify-center"><div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-4 xl:px-0 px-8"><p class="text-gold font-marcel 2xl:text-5xl xl:text-4xl">${escape_html(item.name)}</p> <div class="text-secondary font-manrope 2xl:leading-8 xl:leading-6 2xl:text-xl xl:text-base line-clamp-5">${html(item.excerpt)}</div> <ul class="flex flex-wrap 2xl:w-8/12 xl:w-11/12 gap-2 text-secondary font-manrope"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let inclusion = each_array_1[$$index];
        $$payload.out += `<li class="flex items-center gap-2 bg-[#F6F3EA] px-4 py-3 rounded-[10px]"><img${attr("src", `http://50.6.206.23/~trlembongan/cms/storage/app/media${stringify(inclusion.iconblack)}`)}${attr("alt", `${stringify(inclusion.name)} svg`)} class="w-5 h-5 object-cover object-center"> ${escape_html(inclusion.name)}</li>`;
      }
      $$payload.out += `<!--]--></ul></div> <div class="hidden md:flex 2xl:gap-4 xl:gap-3"><a data-sveltekit-reload=""${attr("href", `/accommodations/${stringify(item.slug)}`)} class="flex items-center font-manrope 2xl:text-2xl xl:text-xl 2xl:px-10 xl:px-8 2xl:py-4 xl:py-3 capitalize text-gold border-gold border border-solid group"><span class="transition-all duration-300 pr-0 group-hover:pr-2">view detail</span> <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:2xl:w-9 2xl:w-0 xl:w-0 group-hover:xl:w-8 h-full ml-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:ml-2 transition-all duration-300" viewBox="0 0 34 19" fill="none"><path d="M25.6 1.5L32 9.5M32 9.5L25.6 17.5M32 9.5H0" stroke="#AF9F8D" stroke-width="2"></path></svg></a> <a${attr("href", info[0].book_url)} class="flex items-center font-manrope 2xl:text-2xl xl:text-xl 2xl:px-10 xl:px-8 2xl:py-4 xl:py-3 capitalize text-white bg-gold group"><span class="transition-all duration-300 pr-0 group-hover:pr-2">book now</span> <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:2xl:w-9 2xl:w-0 xl:w-0 group-hover:xl:w-8 h-full ml-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:ml-2 transition-all duration-300" viewBox="0 0 34 19" fill="none"><path d="M25.6 1.5L32 9.5M32 9.5L25.6 17.5M32 9.5H0" stroke="#FFFFF9" stroke-width="2"></path></svg></a></div> <div class="flex xl:hidden gap-3 px-8"><a data-sveltekit-reload=""${attr("href", `/accommodations/${stringify(item.slug)}`)} class="flex items-center font-manrope text-base px-6 py-4 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">view detail</a> <a${attr("href", info[0].book_url)} class="flex items-center font-manrope text-base px-6 py-4 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">book now</a></div></div> <div class="relative h-full w-full"><div class="swiper myAccommodationSwiper rounded-l-3xl relative h-full"><div class="swiper-wrapper"><!--[-->`;
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let img = each_array_2[$$index_1];
        $$payload.out += `<div class="swiper-slide h-full w-full"><div class="aspect-[16/11] h-full"><img${attr("src", img.path)} class="h-full w-full object-cover" alt=""> <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40"></div></div></div>`;
      }
      $$payload.out += `<!--]--></div> <div class="swiper-pagination swiper-pagination-accommodation"></div></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      const each_array_3 = ensure_array_like(item.featured_images);
      const each_array_4 = ensure_array_like(item.inclusion);
      $$payload.out += `<div class="relative h-full w-full"><div class="swiper myAccommodationSwiper rounded-tr-3xl rounded-br-3xl relative h-full"><div class="swiper-wrapper"><!--[-->`;
      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
        let img = each_array_3[$$index_2];
        $$payload.out += `<div class="swiper-slide h-full w-full"><div class="aspect-[16/11] h-full"><img${attr("src", img.path)} class="h-full w-full object-cover" alt=""> <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40"></div></div></div>`;
      }
      $$payload.out += `<!--]--></div> <div class="swiper-pagination swiper-pagination-accommodation"></div></div></div> <div class="2xl:pr-32 xl:pr-28 flex flex-col 2xl:gap-16 xl:gap-12 gap-8 xl:justify-center"><div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-4 xl:px-0 px-8"><p class="text-gold font-marcel 2xl:text-5xl xl:text-4xl text-4xl">${escape_html(item.name)}</p> <div class="text-secondary font-manrope 2xl:leading-8 xl:leading-6 2xl:text-xl md:text-base text-sm line-clamp-5">${html(item.excerpt)}</div> <ul class="flex flex-wrap 2xl:w-8/12 xl:w-11/12 gap-2 text-secondary font-manrope md:text-base text-sm"><!--[-->`;
      for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
        let inclusion = each_array_4[$$index_3];
        $$payload.out += `<li class="flex items-center gap-2 bg-[#F6F3EA] px-4 py-3 rounded-[10px]"><img${attr("src", `http://50.6.206.23/~trlembongan/cms/storage/app/media${stringify(inclusion.iconblack)}`)}${attr("alt", `${stringify(inclusion.name)} svg`)} class="w-5 h-5 object-cover object-center"> ${escape_html(inclusion.name)}</li>`;
      }
      $$payload.out += `<!--]--></ul></div> <div class="md:flex 2xl:gap-4 xl:gap-3 gap-3 hidden"><a data-sveltekit-reload=""${attr("href", `/accommodations/${stringify(item.slug)}`)} class="flex items-center font-manrope 2xl:text-2xl xl:text-xl 2xl:px-10 xl:px-8 2xl:py-4 xl:py-3 capitalize text-gold border-gold border border-solid group"><span class="transition-all duration-300 pr-0 group-hover:pr-2">view detail</span> <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:2xl:w-9 2xl:w-0 xl:w-0 group-hover:xl:w-8 h-full ml-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:ml-2 transition-all duration-300" viewBox="0 0 34 19" fill="none"><path d="M25.6 1.5L32 9.5M32 9.5L25.6 17.5M32 9.5H0" stroke="#AF9F8D" stroke-width="2"></path></svg></a> <a${attr("href", info[0].book_url)} class="flex items-center font-manrope 2xl:text-2xl xl:text-xl 2xl:px-10 xl:px-8 2xl:py-4 xl:py-3 capitalize text-white bg-gold group"><span class="transition-all duration-300 pr-0 group-hover:pr-2">book now</span> <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:2xl:w-9 2xl:w-0 xl:w-0 group-hover:xl:w-8 h-full ml-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:ml-2 transition-all duration-300" viewBox="0 0 34 19" fill="none"><path d="M25.6 1.5L32 9.5M32 9.5L25.6 17.5M32 9.5H0" stroke="#FFFFF9" stroke-width="2"></path></svg></a></div></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></section> <section class="relative bg-lightbg md:pb-20 pb-16 xl:hidden flex flex-col gap-y-16"><!--[-->`;
  for (let index = 0, $$length = each_array_5.length; index < $$length; index++) {
    let item = each_array_5[index];
    if (index % 2 === 1) {
      $$payload.out += "<!--[-->";
      const each_array_6 = ensure_array_like(item.featured_images);
      const each_array_7 = ensure_array_like(item.inclusion);
      $$payload.out += `<div class="flex flex-col w-full h-full gap-8"><div class="relative h-full w-full pl-8 md:pl-16"><div class="swiper myAccommodationSwiper rounded-l-3xl relative"><div class="swiper-wrapper"><!--[-->`;
      for (let $$index_5 = 0, $$length2 = each_array_6.length; $$index_5 < $$length2; $$index_5++) {
        let img = each_array_6[$$index_5];
        $$payload.out += `<div class="swiper-slide h-full w-full"><div class="aspect-[16/11]"><img${attr("src", img.path)} class="h-full w-full object-cover" alt=""> <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40"></div></div></div>`;
      }
      $$payload.out += `<!--]--></div> <div class="swiper-button-prev swiper-button-prev-accommodation !w-12 !h-12 after:!content-none"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 48 48" fill="none"><rect x="48" y="48" width="48" height="48" rx="24" transform="rotate(-180 48 48)" fill="white"></rect><path d="M29 34L19 24L29 14" stroke="#AF9F8D" stroke-width="1.5"></path></svg></div> <div class="swiper-button-next swiper-button-next-accommodation !w-12 !h-12 after:!content-none"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="white"></rect><path d="M19 14L29 24L19 34" stroke="#AF9F8D" stroke-width="1.5"></path></svg></div></div></div> <div class="2xl:pr-32 xl:pr-28 flex flex-col 2xl:gap-16 xl:gap-12 gap-8"><div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-4 xl:px-0 px-8 md:px-16"><p class="text-gold font-marcel 2xl:text-5xl xl:text-4xl text-4xl">${escape_html(item.name)}</p> <div class="text-secondary font-manrope 2xl:leading-8 xl:leading-6 2xl:text-xl md:text-base text-sm line-clamp-5">${html(item.excerpt)}</div> <ul class="w-full flex flex-wrap gap-2 text-secondary font-manrope md:text-base text-sm"><!--[-->`;
      for (let $$index_6 = 0, $$length2 = each_array_7.length; $$index_6 < $$length2; $$index_6++) {
        let inclusion = each_array_7[$$index_6];
        $$payload.out += `<li class="flex items-center gap-2 bg-[#F6F3EA] px-4 py-3 rounded-[10px]"><img${attr("src", `http://50.6.206.23/~trlembongan/cms/storage/app/media${stringify(inclusion.iconblack)}`)}${attr("alt", `${stringify(inclusion.name)} svg`)} class="w-4 md:w-6 h-4 md:h-6 object-cover object-center"> ${escape_html(inclusion.name)}</li>`;
      }
      $$payload.out += `<!--]--></ul></div> <div class="flex gap-3 px-8 md:px-16"><a data-sveltekit-preload-data=""${attr("href", `/accommodations/${stringify(item.slug)}`)} class="flex items-center font-manrope text-base px-6 py-4 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">view detail</a> <a${attr("href", item.book_url)} class="flex items-center font-manrope text-base px-6 py-4 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">book now</a></div></div></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      const each_array_8 = ensure_array_like(item.featured_images);
      const each_array_9 = ensure_array_like(item.inclusion);
      $$payload.out += `<div class="flex flex-col w-full h-full gap-8"><div class="relative h-full w-full pr-8 md:pr-16"><div class="swiper myAccommodationSwiper rounded-tr-3xl rounded-br-3xl relative"><div class="swiper-wrapper"><!--[-->`;
      for (let $$index_7 = 0, $$length2 = each_array_8.length; $$index_7 < $$length2; $$index_7++) {
        let img = each_array_8[$$index_7];
        $$payload.out += `<div class="swiper-slide h-full w-full"><div class="aspect-[16/11]"><img${attr("src", img.path)} class="h-full w-full object-cover" alt=""> <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40"></div></div></div>`;
      }
      $$payload.out += `<!--]--></div> <div class="swiper-button-prev swiper-button-prev-accommodation !w-12 !h-12 after:!content-none"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 48 48" fill="none"><rect x="48" y="48" width="48" height="48" rx="24" transform="rotate(-180 48 48)" fill="white"></rect><path d="M29 34L19 24L29 14" stroke="#AF9F8D" stroke-width="1.5"></path></svg></div> <div class="swiper-button-next swiper-button-next-accommodation !w-12 !h-12 after:!content-none"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="white"></rect><path d="M19 14L29 24L19 34" stroke="#AF9F8D" stroke-width="1.5"></path></svg></div></div></div> <div class="2xl:pr-32 xl:pr-28 flex flex-col 2xl:gap-16 xl:gap-12 gap-8"><div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-4 xl:px-0 px-8 md:px-16"><p class="text-gold font-marcel 2xl:text-5xl xl:text-4xl text-4xl">${escape_html(item.name)}</p> <div class="text-secondary font-manrope 2xl:leading-8 xl:leading-6 2xl:text-xl md:text-base text-sm line-clamp-5">${html(item.excerpt)}</div> <ul class="w-full flex flex-wrap gap-2 text-secondary font-manrope md:text-base text-sm"><!--[-->`;
      for (let $$index_8 = 0, $$length2 = each_array_9.length; $$index_8 < $$length2; $$index_8++) {
        let inclusion = each_array_9[$$index_8];
        $$payload.out += `<li class="flex items-center gap-2 bg-[#F6F3EA] px-4 py-3 rounded-[10px]"><img${attr("src", `http://50.6.206.23/~trlembongan/cms/storage/app/media${stringify(inclusion.iconblack)}`)}${attr("alt", `${stringify(inclusion.name)} svg`)} class="w-4 md:w-6 h-4 md:h-6 object-cover object-center"> ${escape_html(inclusion.name)}</li>`;
      }
      $$payload.out += `<!--]--></ul></div> <div class="flex gap-3 px-8 md:px-16"><a data-sveltekit-reload=""${attr("href", `/accommodations/${stringify(item.slug)}`)} class="flex items-center font-manrope text-base px-6 py-4 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">view detail</a> <a${attr("href", item.book_url)} class="flex items-center font-manrope text-base px-6 py-4 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">book now</a></div></div></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></section> `;
  Footer($$payload, { info });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D_bP2qrC.js.map
