import { e as ensure_array_like, h as head, a as attr, b as escape_html, s as stringify, c as bind_props, p as pop, d as push } from "../../../../chunks/index.js";
import { F as Footer } from "../../../../chunks/swiper.js";
import { H as Headerdetailoffer } from "../../../../chunks/headerdetailoffer.js";
import { h as html } from "../../../../chunks/html.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let info = data?.info;
  let offers = data?.offers;
  let rooms = data?.accommodation;
  let blog = data?.blog;
  let detailBlog = data?.blogDetail;
  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }).format(date);
  }
  const each_array = ensure_array_like(blog);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(detailBlog.name)} - Lembongan Beach Club and Resort</title>`;
    $$payload2.out += `<meta name="description" content=""> <style>
        /* Standar heading sizes (mobile-first) */
        h1 {
          font-size: 2.5rem !important;  /* 40px */
          line-height: 1.2;
        }

        h2 {
            font-size: 2rem !important;    /* 32px */
            line-height: 1.3;
        }

        h3 {
          font-size: 1.75rem !important; /* 28px */
          line-height: 1.4;
        
          margin: 0 0 1rem;
        }
      
        h4 {
            font-size: 1.5rem !important;  /* 24px */
            line-height: 1.5;
        }
      
        h5 {
            font-size: 1.25rem !important; /* 20px */
            line-height: 1.6;
        }
    
        h6 {
            font-size: 1rem !important;   /* 16px */
            line-height: 1.7;
            letter-spacing: 0.05em;
        }
      
        /* Responsive adjustments (opsional) */
        @media (min-width: 768px) {
          h1 { font-size: 3rem !important; }    /* 48px */
          h2 { font-size: 2.5rem !important; }  /* 40px */
          h3 { font-size: 2rem !important; }    /* 32px */
        }
      </style>`;
  });
  Headerdetailoffer($$payload, { info, offers, rooms });
  $$payload.out += `<!----> <section class="h-full w-full bg-lightbg xl:pt-0 pt-44 px-0"><div class="h-full w-full xl:block hidden"><img${attr("src", detailBlog.featured_images[0]?.path ?? "")} class="h-screen w-full object-cover md:aspect-[16/10] aspect-square" alt="Hero images"></div> <div class="container 2xl:px-28 xl:px-24 md:px-12 relative h-full w-full"><img${attr("src", detailBlog.featured_images[0]?.path ?? "")} class="h-full w-full object-cover md:aspect-[16/10] aspect-square xl:hidden block" alt="Hero images"> <p class="2xl:pt-14 pt-10 text-secondary italic">${escape_html(detailBlog.admin)} - ${escape_html(formatDate(detailBlog.date))}</p> <h1 class="font-marcel 2xl:!text-5xl xl:!text-3xl md:!text-2xl !text-xl text-gold 2xl:pt-8 xl:pt-5 pt-4">${escape_html(detailBlog.name)}</h1> <div id="desc" class="font-manrope text-secondary 2xl:pt-10 xl:pt-8 pt-6">${html(detailBlog.description)}</div></div></section> <section class="h-full w-full bg-lightbg 2xl:py-16 xl:py-14 py-28 2xl:px-28 xl:px-24 px-12"><div class="relative xl:border-none border-t-2 2xl:pt-16 xl:pt-14 pt-10 border-gold border-solid flex flex-col xl:flex-row 2xl:gap-14 xl:gap-12 gap-10"><div class="relative w-full xl:w-3/12 xl:flex xl:flex-col xl:justify-center"><div class="absolute top-0 inset-x-0"><div class="items-center 2xl:gap-8 xl:gap-6 gap-4 !w-auto relative justify-center xl:flex hidden"><span class="swiper-button-prev-blogdetail !m-0 !left-0 !right-0 2xl:!w-22 xl:!h-16 xl:!w-16 md:!h-16 md:!w-16 !h-14 !w-14 !relative cursor-pointer after:!content-none group"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" viewBox="0 0 90 90" fill="none"><rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="#AF9F8D" stroke-width="1.5"></rect><path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="#AF9F8D" stroke-width="1.5"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" viewBox="0 0 90 90" fill="none"><rect width="90" height="90" rx="45" fill="#AF9F8D"></rect><path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="white" stroke-width="1.5"></path></svg></span> <span class="swiper-button-next-blogdetail !m-0 !left-0 !right-0 2xl:!h-22 2xl:!w-22 xl:!h-16 xl:!w-16 md:!h-16 md:!w-16 !h-14 !w-14 !relative cursor-pointer after:!content-none group"><svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" viewBox="0 0 90 90" fill="none"><rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="#AF9F8D" stroke-width="1.5"></rect><path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="#AF9F8D" stroke-width="1.5"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" viewBox="0 0 90 90" fill="none"><rect width="90" height="90" rx="45" fill="#AF9F8D"></rect><path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="white" stroke-width="1.5"></path></svg></span></div></div> <p class="text-gold font-marcel text-center 2xl:text-4xl xl:text-4xl text-3xl italic">Other Blog</p></div> <div class="relative h-full w-full xl:w-9/12"><div class="swiper myBlogdetailSwiper"><div class="swiper-wrapper"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    if (item?.slug == detailBlog.slug) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="hidden"></span>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="swiper-slide"><div class="grid grid-rows 2xl:gap-8 xl:gap-6 gap-4 h-full w-full"><img${attr("src", item.featured_images[0].path)} class="aspect-[9/11] object-cover object-center" alt=""> <ul class="flex flex-col 2xl:gap-4 xl:gap-3 gap-3"><li class="text-gold font-marcel 2xl:text-2xl xl:text-xl text-xl md:line-clamp-2">${escape_html(item.name)}</li></ul> <div class="flex 2xl:gap-4 xl:gap-3 gap-2"><a data-sveltekit-reload=""${attr("href", `/blog/${stringify(item.slug)}`)} class="w-max flex items-center font-manrope text-base pb-1 capitalize text-gold border-gold border-b border-solid hover:text-secondary hover:border-secondary transition-all duration-300">read more</a></div></div></div>`;
    }
    $$payload.out += `<!--]-->`;
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
