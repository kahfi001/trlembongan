<script lang="ts">
    import type { PageServerData } from "./$types";
	import Footer from "$lib/components/footer.svelte";
	import Header from "$lib/components/header.svelte";
	import { onMount } from "svelte";
	import 'aos/dist/aos.css';

	// @ts-ignore
	import AOS from 'aos';
	import { nonpassive } from "svelte/legacy";

    export let data: PageServerData;

	// Tipe untuk item blog
	interface BlogItem {
		id: number;
		name: string;
		slug: string;
		published: number;
		order_number: number;
		excerpt: string;
		description: string;
		type: string;
		date?: string;
		admin?: string;
		featured_images: { path: string }[];
	}


	let info = data?.info;
	let offers = data?.offers;
	let rooms = data?.accommodation;
	let seo = data?.seo;
    // let blog = data?.blog;
	let blog: BlogItem[] = data?.blog || [];
	let selectedCategory = 'all category';
	let currentPage = 1;
	
	// Ambil semua type unik untuk dropdown
	const categories = ['all category', ...Array.from(new Set(blog.map((item: BlogItem) => item.type)))];

	 // Fungsi native JS untuk format tanggal
	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return new Intl.DateTimeFormat('id-ID', {
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		}).format(date);
	}

	// Filter berdasarkan kategori
	$: filteredBlog = selectedCategory === 'all category' ? blog : blog.filter((item: BlogItem) => item.type === selectedCategory);

	// Hitung items per page dinamis
	$: itemsPerPage = filteredBlog.length > 6 ? 6 : filteredBlog.length;

	// Hitung total halaman
	$: totalPages = Math.ceil(filteredBlog.length / itemsPerPage);

	// Ambil blog yang akan ditampilkan di halaman saat ini
	$: paginatedBlog = filteredBlog.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	onMount(() => {
		AOS.init({
			duration: 2000,
		});
	});

</script>

<svelte:head>
	<title>{seo[0].title.blogtit}</title>

	<!-- Meta -->
	<meta name="title" content="{seo[0].meta_title.blogmettit}" />
	<meta name="description" content="{seo[0].description.blogmetdesc}" />
	<meta name="keywords" content="{seo[0].keywords.blogkey}">

	<!-- Open Graph / Facebook -->
    <meta property="og:site_name" content="{info[0].name}">
	<meta property="og:title" content="{seo[0].og_title.blogogtit}">
	<meta name="og:description" content="{seo[0].og_description.blogogdesc}">
    <meta property="og:image" content="{seo[0].images_blog[0]?.path ?? ''}" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{seo[0].twitter_title.blogtwittit}" />
	<meta name="twitter:description" content="{seo[0].twitter_description.blogtwitdesc}" />
	<meta name="twitter:image" content="{seo[0].images_blog[0]?.path ?? ''}" />

	<style>
		.btn-active{
			background-color: #d5cdc8 !important;
			/* bg-shadow-30 */
			--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
			--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
			box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

			/* shadow-sm */
			--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
			--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
			box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
		}
		
		
	</style>
</svelte:head>

<Header {info}{offers}{rooms} />

<section class="w-full h-screen relative bg-slate-40">
	<div class="absolute left-16 inset-0 right-16 flex flex-col text-white text-start justify-center items-center z-10" data-aos="fade-up">
		<div class="flex flex-col w-full items-center">
			<h1 class="font-marcel 2xl:text-7xl xl:text-5xl sm:text-4xl text-3xl font-normal text-center" data-aos="fade-up">Blog</h1>
		</div>
	</div>

	<div class="relative h-full w-full">
		<img src="{info[0].hero_images[7]?.path ?? ''}" class="h-full w-full object-cover" alt="Hero images">
		<div class="absolute inset-0 w-full h-full bg-gradient-to-b  from-slate-900  to-transparent opacity-50 "></div>
	</div>
</section>

<!-- <section class="relative w-full h-full bg-lightbg">
	<div class="xl:px-48 xl:py-30 md:px-16 md:py-20  px-8 py-20 flex flex-col 2xl:gap-14 xl:gap-12 container">
		<p class="font-manrope text-secondary text-center font-light 2xl:text-2xl xl:text-xl text-xl xl:leading-10 leading-normal">
			Discover the beauty of Nusa Lembongan with our blog. Stay updated on the island's top destinations, exciting events, and exclusive experiences at Lembongan Beach Club & Resort.
		</p>
	</div>
</section> -->


