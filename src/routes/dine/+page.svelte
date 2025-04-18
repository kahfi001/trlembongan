<script lang="ts">
	import type { PageServerData } from "../$types";
	import Footer from "$lib/components/footer.svelte";
	import Header from "$lib/components/header.svelte";
	import { initSwiper } from "$lib/js/swiper";
	import { onMount } from "svelte";
    import 'aos/dist/aos.css';

    // @ts-ignore
    import AOS from 'aos';

    export let data: PageServerData;
    
    let info = data?.info;

    // @ts-ignore
    let dining = data?.dining;
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
    <title>{seo[0].title.dinetit}</title>

	<!-- Meta -->
	<meta name="title" content="{seo[0].meta_title.dinemettit}" />
	<meta name="description" content="{seo[0].description.dinemetdesc}" />
	<meta name="keywords" content="{seo[0].keywords.dinekey}">

	<!-- Open Graph / Facebook -->
    <meta property="og:site_name" content="{info[0].name}">
	<meta property="og:title" content="{seo[0].og_title.dineogtit}">
	<meta name="og:description" content="{seo[0].og_description.dineogdesc}">
    <meta property="og:image" content="{seo[0].images_dine[0]?.path ?? ''}" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{seo[0].twitter_title.dinetwittit}" />
	<meta name="twitter:description" content="{seo[0].twitter_description.dinetwitdesc}" />
	<meta name="twitter:image" content="{seo[0].images_dine[0]?.path ?? ''}" />
</svelte:head>

<Header {info}{offers}{rooms}/>

<section class="w-full h-screen relative bg-slate-40">
	<div class="relative h-full w-full">
		<img src="{info[0].hero_images[4]?.path ?? ''}" class="h-full w-full object-cover" alt="Hero images">
		<div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b  from-slate-900  to-transparent opacity-50 "></div>
        <div class="absolute inset-0 text-white font-marcel 2xl:text-7xl xl:text-6xl md:text-5xl text-4xl flex justify-center items-center w-full h-full ">
            <h1 class="flex" data-aos="fade-up">Dining</h1>
        </div>
	</div>
</section>

