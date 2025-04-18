import { x as push, Z as ensure_array_like, T as head, W as attr, a0 as attr_class, X as escape_html, _ as stringify, $ as bind_props, z as pop } from './exports-Bh0mkxnv.js';
import { F as Footer } from './swiper-BWfGbDCc.js';
import { H as Header } from './header-HT97qdu5.js';
import 'aos';
import 'swiper';
import 'swiper/modules';
import './stores-DRbwYPTU.js';
import './client-DJ2aW1Ds.js';

function _page($$payload, $$props) {
  push();
  let galleryWithMedia;
  let data = $$props["data"];
  let info = data?.info;
  let offers = data?.offers;
  let rooms = data?.accommodation;
  let seo = data?.seo;
  let gallery = data?.gallery ?? [];
  let activeFilter = "*";
  function isYoutubeShorts(url) {
    return /youtube\.com\/shorts\//.test(url);
  }
  function extractYoutubeId(url) {
    const youtubeRegularRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const youtubeShortsRegex = /(?:youtube\.com\/shorts\/|youtu\.be\/)([^"&?\/\s]{11})/;
    const matchRegular = url.match(youtubeRegularRegex);
    const matchShorts = url.match(youtubeShortsRegex);
    if (matchShorts) {
      return matchShorts[1];
    } else if (matchRegular) {
      return matchRegular[1];
    }
    return "";
  }
  function getYoutubeEmbedUrl(url) {
    const id = extractYoutubeId(url);
    if (id) {
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&cc_load_policy=0&hl=en`;
    }
    return "";
  }
  galleryWithMedia = gallery.map((item) => {
    const images = item.featured_images?.map((image) => ({ path: image.path, type: "image" })) ?? [];
    const videos = item.video_link?.map((video) => ({ path: video.url, type: "video" })) ?? [];
    return {
      ...item,
      featured_media: [...images, ...videos]
    };
  });
  const each_array = ensure_array_like(gallery);
  const each_array_1 = ensure_array_like(galleryWithMedia);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(seo[0].title.galtit)}</title>`;
    $$payload2.out += `<meta name="title"${attr("content", seo[0].meta_title.galmettit)}> <meta name="description"${attr("content", seo[0].description.galdesc)}> <meta name="keywords"${attr("content", seo[0].keywords.galkey)}> <meta property="og:site_name"${attr("content", info[0].name)}> <meta property="og:title"${attr("content", seo[0].og_title.galogtit)}> <meta name="og:description"${attr("content", seo[0].og_description.galogdesc)}> <meta property="og:image"${attr("content", seo[0].images_gallery[0]?.path ?? "")}> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${attr("content", seo[0].twitter_title.galtwittit)}> <meta name="twitter:description"${attr("content", seo[0].twitter_description.galtwitdesc)}> <meta name="twitter:image"${attr("content", seo[0].images_gallery[0]?.path ?? "")}>`;
  });
  Header($$payload, { info, offers, rooms });
  $$payload.out += `<!----> <section class="w-full h-screen relative bg-slate-40"><div class="absolute left-16 inset-0 right-16 flex flex-col text-white text-start justify-center items-center z-10" data-aos="fade-up"><div class="flex flex-col w-full items-center"><h1 class="font-marcel 2xl:text-7xl xl:text-5xl sm:text-4xl text-3xl font-normal text-center" data-aos="fade-up">Gallery</h1></div></div> <div class="relative h-full w-full"><img${attr("src", info[0].hero_images[5]?.path ?? "")} class="h-full w-full object-cover" alt="Hero images"> <div class="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900 to-transparent opacity-50"></div></div></section> <section class="bg-lightbg"><div class="container 2xl:px-14 md:px-10 px-0 2xl:py-36 md:py-32 py-20"><div class="relative 2xl:pb-16 xl:pb-14 pb-10 px-8 container flex flex-col 2xl:gap-10 xl:gap-8 gap-6 items-center justify-center"><div class="text-gold"><p class="font-marcel 2xl:text-5xl xl:text-4xl text-3xl flex flex-col items-center 2xl:gap-6 gap-4">Images Gallery <span class="w-1/2 bg-[#CFC9B9] h-1"></span></p></div> <div class="flex flex-wrap 2xl:gap-3 gap-2 w-full h-full justify-center"><button${attr_class("2xl:py-4 xl:py-3 2xl:px-8 xl:px-6 px-4 py-2 text-gold bg-[#F6F3EB] rounded-xl font-manrope 2xl:text-2xl xl:text-xl md:text-base text-sm capitalize max-w-max", void 0, {
    "!bg-[#AF9F8D]": activeFilter === "*",
    "text-white": activeFilter === "*"
  })}>all images</button> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<button${attr_class("2xl:py-4 xl:py-3 2xl:px-8 xl:px-6 px-4 py-2 text-gold bg-[#F6F3EB] rounded-xl font-manrope 2xl:text-2xl xl:text-xl md:text-base text-sm capitalize max-w-max", void 0, {
      "!bg-[#AF9F8D]": activeFilter === item.slug,
      "text-white": activeFilter === item.slug
    })}>${escape_html(item.name)}</button>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="relative container"><div id="gallery" class="my-8"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
    let item = each_array_1[$$index_2];
    const each_array_2 = ensure_array_like(item.featured_media);
    $$payload.out += `<!--[-->`;
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let media = each_array_2[$$index_1];
      $$payload.out += `<div${attr_class(`gallery-item ${stringify(item.slug)} lg:w-1/3 w-1/2 p-1`)}><a${attr("href", media.type === "video" && media.path.includes("youtu") ? getYoutubeEmbedUrl(media.path) : media.path)} data-fancybox="gallery"${attr("data-type", media.type === "video" ? "video" : void 0)}>`;
      if (media.type === "video" && media.path.includes("youtu")) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div${attr_class(`overflow-hidden w-full ${isYoutubeShorts(media.path) ? "aspect-[9/16]" : "aspect-video"} pointer-events-none`)}><iframe${attr("src", getYoutubeEmbedUrl(media.path))}${attr("title", `Video preview of ${item.name}`)} frameborder="0" allow="autoplay; encrypted-media; loop;" allowfullscreen class="w-full h-full"></iframe></div>`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<img${attr("src", media.path)}${attr("alt", item.name)} class="w-full h-auto object-cover">`;
      }
      $$payload.out += `<!--]--></a></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div></div></section> `;
  Footer($$payload, { info });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-KGuWiHF0.js.map
