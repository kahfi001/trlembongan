<script lang="ts">
	import type { PageServerData } from "./$types";
	import Footer from "$lib/components/footer.svelte";
	import Header from "$lib/components/header.svelte";
	import { initSwiper } from "$lib/js/swiper";
	import { onMount } from "svelte";
	// import 'aos/dist/aos.css';
	// @ts-ignore
	// import AOS from 'aos';
	import Popup from "$lib/components/popup.svelte";
	import { TimelineItem } from "flowbite-svelte";


    export let data: PageServerData;
	
	let popup = data?.popup;
	let info = data?.info;
	let rooms = data?.accommodation;
	let offers = data?.offers;
	let explore = data?.explore;
	let seo = data?.seo;
	let pagehome = data?.pagehome;

	onMount(() => {

		initSwiper();
		
		// AOS.init({
		// 	duration: 1000,
		// });

	});

</script>

<svelte:head>
	<title>{seo[0].title.hometitle}</title>

	<!-- Meta -->
	<meta name="title" content="{seo[0].meta_title.homemettit}" />
	<meta name="description" content="{seo[0].description.homedesc}" />
	<meta name="keywords" content="{seo[0].keywords.homekey}">

	<!-- Open Graph / Facebook -->
    <meta property="og:site_name" content="{info[0].name}">
	<meta property="og:title" content="{seo[0].og_title.homeogtit}">
	<meta name="og:description" content="{seo[0].og_description.homeogdesc}">
    <meta property="og:image" content="{seo[0].images_home[0]?.path ?? ''}" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{seo[0].twitter_title.hometwittit}" />
	<meta name="twitter:description" content="{seo[0].twitter_description.hometwitdesc}" />
	<meta name="twitter:image" content="{seo[0].images_home[0]?.path ?? ''}" />

	<link rel="preload" href="/fonts/Cormorant_Garamond/CormorantGaramond-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
</svelte:head>

<Popup {popup}/>
<Header {info} {offers }{rooms}/>

<section class="w-full h-screen relative bg-slate-40">
	<!-- <div class="absolute lg:inset-0 bottom-64 flex flex-col text-white text-start justify-center items-center z-10" >
		<div class="flex flex-col w-full gap-2 md:px-16 px-8 pt-24">
			<h1 class="font-marcel 2xl:text-7xl xl:text-5xl md:text-4xl text-3xl font-normal lg:w-full w-4/5" data-aos="fade-right">Welcome to Lembongan Beach Club and Resort</h1>
			<h2 class="font-manrope 2xl:text-6xl xl:text-4xl md:text-2xl text-base xl:pl-60 lg:pl-40 pl-0 font-light lg:w-full w-4/6" data-aos="fade-left">Indulge in Luxury at Lembongan’s Finest Beachfront Retreat.</h2>
		</div>
	</div> -->

	<!-- <div class="relative h-full w-full">
		<img src="{info[0].hero_images[0].path}" class="h-full w-full object-cover" alt="Lembongan Beach Beach Club & Resort Offers Hero images">
		<div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b  from-slate-900  to-transparent opacity-50 "></div>
	</div> -->
	<div class="relative h-full w-full">
		<video
			autoplay
			muted
			loop
			playsinline
			class="w-full h-full object-cover"
			poster="{info[0].hero_images[0]?.path ?? ''}"
			>
		<source src="/video/hero-kompres-final.webm" type="video/webm" />
		Sorry, your browser doesn't support video playback. Please try updating your browser.
	</video>
	<div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-transparent opacity-50"></div>
	</div>
</section>	

