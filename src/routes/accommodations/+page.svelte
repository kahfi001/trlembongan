<script lang="ts">
    import type { PageServerData } from "./$types";
	import Footer from "$lib/components/footer.svelte";
	import Header from "$lib/components/header.svelte";
	import { initSwiper } from "$lib/js/swiper";
	import { onMount } from "svelte";	
    import 'aos/dist/aos.css';
	// @ts-ignore
	import AOS from 'aos';

    export let data: PageServerData;

    let info = data?.info;
    let offers = data?.offers;
    let rooms = data?.accommodation;
    let seo = data?.seo;

	onMount(() => {

		initSwiper();

        AOS.init({
			duration: 2000,
		});
	});

</script>

<svelte:head>
    <title>{seo[0].title.roomstit}</title>

	<!-- Meta -->
	<meta name="title" content="{seo[0].meta_title.roomsmettit}" />
	<meta name="description" content="{seo[0].description.roomsdesc}" />
	<meta name="keywords" content="{seo[0].keywords.roomskey}">

	<!-- Open Graph / Facebook -->
    <meta property="og:site_name" content="{info[0].name}">
	<meta property="og:title" content="{seo[0].og_title.roomsogtit}">
	<meta name="og:description" content="{seo[0].og_description.roomsogdesc}">
    <meta property="og:image" content="{seo[0].images_accommodation[0]?.path ?? ''}" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{seo[0].twitter_title.roomstwittit}" />
	<meta name="twitter:description" content="{seo[0].twitter_description.roomstwitdesc}" />
	<meta name="twitter:image" content="{seo[0].images_accommodation[0]?.path ?? ''}" />
</svelte:head>

<Header {info}{offers}{rooms}/>

<section class="w-full h-screen relative bg-slate-40">
	<div class="relative h-full w-full">
		<img src="{info[0].hero_images[1]?.path ?? ''}" class="h-full w-full object-cover" alt="Hero images">
		<div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b  from-slate-900  to-transparent opacity-50 "></div>
        <div class="absolute inset-0 text-white font-marcel 2xl:text-7xl xl:text-6xl md:text-5xl text-4xl flex justify-center items-center w-full h-full ">
            <h1 class="flex" data-aos="fade-up">Rooms<span class="md:block hidden">&nbsp& Suites</span></h1>
        </div>
	</div>
</section>

<section class="relative w-full h-full bg-lightbg">
	<div class="xl:px-48 xl:py-16  md:px-16 md:py-16 px-16 py-16 container" >
		<p class="font-manrope xl:text-secondary text-gold text-center font-light 2xl:text-2xl xl:text-xl text-base " data-aos="fade-right">
			Our resort seamlessly blends traditional Balinese charm with modern amenities, offering a tranquil and immersive escape. Unwind in our exclusive private pool villas, designed for privacy, comfort, and luxury. Wake up to stunning views of the ocean or lush greenery from your personal balcony or terrace.
		</p>
	</div>
</section>

