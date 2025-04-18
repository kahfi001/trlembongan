import { e as ensure_array_like, h as head, a as attr, f as attr_class, b as escape_html, s as stringify, c as bind_props, p as pop, d as push } from "../../../chunks/index.js";
import { F as Footer } from "../../../chunks/swiper.js";
import { H as Header } from "../../../chunks/header.js";
/* empty css                  */
import "aos";
import { h as html } from "../../../chunks/html.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let info = data?.info;
  let dining = data?.dining;
  let offers = data?.offers;
  let rooms = data?.accommodation;
  let seo = data?.seo;
  const each_array = ensure_array_like(dining);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(seo[0].title.dinetit)}</title>`;
    $$payload2.out += `<meta name="title"${attr("content", seo[0].meta_title.dinemettit)}> <meta name="description"${attr("content", seo[0].description.dinemetdesc)}> <meta name="keywords"${attr("content", seo[0].keywords.dinekey)}> <meta property="og:site_name"${attr("content", info[0].name)}> <meta property="og:title"${attr("content", seo[0].og_title.dineogtit)}> <meta name="og:description"${attr("content", seo[0].og_description.dineogdesc)}> <meta property="og:image"${attr("content", seo[0].images_dine[0]?.path ?? "")}> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${attr("content", seo[0].twitter_title.dinetwittit)}> <meta name="twitter:description"${attr("content", seo[0].twitter_description.dinetwitdesc)}> <meta name="twitter:image"${attr("content", seo[0].images_dine[0]?.path ?? "")}>`;
  });
  Header($$payload, { info, offers, rooms });
  $$payload.out += `<!----> <section class="w-full h-screen relative bg-slate-40"><div class="relative h-full w-full"><img${attr("src", info[0].hero_images[4]?.path ?? "")} class="h-full w-full object-cover" alt="Hero images"> <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-transparent opacity-50"></div> <div class="absolute inset-0 text-white font-marcel 2xl:text-7xl xl:text-6xl md:text-5xl text-4xl flex justify-center items-center w-full h-full"><h1 class="flex" data-aos="fade-up">Dining</h1></div></div></section> <section class="2xl:py-40 2xl:px-0 xl:py-36 xl:px-0 md:py-28 py-16 px-0 bg-lightbg"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let item = each_array[index];
    const each_array_1 = ensure_array_like(item.featured_images);
    $$payload.out += `<div class="grid xl:grid-cols-2 grid-cols-1 h-full w-full md:pb-0 pb-20 xl:pt-16"><div${attr_class(`h-full w-full xl:aspect-[16/11] aspect-[14/9] pb-8 md:pb-0 xl:min-h-[50vh] ${stringify(index % 2 == 0 ? "xl:order-1 xl:pr-0 md:pr-14 pr-8 xl:rounded-r-3xl rounded-r-xl" : "xl:order-2 xl:pl-0 md:pl-14 pl-8 xl:rounded-l-3xl rounded-l-xl")}`)}><div class="swiper mySwiperDine h-full w-full"><div class="swiper-wrapper"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let img = each_array_1[$$index];
      $$payload.out += `<div class="swiper-slide"><img${attr("src", img.path)}${attr_class(`h-full w-full object-cover object-center ${stringify(index % 2 == 0 ? "xl:rounded-r-3xl rounded-r-xl" : "xl:rounded-l-3xl rounded-l-xl")}`)} alt="Hero images"></div>`;
    }
    $$payload.out += `<!--]--></div></div></div> <div${attr_class(`h-full w-full justify-center md:py-20 py-0 md:px-14 px-8 flex flex-col 2xl:gap-12 md:gap-10 gap-3 xl:min-h-[50vh] ${stringify(index % 2 != 0 ? "xl:order-1 2xl:pr-16 xl:pr-12" : "xl:order-2  2xl:pl-16 xl:pl-12")}`)}><p class="text-gold font-marcel 2xl:text-5xl md:text-4xl text-3xl =">${escape_html(item.name)}</p> <div class="flex flex-col 2xl:gap-8 md:gap-6 gap-3"><p class="2xl:text-xl md:text-base text-sm font-manrope text-secondary xl:leading-normal md:leading-9 leading-normal line-clamp-3">${html(item.excerpt)}</p> <p class="flex gap-2 items-center 2xl:text-xl md:text-base text-sm font-manrope text-secondary xl:pb-0 pb-2"><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 2xl:h-6 w-5 h-5" viewBox="0 0 32 33" fill="none"><path d="M16 3.5C13.4288 3.5 10.9154 4.26244 8.77759 5.6909C6.63975 7.11935 4.97351 9.14968 3.98957 11.5251C3.00563 13.9006 2.74819 16.5144 3.2498 19.0362C3.75141 21.5579 4.98953 23.8743 6.80762 25.6924C8.6257 27.5105 10.9421 28.7486 13.4638 29.2502C15.9856 29.7518 18.5995 29.4944 20.9749 28.5104C23.3503 27.5265 25.3807 25.8603 26.8091 23.7224C28.2376 21.5846 29 19.0712 29 16.5C28.9964 13.0533 27.6256 9.74882 25.1884 7.31163C22.7512 4.87445 19.4467 3.50364 16 3.5ZM16 27.5C13.8244 27.5 11.6977 26.8549 9.88873 25.6462C8.07979 24.4375 6.66989 22.7195 5.83733 20.7095C5.00477 18.6995 4.78693 16.4878 5.21137 14.354C5.63581 12.2202 6.68345 10.2602 8.22183 8.72183C9.76021 7.18345 11.7202 6.1358 13.854 5.71136C15.9878 5.28692 18.1995 5.50476 20.2095 6.33733C22.2195 7.16989 23.9375 8.57979 25.1462 10.3887C26.3549 12.1977 27 14.3244 27 16.5C26.9967 19.4164 25.8367 22.2123 23.7745 24.2745C21.7123 26.3367 18.9164 27.4967 16 27.5ZM24 16.5C24 16.7652 23.8946 17.0196 23.7071 17.2071C23.5196 17.3946 23.2652 17.5 23 17.5H16C15.7348 17.5 15.4804 17.3946 15.2929 17.2071C15.1054 17.0196 15 16.7652 15 16.5V9.5C15 9.23478 15.1054 8.98043 15.2929 8.79289C15.4804 8.60536 15.7348 8.5 16 8.5C16.2652 8.5 16.5196 8.60536 16.7071 8.79289C16.8946 8.98043 17 9.23478 17 9.5V15.5H23C23.2652 15.5 23.5196 15.6054 23.7071 15.7929C23.8946 15.9804 24 16.2348 24 16.5Z" fill="#AF9F8D"></path></svg> Opening hour : ${escape_html(item.feature.open)}</p></div> <div class="flex xl:flex-col flex-row gap gap-3">`;
    if (String(item.button_detail).trim() !== "") {
      $$payload.out += "<!--[-->";
      if (item.detail_button == 1) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<a data-sveltekit-reload=""${attr("href", `/dine/${stringify(item.slug)}`)} class="xl:min-w-48 md:min-w-44 min-w-40 max-w-max justify-center xl:flex hidden items-center font-manrope 2xl:text-xl xl:text-base 2xl:px-10 xl:px-8 2xl:py-3 xl:py-2 capitalize text-gold border-gold border border-solid hover:bg-gold hover:text-white transition-all duration-300 rounded-2xl">${escape_html(item.button_detail)}</a> <a data-sveltekit-reload=""${attr("href", `/dine/${stringify(item.slug)}`)} class="md:min-w-44 min-w-36 max-w-max justify-center xl:hidden flex items-center font-manrope text-base px-6 py-4 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">${escape_html(item.button_detail)}</a>`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<a${attr("href", item.url_detail)} class="xl:min-w-48 md:min-w-44 min-w-40 max-w-max justify-center xl:flex hidden items-center font-manrope 2xl:text-xl xl:text-base 2xl:px-10 xl:px-8 2xl:py-3 xl:py-2 capitalize text-gold border-gold border border-solid hover:bg-gold hover:text-white transition-all duration-300 rounded-2xl">${escape_html(item.button_detail)}</a> <a${attr("href", item.url_detail)} class="md:min-w-44 min-w-36 max-w-max justify-center xl:hidden flex items-center font-manrope text-base px-6 py-4 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">${escape_html(item.button_detail)}</a>`;
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (item.book_button == 1) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", item.url_book)} class="xl:min-w-48 md:min-w-44 min-w-40 max-w-max justify-center xl:flex hidden items-center font-manrope 2xl:text-xl xl:text-base 2xl:px-10 xl:px-8 2xl:py-3 xl:py-2 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300 rounded-2xl">${escape_html(item.button_book)}</a> <a data-sveltekit-reload=""${attr("href", `/dine/${stringify(item.slug)}`)} class="md:min-w-44 min-w-36 max-w-max justify-center xl:hidden flex items-center font-manrope text-base px-6 py-4 capitalize hover:text-white bg-gold hover:bg-[#827668] text-white transition-all duration-300">${escape_html(item.button_book)}</a>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div></div>`;
  }
  $$payload.out += `<!--]--></section> `;
  Footer($$payload, { info });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
