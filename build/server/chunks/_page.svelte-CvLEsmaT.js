import { x as push, Z as ensure_array_like, T as head, W as attr, X as escape_html, _ as stringify, $ as bind_props, z as pop } from './exports-Bh0mkxnv.js';
import { F as Footer } from './swiper-BWfGbDCc.js';
import { H as Header } from './header-HT97qdu5.js';
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
  let room = data?.accommodation;
  let roomDetail = data?.accommodationDetail;
  let rooms = data?.accommodation;
  const each_array = ensure_array_like(roomDetail.inclusion);
  const each_array_1 = ensure_array_like(roomDetail.featured_images);
  const each_array_2 = ensure_array_like(roomDetail.feature);
  const each_array_3 = ensure_array_like(room);
  const each_array_5 = ensure_array_like(roomDetail.featured_images);
  const each_array_6 = ensure_array_like(roomDetail.inclusion);
  const each_array_7 = ensure_array_like(roomDetail.feature);
  const each_array_8 = ensure_array_like(rooms);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(roomDetail.name)} - Lembongan Beach Club and Resort</title>`;
    $$payload2.out += `<meta name="description" content="">`;
  });
  Header($$payload, { info, rooms, offers });
  $$payload.out += `<!----> <section class="w-full h-screen relative bg-slate-40 md:block hidden"><div class="relative h-full w-full"><img${attr("src", roomDetail.featured_images[0]?.path ?? "")} class="h-full w-full object-cover" alt="Hero images"> <span class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-transparent opacity-60"></span> <div class="absolute inset-0 h-full w-full text-white text-center flex flex-col items-center justify-center 2xl:gap-10 xl:gap-8 gap-4"><p class="font-manrope 2xl:text-4xl xl:text-3xl text-2xl font-medium w-max flex flex-col items-center 2xl:gap-3 xl:gap-2 gap-2">Rooms &amp; Suites <span class="h-1 bg-[#F4F4F4] w-1/2"></span></p> <h1 class="2xl:text-7xl xl:text-6xl text-5xl font-marcel">${escape_html(roomDetail.name)}</h1></div></div></section> <section class="h-full w-full 2xl:px-40 2xl:py-20 xl:py-16 xl:px-36 py-16 px-16 md:flex bg-lightbg hidden"><div class="h-full xl:w-2/5 w-8/12 flex flex-col 2xl:gap-11 xl:gap-9 gap-4"><p class="2xl:text-7xl xl:text-6xl text-5xl font-marcel text-gold">${escape_html(roomDetail.name)}</p> <ul class="flex flex-wrap gap-2 2xl:w-10/12 text-secondary font-manrope 2xl:text-base xl:text-sm text-xs"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let inclusion = each_array[$$index];
    $$payload.out += `<li class="flex items-center gap-2 bg-[#F6F3EA] justify-center rounded-xl py-3 px-4"><img${attr("src", `http://50.6.206.23/~trlembongan/cms/storage/app/media${stringify(inclusion.iconblack)}`)}${attr("alt", `${stringify(inclusion.name)} svg`)} class="w-5 h-5 object-cover object-center"> ${escape_html(inclusion.name)}</li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="h-full xl:w-1/5 w-1/12"></div> <div class="h-full xl:w-2/5 w-7/12 flex flex-col 2xl:gap-11 xl:gap-9 gap-6"><p class="font-manrope 2xl:text-xl xl:text-base text-sm font-light text-secondary">${html(roomDetail.description)}</p> <a href="/" class="w-max flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-4 capitalize text-white bg-gold group"><span class="transition-all duration-300 pr-0 group-hover:pr-2">book now</span> <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:2xl:w-9 2xl:w-0 xl:w-0 w-0 group-hover:xl:w-8 group-hover:w-6 h-full ml-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:ml-2 transition-all duration-300" viewBox="0 0 34 19" fill="none"><path d="M25.6 1.5L32 9.5M32 9.5L25.6 17.5M32 9.5H0" stroke="#FFFFF9" stroke-width="2"></path></svg></a></div></section> <section class="bg-lightbg 2xl:pb-20 xl:pb-16 pb-0 md:block hidden"><div class="2xl:pl-16 xl:pl-14 pl-10"><ul class="flex flex-col 2xl:gap-7 xl:gap-5 gap-3"><li class="font-marcel 2xl:pr-16 xl:pr-14 capitalize 2xl:text-4xl xl:text-3xl text-2xl text-gold flex justify-between">room images <div class="flex items-center 2xl:gap-8 xl:gap-6 gap-4 !w-auto relative"><span class="swiper-button-prev-roomdetail !m-0 !left-0 !right-0 2xl:!h-20 2xl:!w-20 xl:w-18 xl:!h-18 !h-14 !w-14 !relative cursor-pointer after:!content-none group"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" viewBox="0 0 90 90" fill="none"><rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="#AF9F8D" stroke-width="1.5"></rect><path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="#AF9F8D" stroke-width="1.5"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" viewBox="0 0 90 90" fill="none"><rect width="90" height="90" rx="45" fill="#AF9F8D"></rect><path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="white" stroke-width="1.5"></path></svg></span> <span class="swiper-button-next-roomdetail !m-0 !left-0 !right-0 2xl:!h-20 2xl:!w-20 xl:w-18 xl:!h-18 !h-14 !w-14 !relative cursor-pointer after:!content-none group"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" viewBox="0 0 90 90" fill="none"><rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="#AF9F8D" stroke-width="1.5"></rect><path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="#AF9F8D" stroke-width="1.5"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" viewBox="0 0 90 90" fill="none"><rect width="90" height="90" rx="45" fill="#AF9F8D"></rect><path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="white" stroke-width="1.5"></path></svg></span></div></li> <li><div class="swiper myRoomdetailSwiper xl:h-[60vh] h-[30vh] w-full"><div class="swiper-wrapper"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let img = each_array_1[$$index_1];
    $$payload.out += `<div class="swiper-slide"><img${attr("src", img.path)} class="aspect-[16/10] h-full w-full object-cover object-center rounded-xl"${attr("alt", `${stringify(roomDetail.name)} images`)}></div>`;
  }
  $$payload.out += `<!--]--></div></div></li></ul></div></section> <section class="bg-lightbg md:block hidden"><div class="container h-full w-full 2xl:px-40 2xl:py-20 xl:py-16 xl:px-36 lg:py-16 lg:px-16 py-8 px-8 flex items-center xl:gap-24 gap-16"><div class="h-full w-2/5 flex"><img${attr("src", roomDetail.featured_images[1].path)} class="h-full w-full object-cover object-center aspect-[10/15] rounded-2xl" alt=""></div> <div class="h-full w-3/5 flex flex-col 2xl:gap-14 xl:gap-12 gap-10 xl:py-16 py-14 justify-center"><p class="flex flex-col 2xl:gap-4 xl:gap-2 gap-2 text-gold font-marcel 2xl:text-4xl xl:text-3xl text-2xl">Room Facilities <span class="2xl:h-1 xl:h-[3px] h-[2px] w-1/6 bg-gold"></span></p> <ul class="font-manrope 2xl:text-base xl:text-sm text-xs text-secondary font-light grid grid-cols-2 2xl:gap-x-11 xl:gap-x-9 gap-x-2"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let item = each_array_2[$$index_2];
    $$payload.out += `<li class="border-b border-gold 2xl:py-4 xl:py-3 py-2 flex items-center gap-2">${html(item.icon)} ${escape_html(item.name)}</li>`;
  }
  $$payload.out += `<!--]--></ul></div></div></section> <section class="2xl:py-20 xl:py-16 2xl:pl-16 xl:pl-14 pl-10 md:flex bg-lightbg 2xl:gap-14 xl:gap-12 gap-10 hidden"><div class="w-1/5 relative flex flex-col 2xl:gap-20 xl:gap-16 gap-14"><p class="capitalize text-gold font-marcel 2xl:text-6xl xl:text-5xl text-3xl 2xl:leading-[5rem] xl:leading-[4rem] leading-10">other room &amp; villas</p> <div class="flex items-center 2xl:gap-8 xl:gap-6 gap-4 !w-auto relative"><span class="swiper-button-prev-roomotherdetail !m-0 !left-0 !right-0 2xl:!h-20 2xl:!w-20 xl:w-18 xl:!h-18 !h-14 !w-14 !relative cursor-pointer after:!content-none group"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" viewBox="0 0 90 90" fill="none"><rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="#AF9F8D" stroke-width="1.5"></rect><path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="#AF9F8D" stroke-width="1.5"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" viewBox="0 0 90 90" fill="none"><rect width="90" height="90" rx="45" fill="#AF9F8D"></rect><path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="white" stroke-width="1.5"></path></svg></span> <span class="swiper-button-next-roomotherdetail !m-0 !left-0 !right-0 2xl:!h-20 2xl:!w-20 xl:w-18 xl:!h-18 !h-14 !w-14 !relative cursor-pointer after:!content-none group"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" viewBox="0 0 90 90" fill="none"><rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="#AF9F8D" stroke-width="1.5"></rect><path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="#AF9F8D" stroke-width="1.5"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" viewBox="0 0 90 90" fill="none"><rect width="90" height="90" rx="45" fill="#AF9F8D"></rect><path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="white" stroke-width="1.5"></path></svg></span></div></div> <div class="w-4/5 h-full relative"><div class="swiper myRoomotherSwiper"><div class="swiper-wrapper"><!--[-->`;
  for (let $$index_4 = 0, $$length = each_array_3.length; $$index_4 < $$length; $$index_4++) {
    let item = each_array_3[$$index_4];
    if (item?.slug == roomDetail.slug) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="hidden"></span>`;
    } else {
      $$payload.out += "<!--[!-->";
      const each_array_4 = ensure_array_like(item.inclusion);
      $$payload.out += `<div class="swiper-slide relative"><div class="relative"><img${attr("src", item.featured_images[0].path)} class="aspect-[9/11] h-full w-full object-cover object-center rounded-xl"${attr("alt", `${stringify(item.name)} images`)}> <span class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent opacity-50 rounded-xl"></span></div> <div class="absolute w-full xl:bottom-8 bottom-8 2xl:px-8 xl:px-6 px-4 2xl:pb-12 xl:pb-10 pb-8 text-white flex flex-col 2xl:gap-4 xl:gap-3 gap-2"><p class="font-marcel 2xl:text-4xl xl:text-3xl text-xl">${escape_html(item.name)}</p> <ul class="grid grid-cols-2 2xl:gap-3 xl:gap-2 gap-2"><!--[-->`;
      for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
        let inclusion = each_array_4[$$index_3];
        $$payload.out += `<li class="flex 2xl:gap-4 xl:gap-3 gap-2 items-center 2xl:text-xl xl:text-base text-xs font-manrope"><img${attr("src", `http://50.6.206.23/~trlembongan/cms/storage/app/media${stringify(inclusion.iconwhite)}`)}${attr("alt", `${stringify(inclusion.name)} svg`)} class="2xl:w-6 2xl:h-6 xl:h-5 xl:w-5 w-4 h-4 object-cover object-center"> ${escape_html(inclusion.name)}</li>`;
      }
      $$payload.out += `<!--]--></ul></div> <a data-sveltekit-reload=""${attr("href", `/accommodations/${stringify(item.slug)}`)} class="text-secondary font-manrope 2xl:pt-6 xl:pt-4 pt-3 2xl:text-xl xl:text-base text-sm font-semibold uppercase 2xl:mx-10 xl:mx-8 mx-6 flex 2xl:gap-3 xl:gap-2 gap-2 items-center group overflow-hidden">view detail <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 xl:w-5 w-4 h-full transform translate-x-[-20px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" viewBox="0 0 25 13" fill="none"><path d="M19.2 0.5L24 6.5M24 6.5L19.2 12.5M24 6.5H0" stroke="#3B3422" stroke-width="1.5"></path></svg></a></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div></div></section> <section class="h-full w-full bg-lightbg pt-40 px-8 block md:hidden"><a data-sveltekit-reload="" href="/accommodations" class="text-base text-secondary font-manrope flex gap-4 uppercase items-center py-8"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M21.0001 12C21.0001 12.1989 20.9211 12.3897 20.7804 12.5303C20.6398 12.671 20.449 12.75 20.2501 12.75H5.56041L11.0307 18.2194C11.1004 18.289 11.1557 18.3718 11.1934 18.4628C11.2311 18.5539 11.2505 18.6514 11.2505 18.75C11.2505 18.8485 11.2311 18.9461 11.1934 19.0372C11.1557 19.1282 11.1004 19.2109 11.0307 19.2806C10.961 19.3503 10.8783 19.4056 10.7873 19.4433C10.6962 19.481 10.5986 19.5004 10.5001 19.5004C10.4016 19.5004 10.304 19.481 10.2129 19.4433C10.1219 19.4056 10.0392 19.3503 9.96948 19.2806L3.21948 12.5306C3.14974 12.461 3.09443 12.3782 3.05668 12.2872C3.01894 12.1961 2.99951 12.0986 2.99951 12C2.99951 11.9014 3.01894 11.8038 3.05668 11.7128C3.09443 11.6217 3.14974 11.539 3.21948 11.4694L9.96948 4.71936C10.1102 4.57863 10.3011 4.49957 10.5001 4.49957C10.6991 4.49957 10.89 4.57863 11.0307 4.71936C11.1715 4.8601 11.2505 5.05097 11.2505 5.24999C11.2505 5.44901 11.1715 5.63988 11.0307 5.78061L5.56041 11.25H20.2501C20.449 11.25 20.6398 11.329 20.7804 11.4697C20.9211 11.6103 21.0001 11.8011 21.0001 12Z" fill="#3B3422"></path></svg> Room Detail</a> <div class="relative h-full w-full"><div class="swiper myAccommodationSwiper rounded-3xl relative"><div class="swiper-wrapper"><!--[-->`;
  for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
    let img = each_array_5[$$index_5];
    $$payload.out += `<div class="swiper-slide h-full w-full"><div class="aspect-[16/11]"><img${attr("src", img.path)} class="h-full w-full object-cover" alt=""> <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40"></div></div></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="swiper-button-prev swiper-button-prev-accommodation !w-12 !h-12 after:!content-none"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 48 48" fill="none"><rect x="48" y="48" width="48" height="48" rx="24" transform="rotate(-180 48 48)" fill="white"></rect><path d="M29 34L19 24L29 14" stroke="#AF9F8D" stroke-width="1.5"></path></svg></div> <div class="swiper-button-next swiper-button-next-accommodation !w-12 !h-12 after:!content-none"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="white"></rect><path d="M19 14L29 24L19 34" stroke="#AF9F8D" stroke-width="1.5"></path></svg></div></div> <div class="pb-8 border-b border-gold border-solid"><p class="pb-6 pt-8 text-3xl font-marcel text-gold">${escape_html(roomDetail.name)}</p> <ul class="font-manrope text-sm text-secondary font-light flex items-center flex-wrap gap-2"><!--[-->`;
  for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
    let inclusion = each_array_6[$$index_6];
    $$payload.out += `<li class="flex items-center gap-2 bg-[#F6F3EA] rounded-xl px-4 py-2"><img${attr("src", `http://50.6.206.23/~trlembongan/cms/storage/app/media${stringify(inclusion.iconblack)}`)}${attr("alt", `${stringify(inclusion.name)} svg`)} class="w-5 h-5 object-cover object-center"> ${escape_html(inclusion.name)}</li>`;
  }
  $$payload.out += `<!--]--></ul> <div id="desc" class="font-manrope text-base text-secondary pt-4 pb-6">${html(roomDetail.description)}</div> <a${attr("href", info[0].book_url)} class="w-max flex items-center font-manrope text-base px-6 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">book now</a> <p class="pt-8 pb-4 font-manrope text-secondary text-xl font-semibold text-center capitalize">room inclusion</p> <ul class="font-manrope border border-secondary rounded-2xl text-sm text-secondary py-6 px-4 flex flex-col gap-2"><!--[-->`;
  for (let $$index_7 = 0, $$length = each_array_7.length; $$index_7 < $$length; $$index_7++) {
    let item = each_array_7[$$index_7];
    $$payload.out += `<li class="flex items-center gap-2">${html(item.icon)}${escape_html(item.name)}</li>`;
  }
  $$payload.out += `<!--]--></ul></div></div></section> <section class="h-full w-full bg-lightbg py-20 px-8 block md:hidden"><div class="relative flex flex-col"><p class="font-marcel text-gold text-center text-3xl">Other Rooms You Might Like</p> <!--[-->`;
  for (let $$index_9 = 0, $$length = each_array_8.length; $$index_9 < $$length; $$index_9++) {
    let item = each_array_8[$$index_9];
    if (item?.slug == roomDetail.slug) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="hidden"></span>`;
    } else {
      $$payload.out += "<!--[!-->";
      const each_array_9 = ensure_array_like(item.inclusion);
      $$payload.out += `<div class="flex flex-col gap-6 pt-16"><img${attr("src", item.featured_images[0].path)} class="h-full w-full aspect-[16/10] pb-2 object-cover rounded-xl"${attr("alt", `${stringify(roomDetail.name)} Lembongan Beach Club & Resort Offers`)}> <ul class="flex flex-col gap-2"><li><p class="text-3xl font-marcel text-gold">${escape_html(item.name)}</p></li> <li><p class="font-manrope text-secondary text-base font-semibold">${escape_html(item.price)}</p></li></ul> <ul class="font-manrope text-sm text-secondary font-light flex items-center flex-wrap gap-2"><!--[-->`;
      for (let $$index_8 = 0, $$length2 = each_array_9.length; $$index_8 < $$length2; $$index_8++) {
        let inclusion = each_array_9[$$index_8];
        $$payload.out += `<li class="flex items-center gap-2 bg-[#F6F3EA] rounded-xl px-4 py-2"><img${attr("src", `http://50.6.206.23/~trlembongan/cms/storage/app/media${stringify(inclusion.iconblack)}`)}${attr("alt", `${stringify(inclusion.name)} svg`)} class="w-5 h-5 object-cover object-center"> ${escape_html(inclusion.name)}</li>`;
      }
      $$payload.out += `<!--]--></ul> <div class="flex 2xl:gap-4 xl:gap-3 gap-3"><a data-sveltekit-reload=""${attr("href", `/accommodations/${stringify(item.slug)}`)} class="flex items-center font-manrope text-base px-6 py-3 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">view detail</a> <a${attr("href", info[0].book_url)} class="flex items-center font-manrope text-base px-6 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">book now</a></div></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></section> `;
  Footer($$payload, { info });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CvLEsmaT.js.map