<!-- Desktop -->
<section class="hidden relative bg-lightbg 2xl:pb-16 xl:pb-16 md:pb-16 pb-16  xl:grid xl:grid-cols-2 grid-cols-1 gap-y-8 2xl:gap-x-20 xl:gap-x-16 2xl:gap-y-44 xl:gap-y-36 ">
    {#each rooms as item,index }
    {#if index % 2 === 1}

    <div class="2xl:pl-32 xl:pl-28 xl:pr-0 flex flex-col 2xl:gap-16 xl:gap-12 xl:justify-center">
        <div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-4 xl:px-0 px-8">
            <p class="text-gold font-marcel 2xl:text-5xl xl:text-4xl">{item.name}</p>
            <div class="text-secondary font-manrope 2xl:leading-8 xl:leading-6 2xl:text-xl xl:text-base line-clamp-5">
                {@html item.excerpt}</div>
            <ul class="flex flex-wrap 2xl:w-8/12 xl:w-11/12 gap-2 text-secondary font-manrope">
                {#each item.inclusion as inclusion }
                    <li class="flex items-center gap-2 bg-[#F6F3EA] px-4 py-3 rounded-[10px]">
                        <img src="http://50.6.206.23/~trlembongan/cms/storage/app/media{inclusion.iconblack}" alt="{inclusion.name} svg" class="w-5 h-5 object-cover object-center"> 
                        {inclusion.name}
                    </li>
                {/each}
            </ul>
        </div>
        <div class="hidden md:flex 2xl:gap-4 xl:gap-3">
            <a data-sveltekit-reload href="/accommodations/{item.slug}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl 2xl:px-10 xl:px-8 2xl:py-4 xl:py-3 capitalize text-gold border-gold border border-solid group">
                <span class="transition-all duration-300 pr-0 group-hover:pr-2">view detail</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:2xl:w-9 2xl:w-0 xl:w-0 group-hover:xl:w-8 h-full ml-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:ml-2 transition-all duration-300" viewBox="0 0 34 19" fill="none">
                    <path d="M25.6 1.5L32 9.5M32 9.5L25.6 17.5M32 9.5H0" stroke="#AF9F8D" stroke-width="2"/>
                </svg>
            </a>
            <a href="{info[0].book_url}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl 2xl:px-10 xl:px-8 2xl:py-4 xl:py-3 capitalize text-white bg-gold group">
                <span class="transition-all duration-300 pr-0 group-hover:pr-2">book now</span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    class="group-hover:2xl:w-9 2xl:w-0 xl:w-0 group-hover:xl:w-8 h-full ml-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:ml-2 transition-all duration-300" 
                    viewBox="0 0 34 19" fill="none">
                    <path d="M25.6 1.5L32 9.5M32 9.5L25.6 17.5M32 9.5H0" stroke="#FFFFF9" stroke-width="2"/>
                </svg>
            </a>
            
        </div>
        <div class="flex xl:hidden gap-3 px-8">
            <a data-sveltekit-reload href="/accommodations/{item.slug}" class="flex items-center font-manrope text-base px-6 py-4 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">
                view detail
            </a>
                <a href="{info[0].book_url}" class="flex items-center font-manrope text-base px-6 py-4 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">
                book now
            </a>
        </div>
    </div>
    <div class="relative h-full w-full">
        
        <!-- Swiper -->
        <div class="swiper myAccommodationSwiper rounded-l-3xl relative h-full">
            <div class="swiper-wrapper">
                {#each item.featured_images as img }
                    
                <div class="swiper-slide h-full w-full">
                    <div class="aspect-[16/11] h-full">
                        <img src="{img.path}"  class="h-full w-full object-cover" alt="">
                        <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40"></div>
                    </div>
                </div>
                {/each}

            </div>
            <div class="swiper-pagination swiper-pagination-accommodation "></div>
            
        </div>

        <!-- <div class="absolute flex !justify-center items-center inset-x-0 2xl:bottom-10 xl:bottom-8 z-10">
			
            <div class="hidden xl:flex items-center 2xl:gap-8 xl:gap-6 !w-auto relative">
                <span class="swiper-button-prev-accommodation !m-0 !left-0 !right-0 2xl:!h-22 2xl:!w-22 xl:w-20 xl:!h-20 !h-18 !w-18 !relative cursor-pointer after:!content-none group">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" width="90" height="90" viewBox="0 0 90 90" fill="none">
                        <rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="white" stroke-width="1.5"/>
                        <path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="white" stroke-width="1.5"/>
                    </svg>
                    
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" width="90" height="90" viewBox="0 0 90 90" fill="none">
                        <rect width="90" height="90" rx="45" fill="white"/>
                        <path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="#AF9F8D" stroke-width="1.5"/>
                    </svg>
                </span>
                
                <span class="swiper-button-next-accommodation !m-0 !left-0 !right-0 2xl:!h-22 2xl:!w-22 xl:w-20 xl:!h-20 !h-18 !w-18 !relative cursor-pointer after:!content-none group">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" width="90" height="90" viewBox="0 0 90 90" fill="none">
                        <rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="white" stroke-width="1.5"/>
                        <path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="white" stroke-width="1.5"/>
                    </svg>
                    
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" width="90" height="90" viewBox="0 0 90 90" fill="none">
                        <rect width="90" height="90" rx="45" fill="white"/>
                        <path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="#AF9F8D" stroke-width="1.5"/>
                    </svg>
                </span>
            </div>

        </div>	 -->

    </div>
    {:else}
    
    <div class="relative h-full w-full">
        
        <!-- Swiper -->
        <div class="swiper myAccommodationSwiper rounded-tr-3xl rounded-br-3xl relative h-full">
            <div class="swiper-wrapper">
                {#each item.featured_images as img }
                    
                <div class="swiper-slide h-full w-full">
                    <div class="aspect-[16/11] h-full">
                        <img src="{img.path}"  class="h-full w-full object-cover" alt="">
                        <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40"></div>
                    </div>
                </div>
                {/each}

            </div>
            <div class="swiper-pagination swiper-pagination-accommodation "></div>
        </div>

        <!-- <div class="absolute flex !justify-center items-center inset-x-0 2xl:bottom-10 xl:bottom-8 z-10">
		
            <div class="hidden xl:flex items-center 2xl:gap-8 xl:gap-6 !w-auto relative">
                <span class="swiper-button-prev-accommodation !m-0 !left-0 !right-0 2xl:!h-22 2xl:!w-22 xl:w-20 xl:!h-20 !h-18 !w-18 !relative cursor-pointer after:!content-none group">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" width="90" height="90" viewBox="0 0 90 90" fill="none">
                        <rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="white" stroke-width="1.5"/>
                        <path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="white" stroke-width="1.5"/>
                    </svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" width="90" height="90" viewBox="0 0 90 90" fill="none">
                        <rect width="90" height="90" rx="45" fill="white"/>
                        <path d="M37.9367 57L27 45M27 45L37.9367 33M27 45H62" stroke="#AF9F8D" stroke-width="1.5"/>
                    </svg>
                </span>
        
                <span class="swiper-button-next-accommodation !m-0 !left-0 !right-0 2xl:!h-22 2xl:!w-22 xl:w-20 xl:!h-20 !h-18 !w-18 !relative cursor-pointer after:!content-none group">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" width="90" height="90" viewBox="0 0 90 90" fill="none">
                        <rect x="0.75" y="0.75" width="88.5" height="88.5" rx="44.25" stroke="white" stroke-width="1.5"/>
                        <path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="white" stroke-width="1.5"/>
                    </svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" width="90" height="90" viewBox="0 0 90 90" fill="none">
                        <rect width="90" height="90" rx="45" fill="white"/>
                        <path d="M51.0633 33L62 45M62 45L51.0633 57M62 45H27" stroke="#AF9F8D" stroke-width="1.5"/>
                    </svg>
                </span>
            
            </div>
        </div>	 -->

    </div>
    <div class="2xl:pr-32 xl:pr-28 flex flex-col 2xl:gap-16 xl:gap-12 gap-8 xl:justify-center">
        <div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-4 xl:px-0 px-8 ">
            <p class="text-gold font-marcel 2xl:text-5xl xl:text-4xl text-4xl">{item.name}</p>
            <div class="text-secondary font-manrope 2xl:leading-8 xl:leading-6 2xl:text-xl md:text-base text-sm line-clamp-5">
                {@html item.excerpt}
            </div>
            <ul class="flex flex-wrap 2xl:w-8/12 xl:w-11/12 gap-2 text-secondary font-manrope md:text-base text-sm">
                {#each item.inclusion as inclusion }
                <li class="flex items-center gap-2 bg-[#F6F3EA] px-4 py-3 rounded-[10px]">
                    <img src="http://50.6.206.23/~trlembongan/cms/storage/app/media{inclusion.iconblack}" alt="{inclusion.name} svg" class="w-5 h-5 object-cover object-center"> 
                    {inclusion.name}
                </li>
                {/each}
            </ul>
        </div>
        <div class="md:flex 2xl:gap-4 xl:gap-3 gap-3 hidden">
            <a data-sveltekit-reload href="/accommodations/{item.slug}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl 2xl:px-10 xl:px-8 2xl:py-4 xl:py-3 capitalize text-gold border-gold border border-solid group">
                <span class="transition-all duration-300 pr-0 group-hover:pr-2">view detail</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:2xl:w-9 2xl:w-0 xl:w-0 group-hover:xl:w-8 h-full ml-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:ml-2 transition-all duration-300" viewBox="0 0 34 19" fill="none">
                    <path d="M25.6 1.5L32 9.5M32 9.5L25.6 17.5M32 9.5H0" stroke="#AF9F8D" stroke-width="2"/>
                </svg>
            </a>
            <a href="{info[0].book_url}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl 2xl:px-10 xl:px-8 2xl:py-4 xl:py-3 capitalize text-white bg-gold group">
                <span class="transition-all duration-300 pr-0 group-hover:pr-2">book now</span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    class="group-hover:2xl:w-9 2xl:w-0 xl:w-0 group-hover:xl:w-8 h-full ml-0 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:ml-2 transition-all duration-300" 
                    viewBox="0 0 34 19" fill="none">
                    <path d="M25.6 1.5L32 9.5M32 9.5L25.6 17.5M32 9.5H0" stroke="#FFFFF9" stroke-width="2"/>
                </svg>
            </a>
        </div>
    </div>

    {/if}
    {/each}
</section>


<!-- Mobile -->
<section class="relative bg-lightbg md:pb-20 pb-16 xl:hidden flex flex-col gap-y-16">
    {#each rooms as item,index }
    {#if index % 2 === 1}
        <div class="flex flex-col w-full h-full gap-8">
            <div class="relative h-full w-full pl-8 md:pl-16">
                    
                <!-- Swiper -->
                <div class="swiper myAccommodationSwiper  rounded-l-3xl relative">
                    <div class="swiper-wrapper">
                        {#each item.featured_images as img }
                            
                        <div class="swiper-slide h-full w-full">
                            <div class="aspect-[16/11]">
                                <img src="{img.path}"  class="h-full w-full object-cover" alt="">
                                <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40"></div>
                            </div>
                        </div>
                        {/each}
                        
                    </div>
                    <div class="swiper-button-prev swiper-button-prev-accommodation !w-12 !h-12 after:!content-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 48 48" fill="none">
                            <rect x="48" y="48" width="48" height="48" rx="24" transform="rotate(-180 48 48)" fill="white"/>
                            <path d="M29 34L19 24L29 14" stroke="#AF9F8D" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div class="swiper-button-next swiper-button-next-accommodation !w-12 !h-12  after:!content-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 48 48" fill="none">
                            <rect width="48" height="48" rx="24" fill="white"/>
                            <path d="M19 14L29 24L19 34" stroke="#AF9F8D" stroke-width="1.5"/>
                        </svg>
                    </div>
                </div>
    
            </div>
            <div class="2xl:pr-32 xl:pr-28 flex flex-col 2xl:gap-16 xl:gap-12 gap-8">
                <div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-4 xl:px-0 px-8 md:px-16 ">
                    <p class="text-gold font-marcel 2xl:text-5xl xl:text-4xl text-4xl">{item.name}</p>
                    <div class="text-secondary font-manrope 2xl:leading-8 xl:leading-6 2xl:text-xl md:text-base text-sm line-clamp-5">
                        {@html item.excerpt}
                    </div>
                    <ul class="w-full flex flex-wrap gap-2  text-secondary font-manrope md:text-base text-sm">
                        {#each item.inclusion as inclusion }
                            <li class="flex items-center gap-2 bg-[#F6F3EA] px-4 py-3 rounded-[10px]">
                                <img src="http://50.6.206.23/~trlembongan/cms/storage/app/media{inclusion.iconblack}" alt="{inclusion.name} svg" class="w-4 md:w-6 h-4 md:h-6 object-cover object-center"> 
                                {inclusion.name}
                            </li>
                        {/each}
                    </ul>
                </div>
                <div class="flex gap-3 px-8 md:px-16">
                    <a data-sveltekit-preload-data href="/accommodations/{item.slug}" class="flex items-center font-manrope text-base px-6 py-4 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">
                        view detail
                    </a>
                        <a href="{item.book_url}" class="flex items-center font-manrope text-base px-6 py-4 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">
                        book now
                    </a>
                </div>
            </div>
        </div>
    {:else}
        <div class="flex flex-col w-full h-full gap-8">
            <div class="relative h-full w-full pr-8 md:pr-16">
            
                <!-- Swiper -->
                <div class="swiper myAccommodationSwiper rounded-tr-3xl rounded-br-3xl relative">
                    <div class="swiper-wrapper">
                        {#each item.featured_images as img }
                            
                        <div class="swiper-slide h-full w-full">
                            <div class="aspect-[16/11]">
                                <img src="{img.path}"  class="h-full w-full object-cover" alt="">
                                <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40"></div>
                            </div>
                        </div>
                        {/each}

                    </div>
                    <div class="swiper-button-prev swiper-button-prev-accommodation !w-12 !h-12 after:!content-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 48 48" fill="none">
                            <rect x="48" y="48" width="48" height="48" rx="24" transform="rotate(-180 48 48)" fill="white"/>
                            <path d="M29 34L19 24L29 14" stroke="#AF9F8D" stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div class="swiper-button-next swiper-button-next-accommodation !w-12 !h-12  after:!content-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 48 48" fill="none">
                            <rect width="48" height="48" rx="24" fill="white"/>
                            <path d="M19 14L29 24L19 34" stroke="#AF9F8D" stroke-width="1.5"/>
                        </svg>
                    </div>
                </div>
                

            </div>
            <div class="2xl:pr-32 xl:pr-28 flex flex-col 2xl:gap-16 xl:gap-12 gap-8">
                <div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-4 xl:px-0 px-8 md:px-16 ">
                    <p class="text-gold font-marcel 2xl:text-5xl xl:text-4xl text-4xl">{item.name}</p>
                    <div class="text-secondary font-manrope 2xl:leading-8 xl:leading-6 2xl:text-xl md:text-base text-sm line-clamp-5">
                        {@html item.excerpt}
                    </div>
                    <ul class="w-full flex flex-wrap gap-2  text-secondary font-manrope md:text-base text-sm">
                        {#each item.inclusion as inclusion }
                            <li class="flex items-center gap-2 bg-[#F6F3EA] px-4 py-3 rounded-[10px]">
                                <img src="http://50.6.206.23/~trlembongan/cms/storage/app/media{inclusion.iconblack}" alt="{inclusion.name} svg" class="w-4 md:w-6 h-4 md:h-6 object-cover object-center"> 
                                {inclusion.name}
                            </li>
                        {/each}
                    </ul>
                </div>
        
                <div class="flex gap-3 px-8 md:px-16">
                    <a data-sveltekit-reload href="/accommodations/{item.slug}" class="flex items-center font-manrope text-base px-6 py-4 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">
                        view detail
                    </a>
                        <a href="{item.book_url}" class="flex items-center font-manrope text-base px-6 py-4 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">
                        book now
                    </a>
                </div>
            </div>
        </div>
    {/if}
    {/each}
</section>


<Footer {info}/>