<section class="relative w-full h-full bg-lightbg">
	<div class="lg:px-28 lg:py-16 md:py-14 md:px-8 py-16 px-7 flex flex-col 2xl:gap-10 xl:gap-10 md:gap-8 gap-6 container">
		<p class="font-marcel text-center text-gold 2xl:text-7xl xl:text-5xl sm:text-4xl text-3xl italic">
			{@html pagehome[0].title.section1}
		</p>
		<div class="flex gap-3 justify-center align-middle items-center ">
			<svg xmlns="http://www.w3.org/2000/svg" class="lg:w-28 lg:h-1 md:w-20 md:h-1 w-14 h-[3px]"	 viewBox="0 0 120 3" fill="none">
				<path d="M0 1.20001H120" stroke="#AF9F8D" stroke-width="2"/>
			</svg>
			<!-- <img src="/images/logo-line.webp" class="2xl:w-8 2xl:h-8 md:w-6 md:h-6 h-4 w-4 object-cover object-center" alt="logo trm lembongan"> -->
			<span class="md:p-2 p-1 md:border-[3px] border rotate-45 border-solid border-[#AF9F8D]"></span>
			<svg xmlns="http://www.w3.org/2000/svg" class="lg:w-28 lg:h-1 md:w-20 md:h-1 w-14 h-[3px]" viewBox="0 0 120 3" fill="none">
				<path d="M0 1.20001H120" stroke="#AF9F8D" stroke-width="2"/>
			</svg>
		</div>
		<p class="font-manrope text-secondary text-center font-light 2xl:text-2xl xl:text-xl">
			{@html pagehome[0].wording.section1}
		</p>
	</div>
</section>

