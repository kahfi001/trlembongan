import { x as push, T as head, W as attr, X as escape_html, $ as bind_props, z as pop, Z as ensure_array_like, _ as stringify, a0 as attr_class } from './exports-Bh0mkxnv.js';
import { F as Footer } from './swiper-BWfGbDCc.js';
import { H as Header } from './header-HT97qdu5.js';
import { T as Tabs, a as TabItem } from './Tabs-D8csrrX6.js';
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
  let explore = data?.explore;
  let offers = data?.offers;
  let rooms = data?.accommodation;
  let seo = data?.seo;
  const filterExplore = (type) => {
    return explore.filter((item) => item.type === type);
  };
  const tabs = [
    { name: "Facilities", dataKey: "facilities" },
    {
      name: "Adventure Activities",
      dataKey: "activities"
    },
    {
      name: "Concierge Service",
      dataKey: "concierge"
    }
  ];
  const filteredExplore = {
    facilities: filterExplore("facilities"),
    activities: filterExplore("activities"),
    concierge: filterExplore("concierge")
  };
  let activeTab = "facilities";
  let selectedItem = null;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(seo[0].title.exploretit)}</title>`;
    $$payload2.out += `<meta name="title"${attr("content", seo[0].meta_title.exploremettit)}> <meta name="description"${attr("content", seo[0].description.exploremetdesc)}> <meta name="keywords"${attr("content", seo[0].keywords.explorekey)}> <meta property="og:site_name"${attr("content", info[0].name)}> <meta property="og:title"${attr("content", seo[0].og_title.exploreogtit)}> <meta name="og:description"${attr("content", seo[0].og_description.exploreogdesc)}> <meta property="og:image"${attr("content", seo[0].images_explore[0]?.path ?? "")}> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${attr("content", seo[0].twitter_title.exploretwittit)}> <meta name="twitter:description"${attr("content", seo[0].twitter_description.exploretwitdesc)}> <meta name="twitter:image"${attr("content", seo[0].images_explore[0]?.path ?? "")}>`;
  });
  Header($$payload, { info, offers, rooms });
  $$payload.out += `<!----> <section class="w-full h-screen relative bg-slate-40"><div class="absolute left-16 inset-0 right-16 flex flex-col text-white text-start justify-center items-center z-10" data-aos="fade-up"><div class="flex flex-col w-full items-center"><h1 class="font-marcel 2xl:text-7xl xl:text-5xl sm:text-4xl text-3xl font-normal text-center" data-aos="fade-up">Explore</h1></div></div> <div class="relative h-full w-full"><img${attr("src", info[0].hero_images[3]?.path ?? "")} class="h-full w-full object-cover" alt="Hero images"> <div class="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900 to-transparent opacity-50"></div></div></section> <section class="bg-lightbg xl:block hidden"><div class="px-0 2xl:pt-36 xl:pt-32 pt-20">`;
  Tabs($$payload, {
    contentClass: "bg-lightbg",
    tabStyle: "pill",
    defaultClass: "flex flex-wrap justify-center items-center bg-lightbg",
    children: ($$payload2) => {
      const each_array = ensure_array_like(tabs);
      $$payload2.out += `<!--[-->`;
      for (let $$index_3 = 0, $$length = each_array.length; $$index_3 < $$length; $$index_3++) {
        let tab = each_array[$$index_3];
        TabItem($$payload2, {
          open: tab.dataKey == activeTab,
          activeClasses: "2xl:px-12 xl:px-10 2xl:py-6 xl:py-4 py-2 px-2 2xl:text-3xl xl:text-2xl text-base 2xl:border-b-4 xl:border-b-2 border-b-2 border-secondary border-solid text-secondary font-manrope",
          inactiveClasses: "2xl:px-12 xl:px-10 2xl:py-6 xl:py-4 py-2 px-2 2xl:text-3xl xl:text-2xl text-base text-gold font-manrope",
          children: ($$payload3) => {
            Tabs($$payload3, {
              contentClass: "bg-lightbg 2xl:pt-12 xl:pt-10",
              tabStyle: "pill",
              defaultClass: "grid grid-cols-2 justify-center bg-lightbg 2xl:pt-20 xl:pt-16 gap-y-16",
              children: ($$payload4) => {
                const each_array_1 = ensure_array_like(filteredExplore[tab.dataKey]);
                $$payload4.out += `<!--[-->`;
                for (let index = 0, $$length2 = each_array_1.length; index < $$length2; index++) {
                  let item = each_array_1[index];
                  if (index % 2 === 1) {
                    $$payload4.out += "<!--[-->";
                    const each_array_2 = ensure_array_like(item.featured_images);
                    $$payload4.out += `<div class="flex flex-col 2xl:py-20 xl:py-16 2xl:pr-28 xl:pr-24 2xl:pl-10 xl:pl-8 justify-center 2xl:gap-10 xl:gap-8 text-gold min-h-[50vh]"><p class="font-marcel 2xl:text-5xl xl:text-3xl text-3xl">${escape_html(item.name)}</p> <div id="desc" class="font-manrope text-secondary 2xl:text-xl text-base w-full"><p class="flex font-manrope 2xl:gap-4 gap-3 text-xl font-light text-secondary 2xl:mb-6 mb-4 items-end"><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-8 2xl:h-8 w-6 h-6" viewBox="0 0 32 33" fill="none"><path d="M16 3.5C13.4288 3.5 10.9154 4.26244 8.77759 5.6909C6.63975 7.11935 4.97351 9.14968 3.98957 11.5251C3.00563 13.9006 2.74819 16.5144 3.2498 19.0362C3.75141 21.5579 4.98953 23.8743 6.80762 25.6924C8.6257 27.5105 10.9421 28.7486 13.4638 29.2502C15.9856 29.7518 18.5995 29.4944 20.9749 28.5104C23.3503 27.5265 25.3807 25.8603 26.8091 23.7224C28.2376 21.5846 29 19.0712 29 16.5C28.9964 13.0533 27.6256 9.74882 25.1884 7.31163C22.7512 4.87445 19.4467 3.50364 16 3.5ZM16 27.5C13.8244 27.5 11.6977 26.8549 9.88873 25.6462C8.07979 24.4375 6.66989 22.7195 5.83733 20.7095C5.00477 18.6995 4.78693 16.4878 5.21137 14.354C5.63581 12.2202 6.68345 10.2602 8.22183 8.72183C9.76021 7.18345 11.7202 6.1358 13.854 5.71136C15.9878 5.28692 18.1995 5.50476 20.2095 6.33733C22.2195 7.16989 23.9375 8.57979 25.1462 10.3887C26.3549 12.1977 27 14.3244 27 16.5C26.9967 19.4164 25.8367 22.2123 23.7745 24.2745C21.7123 26.3367 18.9164 27.4967 16 27.5ZM24 16.5C24 16.7652 23.8946 17.0196 23.7071 17.2071C23.5196 17.3946 23.2652 17.5 23 17.5H16C15.7348 17.5 15.4804 17.3946 15.2929 17.2071C15.1054 17.0196 15 16.7652 15 16.5V9.5C15 9.23478 15.1054 8.98043 15.2929 8.79289C15.4804 8.60536 15.7348 8.5 16 8.5C16.2652 8.5 16.5196 8.60536 16.7071 8.79289C16.8946 8.98043 17 9.23478 17 9.5V15.5H23C23.2652 15.5 23.5196 15.6054 23.7071 15.7929C23.8946 15.9804 24 16.2348 24 16.5Z" fill="#AF9F8D"></path></svg> Opening Hour : <span class="font-manrope text-gold">${escape_html(item.time)}</span></p> ${html(item.excerpt)}</div> <div class="flex flex-col 2xl:gap-4 xl:gap-3 text-center">`;
                    if (String(item.button_textdetail).trim() !== "") {
                      $$payload4.out += "<!--[-->";
                      if (item.button_detail == 1) {
                        $$payload4.out += "<!--[-->";
                        $$payload4.out += `<button class="xl:min-w-48 md:min-w-44 min-w-40 max-w-max flex items-center justify-center font-manrope 2xl:text-xl xl:text-base 2xl:px-10 xl:px-8 2xl:py-3 xl:py-3 capitalize text-gold border-gold border border-solid rounded-xl hover:bg-gold hover:text-white transition-all duration-300">${escape_html(item.button_textdetail)}</button>`;
                      } else {
                        $$payload4.out += "<!--[!-->";
                        $$payload4.out += `<a${attr("href", item.button_descdetail)} class="xl:min-w-48 md:min-w-44 min-w-40 max-w-max flex items-center justify-center font-manrope 2xl:text-xl xl:text-base 2xl:px-10 xl:px-8 2xl:py-3 xl:py-3 capitalize text-gold border-gold border border-solid rounded-xl hover:bg-gold hover:text-white transition-all duration-300">${escape_html(item.button_textdetail)}</a>`;
                      }
                      $$payload4.out += `<!--]-->`;
                    } else {
                      $$payload4.out += "<!--[!-->";
                    }
                    $$payload4.out += `<!--]--> `;
                    if (item.button_book == 1) {
                      $$payload4.out += "<!--[-->";
                      $$payload4.out += `<a${attr("href", item.cta_detail)} class="xl:min-w-48 md:min-w-44 min-w-40 max-w-max flex items-center justify-center font-manrope 2xl:text-xl xl:text-base 2xl:px-10 xl:px-8 2xl:py-3 xl:py-3 capitalize text-white bg-gold rounded-xl hover:bg-[#827668] transition-all duration-300">${escape_html(item.button_textbutton)}</a>`;
                    } else {
                      $$payload4.out += "<!--[!-->";
                    }
                    $$payload4.out += `<!--]--></div></div> <div class="w-full h-full min-h-[50vh]"><div class="swiper mySwiperDine h-full w-full"><div class="swiper-wrapper"><!--[-->`;
                    for (let $$index = 0, $$length3 = each_array_2.length; $$index < $$length3; $$index++) {
                      let img = each_array_2[$$index];
                      $$payload4.out += `<div class="swiper-slide"><img${attr("src", img.path)} class="aspect-[16/11] w-full h-full object-cover object-center rounded-l-3xl"${attr("alt", `${stringify(item.name)} images`)}></div>`;
                    }
                    $$payload4.out += `<!--]--></div></div></div>`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                    const each_array_3 = ensure_array_like(item.featured_images);
                    $$payload4.out += `<div class="w-full h-full min-h-[50vh]"><div class="swiper mySwiperDine h-full w-full"><div class="swiper-wrapper"><!--[-->`;
                    for (let $$index_1 = 0, $$length3 = each_array_3.length; $$index_1 < $$length3; $$index_1++) {
                      let img = each_array_3[$$index_1];
                      $$payload4.out += `<div class="swiper-slide"><img${attr("src", img.path)} class="aspect-[16/11] w-full h-full object-cover object-center rounded-r-3xl"${attr("alt", `${stringify(item.name)} images`)}></div>`;
                    }
                    $$payload4.out += `<!--]--></div></div></div> <div class="flex flex-col 2xl:py-20 xl:py-16 2xl:pl-28 xl:pl-24 2xl:pr-10 xl:pr-8 justify-center 2xl:gap-10 xl:gap-8 text-gold min-h-[50vh]"><p class="font-marcel 2xl:text-5xl xl:text-4xl">${escape_html(item.name)}</p> <div id="desc" class="font-manrope text-secondary 2xl:text-xl text-base w-full"><p class="flex 2xl:gap-4 gap-3 text-xl font-light text-secondary 2xl:mb-6 mb-4 items-end"><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-8 2xl:h-8 w-6 h-6" viewBox="0 0 32 33" fill="none"><path d="M16 3.5C13.4288 3.5 10.9154 4.26244 8.77759 5.6909C6.63975 7.11935 4.97351 9.14968 3.98957 11.5251C3.00563 13.9006 2.74819 16.5144 3.2498 19.0362C3.75141 21.5579 4.98953 23.8743 6.80762 25.6924C8.6257 27.5105 10.9421 28.7486 13.4638 29.2502C15.9856 29.7518 18.5995 29.4944 20.9749 28.5104C23.3503 27.5265 25.3807 25.8603 26.8091 23.7224C28.2376 21.5846 29 19.0712 29 16.5C28.9964 13.0533 27.6256 9.74882 25.1884 7.31163C22.7512 4.87445 19.4467 3.50364 16 3.5ZM16 27.5C13.8244 27.5 11.6977 26.8549 9.88873 25.6462C8.07979 24.4375 6.66989 22.7195 5.83733 20.7095C5.00477 18.6995 4.78693 16.4878 5.21137 14.354C5.63581 12.2202 6.68345 10.2602 8.22183 8.72183C9.76021 7.18345 11.7202 6.1358 13.854 5.71136C15.9878 5.28692 18.1995 5.50476 20.2095 6.33733C22.2195 7.16989 23.9375 8.57979 25.1462 10.3887C26.3549 12.1977 27 14.3244 27 16.5C26.9967 19.4164 25.8367 22.2123 23.7745 24.2745C21.7123 26.3367 18.9164 27.4967 16 27.5ZM24 16.5C24 16.7652 23.8946 17.0196 23.7071 17.2071C23.5196 17.3946 23.2652 17.5 23 17.5H16C15.7348 17.5 15.4804 17.3946 15.2929 17.2071C15.1054 17.0196 15 16.7652 15 16.5V9.5C15 9.23478 15.1054 8.98043 15.2929 8.79289C15.4804 8.60536 15.7348 8.5 16 8.5C16.2652 8.5 16.5196 8.60536 16.7071 8.79289C16.8946 8.98043 17 9.23478 17 9.5V15.5H23C23.2652 15.5 23.5196 15.6054 23.7071 15.7929C23.8946 15.9804 24 16.2348 24 16.5Z" fill="#AF9F8D"></path></svg> Opening Hour : <span class="font-manrope text-gold">${escape_html(item.time)}</span></p> ${html(item.excerpt)}</div> <div class="flex flex-col 2xl:gap-4 xl:gap-3 text-center">`;
                    if (String(item.button_textdetail).trim() !== "") {
                      $$payload4.out += "<!--[-->";
                      if (item.button_detail == 1) {
                        $$payload4.out += "<!--[-->";
                        $$payload4.out += `<button class="xl:min-w-48 md:min-w-44 min-w-40 max-w-max flex items-center justify-center font-manrope 2xl:text-xl xl:text-base 2xl:px-10 xl:px-8 2xl:py-3 xl:py-3 capitalize text-gold border-gold border border-solid rounded-xl hover:bg-gold hover:text-white transition-all duration-300">${escape_html(item.button_textdetail)}</button>`;
                      } else {
                        $$payload4.out += "<!--[!-->";
                        $$payload4.out += `<a${attr("href", item.button_descdetail)} class="xl:min-w-48 md:min-w-44 min-w-40 max-w-max flex items-center justify-center font-manrope 2xl:text-xl xl:text-base 2xl:px-10 xl:px-8 2xl:py-3 xl:py-3 capitalize text-gold border-gold border border-solid rounded-xl hover:bg-gold hover:text-white transition-all duration-300">${escape_html(item.button_textdetail)}</a>`;
                      }
                      $$payload4.out += `<!--]-->`;
                    } else {
                      $$payload4.out += "<!--[!-->";
                    }
                    $$payload4.out += `<!--]--> `;
                    if (item.button_book == 1) {
                      $$payload4.out += "<!--[-->";
                      $$payload4.out += `<a${attr("href", item.cta_detail)} class="xl:min-w-48 md:min-w-44 min-w-40 max-w-max flex items-center justify-center font-manrope 2xl:text-xl xl:text-base 2xl:px-10 xl:px-8 2xl:py-3 xl:py-3 capitalize text-white bg-gold rounded-xl hover:bg-[#827668] transition-all duration-300">${escape_html(item.button_textbutton)}</a>`;
                    } else {
                      $$payload4.out += "<!--[!-->";
                    }
                    $$payload4.out += `<!--]--></div></div>`;
                  }
                  $$payload4.out += `<!--]-->`;
                }
                $$payload4.out += `<!--]-->`;
              },
              $$slots: { default: true }
            });
          },
          $$slots: {
            default: true,
            title: ($$payload3) => {
              $$payload3.out += `<span slot="title" class="uppercase">${escape_html(tab.name)}</span>`;
            }
          }
        });
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></section> <section class="bg-lightbg xl:hidden block"><div class="px-0 pt-20">`;
  Tabs($$payload, {
    contentClass: "bg-lightbg",
    tabStyle: "pill",
    defaultClass: "flex flex-wrap justify-center items-center bg-lightbg",
    children: ($$payload2) => {
      const each_array_4 = ensure_array_like(tabs);
      $$payload2.out += `<!--[-->`;
      for (let $$index_6 = 0, $$length = each_array_4.length; $$index_6 < $$length; $$index_6++) {
        let tab = each_array_4[$$index_6];
        TabItem($$payload2, {
          open: tab.dataKey == activeTab,
          activeClasses: "py-4 px-8 2xl:text-3xl xl:text-2xl text-base 2xl:border-b-4 xl:border-b-2 border-b-2 border-secondary border-solid text-secondary font-manrope",
          inactiveClasses: "py-4 px-8 text-base text-gold font-manrope",
          children: ($$payload3) => {
            Tabs($$payload3, {
              contentClass: "bg-lightbg 2xl:pt-12 xl:pt-10",
              tabStyle: "pill",
              defaultClass: "grid grid-cols-1 justify-center bg-lightbg pt-16",
              children: ($$payload4) => {
                const each_array_5 = ensure_array_like(filteredExplore[tab.dataKey]);
                $$payload4.out += `<!--[-->`;
                for (let index = 0, $$length2 = each_array_5.length; index < $$length2; index++) {
                  let item = each_array_5[index];
                  const each_array_6 = ensure_array_like(item.featured_images);
                  $$payload4.out += `<div${attr_class(`aspect-[16/10] h-full w-full ${stringify(index % 2 == 0 ? "md:pr-14 pr-8 rounded-r-xl" : "md:pl-14 pl-8 rounded-l-xl")}`)}><div class="swiper mySwiperDine h-full w-full"><div class="swiper-wrapper"><!--[-->`;
                  for (let $$index_4 = 0, $$length3 = each_array_6.length; $$index_4 < $$length3; $$index_4++) {
                    let img = each_array_6[$$index_4];
                    $$payload4.out += `<div class="swiper-slide"><img${attr("src", img.path)}${attr_class(`w-full h-full object-cover object-center ${stringify(index % 2 == 0 ? "rounded-r-xl" : "rounded-l-xl")}`)}${attr("alt", `${stringify(item.name)} images`)}></div>`;
                  }
                  $$payload4.out += `<!--]--></div></div></div> <div class="flex flex-col pt-8 pb-24 px-8 md:px-14 justify-center gap-3 text-gold"><p class="font-marcel text-3xl">${escape_html(item.name)}</p> <div id="desc" class="font-manrope text-secondary text-base w-full"><p class="flex gap-3 font-manrope text-base font-light text-secondary mb-3 items-center"><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-8 2xl:h-8 w-6 h-6" viewBox="0 0 32 33" fill="none"><path d="M16 3.5C13.4288 3.5 10.9154 4.26244 8.77759 5.6909C6.63975 7.11935 4.97351 9.14968 3.98957 11.5251C3.00563 13.9006 2.74819 16.5144 3.2498 19.0362C3.75141 21.5579 4.98953 23.8743 6.80762 25.6924C8.6257 27.5105 10.9421 28.7486 13.4638 29.2502C15.9856 29.7518 18.5995 29.4944 20.9749 28.5104C23.3503 27.5265 25.3807 25.8603 26.8091 23.7224C28.2376 21.5846 29 19.0712 29 16.5C28.9964 13.0533 27.6256 9.74882 25.1884 7.31163C22.7512 4.87445 19.4467 3.50364 16 3.5ZM16 27.5C13.8244 27.5 11.6977 26.8549 9.88873 25.6462C8.07979 24.4375 6.66989 22.7195 5.83733 20.7095C5.00477 18.6995 4.78693 16.4878 5.21137 14.354C5.63581 12.2202 6.68345 10.2602 8.22183 8.72183C9.76021 7.18345 11.7202 6.1358 13.854 5.71136C15.9878 5.28692 18.1995 5.50476 20.2095 6.33733C22.2195 7.16989 23.9375 8.57979 25.1462 10.3887C26.3549 12.1977 27 14.3244 27 16.5C26.9967 19.4164 25.8367 22.2123 23.7745 24.2745C21.7123 26.3367 18.9164 27.4967 16 27.5ZM24 16.5C24 16.7652 23.8946 17.0196 23.7071 17.2071C23.5196 17.3946 23.2652 17.5 23 17.5H16C15.7348 17.5 15.4804 17.3946 15.2929 17.2071C15.1054 17.0196 15 16.7652 15 16.5V9.5C15 9.23478 15.1054 8.98043 15.2929 8.79289C15.4804 8.60536 15.7348 8.5 16 8.5C16.2652 8.5 16.5196 8.60536 16.7071 8.79289C16.8946 8.98043 17 9.23478 17 9.5V15.5H23C23.2652 15.5 23.5196 15.6054 23.7071 15.7929C23.8946 15.9804 24 16.2348 24 16.5Z" fill="#AF9F8D"></path></svg> Opening Hour : <span class="font-manrope text-gold font-light items-end align-middle">${escape_html(item.time)}</span></p> ${html(item.excerpt)}</div> <div class="flex gap-3 pt-5">`;
                  if (String(item.button_textdetail).trim() !== "") {
                    $$payload4.out += "<!--[-->";
                    if (item.button_detail == 1) {
                      $$payload4.out += "<!--[-->";
                      $$payload4.out += `<button class="xl:min-w-48 md:min-w-44 min-w-40 justify-center xl:hidden flex items-center font-manrope text-base md:px-8 md:py-5 px-6 py-4 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">${escape_html(item.button_textdetail)}</button>`;
                    } else {
                      $$payload4.out += "<!--[!-->";
                      $$payload4.out += `<a${attr("href", item.button_descdetail)} class="xl:min-w-48 md:min-w-44 min-w-40 justify-center xl:hidden flex items-center font-manrope text-base md:px-8 md:py-5 px-6 py-4 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">${escape_html(item.button_textdetail)}</a>`;
                    }
                    $$payload4.out += `<!--]-->`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                  }
                  $$payload4.out += `<!--]--> `;
                  if (item.button_book == 1) {
                    $$payload4.out += "<!--[-->";
                    $$payload4.out += `<a${attr("href", item.cta_detail)} class="xl:min-w-48 md:min-w-44 min-w-40 px-8 py-4 md:px-10 md:py-5 text-white md:text-xl text-base bg-gold border text-center uppercase hover:bg-[#827668] transition-all duration-300">${escape_html(item.button_textbutton)}</a>`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                  }
                  $$payload4.out += `<!--]--></div></div>`;
                }
                $$payload4.out += `<!--]-->`;
              },
              $$slots: { default: true }
            });
          },
          $$slots: {
            default: true,
            title: ($$payload3) => {
              $$payload3.out += `<span slot="title" class="uppercase">${escape_html(tab.name)}</span>`;
            }
          }
        });
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></section> <dialog class="modal"><div class="modal-box bg-lightbg !p-0 md:w-10/12 max-w-max rounded-none"><div class="grid xl:grid-cols-2 grid-cols-1 2xl:gap-12 xl:gap-10 gap-8 2xl:py-16 xl:py-14 py-0 pb-10"><div class="h-full w-full relative"><div class="swiper mySwiperExplore xl:rounded-r-3xl rounded-none"><div class="swiper-wrapper">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="swiper-button-next swiper-button-next-explore after:text-white after:text-xl"></div> <div class="swiper-button-prev swiper-button-prev-explore after:text-white after:text-xl"></div></div> <div class="absolute bottom-7 w-full z-10 xl:px-10 px-4"><h3 class="md:pb-7 font-marcel 2xl:text-4xl xl:text-3xl md:text-3xl text-3xl text-white">${escape_html(selectedItem?.name)}</h3></div></div> <div class="flex flex-col gap-4 justify-center px-4 xl:px-0 xl:pr-14 2xl:pr-16 pt-4"><p class="flex flex-wrap font-manrope 2xl:gap-2 gap-2 2xl:text-xl text-base font-light text-gold items-start"><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 2xl:h-6 w-6 h-6" viewBox="0 0 32 33" fill="none"><path d="M16 3.5C13.4288 3.5 10.9154 4.26244 8.77759 5.6909C6.63975 7.11935 4.97351 9.14968 3.98957 11.5251C3.00563 13.9006 2.74819 16.5144 3.2498 19.0362C3.75141 21.5579 4.98953 23.8743 6.80762 25.6924C8.6257 27.5105 10.9421 28.7486 13.4638 29.2502C15.9856 29.7518 18.5995 29.4944 20.9749 28.5104C23.3503 27.5265 25.3807 25.8603 26.8091 23.7224C28.2376 21.5846 29 19.0712 29 16.5C28.9964 13.0533 27.6256 9.74882 25.1884 7.31163C22.7512 4.87445 19.4467 3.50364 16 3.5ZM16 27.5C13.8244 27.5 11.6977 26.8549 9.88873 25.6462C8.07979 24.4375 6.66989 22.7195 5.83733 20.7095C5.00477 18.6995 4.78693 16.4878 5.21137 14.354C5.63581 12.2202 6.68345 10.2602 8.22183 8.72183C9.76021 7.18345 11.7202 6.1358 13.854 5.71136C15.9878 5.28692 18.1995 5.50476 20.2095 6.33733C22.2195 7.16989 23.9375 8.57979 25.1462 10.3887C26.3549 12.1977 27 14.3244 27 16.5C26.9967 19.4164 25.8367 22.2123 23.7745 24.2745C21.7123 26.3367 18.9164 27.4967 16 27.5ZM24 16.5C24 16.7652 23.8946 17.0196 23.7071 17.2071C23.5196 17.3946 23.2652 17.5 23 17.5H16C15.7348 17.5 15.4804 17.3946 15.2929 17.2071C15.1054 17.0196 15 16.7652 15 16.5V9.5C15 9.23478 15.1054 8.98043 15.2929 8.79289C15.4804 8.60536 15.7348 8.5 16 8.5C16.2652 8.5 16.5196 8.60536 16.7071 8.79289C16.8946 8.98043 17 9.23478 17 9.5V15.5H23C23.2652 15.5 23.5196 15.6054 23.7071 15.7929C23.8946 15.9804 24 16.2348 24 16.5Z" fill="#AF9F8D"></path></svg> Opening Hour : <span class="font-manrope text-gold">${escape_html(selectedItem?.time)}</span></p> <div id="desc" class="font-manrope text-secondary w-full overflow-y-auto xl:max-h-[35vh] md:max-h-[28vh] max-h-[20vh] pb-2 2xl:text-xl text-base">${html(selectedItem?.description)}</div> <div class="flex gap-3 justify-center md:justify-end font-manrope">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <form method="dialog"><button class="xl:min-w-48 md:min-w-44 min-w-40 px-8 py-4 md:px-10 md:py-4 text-secondary border-secondary border hover:border-gold hover:bg-gold hover:text-white transition-all duration-300 md:text-xl text-base text-center uppercase">close</button></form></div></div></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog> `;
  Footer($$payload, { info });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CyQR9U3v.js.map
