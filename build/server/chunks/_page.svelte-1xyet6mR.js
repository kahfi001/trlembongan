import { x as push, T as head, W as attr, $ as bind_props, z as pop, X as escape_html, Z as ensure_array_like, _ as stringify } from './exports-Bh0mkxnv.js';
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
  let offers = data?.offers;
  let rooms = data?.accommodation;
  let seo = data?.seo;
  const filterOffers = (type, category) => {
    return offers.filter((item) => item.type === type && item.category_type === category);
  };
  const offerTabs = [
    {
      name: "Lembongan Offers",
      dataKey: "lembonganoffers"
    },
    {
      name: "TRM Brand Offers",
      dataKey: "trmoffers"
    }
  ];
  const offerCategories = [
    "accommodation",
    "dining",
    "spa",
    "activities"
  ];
  let activeTab = "lembonganoffers";
  let activeCategory = "accommodation";
  const filteredOffers = {
    lembonganoffers: {
      accommodation: filterOffers("lembonganoffers", "accommodation"),
      dining: filterOffers("lembonganoffers", "dining"),
      spa: filterOffers("lembonganoffers", "spa"),
      activities: filterOffers("lembonganoffers", "activities")
    },
    trmoffers: {
      accommodation: filterOffers("trmoffers", "accommodation"),
      dining: filterOffers("trmoffers", "dining"),
      spa: filterOffers("trmoffers", "spa"),
      activities: filterOffers("trmoffers", "activities")
    }
  };
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(seo[0].title.offerstit)}</title>`;
    $$payload2.out += `<meta name="title"${attr("content", seo[0].meta_title.offersmettit)}> <meta name="description"${attr("content", seo[0].description.offersmetdesc)}> <meta name="keywords"${attr("content", seo[0].keywords.offerskey)}> <meta property="og:site_name"${attr("content", info[0].name)}> <meta property="og:title"${attr("content", seo[0].og_title.offersogtit)}> <meta name="og:description"${attr("content", seo[0].og_description.offersogdesc)}> <meta property="og:image"${attr("content", seo[0].images_offers[0]?.path ?? "")}> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${attr("content", seo[0].twitter_title.offerstwittit)}> <meta name="twitter:description"${attr("content", seo[0].twitter_description.offerstwitdesc)}> <meta name="twitter:image"${attr("content", seo[0].images_offers[0]?.path ?? "")}>`;
  });
  Header($$payload, { info, offers, rooms });
  $$payload.out += `<!----> <section class="w-full h-screen relative bg-slate-40"><div class="relative h-full w-full"><img${attr("src", info[0].hero_images[2]?.path ?? "")} class="h-full w-full object-cover" alt="Hero images"> <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-transparent opacity-50"></div> <div class="absolute inset-0 text-white font-marcel 2xl:text-7xl xl:text-6xl md:text-5xl text-4xl flex justify-center items-center w-full h-full"><h1 class="flex" data-aos="fade-up">Special Offers</h1></div></div></section> <section class="w-full h-full relative 2xl:py-36 xl:py-32 py-20 2xl:px-24 xl:px-20 px-8 bg-lightbg">`;
  Tabs($$payload, {
    contentClass: "bg-lightbg ",
    tabStyle: "pill",
    defaultClass: "flex justify-center items-center bg-lightbg ",
    children: ($$payload2) => {
      const each_array = ensure_array_like(offerTabs);
      $$payload2.out += `<!--[-->`;
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let tab = each_array[index];
        TabItem($$payload2, {
          open: tab.dataKey == activeTab,
          activeClasses: "2xl:px-12 xl:px-0 px-2 2xl:py-6 xl:py-4 py-4 2xl:text-3xl xl:text-2xl text-base 2xl:border-b-4 xl:border-b-2 border-b-2 border-secondary border-solid text-secondary font-manrope",
          inactiveClasses: "2xl:px-12 xl:px-10 px-2 2xl:py-6 xl:py-4 py-4 2xl:text-3xl xl:text-2xl text-base text-gold font-manrope",
          children: ($$payload3) => {
            Tabs($$payload3, {
              contentClass: "bg-lightbg 2xl:pt-12 xl:pt-10 pt-16",
              tabStyle: "pill",
              defaultClass: "flex flex-wrap w-full items-center place-content-center place-items-center justify-center bg-lightbg 2xl:pt-28 xl:pt-24 pt-12",
              children: ($$payload4) => {
                const each_array_1 = ensure_array_like(offerCategories);
                $$payload4.out += `<!--[-->`;
                for (let $$index_1 = 0, $$length2 = each_array_1.length; $$index_1 < $$length2; $$index_1++) {
                  let category = each_array_1[$$index_1];
                  TabItem($$payload4, {
                    open: category === activeCategory,
                    activeClasses: "capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl bg-gold text-white",
                    inactiveClasses: "capitalize 2xl:px-10 xl:px-8 2xl: px-6 py-5 xl:py-3 font py-3 font-manrope 2xl:text-2xl xl:text-xl text text-base text-gold",
                    children: ($$payload5) => {
                      $$payload5.out += `<div class="grid md:grid-cols-2 grid-cols-1 2xl:gap-x-20 xl:gap-x-16 2xl:gap-y-28 xl:gap-y-24 md:gap-x-16 gap-y-16">`;
                      if (filteredOffers[tab.dataKey][category] && filteredOffers[tab.dataKey][category].length > 0) {
                        $$payload5.out += "<!--[-->";
                        const each_array_2 = ensure_array_like(filteredOffers[tab.dataKey][category]);
                        $$payload5.out += `<!--[-->`;
                        for (let $$index = 0, $$length3 = each_array_2.length; $$index < $$length3; $$index++) {
                          let item = each_array_2[$$index];
                          $$payload5.out += `<div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-6"><img${attr("src", item.featured_images[1]?.path || item.featured_images[0]?.path || "")} class="aspect-[16/11] w-full h-full object-cover rounded-2xl object-center" alt="offers"> <ul class="flex flex-col 2xl:gap-3 xl:gap-2 gap-4"><li class="font-marcel text-gold 2xl:text-4xl xl:text-3xl text-3xl xl:min-h-16 min-h-12 md:line-clamp-2">${escape_html(item.name)}</li> <li class="font-manrope text-secondary 2xl:text-xl xl:text-base text-base leading-7 xl:min-h-14 min-h-12 md:line-clamp-2">${html(item.excerpt)}</li> <li class="font-manrope text-secondary font-semibold 2xl:text-xl xl:text-base text-base leading-7">${escape_html(item.price)}</li></ul> <div class="flex 2xl:gap-4 xl:gap-3 gap-3"><a${attr("href", `/special-offer/${stringify(item.slug)}`)} class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">view detail</a> <a${attr("href", item.book_url)} class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">book now</a></div></div>`;
                        }
                        $$payload5.out += `<!--]-->`;
                      } else {
                        $$payload5.out += "<!--[!-->";
                        $$payload5.out += `<div class="col-span-2 font-manrope text-center text-secondary">No Offers Available</div>`;
                      }
                      $$payload5.out += `<!--]--></div>`;
                    },
                    $$slots: {
                      default: true,
                      title: ($$payload5) => {
                        $$payload5.out += `<span slot="title">${escape_html(category)}</span>`;
                      }
                    }
                  });
                }
                $$payload4.out += `<!--]-->`;
              },
              $$slots: { default: true }
            });
          },
          $$slots: {
            default: true,
            title: ($$payload3) => {
              $$payload3.out += `<span slot="title">${escape_html(tab.name)}</span>`;
            }
          }
        });
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></section> `;
  Footer($$payload, { info });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-1xyet6mR.js.map
