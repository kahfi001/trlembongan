import { x as push, Z as ensure_array_like, T as head, W as attr, X as escape_html, _ as stringify, a0 as attr_class, $ as bind_props, z as pop } from './exports-Bh0mkxnv.js';
import { F as Footer } from './swiper-BWfGbDCc.js';
import { H as Header } from './header-HT97qdu5.js';
import 'aos';
import 'swiper';
import 'swiper/modules';
import './stores-DRbwYPTU.js';
import './client-DJ2aW1Ds.js';

function _page($$payload, $$props) {
  push();
  let filteredBlog, itemsPerPage, totalPages, paginatedBlog;
  let data = $$props["data"];
  let info = data?.info;
  let offers = data?.offers;
  let rooms = data?.accommodation;
  let seo = data?.seo;
  let blog = data?.blog || [];
  let selectedCategory = "all category";
  let currentPage = 1;
  const categories = [
    "all category",
    ...Array.from(new Set(blog.map((item) => item.type)))
  ];
  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }).format(date);
  }
  filteredBlog = blog;
  itemsPerPage = filteredBlog.length > 6 ? 6 : filteredBlog.length;
  totalPages = Math.ceil(filteredBlog.length / itemsPerPage);
  paginatedBlog = filteredBlog.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const each_array = ensure_array_like(categories);
  const each_array_1 = ensure_array_like(paginatedBlog);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(seo[0].title.blogtit)}</title>`;
    $$payload2.out += `<meta name="title"${attr("content", seo[0].meta_title.blogmettit)}> <meta name="description"${attr("content", seo[0].description.blogmetdesc)}> <meta name="keywords"${attr("content", seo[0].keywords.blogkey)}> <meta property="og:site_name"${attr("content", info[0].name)}> <meta property="og:title"${attr("content", seo[0].og_title.blogogtit)}> <meta name="og:description"${attr("content", seo[0].og_description.blogogdesc)}> <meta property="og:image"${attr("content", seo[0].images_blog[0]?.path ?? "")}> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${attr("content", seo[0].twitter_title.blogtwittit)}> <meta name="twitter:description"${attr("content", seo[0].twitter_description.blogtwitdesc)}> <meta name="twitter:image"${attr("content", seo[0].images_blog[0]?.path ?? "")}> <style>
		.btn-active{
			background-color: #d5cdc8;
			/* bg-shadow-30 */

			/* shadow-sm */
			--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
			--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
			box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
		}
		
		
	</style>`;
  });
  Header($$payload, { info, offers, rooms });
  $$payload.out += `<!----> <section class="w-full h-screen relative bg-slate-40"><div class="absolute left-16 inset-0 right-16 flex flex-col text-white text-start justify-center items-center z-10" data-aos="fade-up"><div class="flex flex-col w-full items-center"><h1 class="font-marcel 2xl:text-7xl xl:text-5xl sm:text-4xl text-3xl font-normal text-center" data-aos="fade-up">Blog</h1></div></div> <div class="relative h-full w-full"><img${attr("src", info[0].hero_images[7]?.path ?? "")} class="h-full w-full object-cover" alt="Hero images"> <div class="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900 to-transparent opacity-50"></div></div></section> <section class="h-full w-full md:pb-36 py-20 2xl:px-28 xl:px-24 md:px-16 px-8 bg-lightbg flex flex-col justify-center"><div class="flex flex-col gap-5 justify-center items-center pb-20"><p class="font-marcel text-secondary text-center font-semibold 2xl:text-3xl xl:text-2xl text-xl capitalize italic">blog</p> <details class="dropdown dropdown-end"><summary class="flex items-center gap-2 font-marcel xl:text-xl text-base italic text-secondary cursor-pointer capitalize">${escape_html(selectedCategory)} <svg xmlns="http://www.w3.org/2000/svg" class="xl:w-5 xl:h-5 w-4 h-4 transition-transform duration-300" fill="#3b3422" viewBox="0 0 256 256"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path></svg></summary> <ul class="dropdown-content bg-stone-100 menu rounded-box z-50 w-52 p-2 shadow-sm"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    $$payload.out += `<li><button class="hover:text-gold active:!bg-stone-300 active:!text-black hover:bg-stone-200 transition-all duration-300 text-secondary xl:text-xl text-base font-manrope capitalize text-center w-full">${escape_html(category)}</button></li>`;
  }
  $$payload.out += `<!--]--></ul></details></div> <div class="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 2xl:gap-y-20 md:gap-y-16 gap-y-20 2xl:gap-x-8 xl:gap-x-6 md:gap-x-6"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let item = each_array_1[$$index_1];
    $$payload.out += `<div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-6"><div class="flex flex-col gap-2"><p class="font-manrope px-4 py-1 bg-gold text-secondary max-w-max font-semibold capitalize">${escape_html(item.type)}</p> <img${attr("src", item.featured_images[0].path)}${attr("alt", `${stringify(item.name)} images`)} class="object-cover aspect-[16/11]"></div> <ul class="flex flex-col 2xl:gap-4 xl:gap-3 gap-3"><li class="font-marcel text-gold 2xl:text-3xl xl:text-2xl text-2xl md:line-clamp-2 min-h-16">${escape_html(item.name)}</li> `;
    if (item.date) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<li class="font-manrope text-secondary font-medium 2xl:text-base xl:text-sm text-base italic">${escape_html(item.admin)} - ${escape_html(formatDate(item.date))}</li>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <li class="font-manrope text-secondary font-light 2xl:text-xl xl:text-base text-base line-clamp-4">${escape_html(item.excerpt)}</li></ul> <a data-sveltekit-reload=""${attr("href", `/blog/${stringify(item.slug)}`)} class="w-max flex items-center font-manrope text-base pb-1 capitalize text-gold border-gold border-b border-solid hover:text-secondary hover:border-secondary transition-all duration-300">read more</a></div>`;
  }
  $$payload.out += `<!--]--></div> `;
  if (totalPages > 1) {
    $$payload.out += "<!--[-->";
    const each_array_2 = ensure_array_like(Array(Math.min(5, totalPages)));
    $$payload.out += `<div class="flex justify-center flex-col items-center gap-2 pt-10 text-secondary"><p class="text-sm font-manrope">Showing Page ${escape_html(currentPage)} of ${escape_html(totalPages)}</p> <div class="join rounded-lg"><button class="join-item btn bg-[#d5cdc838] text-secondary !border-[0.20px] !border-lightbg disabled:!bg-[#d5cdc8] disabled:!shadow-sm disabled:!shadow-black/30 active:shadow-none shadow-sm !shadow-black/30"${attr("disabled", currentPage === 1, true)}>«</button> <!--[-->`;
    for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
      each_array_2[i];
      const start = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
      const pageNumber = start + i;
      if (pageNumber <= totalPages) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<button${attr_class(`join-item btn bg-[#d5cdc838] text-secondary border-[0.20px] border-lightbg disabled:!bg-[#d5cdc8] shadow-sm !shadow-black/30 ${stringify(currentPage === pageNumber ? "btn-active" : "")}`)}>${escape_html(pageNumber)}</button>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--> <button class="join-item btn bg-[#d5cdc838] text-secondary !border-[0.20px] !border-lightbg disabled:!bg-[#d5cdc8] disabled:!shadow-sm disabled:!shadow-black/30 active:shadow-none shadow-sm !shadow-black/30"${attr("disabled", currentPage === totalPages, true)}>»</button></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section> `;
  Footer($$payload, { info });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CUvxdT0-.js.map
