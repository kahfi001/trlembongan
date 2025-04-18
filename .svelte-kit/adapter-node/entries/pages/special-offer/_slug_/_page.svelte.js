import { e as ensure_array_like, h as head, a as attr, b as escape_html, s as stringify, c as bind_props, p as pop, d as push } from "../../../../chunks/index.js";
import { F as Footer } from "../../../../chunks/swiper.js";
import { H as Headerdetailoffer } from "../../../../chunks/headerdetailoffer.js";
import { h as html } from "../../../../chunks/html.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let rooms = data?.accommodation;
  let offers = data?.offers;
  let detailOffers = data?.offersDetail;
  let info = data?.info;
  const each_array = ensure_array_like(offers);
  const each_array_1 = ensure_array_like(offers);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(detailOffers.name)} - Lembongan Beach Club and Resort</title>`;
    $$payload2.out += `<meta name="description" content="">`;
  });
  Headerdetailoffer($$payload, { info, offers, rooms });
  $$payload.out += `<!----> <section class="md:block hidden h-full w-full bg-lightbg 2xl:pt-48 pt-44 2xl:px-28 xl:px-24 px-12"><div class="flex 2xl:gap-16 xl:gap-14 gap-12"><div class="h-full w-3/5 rounded-r-3xl"><img${attr("src", detailOffers.featured_images[1]?.path || detailOffers.featured_images[0]?.path || "")} alt="" class="aspect-[16/10] object-cover w-full h-full rounded-r-3xl"></div> <div class="h-full w-2/5 flex flex-col 2xl:gap-11 xl:gap-9 gap-7"><div class="flex flex-col 2xl:gap-4 xl:gap-3 gap-2"><h1 class="font-manrope text-gold 2xl:text-2xl xl:text-xl text-base uppercase">offer detail</h1> <h2 class="font-marcel text-gold 2xl:text-5xl xl:text-4xl text-3xl">${escape_html(detailOffers.name)}</h2></div> <div id="desc" class="text-secondary font-manrope 2xl:text-xl xl:text-base text-sm">${html(detailOffers.description)}</div> <a${attr("href", detailOffers.book_url)} class="w-max flex items-center font-manrope 2xl:text-2xl xl:text-xl 2xl:px-10 px-8 xl:px-8 2xl:py-4 xl:py-3 py-3 capitalize text-white bg-gold group"><span class="transition-all duration-300 pr-0 group-hover:pr-2">book now</span> <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:2xl:w-9 2xl:w-0 xl:w-0 w-0 group-hover:xl:w-8 group-hover:md:w-8 h-full ml-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:ml-2 transition-all duration-300" viewBox="0 0 34 19" fill="none"><path d="M25.6 1.5L32 9.5M32 9.5L25.6 17.5M32 9.5H0" stroke="#FFFFF9" stroke-width="2"></path></svg></a></div></div></section> <section class="md:block hidden h-full w-full bg-lightbg 2xl:py-36 xl:py-32 py-28 2xl:px-28 xl:px-24 px-12"><div class="relative border-t-2 2xl:pt-16 xl:pt-14 pt-10 border-gold border-solid flex flex-col 2xl:gap-14 xl:gap-12 gap-10"><p class="text-gold font-marcel text-center 2xl:text-4xl xl:text-3xl text-3xl">Other Offers You Might Like</p> <div class="swiper myOffersdetailSwiper h-full w-full"><div class="swiper-wrapper"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    if (item?.slug == detailOffers.slug) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="hidden"></span>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="swiper-slide"><div class="grid grid-rows 2xl:gap-8 xl:gap-6 gap-4 h-full w-full"><img${attr("src", item.featured_images[1]?.path || item.featured_images[0]?.path || "")} class="aspect-[16/11] object-cover object-center rounded-2xl" alt=""> <ul class="flex flex-col 2xl:gap-3 xl:gap-2"><li class="text-gold font-marcel 2xl:text-3xl xl:text-2xl text-xl line-clamp-1">${escape_html(item.name)}</li> <li class="font-manrope text-secondary font-light 2xl:text-xl xl:text-base text-sm line-clamp-2 min-h-11">${html(item.excerpt)}</li> <li class="text-secondary 2xl:text-xl xl:text-base text-sm font-semibold">${escape_html(item.price)}</li></ul> <div class="flex 2xl:gap-4 xl:gap-3 gap-2"><a data-sveltekit-reload=""${attr("href", `/special-offer/${stringify(item.slug)}`)} class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">view detail</a> <a${attr("href", item.book_url)} class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">book now</a></div></div></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div></div></section> <section class="h-full w-full bg-lightbg pt-40 px-8 block md:hidden"><a href="/special-offer" class="text-base text-secondary font-manrope flex gap-4 uppercase items-center py-8"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M21.0001 12C21.0001 12.1989 20.9211 12.3897 20.7804 12.5303C20.6398 12.671 20.449 12.75 20.2501 12.75H5.56041L11.0307 18.2194C11.1004 18.289 11.1557 18.3718 11.1934 18.4628C11.2311 18.5539 11.2505 18.6514 11.2505 18.75C11.2505 18.8485 11.2311 18.9461 11.1934 19.0372C11.1557 19.1282 11.1004 19.2109 11.0307 19.2806C10.961 19.3503 10.8783 19.4056 10.7873 19.4433C10.6962 19.481 10.5986 19.5004 10.5001 19.5004C10.4016 19.5004 10.304 19.481 10.2129 19.4433C10.1219 19.4056 10.0392 19.3503 9.96948 19.2806L3.21948 12.5306C3.14974 12.461 3.09443 12.3782 3.05668 12.2872C3.01894 12.1961 2.99951 12.0986 2.99951 12C2.99951 11.9014 3.01894 11.8038 3.05668 11.7128C3.09443 11.6217 3.14974 11.539 3.21948 11.4694L9.96948 4.71936C10.1102 4.57863 10.3011 4.49957 10.5001 4.49957C10.6991 4.49957 10.89 4.57863 11.0307 4.71936C11.1715 4.8601 11.2505 5.05097 11.2505 5.24999C11.2505 5.44901 11.1715 5.63988 11.0307 5.78061L5.56041 11.25H20.2501C20.449 11.25 20.6398 11.329 20.7804 11.4697C20.9211 11.6103 21.0001 11.8011 21.0001 12Z" fill="#3B3422"></path></svg> Offer Detail</a> <div class="flex flex-col gap-6"><img${attr("src", detailOffers.featured_images[1]?.path || detailOffers.featured_images[0]?.path || "")} class="h-full w-full aspect-[16/11] pb-2 object-cover rounded-xl"${attr("alt", `${stringify(detailOffers.name)} Lembongan Beach Club & Resort Offers`)}> <p class="text-3xl font-marcel text-gold">${escape_html(detailOffers.name)}</p> <div id="desc" class="font-manrope text-base text-secondary">${html(detailOffers.description)}</div> <a${attr("href", detailOffers.book_url)} class="w-max flex items-center font-manrope text-base px-6 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">book now</a></div></section> <section class="h-full w-full bg-lightbg py-20 px-8 block md:hidden"><div class="relative border-t border-gold border-solid pt-20 flex flex-col"><p class="font-marcel text-gold text-center text-3xl">Other Offers You Might Like</p> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let item = each_array_1[$$index_1];
    if (item?.slug == detailOffers.slug) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="hidden"></span>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="flex flex-col gap-6 pt-16"><img${attr("src", item.featured_images[1]?.path || item.featured_images[0]?.path || "")} class="h-full w-full aspect-[16/10] pb-2 object-cover rounded-xl"${attr("alt", `${stringify(detailOffers.name)} Lembongan Beach Club & Resort Offers`)}> <p class="text-3xl font-marcel text-gold">${escape_html(item.name)}</p> <div id="desc" class="font-manrope text-base text-secondary line-clamp-6">${html(item.excerpt)}</div> <div class="flex 2xl:gap-4 xl:gap-3 gap-3"><a data-sveltekit-reload=""${attr("href", `/special-offer/${stringify(item.slug)}`)} class="flex items-center font-manrope text-base px-6 py-3 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">view detail</a> <a${attr("href", item.book_url)} class="flex items-center font-manrope text-base px-6 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">book now</a></div></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></section> `;
  Footer($$payload, { info });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