<section class="h-full w-full md:pb-36 py-20  2xl:px-28 xl:px-24 md:px-16 px-8 bg-lightbg flex flex-col justify-center">
	
	<div class="flex flex-col gap-5 justify-center items-center pb-20">
		<p class="font-marcel text-secondary text-center font-semibold 2xl:text-3xl xl:text-2xl text-xl capitalize italic">blog</p>

		<details class="dropdown dropdown-end">
			<summary class="flex items-center gap-2 font-marcel xl:text-xl text-base italic text-secondary cursor-pointer capitalize">
				{selectedCategory}
				<svg xmlns="http://www.w3.org/2000/svg"
				class="xl:w-5 xl:h-5 w-4 h-4 transition-transform duration-300"
				fill="#3b3422" viewBox="0 0 256 256">
				<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/>
				</svg>
			</summary>

			<ul class="dropdown-content bg-stone-100 menu rounded-box z-50 w-52 p-2 shadow-sm">
				{#each categories as category}
					<li>
						<button
							on:click={() => {
								selectedCategory = category;
								currentPage = 1;
								const el = document.querySelector('details.dropdown');
								el?.removeAttribute('open');
							}}
							class="hover:text-gold  active:!bg-stone-300 active:!text-black hover:bg-stone-200 transition-all duration-300 text-secondary xl:text-xl text-base font-manrope capitalize text-center w-full"
						>
							{category}
						</button>
						</li>
				{/each}
			</ul>
		</details>
	</div>

    <div class="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 2xl:gap-y-20 md:gap-y-16 gap-y-20 2xl:gap-x-8 xl:gap-x-6 md:gap-x-6 ">
		{#each paginatedBlog as item (item.id)}
		<div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-6">
			<div class="flex flex-col gap-2">
				<p class="font-manrope px-4 py-1 bg-gold text-secondary max-w-max font-semibold capitalize">{item.type}</p>
				<img src="{item.featured_images[0].path}" alt="{item.name} images" class="object-cover aspect-[16/11]" />
			</div>
			<ul class="flex flex-col 2xl:gap-4 xl:gap-3 gap-3">
				<li class="font-marcel text-gold 2xl:text-3xl xl:text-2xl text-2xl md:line-clamp-2 min-h-16">{item.name}</li>
				{#if item.date}
					<li class="font-manrope text-secondary font-medium 2xl:text-base xl:text-sm text-base italic">{item.admin} - {formatDate(item.date)}</li>
				{/if}
				<li class="font-manrope text-secondary font-light 2xl:text-xl xl:text-base text-base line-clamp-4">{item.excerpt}</li>
			</ul>
			<a data-sveltekit-reload href="/blog/{item.slug}" class="w-max flex items-center font-manrope text-base pb-1 capitalize text-gold border-gold border-b	border-solid hover:text-secondary hover:border-secondary transition-all duration-300">
				read more
			</a>
		</div>
		{/each}
    </div>

	<!-- Pagination -->
	{#if totalPages > 1}
		<div class="flex justify-center flex-col items-center gap-2 pt-10 text-secondary">
			<p class="text-sm font-manrope">
				Showing Page {currentPage} of {totalPages}
			</p>

			<div class="join rounded-lg">
				<!-- Tombol Previous -->
				<button
					class="join-item btn bg-[#d5cdc838] text-secondary !border-[0.20px] !border-lightbg disabled:!bg-[#d5cdc8] disabled:!shadow-sm disabled:!shadow-black/30 active:shadow-none shadow-sm !shadow-black/30"
					on:click={() => currentPage = Math.max(1, currentPage - 1)}
					disabled={currentPage === 1}
				>
					«
				</button>

				<!-- Tombol Halaman Maksimal 5 -->
				{#each Array(Math.min(5, totalPages)) as _, i}
					{@const start = Math.max(1, Math.min(currentPage - 2, totalPages - 4))}
					{@const pageNumber = start + i}

					{#if pageNumber <= totalPages}
						<button
							class="join-item btn bg-[#d5cdc838] text-secondary border-[0.20px] border-lightbg disabled:!bg-[#d5cdc8] shadow-sm !shadow-black/30 {currentPage === pageNumber ? 'btn-active' : ''}"
							on:click={() => currentPage = pageNumber}
						>
							{pageNumber}
						</button>
					{/if}
				{/each}

				<!-- Tombol Next -->
				<button
					class="join-item btn bg-[#d5cdc838] text-secondary !border-[0.20px] !border-lightbg disabled:!bg-[#d5cdc8] disabled:!shadow-sm disabled:!shadow-black/30 active:shadow-none shadow-sm !shadow-black/30"
					on:click={() => currentPage = Math.min(totalPages, currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					»
				</button>
			</div>
		</div>
	{/if}



</section>

<Footer {info}/>