<section class="bg-lightbg xl:py-20 2xl:pl-20 xl:pl-16 py-0 pl-8 md:pr-0 pr-8 h-full w-full relative"> 
	<div class="grid md:grid-cols-4 grid-cols-1 gap-12">

		<div class="col-span-1 flex flex-col">
			<p class="font-marcel text-gold 2xl:text-6xl xl:text-5xl text-4xl 2xl:leading-[4rem] xl:leading-[3.5rem] 2xl:mb-6 xl:mb-4 mb-4">{@html pagehome[0].title.section2}</p>
			<p class="font-manrope text-secondary 2xl:text-2xl xl:text-xl font-light 2xl:leading-10 xl:leading-8 2xl:mb-14 xl:mb-12 mb-8">{@html pagehome[0].wording.section2}</p>

			<div class="relative flex !justify-between items-center">
				
				<!-- Swiper Button Next Prev -->
				<div class="flex items-center 2xl:gap-8 xl:gap-6 gap-4 !w-auto relative">
					<span class="swiper-button-prev-homeroom !m-0 !left-0 !right-0 2xl:!w-22 xl:!h-16 xl:!w-16 md:!h-16 md:!w-16 !h-14 !w-14 !relative cursor-pointer after:!content-none group">
						<!-- Default Icon -->
						<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" viewBox="0 0 90 90" fill="none">
							<rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="#AF9F8D" stroke-width="1.5"/>
							<path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="#AF9F8D" stroke-width="1.5"/>
						</svg>
					
						<!-- Hover Icon -->
						<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" viewBox="0 0 90 90" fill="none">
							<rect width="90" height="90" rx="45" fill="#AF9F8D"/>
							<path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="white" stroke-width="1.5"/>
						</svg>
					</span>
					
					<span class="swiper-button-next-homeroom !m-0 !left-0 !right-0 2xl:!h-22 2xl:!w-22 xl:!h-16 xl:!w-16 md:!h-16 md:!w-16 !h-14 !w-14 !relative cursor-pointer after:!content-none group">
						<!-- Default Icon -->
						<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" viewBox="0 0 90 90" fill="none">
							<rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="#AF9F8D" stroke-width="1.5"/>
							<path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="#AF9F8D" stroke-width="1.5"/>
						</svg>
						<!-- Hover Icon -->
						<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" viewBox="0 0 90 90" fill="none">
							<rect width="90" height="90" rx="45" fill="#AF9F8D"/>
							<path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="white" stroke-width="1.5"/>
						</svg>
					</span>
					
				</div>

			</div>	
		</div>

		<div class="col-span-3">
			<div class="swiper myHomeRoomSwiper relative h-full w-full">
				<div class="swiper-wrapper">
					{#each rooms as item }
						<div class="swiper-slide">
							<a data-sveltekit-reload href="/accommodations/{item.slug}">
								<div class="relative aspect-[7/9] md:rounded-2xl rounded-none 2xl:mb-6 xl:mb-4 mb-3">
									<!-- Swiper -->
									<div class="swiper mySwiperImgRoom h-full w-full">
										<div class="swiper-wrapper">
											{#each item.featured_images as img }
											<div class="swiper-slide">
												<img src="{img.path}" class="h-full w-full object-cover md:rounded-2xl rounded-none" loading="lazy" alt="{item.name} images">
												<div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40 md:rounded-xl rounded-none">
												</div>
											</div>
											{/each}
										</div>
									</div>
									
									<div class="absolute 2xl:bottom-11 xl:bottom-9 bottom-6 2xl:px-10 xl:px-8 px-6 z-30">
										<p class="md:hidden block uppercase font-manrope text-white text-base pb-2">room</p>
										<p class="font-marcel 2xl:text-4xl xl:text-3xl md:text-2xl text-2xl text-white 2xl:mb-4 xl:mb-3 mb-3 md:capitalize uppercase">{item.name}</p>
										<ul class="grid grid-cols-2 2xl:gap-3 md:gap-2 gap-1 font-manrope 2xl:text-xl xl:text-base lg:text-base text-sm font-light text-white">
											{#each item.inclusion as inclusion }
											<li class="flex items-start 2xl:gap-4 md:gap-3 gap-2 ">
												<img src="http://50.6.206.23/~trlembongan/cms/storage/app/media{inclusion.iconwhite}" alt="{inclusion.name} svg" loading="lazy" class="2xl:w-6 2xl:h-6 md:h-5 md:w-5 w-4 h-4 object-cover object-center"> 
												{inclusion.name}
											</li>
											{/each}
										</ul>
									</div>
								</div>
							</a>
							<a data-sveltekit-reload href="/accommodations/{item.slug}" class="md:flex hidden text-gold font-manrope 2xl:text-2xl xl:text-xl text-sm font-medium capitalize 2xl:mx-10 xl:mx-8  2xl:gap-3 gap-2 items-center group overflow-hidden">
								view detail
								<svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 2xl:h-6 xl:w-5 xl:h-5 w-4 h-4 transform translate-x-[-20px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" fill="#af9f8d" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
</section>

<section class="h-full w-full bg-lightbg md:py-16 py-20 2xl:px-24 md:px-20 px-8 relative justify-center items-center flex md:flex-row flex-col 2xl:gap-28 xl:gap-24 md:gap-10 gap-5">
		<div class="border border-solid border-gold 2xl:p-10 md:p-8 p-4 h-full w-full">
			<img src="{pagehome[0].images_home[0].path ?? ''}" class="xl:aspect-square md:aspect-[10/15] aspect-square h-full w-full object-cover" loading="lazy" alt="One Bedroom Private Pool Villa">
		</div>
		<div class="flex flex-col w-full justify-center items-center 2xl:gap-10 xl:gap-8 md:gap-4 gap-6 py-0">
			<p class="font-marcel 2xl:text-5xl lg:text-4xl text-3xl text-gold text-center">{@html pagehome[0].title.section3}</p>
			<div id="desc" class="font-manrope 2xl:text-2xl lg:text-xl md:text-xs text-sm font-light text-secondary">
				{@html pagehome[0].wording.section3}
			</div>
		</div>
</section>

<section class="h-full w-full bg-lightbg py-16 lg:block hidden"> 
	<div class="relative xl:h-[80vh] h-[30vh] w-full">
		<!-- <img src="/images/LBC Pool Photo 8.webp" class="h-full w-full object-cover object-center" alt="Lembongan Beach Club & Resort Pool">
		<div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t  from-slate-900  to-transparent opacity-20 "></div> -->
		<div class="swiper mySwiperHomeExplore relative h-full w-full">
			<div class="swiper-wrapper">
				{#each explore as item }
					<div class="swiper-slide">
						<img src="{item.featured_images[0].path}" class="h-full w-full object-cover aspect-video" loading="lazy" alt="Explore Lembongan Beach Beach Club & Resort">
						<div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-70 md:rounded-xl rounded-none">
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="absolute inset-0 w-full z-10 flex justify-center items-center">
			<a data-sveltekit-reload href="/explore" class="md:px-14 px-20 py-4 font-medium 2xl:text-4xl text-3xl italic hover:text-gold transition-all duration-300 text-white capitalize font-marcel tracking-[0.25rem]">{@html pagehome[0].title.section4}</a>
		</div>
	</div>
</section>

<section class="bg-lightbg md:py-20 py-20 2xl:pl-20 2xl:pr-0 xl:pl-16 md:pl-8 md:pr-0 pl-8 pr-8  h-full w-full relative"> 
	<div class="grid md:grid-cols-4 grid-cols-1 xl:gap-12 md:gap-10 gap-8">

		<div class="col-span-1 flex flex-col justify-center">
			<p class="font-marcel text-gold 2xl:text-6xl xl:text-5xl text-4xl 2xl:leading-[4rem] xl:leading-[3.5rem] 2xl:mb-6 mb-4">{@html pagehome[0].title.section5}</p>
			<p class="font-manrope text-secondary 2xl:text-2xl xl:text-xl font-light 2xl:leading-10 xl:leading-8 2xl:mb-14 md:mb-12 mb-8">{@html pagehome[0].wording.section5}</p>
			<div class="relative flex !justify-between items-center">
				<!-- Swiper Button Next Prev -->
				<div class="flex items-center 2xl:gap-8 xl:gap-6 gap-4  !w-full relative">
					<span class="swiper-button-prev-homeoffers !m-0 !left-0 !right-0 2xl:!w-22 xl:!h-16 xl:!w-16 md:!h-16 md:!w-16 !h-14 !w-14  !relative cursor-pointer after:!content-none group">
						<!-- Default Icon -->
						<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" viewBox="0 0 90 90" fill="none">
							<rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="#AF9F8D" stroke-width="1.5"/>
							<path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="#AF9F8D" stroke-width="1.5"/>
						</svg>
					
						<!-- Hover Icon -->
						<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" viewBox="0 0 90 90" fill="none">
							<rect width="90" height="90" rx="45" fill="#AF9F8D"/>
							<path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="white" stroke-width="1.5"/>
						</svg>
					</span>
					
					<span class="swiper-button-next-homeoffers !m-0 !left-0 !right-0 2xl:!w-22 xl:!h-16 xl:!w-16 md:!h-16 md:!w-16 !h-14 !w-14 !relative cursor-pointer after:!content-none group">
						<!-- Default Icon -->
						<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" viewBox="0 0 90 90" fill="none">
							<rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="#AF9F8D" stroke-width="1.5"/>
							<path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="#AF9F8D" stroke-width="1.5"/>
						</svg>
						<!-- Hover Icon -->
						<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" viewBox="0 0 90 90" fill="none">
							<rect width="90" height="90" rx="45" fill="#AF9F8D"/>
							<path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="white" stroke-width="1.5"/>
						</svg>
					</span>
				</div>
			</div>	
		</div>

		<div class="col-span-3">
			<div class="swiper myHomeOffersSwiper relative h-full w-full">
				<div class="swiper-wrapper">
					{#each offers as item }
						<div class="swiper-slide">
							<div class="relative aspect-square md:rounded-2xl rounded-none 2xl:mb-6 xl:mb-4 md:mb-3 mb-5">
								<a data-sveltekit-reload href="/special-offer/{item.slug}">
									<img src="{item.featured_images[0]?.path || ''}" class="h-full w-full object-cover md:rounded-2xl rounded-none" loading="lazy" alt="Lembongan Beach Beach Club & Resort Offers">
									<div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40 md:rounded-xl rounded-none">
										
									</div>
								</a>
								<!-- <div class="absolute 2xl:bottom-11 xl:bottom-9 md:bottom-7 w-full xl:hidden md:block hidden">
									<p class="font-marcel 2xl:text-3xl xl:text-2xl text-white 2xl:mb-4 xl:mb-3 text-center">{item.name}</p>
								</div> -->
							</div>
							<a data-sveltekit-reload href="/special-offer/{item.slug}" class="md:flex hidden text-gold font-manrope 2xl:text-2xl xl:text-xl font-medium capitalize 2xl:mx-10 xl:mx-8 md:mx-6  2xl:gap-3 md:gap-2 items-center group overflow-hidden">
								view detail
								<!-- <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 xl:w-5 md:w-4 2xl:h-6 xl:h-5 md:h-4 transform translate-x-[-20px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" viewBox="0 0 25 13" fill="none">
									<path d="M19.2 0.5L24 6.5M24 6.5L19.2 12.5M24 6.5H0" stroke="#3B3422" stroke-width="1.5"/>
								</svg> -->
								<svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 xl:w-5 md:w-4 2xl:h-6 xl:h-5 md:h-4 transform translate-x-[-20px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" fill="#af9f8d" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
							</a>
							<a data-sveltekit-reload href="/special-offer/{item.slug}" class="block md:hidden font-marcel text-2xl text-secondary">{item.name}</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>


<Footer {info}/>