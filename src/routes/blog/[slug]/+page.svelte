<script lang="ts">
    import type { PageServerData } from "./$types";
	import Footer from "$lib/components/footer.svelte";
	import { onMount } from "svelte";
	import Headerdetailoffer from "$lib/components/headerdetailoffer.svelte";
	import { TabItem } from "flowbite-svelte";

    export let data: PageServerData;

    let info = data?.info;
	let offers = data?.offers;
	let rooms = data?.accommodation;
    let blog = data?.blog;
    let detailBlog = data?.blogDetail;

    // Fungsi native JS untuk format tanggal
    function formatDate(dateString: string) {
    	const date = new Date(dateString);
    	return new Intl.DateTimeFormat('id-ID', {
    		day: '2-digit',
    		month: 'long',
    		year: 'numeric'
    	}).format(date);
    }
	onMount(() => {


	});

</script>

<svelte:head>
	<title>{detailBlog.name} - Lembongan Beach Club and Resort</title>
	<meta name="description" content="" />

    <style>
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
      </style>
</svelte:head>

<Headerdetailoffer {info}{offers}{rooms} />

<section class="h-full w-full bg-lightbg xl:pt-0 pt-44 px-0">
    <div class="h-full w-full xl:block hidden">
        <img src="{detailBlog.featured_images[0]?.path ?? ''}" class="h-screen w-full object-cover md:aspect-[16/10] aspect-square" alt="Hero images">
    </div>
	<div class="container 2xl:px-28 xl:px-24 md:px-12 relative h-full w-full ">
        <img src="{detailBlog.featured_images[0]?.path ?? ''}" class="h-full w-full object-cover md:aspect-[16/10] aspect-square xl:hidden block" alt="Hero images">
        
        <p class="2xl:pt-14 pt-10 text-secondary italic">{detailBlog.admin} - {formatDate(detailBlog.date)}</p>
		
        <h1 class="font-marcel 2xl:!text-5xl xl:!text-3xl md:!text-2xl !text-xl text-gold 2xl:pt-8 xl:pt-5 pt-4">{detailBlog.name}</h1>
        <!-- <ul class="flex items-center gap-3 2xl:pt-8 xl:pt-5 pt-4">
            <li class="flex gap-1 items-start align-baseline text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 2xl:h-6 w-5 h-5" fill="#3b3422" viewBox="0 0 256 256">
                    <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120ZM68.67,208A64.36,64.36,0,0,1,87.8,182.2a64,64,0,0,1,80.4,0A64.36,64.36,0,0,1,187.33,208ZM208,208h-3.67a79.9,79.9,0,0,0-46.68-50.29,48,48,0,1,0-59.3,0A79.9,79.9,0,0,0,51.67,208H48V48H208V208Z"></path>
                </svg>
                {detailBlog.admin}
            </li>
            <li class="flex gap-1 items-start align-baseline text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 2xl:h-6 w-5 h-5" fill="#3b3422" viewBox="0 0 256 256">
                    <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path>
                </svg>
                {detailBlog.time}
            </li>
        </ul> -->
        
        <div id="desc" class="font-manrope text-secondary 2xl:pt-10 xl:pt-8 pt-6">
            {@html detailBlog.description}
        </div>
	</div>
    
</section>

<section class="h-full w-full bg-lightbg 2xl:py-16 xl:py-14 py-28 2xl:px-28 xl:px-24 px-12">
	
    <div class="relative xl:border-none border-t-2 2xl:pt-16 xl:pt-14 pt-10 border-gold border-solid flex flex-col xl:flex-row 2xl:gap-14 xl:gap-12 gap-10">
		
        <div class="relative w-full xl:w-3/12 xl:flex xl:flex-col xl:justify-center">
            
            <div class="absolute top-0 inset-x-0">
                <!-- Swiper Button Next Prev -->
                <div class="items-center 2xl:gap-8 xl:gap-6 gap-4 !w-auto relative justify-center xl:flex hidden">
                    <span class="swiper-button-prev-blogdetail !m-0 !left-0 !right-0 2xl:!w-22 xl:!h-16 xl:!w-16 md:!h-16 md:!w-16 !h-14 !w-14 !relative cursor-pointer after:!content-none group">
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
                    
                    <span class="swiper-button-next-blogdetail !m-0 !left-0 !right-0 2xl:!h-22 2xl:!w-22 xl:!h-16 xl:!w-16 md:!h-16 md:!w-16 !h-14 !w-14 !relative cursor-pointer after:!content-none group">
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

            <p class="text-gold font-marcel text-center 2xl:text-4xl xl:text-4xl text-3xl italic">Other Blog</p>

        </div>
		
        <div class="relative h-full w-full xl:w-9/12">
            <!-- Swiper -->
            <div class="swiper myBlogdetailSwiper">
                <div class="swiper-wrapper">
                    {#each blog as item}
                        {#if item?.slug == detailBlog.slug}
                            <span class="hidden"></span>
                        {:else}
                        <div class="swiper-slide">
                            <div class="grid grid-rows 2xl:gap-8 xl:gap-6 gap-4 h-full w-full">
                                <img src="{item.featured_images[0].path}" class="aspect-[9/11] object-cover object-center " alt="">
                                <ul class="flex flex-col 2xl:gap-4 xl:gap-3 gap-3">
                                    <li class="text-gold font-marcel 2xl:text-2xl xl:text-xl text-xl md:line-clamp-2">{item.name}</li>
                                </ul>
                                <div class="flex 2xl:gap-4 xl:gap-3 gap-2">
                                    <a data-sveltekit-reload href="/blog/{item.slug}" class="w-max flex items-center font-manrope text-base pb-1 capitalize text-gold border-gold border-b border-solid hover:text-secondary hover:border-secondary transition-all duration-300">
                                        read more
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>

	</div>

</section>

<Footer {info}/>