<section class="2xl:py-40 2xl:px-0 xl:py-36 xl:px-0 md:py-28 py-16 px-0 bg-lightbg">
    {#each dining as item, index }
        <div class="grid xl:grid-cols-2 grid-cols-1 h-full w-full md:pb-0 pb-20 xl:pt-16">    
            
            <div class="h-full w-full xl:aspect-[16/11] aspect-[14/9] pb-8 md:pb-0 xl:min-h-[50vh] {index % 2 ==0 ? "xl:order-1 xl:pr-0 md:pr-14 pr-8 xl:rounded-r-3xl rounded-r-xl" : "xl:order-2 xl:pl-0 md:pl-14 pl-8 xl:rounded-l-3xl rounded-l-xl"}">
                <!-- Swiper -->
				<div class="swiper mySwiperDine h-full w-full">
					<div class="swiper-wrapper">
						{#each item.featured_images as img }
						<div class="swiper-slide">
							<img src="{img.path}" class="h-full w-full object-cover object-center {index % 2 ==0 ? "xl:rounded-r-3xl rounded-r-xl" : "xl:rounded-l-3xl rounded-l-xl"}" alt="Hero images">
						</div>
						{/each}
					</div>
				</div>
                
                    
            </div>
            
            
            <div class="h-full w-full justify-center md:py-20 py-0 md:px-14 px-8 flex flex-col 2xl:gap-12 md:gap-10 gap-3 xl:min-h-[50vh] {index % 2 !=0 ? "xl:order-1 2xl:pr-16 xl:pr-12" : "xl:order-2  2xl:pl-16 xl:pl-12"}">
                <p class="text-gold font-marcel 2xl:text-5xl md:text-4xl text-3xl =">{item.name}</p>
                <div class="flex flex-col 2xl:gap-8 md:gap-6 gap-3 ">
                    <p class="2xl:text-xl md:text-base text-sm font-manrope text-secondary xl:leading-normal md:leading-9 leading-normal line-clamp-3">{@html item.excerpt}</p>
                    
                    <!-- <ul class="md:flex flex-col gap-2 md:text-base text-sm font-manrope font-light text-secondary hidden">
                        <li class="flex gap-2">
                            <p class="bg-[#F6F3EA] 2xl:px-4 2xl:py-3 px-3 py-2 flex gap-2 items-center rounded-[10px] 2xl:text-base text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-full"  fill="#3b3422" viewBox="0 0 256 256">
                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                                </svg>
                                Open daily : {item.feature.open}
                            </p>
                            <p class="bg-[#F6F3EA] 2xl:px-4 2xl:py-3 px-3 py-2 flex gap-2 items-center rounded-[10px] 2xl:text-base text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-full" viewBox="0 0 20 21" fill="none">
                                    <path d="M18.2031 12.0031L14.9555 4.60931C14.9321 4.55601 14.899 4.50752 14.8578 4.46635C14.4183 4.02696 13.8223 3.78013 13.2008 3.78013C12.5793 3.78013 11.9833 4.02696 11.5437 4.46635C11.456 4.55398 11.4066 4.67281 11.4062 4.79681V6.90619H8.59374V4.79681C8.59379 4.73515 8.58167 4.67407 8.55808 4.6171C8.53448 4.56012 8.49988 4.50836 8.45624 4.46478C8.01672 4.0254 7.42069 3.77856 6.79921 3.77856C6.17773 3.77856 5.5817 4.0254 5.14218 4.46478C5.10103 4.50596 5.06792 4.55444 5.04452 4.60775L1.79687 12.0031C1.55044 12.4875 1.4171 13.0215 1.40688 13.5649C1.39667 14.1084 1.50985 14.647 1.7379 15.1404C1.96595 15.6337 2.30293 16.0689 2.72348 16.4132C3.14404 16.7575 3.63721 17.0019 4.16588 17.1281C4.69454 17.2542 5.24494 17.2588 5.77564 17.1415C6.30635 17.0242 6.80353 16.7881 7.22977 16.4508C7.65601 16.1136 8.00022 15.6841 8.23647 15.1946C8.47273 14.7051 8.59488 14.1684 8.59374 13.6249V7.84369H11.4062V13.6249C11.4051 14.1684 11.5273 14.7051 11.7635 15.1946C11.9998 15.6841 12.344 16.1136 12.7702 16.4508C13.1965 16.7881 13.6936 17.0242 14.2243 17.1415C14.755 17.2588 15.3054 17.2542 15.8341 17.1281C16.3628 17.0019 16.8559 16.7575 17.2765 16.4132C17.6971 16.0689 18.034 15.6337 18.2621 15.1404C18.4901 14.647 18.6033 14.1084 18.5931 13.5649C18.5829 13.0215 18.4495 12.4875 18.2031 12.0031ZM4.99999 16.2812C4.47464 16.2812 3.96108 16.1254 3.52426 15.8335C3.08744 15.5417 2.74698 15.1268 2.54594 14.6414C2.34489 14.1561 2.29229 13.622 2.39478 13.1067C2.49727 12.5915 2.75026 12.1182 3.12174 11.7467C3.49322 11.3752 3.96652 11.1222 4.48178 11.0197C4.99705 10.9172 5.53113 10.9698 6.0165 11.1709C6.50186 11.3719 6.91671 11.7124 7.20858 12.1492C7.50046 12.586 7.65624 13.0996 7.65624 13.6249C7.65624 14.3294 7.37639 15.005 6.87824 15.5032C6.3801 16.0013 5.70447 16.2812 4.99999 16.2812ZM4.99999 10.0312C4.50084 10.031 4.00718 10.1353 3.55077 10.3374L5.86405 5.07338C6.10853 4.85565 6.42131 4.73004 6.74847 4.7182C7.07563 4.70636 7.39667 4.80904 7.65624 5.00853V11.2031C7.31968 10.8333 6.9095 10.538 6.45205 10.3362C5.99459 10.1344 5.49999 10.0305 4.99999 10.0312ZM12.3437 5.00931C12.6033 4.80982 12.9244 4.70714 13.2515 4.71898C13.5787 4.73082 13.8915 4.85643 14.1359 5.07416L16.4492 10.3374C15.7607 10.0323 14.9936 9.95177 14.2567 10.1071C13.5198 10.2625 12.8505 10.6459 12.3437 11.2031V5.00931ZM15 16.2812C14.4746 16.2812 13.9611 16.1254 13.5243 15.8335C13.0874 15.5417 12.747 15.1268 12.5459 14.6414C12.3449 14.1561 12.2923 13.622 12.3948 13.1067C12.4973 12.5915 12.7503 12.1182 13.1217 11.7467C13.4932 11.3752 13.9665 11.1222 14.4818 11.0197C14.997 10.9172 15.5311 10.9698 16.0165 11.1709C16.5019 11.3719 16.9167 11.7124 17.2086 12.1492C17.5005 12.586 17.6562 13.0996 17.6562 13.6249C17.6562 14.3294 17.3764 15.005 16.8782 15.5032C16.3801 16.0013 15.7045 16.2812 15 16.2812Z" fill="#3B3422"/>
                                </svg>
                                {item.feature.location}
                            </p>
                        </li>
                        <li class="flex gap-2">
                            <p class="bg-[#F6F3EA] 2xl:px-4 2xl:py-3 px-3 py-2 flex gap-2 items-center rounded-[10px] 2xl:text-base text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-full" viewBox="0 0 20 21" fill="none">
                                    <path d="M17.5 4.40625H2.5C2.37568 4.40625 2.25645 4.45564 2.16854 4.54354C2.08064 4.63145 2.03125 4.75068 2.03125 4.875V15.5C2.03125 15.7901 2.14648 16.0683 2.3516 16.2734C2.55672 16.4785 2.83492 16.5938 3.125 16.5938H16.875C17.1651 16.5938 17.4433 16.4785 17.6484 16.2734C17.8535 16.0683 17.9688 15.7901 17.9688 15.5V4.875C17.9688 4.75068 17.9194 4.63145 17.8315 4.54354C17.7435 4.45564 17.6243 4.40625 17.5 4.40625ZM16.2953 5.34375L10 11.1141L3.70469 5.34375H16.2953ZM16.875 15.6562H3.125C3.08356 15.6562 3.04382 15.6398 3.01451 15.6105C2.98521 15.5812 2.96875 15.5414 2.96875 15.5V5.94062L9.6875 12.0953C9.77391 12.1744 9.88679 12.2182 10.0039 12.2182C10.121 12.2182 10.2339 12.1744 10.3203 12.0953L17.0312 5.94062V15.5C17.0312 15.5414 17.0148 15.5812 16.9855 15.6105C16.9562 15.6398 16.9164 15.6562 16.875 15.6562Z" fill="#3B3422"/>
                                </svg>
                                {item.feature.email}
                            </p>
                        </li>
                    </ul> -->

                    <p class="flex gap-2 items-center 2xl:text-xl md:text-base text-sm font-manrope text-secondary xl:pb-0 pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 2xl:h-6 w-5 h-5" viewBox="0 0 32 33" fill="none">
                            <path d="M16 3.5C13.4288 3.5 10.9154 4.26244 8.77759 5.6909C6.63975 7.11935 4.97351 9.14968 3.98957 11.5251C3.00563 13.9006 2.74819 16.5144 3.2498 19.0362C3.75141 21.5579 4.98953 23.8743 6.80762 25.6924C8.6257 27.5105 10.9421 28.7486 13.4638 29.2502C15.9856 29.7518 18.5995 29.4944 20.9749 28.5104C23.3503 27.5265 25.3807 25.8603 26.8091 23.7224C28.2376 21.5846 29 19.0712 29 16.5C28.9964 13.0533 27.6256 9.74882 25.1884 7.31163C22.7512 4.87445 19.4467 3.50364 16 3.5ZM16 27.5C13.8244 27.5 11.6977 26.8549 9.88873 25.6462C8.07979 24.4375 6.66989 22.7195 5.83733 20.7095C5.00477 18.6995 4.78693 16.4878 5.21137 14.354C5.63581 12.2202 6.68345 10.2602 8.22183 8.72183C9.76021 7.18345 11.7202 6.1358 13.854 5.71136C15.9878 5.28692 18.1995 5.50476 20.2095 6.33733C22.2195 7.16989 23.9375 8.57979 25.1462 10.3887C26.3549 12.1977 27 14.3244 27 16.5C26.9967 19.4164 25.8367 22.2123 23.7745 24.2745C21.7123 26.3367 18.9164 27.4967 16 27.5ZM24 16.5C24 16.7652 23.8946 17.0196 23.7071 17.2071C23.5196 17.3946 23.2652 17.5 23 17.5H16C15.7348 17.5 15.4804 17.3946 15.2929 17.2071C15.1054 17.0196 15 16.7652 15 16.5V9.5C15 9.23478 15.1054 8.98043 15.2929 8.79289C15.4804 8.60536 15.7348 8.5 16 8.5C16.2652 8.5 16.5196 8.60536 16.7071 8.79289C16.8946 8.98043 17 9.23478 17 9.5V15.5H23C23.2652 15.5 23.5196 15.6054 23.7071 15.7929C23.8946 15.9804 24 16.2348 24 16.5Z" fill="#AF9F8D"/>
                        </svg>
                        Opening hour : {item.feature.open}
                    </p>
                </div>

                <div class="flex xl:flex-col flex-row gap gap-3">
                    {#if String(item.button_detail).trim() !== ""}
                        {#if item.detail_button == 1}
                            <!-- Desktop Button -->
                            <a data-sveltekit-reload href="/dine/{item.slug}" class="xl:min-w-48 md:min-w-44 min-w-40 max-w-max justify-center xl:flex hidden items-center font-manrope 2xl:text-xl xl:text-base 2xl:px-10 xl:px-8 2xl:py-3 xl:py-2 capitalize text-gold border-gold border border-solid hover:bg-gold hover:text-white transition-all duration-300 rounded-2xl">
                                {item.button_detail}
                            </a>
                            <!-- Mobile Button -->
                            <a data-sveltekit-reload href="/dine/{item.slug}" class="md:min-w-44 min-w-36 max-w-max justify-center xl:hidden flex items-center font-manrope text-base px-6 py-4 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">
                                {item.button_detail}
                            </a>
                            
                        {:else}
                            <!-- Desktop Button -->
                            <a href="{item.url_detail}" class="xl:min-w-48 md:min-w-44 min-w-40 max-w-max justify-center xl:flex hidden items-center font-manrope 2xl:text-xl xl:text-base 2xl:px-10 xl:px-8 2xl:py-3 xl:py-2 capitalize text-gold border-gold border border-solid hover:bg-gold hover:text-white transition-all duration-300 rounded-2xl">
                                {item.button_detail}
                            </a>
                            <!-- Mobile Button -->
                            <a href="{item.url_detail}" class="md:min-w-44 min-w-36 max-w-max justify-center xl:hidden flex items-center font-manrope text-base px-6 py-4 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">
                                {item.button_detail}
                            </a>
                        {/if}
                    {/if}
                    {#if item.book_button == 1}
                        <!-- Desktop Button -->
                        <a href="{item.url_book}" class="xl:min-w-48 md:min-w-44 min-w-40 max-w-max justify-center xl:flex hidden items-center font-manrope 2xl:text-xl xl:text-base 2xl:px-10 xl:px-8 2xl:py-3 xl:py-2 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300  rounded-2xl" >
                            {item.button_book}
                        </a>
                        <!-- Mobile Button -->
                        <a data-sveltekit-reload href="/dine/{item.slug}" class="md:min-w-44 min-w-36 max-w-max justify-center xl:hidden flex items-center font-manrope text-base px-6 py-4 capitalize hover:text-white bg-gold hover:bg-[#827668] text-white transition-all duration-300">
                            {item.button_book}
                        </a>
                    {/if}
                </div>
                
            </div>
        </div>
    {/each}
    

</section>

<Footer {info}/>