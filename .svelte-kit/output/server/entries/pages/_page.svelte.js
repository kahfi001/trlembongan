import { c as bind_props, p as pop, d as push, e as ensure_array_like, h as head, a as attr, s as stringify, b as escape_html } from "../../chunks/index.js";
import { F as Footer } from "../../chunks/swiper.js";
import { H as Header } from "../../chunks/header.js";
import { h as html } from "../../chunks/html.js";
function Popup($$payload, $$props) {
  push();
  let popup = $$props["popup"];
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { popup });
  pop();
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let popup = data?.popup;
  let info = data?.info;
  let rooms = data?.accommodation;
  let offers = data?.offers;
  let explore = data?.explore;
  let seo = data?.seo;
  let pagehome = data?.pagehome;
  const each_array = ensure_array_like(rooms);
  const each_array_3 = ensure_array_like(explore);
  const each_array_4 = ensure_array_like(offers);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(seo[0].title.hometitle)}</title>`;
    $$payload2.out += `<meta name="title"${attr("content", seo[0].meta_title.homemettit)}> <meta name="description"${attr("content", seo[0].description.homedesc)}> <meta name="keywords"${attr("content", seo[0].keywords.homekey)}> <meta property="og:site_name"${attr("content", info[0].name)}> <meta property="og:title"${attr("content", seo[0].og_title.homeogtit)}> <meta name="og:description"${attr("content", seo[0].og_description.homeogdesc)}> <meta property="og:image"${attr("content", seo[0].images_home[0]?.path ?? "")}> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${attr("content", seo[0].twitter_title.hometwittit)}> <meta name="twitter:description"${attr("content", seo[0].twitter_description.hometwitdesc)}> <meta name="twitter:image"${attr("content", seo[0].images_home[0]?.path ?? "")}> <link rel="preload" href="/fonts/Cormorant_Garamond/CormorantGaramond-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">`;
  });
  Popup($$payload, { popup });
  $$payload.out += `<!----> `;
  Header($$payload, { info, offers, rooms });
  $$payload.out += `<!----> <section class="w-full h-screen relative bg-slate-40"><div class="relative h-full w-full"><video autoplay muted loop playsinline class="w-full h-full object-cover"${attr("poster", info[0].hero_images[0]?.path ?? "")}><source src="/video/hero-kompres-final.webm" type="video/webm"> Sorry, your browser doesn't support video playback. Please try updating your browser.</video> <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-transparent opacity-50"></div></div></section> <section class="relative w-full h-full bg-lightbg"><div class="lg:px-28 lg:py-16 md:py-14 md:px-8 py-16 px-7 flex flex-col 2xl:gap-10 xl:gap-10 md:gap-8 gap-6 container"><p class="font-marcel text-center text-gold 2xl:text-7xl xl:text-5xl sm:text-4xl text-3xl italic">${html(pagehome[0].title.section1)}</p> <div class="flex gap-3 justify-center align-middle items-center"><svg xmlns="http://www.w3.org/2000/svg" class="lg:w-28 lg:h-1 md:w-20 md:h-1 w-14 h-[3px]" viewBox="0 0 120 3" fill="none"><path d="M0 1.20001H120" stroke="#AF9F8D" stroke-width="2"></path></svg> <span class="md:p-2 p-1 md:border-[3px] border rotate-45 border-solid border-[#AF9F8D]"></span> <svg xmlns="http://www.w3.org/2000/svg" class="lg:w-28 lg:h-1 md:w-20 md:h-1 w-14 h-[3px]" viewBox="0 0 120 3" fill="none"><path d="M0 1.20001H120" stroke="#AF9F8D" stroke-width="2"></path></svg></div> <p class="font-manrope text-secondary text-center font-light 2xl:text-2xl xl:text-xl">${html(pagehome[0].wording.section1)}</p></div></section> <section class="bg-lightbg xl:py-20 2xl:pl-20 xl:pl-16 py-0 pl-8 md:pr-0 pr-8 h-full w-full relative"><div class="grid md:grid-cols-4 grid-cols-1 gap-12"><div class="col-span-1 flex flex-col"><p class="font-marcel text-gold 2xl:text-6xl xl:text-5xl text-4xl 2xl:leading-[4rem] xl:leading-[3.5rem] 2xl:mb-6 xl:mb-4 mb-4">${html(pagehome[0].title.section2)}</p> <p class="font-manrope text-secondary 2xl:text-2xl xl:text-xl font-light 2xl:leading-10 xl:leading-8 2xl:mb-14 xl:mb-12 mb-8">${html(pagehome[0].wording.section2)}</p> <div class="relative flex !justify-between items-center"><div class="flex items-center 2xl:gap-8 xl:gap-6 gap-4 !w-auto relative"><span class="swiper-button-prev-homeroom !m-0 !left-0 !right-0 2xl:!w-22 xl:!h-16 xl:!w-16 md:!h-16 md:!w-16 !h-14 !w-14 !relative cursor-pointer after:!content-none group"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" viewBox="0 0 90 90" fill="none"><rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="#AF9F8D" stroke-width="1.5"></rect><path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="#AF9F8D" stroke-width="1.5"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" viewBox="0 0 90 90" fill="none"><rect width="90" height="90" rx="45" fill="#AF9F8D"></rect><path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="white" stroke-width="1.5"></path></svg></span> <span class="swiper-button-next-homeroom !m-0 !left-0 !right-0 2xl:!h-22 2xl:!w-22 xl:!h-16 xl:!w-16 md:!h-16 md:!w-16 !h-14 !w-14 !relative cursor-pointer after:!content-none group"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" viewBox="0 0 90 90" fill="none"><rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="#AF9F8D" stroke-width="1.5"></rect><path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="#AF9F8D" stroke-width="1.5"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" viewBox="0 0 90 90" fill="none"><rect width="90" height="90" rx="45" fill="#AF9F8D"></rect><path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="white" stroke-width="1.5"></path></svg></span></div></div></div> <div class="col-span-3"><div class="swiper myHomeRoomSwiper relative h-full w-full"><div class="swiper-wrapper"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
    let item = each_array[$$index_2];
    const each_array_1 = ensure_array_like(item.featured_images);
    const each_array_2 = ensure_array_like(item.inclusion);
    $$payload.out += `<div class="swiper-slide"><a data-sveltekit-reload=""${attr("href", `/accommodations/${stringify(item.slug)}`)}><div class="relative aspect-[7/9] md:rounded-2xl rounded-none 2xl:mb-6 xl:mb-4 mb-3"><div class="swiper mySwiperImgRoom h-full w-full"><div class="swiper-wrapper"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let img = each_array_1[$$index];
      $$payload.out += `<div class="swiper-slide"><img${attr("src", img.path)} class="h-full w-full object-cover md:rounded-2xl rounded-none" loading="lazy"${attr("alt", `${stringify(item.name)} images`)}> <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40 md:rounded-xl rounded-none"></div></div>`;
    }
    $$payload.out += `<!--]--></div></div> <div class="absolute 2xl:bottom-11 xl:bottom-9 bottom-6 2xl:px-10 xl:px-8 px-6 z-30"><p class="md:hidden block uppercase font-manrope text-white text-base pb-2">room</p> <p class="font-marcel 2xl:text-4xl xl:text-3xl md:text-2xl text-2xl text-white 2xl:mb-4 xl:mb-3 mb-3 md:capitalize uppercase">${escape_html(item.name)}</p> <ul class="grid grid-cols-2 2xl:gap-3 md:gap-2 gap-1 font-manrope 2xl:text-xl xl:text-base lg:text-base text-sm font-light text-white"><!--[-->`;
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let inclusion = each_array_2[$$index_1];
      $$payload.out += `<li class="flex items-start 2xl:gap-4 md:gap-3 gap-2"><img${attr("src", `http://50.6.206.23/~trlembongan/cms/storage/app/media${stringify(inclusion.iconwhite)}`)}${attr("alt", `${stringify(inclusion.name)} svg`)} loading="lazy" class="2xl:w-6 2xl:h-6 md:h-5 md:w-5 w-4 h-4 object-cover object-center"> ${escape_html(inclusion.name)}</li>`;
    }
    $$payload.out += `<!--]--></ul></div></div></a> <a data-sveltekit-reload=""${attr("href", `/accommodations/${stringify(item.slug)}`)} class="md:flex hidden text-gold font-manrope 2xl:text-2xl xl:text-xl text-sm font-medium capitalize 2xl:mx-10 xl:mx-8 2xl:gap-3 gap-2 items-center group overflow-hidden">view detail <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 2xl:h-6 xl:w-5 xl:h-5 w-4 h-4 transform translate-x-[-20px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" fill="#af9f8d" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg></a></div>`;
  }
  $$payload.out += `<!--]--></div></div></div></div></section> <section class="h-full w-full bg-lightbg md:py-16 py-20 2xl:px-24 md:px-20 px-8 relative justify-center items-center flex md:flex-row flex-col 2xl:gap-28 xl:gap-24 md:gap-10 gap-5"><div class="border border-solid border-gold 2xl:p-10 md:p-8 p-4 h-full w-full"><img${attr("src", pagehome[0].images_home[0].path ?? "")} class="xl:aspect-square md:aspect-[10/15] aspect-square h-full w-full object-cover" loading="lazy" alt="One Bedroom Private Pool Villa"></div> <div class="flex flex-col w-full justify-center items-center 2xl:gap-10 xl:gap-8 md:gap-4 gap-6 py-0"><p class="font-marcel 2xl:text-5xl lg:text-4xl text-3xl text-gold text-center">${html(pagehome[0].title.section3)}</p> <div id="desc" class="font-manrope 2xl:text-2xl lg:text-xl md:text-xs text-sm font-light text-secondary">${html(pagehome[0].wording.section3)}</div></div></section> <section class="h-full w-full bg-lightbg py-16 lg:block hidden"><div class="relative xl:h-[80vh] h-[30vh] w-full"><div class="swiper mySwiperHomeExplore relative h-full w-full"><div class="swiper-wrapper"><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let item = each_array_3[$$index_3];
    $$payload.out += `<div class="swiper-slide"><img${attr("src", item.featured_images[0].path)} class="h-full w-full object-cover aspect-video" loading="lazy" alt="Explore Lembongan Beach Beach Club &amp; Resort"> <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-70 md:rounded-xl rounded-none"></div></div>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="absolute inset-0 w-full z-10 flex justify-center items-center"><a data-sveltekit-reload="" href="/explore" class="md:px-14 px-20 py-4 font-medium 2xl:text-4xl text-3xl italic hover:text-gold transition-all duration-300 text-white capitalize font-marcel tracking-[0.25rem]">${html(pagehome[0].title.section4)}</a></div></div></section> <section class="bg-lightbg md:py-20 py-20 2xl:pl-20 2xl:pr-0 xl:pl-16 md:pl-8 md:pr-0 pl-8 pr-8 h-full w-full relative"><div class="grid md:grid-cols-4 grid-cols-1 xl:gap-12 md:gap-10 gap-8"><div class="col-span-1 flex flex-col justify-center"><p class="font-marcel text-gold 2xl:text-6xl xl:text-5xl text-4xl 2xl:leading-[4rem] xl:leading-[3.5rem] 2xl:mb-6 mb-4">${html(pagehome[0].title.section5)}</p> <p class="font-manrope text-secondary 2xl:text-2xl xl:text-xl font-light 2xl:leading-10 xl:leading-8 2xl:mb-14 md:mb-12 mb-8">${html(pagehome[0].wording.section5)}</p> <div class="relative flex !justify-between items-center"><div class="flex items-center 2xl:gap-8 xl:gap-6 gap-4 !w-full relative"><span class="swiper-button-prev-homeoffers !m-0 !left-0 !right-0 2xl:!w-22 xl:!h-16 xl:!w-16 md:!h-16 md:!w-16 !h-14 !w-14 !relative cursor-pointer after:!content-none group"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" viewBox="0 0 90 90" fill="none"><rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="#AF9F8D" stroke-width="1.5"></rect><path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="#AF9F8D" stroke-width="1.5"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" viewBox="0 0 90 90" fill="none"><rect width="90" height="90" rx="45" fill="#AF9F8D"></rect><path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="white" stroke-width="1.5"></path></svg></span> <span class="swiper-button-next-homeoffers !m-0 !left-0 !right-0 2xl:!w-22 xl:!h-16 xl:!w-16 md:!h-16 md:!w-16 !h-14 !w-14 !relative cursor-pointer after:!content-none group"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" viewBox="0 0 90 90" fill="none"><rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="#AF9F8D" stroke-width="1.5"></rect><path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="#AF9F8D" stroke-width="1.5"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" viewBox="0 0 90 90" fill="none"><rect width="90" height="90" rx="45" fill="#AF9F8D"></rect><path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="white" stroke-width="1.5"></path></svg></span></div></div></div> <div class="col-span-3"><div class="swiper myHomeOffersSwiper relative h-full w-full"><div class="swiper-wrapper"><!--[-->`;
  for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
    let item = each_array_4[$$index_4];
    $$payload.out += `<div class="swiper-slide"><div class="relative aspect-square md:rounded-2xl rounded-none 2xl:mb-6 xl:mb-4 md:mb-3 mb-5"><a data-sveltekit-reload=""${attr("href", `/special-offer/${stringify(item.slug)}`)}><img${attr("src", item.featured_images[0]?.path || "")} class="h-full w-full object-cover md:rounded-2xl rounded-none" loading="lazy" alt="Lembongan Beach Beach Club &amp; Resort Offers"> <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40 md:rounded-xl rounded-none"></div></a></div> <a data-sveltekit-reload=""${attr("href", `/special-offer/${stringify(item.slug)}`)} class="md:flex hidden text-gold font-manrope 2xl:text-2xl xl:text-xl font-medium capitalize 2xl:mx-10 xl:mx-8 md:mx-6 2xl:gap-3 md:gap-2 items-center group overflow-hidden">view detail <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 xl:w-5 md:w-4 2xl:h-6 xl:h-5 md:h-4 transform translate-x-[-20px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" fill="#af9f8d" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg></a> <a data-sveltekit-reload=""${attr("href", `/special-offer/${stringify(item.slug)}`)} class="block md:hidden font-marcel text-2xl text-secondary">${escape_html(item.name)}</a></div>`;
  }
  $$payload.out += `<!--]--></div></div></div></div></section> `;
  Footer($$payload, { info });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
