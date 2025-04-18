<script lang="ts">
    import { onMount } from 'svelte';
    import Swiper from 'swiper';
	import { initSwiper } from '$lib/js/swiper';
	import { sineIn } from 'svelte/easing';
	import { Drawer } from 'flowbite-svelte';
    import { page } from '$app/stores';
    import { derived } from 'svelte/store';

    export let info;
    export let rooms;
    export let offers;

    $: isHome = $page.url.pathname === '/';
    $: isDining = $page.url.pathname.startsWith('/dine');
    $: isAccommodations = $page.url.pathname.startsWith('/accommodations');
    $: isSpecialOffer = $page.url.pathname.startsWith('/special-offer');

    const isAccommodationSubRoute = $page.url.pathname.startsWith('/accommodations/') &&  $page.url.pathname !== '/accommodations/';
    
  
    let scrolled = false;
    
    let drawerMobile = true;
    let transitionParamsBottom = {
        y: 320,
        duration: 200,
        easing: sineIn
    };
    let showLogo = false;

   // Fungsi untuk mendeteksi scroll tanpa menggunakan void
    const handleScroll = () => {
        if (window.scrollY > 50) {
        scrolled = true;
        } else {
        scrolled = false;
        }
    };
    

    onMount(() => {

        initSwiper();

        setTimeout(() => {
            showLogo = true;
        }, 4000); 

        window.addEventListener('scroll', handleScroll);

        // Hapus event listener saat komponen diunmount
        return () => window.removeEventListener('scroll', handleScroll);
        
    
    });

</script>

<header class="xl:block hidden">
    <!-- Desktop -->
    <nav class={`fixed top-0 z-30 w-full h-max px-16 2xl:py-8 py-6 hidden xl:flex justify-between items-center font-manrope uppercase transition-all ${scrolled ? 'bg-lightbg text-gold ' : 'bg-transparent text-white'}`}>

        <label for="my-drawer-desktop" class="cursor-pointer flex items-center justify-end 2xl:py-6 2xl:px-12 xl:py-5 xl:px-10 2xl:gap-4 xl:gap-3 2xl:text-xl xl:text-base tracking-[0.05rem] group">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-10 w-10"
                viewBox="0 0 32 32" 
                fill="none"
            >
                <!-- Path 1 (selalu penuh) -->
                <path 
                    d="M0 8H32" 
                    stroke={scrolled ? "#AF9F8D" : "white"} 
                    stroke-width="1.5"
                    class="transition-transform duration-500 origin-right"
                />
        
                <!-- Path 2 (dari 50% ke 100%) -->
                <path 
                    d="M0 16H32" 
                    stroke={scrolled ? "#AF9F8D" : "white"} 
                    stroke-width="1.5"
                    class="origin-right [transform:scaleX(0.5)] transition-transform duration-500 group-hover:scale-x-100"
                />
        
                <!-- Path 3 (dari 25% ke 100%) -->
                <path 
                    d="M0 24H32" 
                    stroke={scrolled ? "#AF9F8D" : "white"} 
                    stroke-width="1.5"
                    class="origin-right [transform:scaleX(0.25)] transition-transform duration-500 group-hover:scale-x-100"
                />
            </svg>
            <p class="capitalize">menu</p>
        </label>

        <a data-sveltekit-reload href="/" class="2xl:h-24 h-20 flex-shrink-0">
            <img src={scrolled ? "/images/navbar/lembongan-blacklogo.webp" : "/images/navbar/lembongan-whitelogo.webp"} class="h-full w-full" alt="TRM Lembongan logo">
        </a>
        <a href="{info[0].book_url}" class={`relative flex items-center  justify-center text-xl tracking-[0.15rem] font-medium group gap-3 2xl:py-6 2xl:px-12 xl:py-4 xl:px-10 duration-300 transition-all ${scrolled ? 'border border-gold' : 'border border-white hover:bg-white hover:text-black'}`} > 
            book now
        </a>
        
    </nav>
    <div class="drawer z-50">
        <input id="my-drawer-desktop" type="checkbox" class="drawer-toggle" />
        
        <div class="drawer-side">

            <div class="bg-lightbg h-full w-screen">

                <!-- Header Drawer -->
                <div class="w-full h-max 2xl:px-20 px-16 2xl:py-8 py-6 hidden xl:flex justify-between items-center font-manrope uppercase fixed top-0 z-10 bg-lightbg">
                    <label  for="my-drawer-desktop" aria-label="close sidebar"  class="cursor-pointer drawer-overlay flex items-center justify-end 2xl:py-6 2xl:px-12 xl:py-5 xl:px-10  2xl:gap-4 xl:gap-3 2xl:text-xl xl:text-base tracking-[0.05rem] group text-gold">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 40 41" fill="none">
                            <path d="M1 39.4084L39 1.40845" stroke="#AF9F8D" stroke-width="2"/>
                            <path d="M1 1.59131L39 39.5913" stroke="#AF9F8D" stroke-width="2"/>
                        </svg>
                        <p class="capitalize">Close</p>
                    </label>
                    
                    <a data-sveltekit-reload href="/" class="2xl:h-24 h-20 flex-shrink-0">
                        <img src="/images/navbar/lembongan-blacklogo.webp" class="h-full w-full" alt="TRM Lembongan logo">
                    </a>
                    <a href="{info[0].book_url}" class={`relative flex items-center  justify-center text-xl tracking-[0.15rem] font-medium group gap-3 2xl:py-6 2xl:px-12 xl:py-4 xl:px-10 duration-300 transition-all border border-solid border-gold text-gold`} > 
                        book now
                    </a>
                </div>

                <div class="relative bg-lightbg flex flex-col 2xl:gap-20 gap-9 max-h-screen overflow-y-scroll pb-8  2xl:px-20 px-16 w-full 2xl:pt-48 pt-44">

                    <!-- Content -->
                    <div class="flex gap-5">

                        <!-- Link Pages -->
                        <div class="w-1/4 h-full relative 2xl:pt-10">
                            <ul class="font-marcel text-gold 2xl:text-4xl text-3xl capitalize flex flex-col 2xl:gap-8 gap-6">
                                <li class="group relative list-none transition-all duration-500 hover:pl-6">
                                    <a data-sveltekit-reload href="/" class="inline-block transition-all duration-500 group-hover:translate-x-2">
                                        Home
                                    </a>
                                    <span class="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                        •
                                    </span>
                                </li>
                                <li class="group relative list-none transition-all duration-500 hover:pl-6">
                                    <a data-sveltekit-reload href="/accommodations" class="inline-block transition-all duration-500 group-hover:translate-x-2">accommodation</a>
                                    <span class="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                        •
                                    </span>
                                </li>
                                <li class="group relative list-none transition-all duration-500 hover:pl-6">
                                    <a data-sveltekit-reload href="/special-offer" class="inline-block transition-all duration-500 group-hover:translate-x-2">Special Offers</a>
                                    <span class="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                        •
                                    </span>
                                </li>
                                <li class="group relative list-none transition-all duration-500 hover:pl-6">
                                    <a data-sveltekit-reload href="/explore" class="inline-block transition-all duration-500 group-hover:translate-x-2">explore</a>
                                    <span class="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                        •
                                    </span>
                                </li>
                                <li class="group relative list-none transition-all duration-500 hover:pl-6">
                                    <a data-sveltekit-reload href="/dine" class="inline-block transition-all duration-500 group-hover:translate-x-2">dine</a>
                                    <span class="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                        •
                                    </span>
                                </li>
                                <li class="group relative list-none transition-all duration-500 hover:pl-6">
                                    <a data-sveltekit-reload href="/gallery" class="inline-block transition-all duration-500 group-hover:translate-x-2">gallery</a>
                                    <span class="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                        •
                                    </span>
                                </li>
                                <li class="group relative list-none transition-all duration-500 hover:pl-6">
                                    <a data-sveltekit-reload href="/blog" class="inline-block transition-all duration-500 group-hover:translate-x-2">blog</a>
                                    <span class="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                        •
                                    </span>
                                </li>
                                <li class="group relative list-none transition-all duration-500 hover:pl-6">
                                    <a data-sveltekit-reload href="/contact-us" class="inline-block transition-all duration-500 group-hover:translate-x-2">contact us</a>
                                    <span class="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                        •
                                    </span>
                                </li>
                            </ul>
                        </div>
                    
                        <!-- Tab Rooms & Offers -->
                        <div class="w-3/4 h-full relative">
                            
                            <div class="absolute right-2 flex !justify-between items-center">
                                <!-- Swiper Button Next Prev -->
                                <div class="flex items-center 2xl:gap-6 xl:gap-4 gap-4 !w-full relative">
                                    <span class="swiper-button-prev-drawer !m-0 !left-0 !right-0 2xl:!h-16 w-max xl:!h-14 md:!h-10 !h-10 !relative cursor-pointer after:!content-none group">
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
                                    
                                    <span class="swiper-button-next-drawer !m-0 !left-0 !right-0 2xl:!h-16 w-max xl:!h-14 md:!h-10 !h-10 !relative cursor-pointer after:!content-none group">
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
    
                            <div class="tabs tabs-box drawbox bg-lightbg w-full h-full !shadow-none gap-x-6">
                                <input type="radio" name="my_tabs_6" class="tab peer font-manrope 2xl:text-2xl xl:text-xl !rounded-xl" aria-label="Rooms & Villas" checked/>
                                <div class="tab-content 2xl:pt-10 xl:pt-8 bg-lightbg h-full w-full">
                                    <div class="swiper mySwiperDrawer h-full w-full">
                                        <div class="swiper-wrapper">
                                            {#each rooms as item}
                                            <div class="swiper-slide aspect-[10/11]">
                                                <a data-sveltekit-reload href="/accommodations" class="relative aspect-square rounded-xl h-full w-full">
                                                    <img src="{item.featured_images[0].path}" class="w-full h-full rounded-xl object-cover" alt="">
                                                    <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40 md:rounded-xl rounded-none">
                                        
                                                    </div>
                                                    <div class="absolute 2xl:bottom-8 xl:bottom-5 md:bottom-4 2xl:px-6 px-4 w-full md:block hidden">
                                                        <p class="font-marcel 2xl:text-2xl xl:text-xl text-white 2xl:mb-4 xl:mb-3">{item.name}</p>
                                                        <ul class="text-white font-manrope grid grid-cols-2 2xl:gap-3 gap-2">
                                                            {#each item.inclusion as inclusion}
                                                                <li class="flex gap-3">
                                                                    <img src="http://50.6.206.23/~trlembongan/cms/storage/app/media{inclusion.iconwhite}" alt="{inclusion.name} svg" class="2xl:w-6 2xl:h-6 md:h-5 md:w-5 w-4 h-4 object-cover object-center"> 
                                                                    {inclusion.name}
                                                                </li>
                                                            {/each}
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                            {/each}
                                        </div>
                                    </div>
                                </div>
                                <input type="radio" name="my_tabs_6" class="tab peer font-manrope 2xl:text-2xl xl:text-xl !rounded-xl" aria-label="Special Offers"  />
                                <div class="tab-content bg-lightbg 2xl:pt-10 xl:pt-8 w-full h-full">
                                    <div class="swiper mySwiperDrawer h-full w-full">
                                        <div class="swiper-wrapper">
                                            {#each offers as item}
                                            <div class="swiper-slide">
                                                <div class=" rounded-xl relative">
                                                    <img src="{item.featured_images[0].path}" class="aspect-square w-full h-full rounded-xl object-cover" alt="Lembongan Beach Club & Resort Offers">
                                                    <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent opacity-40 md:rounded-xl rounded-none">
                                                    </div>
                                                    <!-- <div class="absolute 2xl:bottom-8 xl:bottom-4 md:bottom-3 2xl:px-6 px-4 w-full md:block hidden">
                                                        <p class="font-marcel 2xl:text-2xl xl:text-xl text-white 2xl:mb-4 xl:mb-3 text-center">{item.name}</p>
                                                    </div> -->
                                                </div>
                                                <a data-sveltekit-reload href="/special-offer" class="md:flex justify-center hidden text-secondary font-manrope 2xl:text-xl xl:text-base text-sm font-semibold uppercase 2xl:pt-6 xl:pt-4 2xl:gap-3 gap-2 items-center group overflow-hidden">
                                                    view detail
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 2xl:h-6 xl:w-5 xl:h-5 w-4 h-4 transform translate-x-[-20px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" viewBox="0 0 25 13" fill="none">
                                                        <path d="M19.2 0.5L24 6.5M24 6.5L19.2 12.5M24 6.5H0" stroke="#3B3422" stroke-width="1.5"/>
                                                    </svg>
                                                </a>
                                            </div>
                                            {/each}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Footer Drawer-->
                    <div class="flex justify-between relative">
                        <ul class="font-manrope text-secondary 2xl:text-xl text-base w-1/2">
                            <li class="flex flex-col 2xl:gap-2 gap-1">
                                <a target="_blank" href="{info[0].address[2]}" class="flex 2xl:gap-3 gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 xl:w-6 w-4 h-full" viewBox="0 0 20 21" fill="none">
                                        <path d="M10 5.65625C9.41284 5.65625 8.83886 5.83036 8.35065 6.15657C7.86244 6.48278 7.48193 6.94644 7.25723 7.48891C7.03254 8.03138 6.97374 8.62829 7.08829 9.20417C7.20284 9.78006 7.48559 10.309 7.90078 10.7242C8.31596 11.1394 8.84494 11.4222 9.42083 11.5367C9.99671 11.6513 10.5936 11.5925 11.1361 11.3678C11.6786 11.1431 12.1422 10.7626 12.4684 10.2743C12.7946 9.78614 12.9688 9.21216 12.9688 8.625C12.9688 7.83764 12.656 7.08253 12.0992 6.52578C11.5425 5.96903 10.7874 5.65625 10 5.65625ZM10 10.6562C9.59826 10.6562 9.20554 10.5371 8.8715 10.3139C8.53746 10.0907 8.27711 9.77349 8.12337 9.40233C7.96963 9.03116 7.9294 8.62275 8.00778 8.22872C8.08616 7.8347 8.27961 7.47276 8.56369 7.18869C8.84776 6.90461 9.2097 6.71116 9.60372 6.63278C9.99775 6.5544 10.4062 6.59463 10.7773 6.74837C11.1485 6.90211 11.4657 7.16246 11.6889 7.4965C11.9121 7.83054 12.0312 8.22326 12.0312 8.625C12.0312 9.16372 11.8172 9.68038 11.4363 10.0613C11.0554 10.4422 10.5387 10.6562 10 10.6562ZM10 1.90625C8.21871 1.90832 6.51097 2.61685 5.25141 3.87641C3.99185 5.13597 3.28332 6.84371 3.28125 8.625C3.28125 11.0398 4.40156 13.6047 6.52109 16.0422C7.47774 17.1478 8.55442 18.1435 9.73125 19.0109C9.81003 19.0661 9.90385 19.0956 10 19.0956C10.0961 19.0956 10.19 19.0661 10.2688 19.0109C11.4456 18.1435 12.5223 17.1478 13.4789 16.0422C15.5984 13.6047 16.7188 11.0422 16.7188 8.625C16.7167 6.84371 16.0082 5.13597 14.7486 3.87641C13.489 2.61685 11.7813 1.90832 10 1.90625ZM10 18.0398C8.82812 17.1352 4.21875 13.2828 4.21875 8.625C4.21875 7.09172 4.82784 5.62123 5.91204 4.53704C6.99623 3.45284 8.46672 2.84375 10 2.84375C11.5333 2.84375 13.0038 3.45284 14.088 4.53704C15.1722 5.62123 15.7812 7.09172 15.7812 8.625C15.7812 13.2828 11.1719 17.1352 10 18.0398Z" fill="#3B3422"/>
                                    </svg>
                                    {info[0].address[1]}
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="{info[0].email['emaillink']}" class="flex 2xl:gap-3 gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-5 xl:w-5 w-4 h-full" viewBox="0 0 20 21" fill="none">
                                        <path d="M17.5 4.40625H2.5C2.37568 4.40625 2.25645 4.45564 2.16854 4.54354C2.08064 4.63145 2.03125 4.75068 2.03125 4.875V15.5C2.03125 15.7901 2.14648 16.0683 2.3516 16.2734C2.55672 16.4785 2.83492 16.5938 3.125 16.5938H16.875C17.1651 16.5938 17.4433 16.4785 17.6484 16.2734C17.8535 16.0683 17.9688 15.7901 17.9688 15.5V4.875C17.9688 4.75068 17.9194 4.63145 17.8315 4.54354C17.7435 4.45564 17.6243 4.40625 17.5 4.40625ZM16.2953 5.34375L10 11.1141L3.70469 5.34375H16.2953ZM16.875 15.6562H3.125C3.08356 15.6562 3.04382 15.6398 3.01451 15.6105C2.98521 15.5812 2.96875 15.5414 2.96875 15.5V5.94062L9.6875 12.0953C9.77391 12.1744 9.88679 12.2182 10.0039 12.2182C10.121 12.2182 10.2339 12.1744 10.3203 12.0953L17.0312 5.94062V15.5C17.0312 15.5414 17.0148 15.5812 16.9855 15.6105C16.9562 15.6398 16.9164 15.6562 16.875 15.6562Z" fill="#3B3422"/>
                                    </svg>
                                    {info[0].email['email']}
                                </a>
                            </li>
                        </ul>
                        <ul class="flex justify-center items-center 2xl:gap-5 gap-3">
                            <li>
                                <a target="_blank" href="{info[0].phone['reservlink']}" aria-label="phone">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-9 xl:w-7 w-5 h-full" viewBox="0 0 32 32" fill="none">
                                        <path d="M27.7963 19.8075L21.9075 17.1687L21.8913 17.1612C21.5856 17.0305 21.2521 16.978 20.921 17.0086C20.5899 17.0391 20.2716 17.1517 19.995 17.3362C19.9624 17.3578 19.9311 17.3811 19.9013 17.4062L16.8588 20C14.9313 19.0637 12.9413 17.0887 12.005 15.1862L14.6025 12.0975C14.6275 12.0662 14.6513 12.035 14.6738 12.0012C14.8543 11.7254 14.9638 11.4091 14.9926 11.0807C15.0214 10.7523 14.9686 10.4218 14.8388 10.1187V10.1037L12.1925 4.20499C12.0209 3.80907 11.7259 3.47926 11.3515 3.26479C10.9771 3.05032 10.5433 2.96269 10.115 3.01499C8.42122 3.23787 6.86649 4.0697 5.74118 5.35511C4.61587 6.64052 3.99695 8.2916 4.00001 9.99999C4.00001 19.925 12.075 28 22 28C23.7084 28.0031 25.3595 27.3841 26.6449 26.2588C27.9303 25.1335 28.7621 23.5788 28.985 21.885C29.0374 21.4568 28.95 21.0232 28.7357 20.6488C28.5215 20.2744 28.1919 19.9793 27.7963 19.8075ZM22 26C17.758 25.9954 13.691 24.3082 10.6914 21.3086C7.69184 18.309 6.00464 14.242 6.00001 9.99999C5.99531 8.77935 6.43507 7.59874 7.23718 6.67862C8.03929 5.75851 9.14889 5.16182 10.3588 4.99999C10.3583 5.00498 10.3583 5.01 10.3588 5.01499L12.9838 10.89L10.4 13.9825C10.3738 14.0127 10.35 14.0448 10.3288 14.0787C10.1407 14.3674 10.0303 14.6997 10.0084 15.0436C9.9865 15.3874 10.0538 15.7311 10.2038 16.0412C11.3363 18.3575 13.67 20.6737 16.0113 21.805C16.3237 21.9536 16.6694 22.0185 17.0144 21.9935C17.3595 21.9686 17.6922 21.8545 17.98 21.6625C18.0121 21.6409 18.043 21.6175 18.0725 21.5925L21.1113 19L26.9863 21.6312C26.9863 21.6312 26.9963 21.6312 27 21.6312C26.8402 22.8428 26.2444 23.9547 25.3241 24.7588C24.4038 25.5628 23.2221 26.0041 22 26Z" fill="#AF9F8D"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="/" aria-label="Whatsapp">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-9 xl:w-7 w-5 h-full" viewBox="0 0 32 32" fill="none">
                                        <path d="M23.4474 18.105L19.4474 16.105C19.29 16.0265 19.1146 15.991 18.939 16.002C18.7634 16.0129 18.5939 16.07 18.4474 16.1675L16.6112 17.3925C15.7682 16.9291 15.0745 16.2354 14.6112 15.3925L15.8362 13.5562C15.9336 13.4098 15.9907 13.2402 16.0017 13.0646C16.0127 12.8891 15.9771 12.7137 15.8987 12.5562L13.8987 8.55625C13.8158 8.38884 13.6876 8.248 13.5288 8.14968C13.3699 8.05137 13.1867 7.99952 12.9999 8C11.6738 8 10.4021 8.52678 9.46437 9.46447C8.52669 10.4021 7.99991 11.6739 7.99991 13C8.00322 15.9164 9.1632 18.7123 11.2254 20.7745C13.2876 22.8367 16.0835 23.9967 18.9999 24C19.6565 24 20.3067 23.8707 20.9133 23.6194C21.52 23.3681 22.0711 22.9998 22.5354 22.5355C22.9997 22.0712 23.368 21.52 23.6193 20.9134C23.8706 20.3068 23.9999 19.6566 23.9999 19C24 18.8142 23.9484 18.6321 23.8508 18.474C23.7532 18.3159 23.6135 18.1881 23.4474 18.105ZM18.9999 22C16.6138 21.9974 14.3261 21.0483 12.6389 19.361C10.9516 17.6738 10.0026 15.3861 9.99991 13C9.99971 12.3064 10.2399 11.6342 10.6795 11.0977C11.1191 10.5612 11.731 10.1936 12.4112 10.0575L13.8462 12.9325L12.6249 14.75C12.5336 14.8869 12.4776 15.0442 12.4617 15.2079C12.4457 15.3717 12.4705 15.5368 12.5337 15.6888C13.2491 17.3892 14.6019 18.742 16.3024 19.4575C16.4548 19.5235 16.6212 19.5505 16.7866 19.5361C16.952 19.5217 17.1112 19.4663 17.2499 19.375L19.0762 18.1575L21.9512 19.5925C21.814 20.2734 21.4448 20.8856 20.9066 21.3247C20.3684 21.7637 19.6945 22.0024 18.9999 22ZM15.9999 3C13.7555 2.99951 11.5492 3.58011 9.59572 4.68529C7.64227 5.79046 6.00822 7.38256 4.85262 9.30662C3.69703 11.2307 3.05926 13.4212 3.00139 15.6648C2.94353 17.9085 3.46753 20.1289 4.52241 22.11L3.10366 26.3662C2.98614 26.7186 2.96908 27.0968 3.05441 27.4583C3.13973 27.8199 3.32405 28.1505 3.58672 28.4132C3.84939 28.6759 4.18003 28.8602 4.54157 28.9455C4.90311 29.0308 5.28127 29.0138 5.63366 28.8962L9.88991 27.4775C11.6334 28.4048 13.5652 28.9228 15.5387 28.992C17.5122 29.0613 19.4756 28.68 21.2797 27.8772C23.0839 27.0743 24.6815 25.871 25.9512 24.3586C27.2209 22.8462 28.1293 21.0644 28.6076 19.1484C29.0858 17.2325 29.1213 15.2328 28.7113 13.301C28.3013 11.3693 27.4567 9.55642 26.2414 7.9999C25.0262 6.44337 23.4723 5.18415 21.6978 4.31782C19.9232 3.45149 17.9746 3.00081 15.9999 3ZM15.9999 27C14.0661 27.0013 12.1663 26.4921 10.4924 25.5238C10.3699 25.4527 10.2336 25.4085 10.0927 25.394C9.95172 25.3796 9.80933 25.3953 9.67491 25.44L4.99991 27L6.55866 22.325C6.60359 22.1907 6.61947 22.0483 6.60525 21.9074C6.59103 21.7665 6.54702 21.6301 6.47616 21.5075C5.26362 19.4111 4.77679 16.9732 5.09119 14.572C5.40559 12.1707 6.50365 9.94027 8.21502 8.22674C9.92639 6.51321 12.1554 5.41234 14.5563 5.0949C16.9572 4.77747 19.3957 5.26122 21.4936 6.47111C23.5915 7.68099 25.2314 9.54939 26.1591 11.7864C27.0868 14.0235 27.2502 16.5042 26.6242 18.8436C25.9981 21.1831 24.6176 23.2505 22.6966 24.7253C20.7756 26.2 18.4217 26.9996 15.9999 27Z" fill="#AF9F8D"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="{info[0].social['facebook']}" aria-label="follow our facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-9 xl:w-7 w-5 h-full" viewBox="0 0 32 32" fill="none">
                                        <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM17 26.9538V19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18C21 17.7348 20.8946 17.4804 20.7071 17.2929C20.5196 17.1054 20.2652 17 20 17H17V14C17 13.4696 17.2107 12.9609 17.5858 12.5858C17.9609 12.2107 18.4696 12 19 12H21C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10H19C17.9391 10 16.9217 10.4214 16.1716 11.1716C15.4214 11.9217 15 12.9391 15 14V17H12C11.7348 17 11.4804 17.1054 11.2929 17.2929C11.1054 17.4804 11 17.7348 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19H15V26.9538C12.181 26.6964 9.56971 25.3622 7.7093 23.2287C5.8489 21.0952 4.8826 18.3266 5.0114 15.4988C5.1402 12.671 6.35419 10.0017 8.40085 8.04613C10.4475 6.09057 13.1693 4.9993 16 4.9993C18.8307 4.9993 21.5525 6.09057 23.5992 8.04613C25.6458 10.0017 26.8598 12.671 26.9886 15.4988C27.1174 18.3266 26.1511 21.0952 24.2907 23.2287C22.4303 25.3622 19.819 26.6964 17 26.9538Z" fill="#AF9F8D"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="{info[0].social['instagram']}" aria-label="follow our instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-9 xl:w-7 w-5 h-full" viewBox="0 0 32 32" fill="none">
                                        <path d="M16 10C14.8133 10 13.6533 10.3519 12.6666 11.0112C11.6799 11.6705 10.9108 12.6075 10.4567 13.7039C10.0026 14.8003 9.88378 16.0067 10.1153 17.1705C10.3468 18.3344 10.9182 19.4035 11.7574 20.2426C12.5965 21.0818 13.6656 21.6532 14.8295 21.8847C15.9933 22.1162 17.1997 21.9974 18.2961 21.5433C19.3925 21.0892 20.3295 20.3201 20.9888 19.3334C21.6481 18.3467 22 17.1867 22 16C21.9983 14.4092 21.3657 12.884 20.2408 11.7592C19.116 10.6343 17.5908 10.0017 16 10ZM16 20C15.2089 20 14.4355 19.7654 13.7777 19.3259C13.1199 18.8864 12.6072 18.2616 12.3045 17.5307C12.0017 16.7998 11.9225 15.9956 12.0769 15.2196C12.2312 14.4437 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4437 12.2312 15.2196 12.0769C15.9956 11.9225 16.7998 12.0017 17.5307 12.3045C18.2616 12.6072 18.8864 13.1199 19.3259 13.7777C19.7654 14.4355 20 15.2089 20 16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20ZM22 3H10C8.14409 3.00199 6.36477 3.74012 5.05245 5.05245C3.74012 6.36477 3.00199 8.14409 3 10V22C3.00199 23.8559 3.74012 25.6352 5.05245 26.9476C6.36477 28.2599 8.14409 28.998 10 29H22C23.8559 28.998 25.6352 28.2599 26.9476 26.9476C28.2599 25.6352 28.998 23.8559 29 22V10C28.998 8.14409 28.2599 6.36477 26.9476 5.05245C25.6352 3.74012 23.8559 3.00199 22 3ZM27 22C27 23.3261 26.4732 24.5979 25.5355 25.5355C24.5979 26.4732 23.3261 27 22 27H10C8.67392 27 7.40215 26.4732 6.46447 25.5355C5.52678 24.5979 5 23.3261 5 22V10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5H22C23.3261 5 24.5979 5.52678 25.5355 6.46447C26.4732 7.40215 27 8.67392 27 10V22ZM24 9.5C24 9.79667 23.912 10.0867 23.7472 10.3334C23.5824 10.58 23.3481 10.7723 23.074 10.8858C22.7999 10.9994 22.4983 11.0291 22.2074 10.9712C21.9164 10.9133 21.6491 10.7704 21.4393 10.5607C21.2296 10.3509 21.0867 10.0836 21.0288 9.79264C20.9709 9.50166 21.0007 9.20006 21.1142 8.92597C21.2277 8.65189 21.42 8.41762 21.6666 8.2528C21.9133 8.08797 22.2033 8 22.5 8C22.8978 8 23.2794 8.15804 23.5607 8.43934C23.842 8.72064 24 9.10218 24 9.5Z" fill="#AF9F8D"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                
            </div>
            
        </div>
    </div>
</header>

<!-- Mobile -->
<header class="block xl:hidden">
    <nav class="absolute top-10 left-0 flex justify-center items-center w-full z-50">
        <a data-sveltekit-reload href="/" class="md:w-56 w-40 flex flex-shrink-0">
            {#if showLogo}                
                {#if isAccommodationSubRoute}
                    <img src="/images/navbar/lembongan-blacklogo.webp" 
                    srcset="/images/navbar/lembongan-blacklogo.webp 160w"
                    width="160" height="79"
                    class="h-full w-full" alt="TRM Lembongan logo">
                {:else}
                    <img src="/images/navbar/lembongan-whitelogo-mob.webp"
                    srcset="/images/navbar/lembongan-whitelogo-mob.webp 160w" 
                    width="160" height="79"
                    loading="lazy"
                    fetchpriority="high" class="h-full w-full" alt="TRM Lembongan logo">
                {/if}
            {/if}
        </a>
    </nav>

    <div class="fixed bottom-4 left-0 flex flex-col gap-4 w-full z-50 px-4 xl:hidden">
        <!-- <a href="/" class="rounded-xl text-center py-3 w-full bg-[#AF9F8D] hover:bg-[#3B3422] duration-300 transition-all font-marcel text-white text-xl uppercase shadow-lg shadow-black/50">book now</a> -->
        
        <div class="flex gap-1 bg-none">

            <a href="/" class="shadow-sm shadow-black/50 rounded-lg w-7/12 text-center py-3  bg-[#AF9F8D] hover:bg-[#3B3422] duration-300 transition-all font-marcel text-white text-xl uppercase ">book now</a>
            
            
            <a href="{info[0].social.walink}" class="shadow-sm shadow-black/50 flex justify-center items-center gap-2 rounded-lg w-5/12 text-center py-3 px-2 text-[.9rem] bg-[#827668] hover:bg-[#5f564c] duration-300 transition-all font-marcel text-white uppercase ">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-white" stroke="currentColor" stroke-width="2" 
                    stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 
                    8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/>
                </svg>
                Chat Now
            </a>
        </div>

        <ul class="flex justify-between items-center px-8 py-3 bg-white rounded-xl shadow-2xl shadow-[rgba(107,99,81,0.4)] ">
            
            <li class="flex items-center p-3 {isHome ? 'bg-[#EEEADE] rounded-xl' : ''}">
                <a data-sveltekit-reload href="/" aria-label="button menu home">
                    {#if isHome}
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 28 28" fill="none">
                        <path d="M24.5 12.6383V22.75C24.5 23.2141 24.3156 23.6593 23.9874 23.9874C23.6592 24.3156 23.2141 24.5 22.75 24.5H18.375C17.9109 24.5 17.4658 24.3156 17.1376 23.9874C16.8094 23.6593 16.625 23.2141 16.625 22.75V18.375C16.625 18.1429 16.5328 17.9204 16.3687 17.7563C16.2046 17.5922 15.9821 17.5 15.75 17.5H12.25C12.0179 17.5 11.7954 17.5922 11.6313 17.7563C11.4672 17.9204 11.375 18.1429 11.375 18.375V22.75C11.375 23.2141 11.1906 23.6593 10.8624 23.9874C10.5342 24.3156 10.0891 24.5 9.625 24.5H5.25C4.78587 24.5 4.34075 24.3156 4.01256 23.9874C3.68437 23.6593 3.5 23.2141 3.5 22.75V12.6383C3.49996 12.3961 3.5502 12.1565 3.64754 11.9347C3.74487 11.7129 3.88719 11.5138 4.06547 11.3498L12.8155 3.09422L12.8275 3.08219C13.1497 2.78921 13.5695 2.62686 14.0049 2.62686C14.4404 2.62686 14.8602 2.78921 15.1823 3.08219C15.1861 3.08647 15.1901 3.09049 15.1944 3.09422L23.9444 11.3498C24.1209 11.5147 24.2614 11.7142 24.357 11.9359C24.4526 12.1577 24.5013 12.3968 24.5 12.6383Z" fill="#9A8B79"/>
                    </svg>
                    {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 28 28" fill="none">
                        <path d="M23.9345 11.3498L15.1845 3.09422C15.1803 3.09049 15.1762 3.08647 15.1725 3.08219C14.8503 2.78921 14.4305 2.62686 13.9951 2.62686C13.5596 2.62686 13.1398 2.78921 12.8177 3.08219L12.8056 3.09422L4.06547 11.3498C3.88719 11.5138 3.74487 11.7129 3.64754 11.9347C3.5502 12.1565 3.49996 12.3961 3.5 12.6383V22.75C3.5 23.2141 3.68437 23.6593 4.01256 23.9874C4.34075 24.3156 4.78587 24.5 5.25 24.5H10.5C10.9641 24.5 11.4092 24.3156 11.7374 23.9874C12.0656 23.6593 12.25 23.2141 12.25 22.75V17.5H15.75V22.75C15.75 23.2141 15.9344 23.6593 16.2626 23.9874C16.5908 24.3156 17.0359 24.5 17.5 24.5H22.75C23.2141 24.5 23.6592 24.3156 23.9874 23.9874C24.3156 23.6593 24.5 23.2141 24.5 22.75V12.6383C24.5 12.3961 24.4498 12.1565 24.3525 11.9347C24.2551 11.7129 24.1128 11.5138 23.9345 11.3498ZM22.75 22.75H17.5V17.5C17.5 17.0359 17.3156 16.5908 16.9874 16.2626C16.6592 15.9344 16.2141 15.75 15.75 15.75H12.25C11.7859 15.75 11.3408 15.9344 11.0126 16.2626C10.6844 16.5908 10.5 17.0359 10.5 17.5V22.75H5.25V12.6383L5.26203 12.6273L14 4.375L22.7391 12.6252L22.7511 12.6361L22.75 22.75Z" fill="#9A8B79"/>
                    </svg>
                    {/if} 
                </a>
            </li>

            

            <li class="flex items-center p-3 {isAccommodations ? 'bg-[#EEEADE] rounded-xl' : ''}">
                <a data-sveltekit-reload href="/accommodations" aria-label="button menu accommodations">
                    {#if isAccommodations}
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 29 28" fill="none">
                        <path d="M23.25 7.875H3.125V5.25C3.125 5.01794 3.03281 4.79538 2.86872 4.63128C2.70462 4.46719 2.48206 4.375 2.25 4.375C2.01794 4.375 1.79538 4.46719 1.63128 4.63128C1.46719 4.79538 1.375 5.01794 1.375 5.25V22.75C1.375 22.9821 1.46719 23.2046 1.63128 23.3687C1.79538 23.5328 2.01794 23.625 2.25 23.625C2.48206 23.625 2.70462 23.5328 2.86872 23.3687C3.03281 23.2046 3.125 22.9821 3.125 22.75V19.25H25.875V22.75C25.875 22.9821 25.9672 23.2046 26.1313 23.3687C26.2954 23.5328 26.5179 23.625 26.75 23.625C26.9821 23.625 27.2046 23.5328 27.3687 23.3687C27.5328 23.2046 27.625 22.9821 27.625 22.75V12.25C27.625 11.0897 27.1641 9.97688 26.3436 9.15641C25.5231 8.33594 24.4103 7.875 23.25 7.875ZM3.125 9.625H11V17.5H3.125V9.625Z" fill="#9A8B79"/>
                    </svg>
                    {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 29 28" fill="none">
                        <path d="M23.25 7.875H3.125V5.25C3.125 5.01794 3.03281 4.79538 2.86872 4.63128C2.70462 4.46719 2.48206 4.375 2.25 4.375C2.01794 4.375 1.79538 4.46719 1.63128 4.63128C1.46719 4.79538 1.375 5.01794 1.375 5.25V22.75C1.375 22.9821 1.46719 23.2046 1.63128 23.3687C1.79538 23.5328 2.01794 23.625 2.25 23.625C2.48206 23.625 2.70462 23.5328 2.86872 23.3687C3.03281 23.2046 3.125 22.9821 3.125 22.75V19.25H25.875V22.75C25.875 22.9821 25.9672 23.2046 26.1313 23.3687C26.2954 23.5328 26.5179 23.625 26.75 23.625C26.9821 23.625 27.2046 23.5328 27.3687 23.3687C27.5328 23.2046 27.625 22.9821 27.625 22.75V12.25C27.625 11.0897 27.1641 9.97688 26.3436 9.15641C25.5231 8.33594 24.4103 7.875 23.25 7.875ZM3.125 9.625H11V17.5H3.125V9.625ZM12.75 17.5V9.625H23.25C23.9462 9.625 24.6139 9.90156 25.1062 10.3938C25.5984 10.8861 25.875 11.5538 25.875 12.25V17.5H12.75Z" fill="#9A8B79"/>
                    </svg>
                    {/if}
                </a>
            </li>
         
        
            <li class="flex items-center p-3 {isSpecialOffer ? 'bg-[#EEEADE] rounded-xl' : ''}">
                <a data-sveltekit-reload href="/special-offer" aria-label="button menu oofers">
                    {#if isSpecialOffer}
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M22.8103 12.75L13.5 3.43969C13.3612 3.2998 13.196 3.18889 13.014 3.11341C12.832 3.03792 12.6368 2.99938 12.4397 3.00001H3.75001C3.5511 3.00001 3.36033 3.07903 3.21968 3.21968C3.07903 3.36033 3.00001 3.5511 3.00001 3.75001V12.4397C2.99938 12.6368 3.03792 12.832 3.11341 13.014C3.18889 13.196 3.2998 13.3612 3.43969 13.5L12.75 22.8103C12.8893 22.9496 13.0547 23.0602 13.2367 23.1356C13.4187 23.211 13.6138 23.2498 13.8108 23.2498C14.0078 23.2498 14.2029 23.211 14.3849 23.1356C14.5669 23.0602 14.7323 22.9496 14.8716 22.8103L22.8103 14.8716C22.9496 14.7323 23.0602 14.5669 23.1356 14.3849C23.211 14.2029 23.2498 14.0078 23.2498 13.8108C23.2498 13.6138 23.211 13.4187 23.1356 13.2367C23.0602 13.0547 22.9496 12.8893 22.8103 12.75ZM7.87501 9.00001C7.6525 9.00001 7.435 8.93403 7.24999 8.81041C7.06499 8.68679 6.92079 8.51109 6.83564 8.30553C6.75049 8.09996 6.72822 7.87376 6.77162 7.65553C6.81503 7.4373 6.92218 7.23685 7.07951 7.07951C7.23685 6.92218 7.4373 6.81503 7.65553 6.77162C7.87376 6.72822 8.09996 6.75049 8.30553 6.83564C8.51109 6.92079 8.68679 7.06499 8.81041 7.24999C8.93403 7.435 9.00001 7.6525 9.00001 7.87501C9.00001 8.17338 8.88148 8.45952 8.6705 8.6705C8.45952 8.88148 8.17338 9.00001 7.87501 9.00001Z" fill="#9A8B79"/>
                        </svg>    
                        {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M22.8103 12.75L13.5 3.43969C13.3612 3.2998 13.196 3.18889 13.014 3.11341C12.832 3.03792 12.6368 2.99938 12.4397 3.00001H3.75001C3.5511 3.00001 3.36033 3.07903 3.21968 3.21968C3.07903 3.36033 3.00001 3.5511 3.00001 3.75001V12.4397C2.99938 12.6368 3.03792 12.832 3.11341 13.014C3.18889 13.196 3.2998 13.3612 3.43969 13.5L12.75 22.8103C12.8893 22.9496 13.0547 23.0602 13.2367 23.1356C13.4187 23.211 13.6138 23.2498 13.8108 23.2498C14.0078 23.2498 14.2029 23.211 14.3849 23.1356C14.5669 23.0602 14.7323 22.9496 14.8716 22.8103L22.8103 14.8716C22.9496 14.7323 23.0602 14.5669 23.1356 14.3849C23.211 14.2029 23.2498 14.0078 23.2498 13.8108C23.2498 13.6138 23.211 13.4187 23.1356 13.2367C23.0602 13.0547 22.9496 12.8893 22.8103 12.75ZM13.8103 21.75L4.50001 12.4397V4.50001H12.4397L21.75 13.8103L13.8103 21.75ZM9.00001 7.87501C9.00001 8.09751 8.93403 8.31502 8.81041 8.50002C8.68679 8.68503 8.51109 8.82922 8.30553 8.91437C8.09996 8.99952 7.87376 9.0218 7.65553 8.97839C7.4373 8.93498 7.23685 8.82784 7.07951 8.6705C6.92218 8.51317 6.81503 8.31271 6.77162 8.09448C6.72822 7.87626 6.75049 7.65006 6.83564 7.44449C6.92079 7.23892 7.06499 7.06322 7.24999 6.9396C7.435 6.81599 7.6525 6.75001 7.87501 6.75001C8.17338 6.75001 8.45952 6.86853 8.6705 7.07951C8.88148 7.29049 9.00001 7.57664 9.00001 7.87501Z" fill="#9A8B79"/>
                        </svg>
                    {/if}
                </a>
            </li>

            <li class="flex items-center p-3 {isDining ? 'bg-[#EEEADE] rounded-xl' : ''}">
                <a data-sveltekit-reload href="/dine" aria-label="button menu dining">
                    {#if isDining}
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 29 28" fill="none">
                            <path d="M24.125 4.37501V24.5C24.125 24.7321 24.0328 24.9546 23.8687 25.1187C23.7046 25.2828 23.4821 25.375 23.25 25.375C23.0179 25.375 22.7954 25.2828 22.6313 25.1187C22.4672 24.9546 22.375 24.7321 22.375 24.5V19.25H17.125C16.8929 19.25 16.6704 19.1578 16.5063 18.9937C16.3422 18.8296 16.25 18.6071 16.25 18.375C16.2906 16.279 16.5554 14.1934 17.0397 12.1538C18.1094 7.72516 20.1372 4.75672 22.9055 3.5711C23.0385 3.5141 23.1836 3.49101 23.3278 3.50388C23.472 3.51676 23.6107 3.56519 23.7316 3.64486C23.8524 3.72453 23.9516 3.83293 24.0203 3.96036C24.089 4.08779 24.1249 4.23026 24.125 4.37501ZM13.613 4.23172C13.5958 4.11683 13.556 4.0065 13.4958 3.90717C13.4355 3.80783 13.3561 3.72149 13.2622 3.65316C13.1682 3.58484 13.0616 3.5359 12.9486 3.50922C12.8355 3.48253 12.7183 3.47862 12.6037 3.49771C12.4891 3.51681 12.3795 3.55853 12.2812 3.62045C12.1829 3.68236 12.0979 3.76323 12.0312 3.85833C11.9645 3.95343 11.9174 4.06086 11.8926 4.17435C11.8679 4.28785 11.866 4.40514 11.887 4.51938L12.738 9.62501H10.125V4.37501C10.125 4.14294 10.0328 3.92038 9.86872 3.75629C9.70462 3.59219 9.48206 3.50001 9.25 3.50001C9.01794 3.50001 8.79538 3.59219 8.63128 3.75629C8.46719 3.92038 8.375 4.14294 8.375 4.37501V9.62501H5.76203L6.61297 4.51938C6.63402 4.40514 6.63211 4.28785 6.60736 4.17435C6.58261 4.06086 6.5355 3.95343 6.46879 3.85833C6.40208 3.76323 6.3171 3.68236 6.21881 3.62045C6.12052 3.55853 6.01089 3.51681 5.89631 3.49771C5.78172 3.47862 5.66448 3.48253 5.55143 3.50922C5.43837 3.5359 5.33176 3.58484 5.23781 3.65316C5.14386 3.72149 5.06446 3.80783 5.00424 3.90717C4.94401 4.0065 4.90417 4.11683 4.88703 4.23172L4.01203 9.48173C4.00418 9.52908 4.00016 9.577 4 9.62501C4.00175 10.8651 4.44179 12.0647 5.24236 13.0118C6.04293 13.9588 7.15249 14.5924 8.375 14.8006V24.5C8.375 24.7321 8.46719 24.9546 8.63128 25.1187C8.79538 25.2828 9.01794 25.375 9.25 25.375C9.48206 25.375 9.70462 25.2828 9.86872 25.1187C10.0328 24.9546 10.125 24.7321 10.125 24.5V14.8006C11.3475 14.5924 12.4571 13.9588 13.2576 13.0118C14.0582 12.0647 14.4983 10.8651 14.5 9.62501C14.4998 9.577 14.4958 9.52908 14.488 9.48173L13.613 4.23172Z" fill="#9A8B79"/>
                        </svg>
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 29 28" fill="none">
                            <path d="M8.37501 9.62498V4.37498C8.37501 4.14291 8.4672 3.92035 8.63129 3.75626C8.79538 3.59216 9.01794 3.49998 9.25001 3.49998C9.48207 3.49998 9.70463 3.59216 9.86873 3.75626C10.0328 3.92035 10.125 4.14291 10.125 4.37498V9.62498C10.125 9.85704 10.0328 10.0796 9.86873 10.2437C9.70463 10.4078 9.48207 10.5 9.25001 10.5C9.01794 10.5 8.79538 10.4078 8.63129 10.2437C8.4672 10.0796 8.37501 9.85704 8.37501 9.62498ZM24.125 4.37498V24.5C24.125 24.732 24.0328 24.9546 23.8687 25.1187C23.7046 25.2828 23.4821 25.375 23.25 25.375C23.0179 25.375 22.7954 25.2828 22.6313 25.1187C22.4672 24.9546 22.375 24.732 22.375 24.5V19.25H17.125C16.8929 19.25 16.6704 19.1578 16.5063 18.9937C16.3422 18.8296 16.25 18.607 16.25 18.375C16.2906 16.279 16.5554 14.1934 17.0397 12.1537C18.1094 7.72513 20.1372 4.75669 22.9055 3.57107C23.0385 3.51407 23.1836 3.49098 23.3278 3.50385C23.472 3.51672 23.6107 3.56516 23.7316 3.64483C23.8524 3.7245 23.9516 3.8329 24.0203 3.96033C24.089 4.08775 24.1249 4.23023 24.125 4.37498ZM22.375 5.89529C18.8564 8.58263 18.1674 15.1287 18.0328 17.5H22.375V5.89529ZM13.613 4.23169C13.5958 4.1168 13.556 4.00647 13.4958 3.90714C13.4355 3.8078 13.3561 3.72146 13.2622 3.65313C13.1683 3.58481 13.0616 3.53587 12.9486 3.50919C12.8355 3.4825 12.7183 3.47859 12.6037 3.49768C12.4891 3.51678 12.3795 3.5585 12.2812 3.62042C12.1829 3.68233 12.0979 3.7632 12.0312 3.8583C11.9645 3.9534 11.9174 4.06083 11.8926 4.17432C11.8679 4.28782 11.866 4.40511 11.887 4.51935L12.75 9.69388C12.75 10.6221 12.3813 11.5124 11.7249 12.1688C11.0685 12.8251 10.1783 13.1939 9.25001 13.1939C8.32175 13.1939 7.43151 12.8251 6.77513 12.1688C6.11876 11.5124 5.75001 10.6221 5.75001 9.69388L6.61188 4.51935C6.63294 4.40511 6.63103 4.28782 6.60627 4.17432C6.58152 4.06083 6.53442 3.9534 6.46771 3.8583C6.401 3.7632 6.31602 3.68233 6.21773 3.62042C6.11944 3.5585 6.0098 3.51678 5.89522 3.49768C5.78064 3.47859 5.6634 3.4825 5.55034 3.50919C5.43728 3.53587 5.33067 3.58481 5.23673 3.65313C5.14278 3.72146 5.06338 3.8078 5.00315 3.90714C4.94293 4.00647 4.90308 4.1168 4.88595 4.23169L4.01095 9.48169C4.00346 9.52908 3.9998 9.577 4.00001 9.62498C4.00176 10.8651 4.44179 12.0647 5.24236 13.0117C6.04293 13.9588 7.1525 14.5924 8.37501 14.8006V24.5C8.37501 24.732 8.4672 24.9546 8.63129 25.1187C8.79538 25.2828 9.01794 25.375 9.25001 25.375C9.48207 25.375 9.70463 25.2828 9.86873 25.1187C10.0328 24.9546 10.125 24.732 10.125 24.5V14.8006C11.3475 14.5924 12.4571 13.9588 13.2577 13.0117C14.0582 12.0647 14.4983 10.8651 14.5 9.62498C14.4999 9.57697 14.4958 9.52905 14.488 9.48169L13.613 4.23169Z" fill="#9A8B79"/>
                        </svg>
                    {/if}
                </a>
            </li>


            <li class="flex items-center p-3">
                <button on:click={() => (drawerMobile = false)} aria-label="button menu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 28 28" fill="none">
                        <path d="M14 10.5C13.3078 10.5 12.6311 10.7053 12.0555 11.0899C11.4799 11.4744 11.0313 12.0211 10.7664 12.6606C10.5015 13.3002 10.4322 14.0039 10.5673 14.6828C10.7023 15.3618 11.0356 15.9854 11.5251 16.4749C12.0146 16.9644 12.6383 17.2977 13.3172 17.4328C13.9961 17.5678 14.6999 17.4985 15.3394 17.2336C15.9789 16.9687 16.5256 16.5201 16.9101 15.9445C17.2947 15.3689 17.5 14.6922 17.5 14C17.5 13.0717 17.1313 12.1815 16.4749 11.5251C15.8185 10.8688 14.9283 10.5 14 10.5ZM14 15.75C13.6539 15.75 13.3155 15.6474 13.0278 15.4551C12.74 15.2628 12.5157 14.9895 12.3832 14.6697C12.2508 14.3499 12.2161 13.9981 12.2836 13.6586C12.3512 13.3191 12.5178 13.0073 12.7626 12.7626C13.0073 12.5178 13.3191 12.3512 13.6586 12.2836C13.9981 12.2161 14.3499 12.2508 14.6697 12.3832C14.9895 12.5157 15.2628 12.74 15.4551 13.0278C15.6474 13.3155 15.75 13.6539 15.75 14C15.75 14.4641 15.5656 14.9092 15.2374 15.2374C14.9092 15.5656 14.4641 15.75 14 15.75ZM14 8.75C14.6922 8.75 15.3689 8.54473 15.9445 8.16014C16.5201 7.77556 16.9687 7.22893 17.2336 6.58939C17.4985 5.94985 17.5678 5.24612 17.4328 4.56719C17.2977 3.88825 16.9644 3.26461 16.4749 2.77513C15.9854 2.28564 15.3618 1.9523 14.6828 1.81725C14.0039 1.6822 13.3002 1.75152 12.6606 2.01642C12.0211 2.28133 11.4744 2.72993 11.0899 3.30551C10.7053 3.88108 10.5 4.55777 10.5 5.25C10.5 6.17826 10.8688 7.0685 11.5251 7.72488C12.1815 8.38125 13.0717 8.75 14 8.75ZM14 3.5C14.3461 3.5 14.6845 3.60264 14.9723 3.79493C15.26 3.98722 15.4843 4.26053 15.6168 4.58031C15.7492 4.90008 15.7839 5.25194 15.7164 5.59141C15.6489 5.93088 15.4822 6.2427 15.2374 6.48744C14.9927 6.73218 14.6809 6.89885 14.3414 6.96638C14.0019 7.0339 13.6501 6.99924 13.3303 6.86679C13.0105 6.73434 12.7372 6.51004 12.5449 6.22225C12.3526 5.93446 12.25 5.59612 12.25 5.25C12.25 4.78587 12.4344 4.34075 12.7626 4.01256C13.0908 3.68438 13.5359 3.5 14 3.5ZM14 19.25C13.3078 19.25 12.6311 19.4553 12.0555 19.8399C11.4799 20.2244 11.0313 20.7711 10.7664 21.4106C10.5015 22.0502 10.4322 22.7539 10.5673 23.4328C10.7023 24.1118 11.0356 24.7354 11.5251 25.2249C12.0146 25.7144 12.6383 26.0477 13.3172 26.1828C13.9961 26.3178 14.6999 26.2485 15.3394 25.9836C15.9789 25.7187 16.5256 25.2701 16.9101 24.6945C17.2947 24.1189 17.5 23.4422 17.5 22.75C17.5 21.8217 17.1313 20.9315 16.4749 20.2751C15.8185 19.6188 14.9283 19.25 14 19.25ZM14 24.5C13.6539 24.5 13.3155 24.3974 13.0278 24.2051C12.74 24.0128 12.5157 23.7395 12.3832 23.4197C12.2508 23.0999 12.2161 22.7481 12.2836 22.4086C12.3512 22.0691 12.5178 21.7573 12.7626 21.5126C13.0073 21.2678 13.3191 21.1012 13.6586 21.0336C13.9981 20.9661 14.3499 21.0008 14.6697 21.1332C14.9895 21.2657 15.2628 21.49 15.4551 21.7778C15.6474 22.0655 15.75 22.4039 15.75 22.75C15.75 23.2141 15.5656 23.6593 15.2374 23.9874C14.9092 24.3156 14.4641 24.5 14 24.5Z" fill="#9A8B79"/>
                    </svg>
                </button>
            </li>
        </ul>
    </div>



    <Drawer placement="bottom" class="h-screen w-full " transitionType="fly" transitionParams={transitionParamsBottom} bind:hidden={drawerMobile} id="sidebar8">
        <div class="relative p-4 h-full w-full border border-gold border-solid">
            <button type="button" on:click={() => (drawerMobile = true)} aria-label="close" class="absolute right-4 top-4 z-30">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M1 1L21 21" stroke="#AF9F8D" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M21 1L0.999999 21" stroke="#AF9F8D" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </button>

            <div class="flex flex-col h-full w-full justify-between items-center">

                <div class="relative pt-10  flex justify-center items-center w-full z-10">
                    <a data-sveltekit-reload href="/" class="md:w-56 w-40 flex flex-shrink-0">
                        <img src="/images/navbar/lembongan-blacklogo.webp" class="h-full w-full" alt="TRM Lembongan logo">
                    </a>
                </div>
            
                <ul class="font-marcel text-2xl text-gold text-center uppercase flex flex-col gap-5">
                    <li>
                        <a data-sveltekit-reload href="/">home</a>
                    </li>
                    <li>
                        <a data-sveltekit-reload href="/accommodations">accommodations</a>
                    </li>
                    <li>
                        <a data-sveltekit-reload href="/special-offer">Special Offer</a>
                    </li>
                    <li>
                        <a data-sveltekit-reload href="/explore">Explore</a>
                    </li>
                    <li>
                        <a data-sveltekit-reload href="/dine">Dine</a>
                    </li>
                    <li>
                        <a data-sveltekit-reload href="/gallery">Gallery</a>
                    </li>
                    <li>
                        <a data-sveltekit-reload href="/blog">Blog</a>
                    </li>
                    <li>
                        <a data-sveltekit-reload href="/contact-us">Contact Us</a>
                    </li>
                </ul>
                
                <div class="flex flex-col gap-6 pb-10">
                    <ul class="flex flex-col gap-1 text-center text-sm text-gold font-light font-manrope">
                        <li>
                            <a target="_blank" href="{info[0].address[2]}">
                                {info[0].address[1]}
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="{info[0].email['emaillink']}">
                                {info[0].email['email']}
                            </a>
                        </li>
                    </ul>
                    <ul class="flex gap-5 justify-center">
                        <li>
                            <a target="_blank" href="{info[0].phone['reservlink']}" aria-label="our phone">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.8472 14.8557L16.4306 12.8766L16.4184 12.871C16.1892 12.7729 15.939 12.7336 15.6907 12.7565C15.4424 12.7794 15.2037 12.8639 14.9963 13.0022C14.9718 13.0184 14.9484 13.0359 14.9259 13.0547L12.6441 15.0001C11.1984 14.2979 9.70595 12.8166 9.00376 11.3897L10.9519 9.07318C10.9706 9.04974 10.9884 9.0263 11.0053 9.00099C11.1407 8.79409 11.2229 8.55692 11.2445 8.31059C11.2661 8.06426 11.2264 7.81642 11.1291 7.58912V7.57787L9.14438 3.1538C9.0157 2.85686 8.79444 2.60951 8.51362 2.44865C8.2328 2.2878 7.9075 2.22208 7.58626 2.2613C6.31592 2.42847 5.14986 3.05234 4.30588 4.01639C3.4619 4.98045 2.99771 6.21876 3.00001 7.50005C3.00001 14.9438 9.05626 21.0001 16.5 21.0001C17.7813 21.0023 19.0196 20.5382 19.9837 19.6942C20.9477 18.8502 21.5716 17.6841 21.7388 16.4138C21.7781 16.0927 21.7125 15.7674 21.5518 15.4866C21.3911 15.2058 21.144 14.9845 20.8472 14.8557ZM16.5 19.5001C13.3185 19.4966 10.2682 18.2312 8.01856 15.9815C5.76888 13.7318 4.50348 10.6816 4.50001 7.50005C4.49648 6.58458 4.82631 5.69911 5.42789 5.00903C6.02947 4.31895 6.86167 3.87143 7.76907 3.75005C7.7687 3.7538 7.7687 3.75756 7.76907 3.7613L9.73782 8.16755L7.80001 10.4869C7.78034 10.5096 7.76247 10.5337 7.74657 10.5591C7.60549 10.7756 7.52273 11.0249 7.5063 11.2827C7.48988 11.5406 7.54035 11.7984 7.65282 12.031C8.5022 13.7682 10.2525 15.5054 12.0084 16.3538C12.2428 16.4652 12.502 16.5139 12.7608 16.4952C13.0196 16.4765 13.2692 16.3909 13.485 16.2469C13.5091 16.2307 13.5322 16.2132 13.5544 16.1944L15.8334 14.2501L20.2397 16.2235C20.2397 16.2235 20.2472 16.2235 20.25 16.2235C20.1301 17.1322 19.6833 17.9661 18.9931 18.5691C18.3028 19.1722 17.4166 19.5031 16.5 19.5001Z" fill="#AF9F8D"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="/" aria-label="our whatsapp">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.5857 13.5787L14.5857 12.0787C14.4676 12.0199 14.3361 11.9933 14.2044 12.0015C14.0727 12.0097 13.9455 12.0525 13.8357 12.1256L12.4585 13.0444C11.8263 12.6968 11.306 12.1766 10.9585 11.5444L11.8772 10.1672C11.9503 10.0573 11.9932 9.93016 12.0014 9.79848C12.0096 9.6668 11.983 9.53528 11.9241 9.41719L10.4241 6.41719C10.3619 6.29163 10.2658 6.186 10.1467 6.11226C10.0276 6.03853 9.89016 5.99964 9.75005 6C8.75549 6 7.80166 6.39509 7.0984 7.09835C6.39514 7.80161 6.00005 8.75544 6.00005 9.75C6.00253 11.9373 6.87252 14.0343 8.41916 15.5809C9.9658 17.1275 12.0628 17.9975 14.2501 18C14.7425 18 15.2301 17.903 15.6851 17.7145C16.1401 17.5261 16.5535 17.2499 16.9017 16.9017C17.2499 16.5534 17.5261 16.14 17.7146 15.6851C17.9031 15.2301 18.0001 14.7425 18.0001 14.25C18.0002 14.1107 17.9614 13.9741 17.8882 13.8555C17.8151 13.7369 17.7103 13.6411 17.5857 13.5787ZM14.2501 16.5C12.4605 16.498 10.7447 15.7862 9.47927 14.5208C8.21383 13.2553 7.50204 11.5396 7.50005 9.75C7.49991 9.2298 7.68002 8.72562 8.00974 8.32326C8.33945 7.9209 8.79841 7.64521 9.30849 7.54313L10.3847 9.69938L9.4688 11.0625C9.40036 11.1652 9.3583 11.2831 9.34636 11.406C9.33443 11.5288 9.35297 11.6526 9.40036 11.7666C9.93698 13.0419 10.9516 14.0565 12.2269 14.5931C12.3412 14.6426 12.466 14.6629 12.5901 14.6521C12.7141 14.6413 12.8336 14.5998 12.9376 14.5312L14.3072 13.6181L16.4635 14.6944C16.3606 15.205 16.0837 15.6642 15.6801 15.9935C15.2764 16.3228 14.771 16.5018 14.2501 16.5ZM12.0001 2.25C10.3167 2.24963 8.66201 2.68508 7.19691 3.51396C5.73182 4.34285 4.50628 5.53692 3.63959 6.97997C2.77289 8.42301 2.29457 10.0659 2.25117 11.7486C2.20777 13.4314 2.60077 15.0967 3.39193 16.5825L2.32787 19.7747C2.23973 20.039 2.22693 20.3226 2.29093 20.5938C2.35492 20.8649 2.49316 21.1129 2.69016 21.3099C2.88717 21.5069 3.13514 21.6451 3.4063 21.7091C3.67745 21.7731 3.96107 21.7603 4.22537 21.6722L7.41755 20.6081C8.72515 21.3036 10.174 21.6921 11.6541 21.744C13.1343 21.7959 14.6068 21.51 15.9599 20.9079C17.3131 20.3057 18.5112 19.4033 19.4635 18.269C20.4158 17.1346 21.0971 15.7983 21.4558 14.3613C21.8145 12.9244 21.8411 11.4246 21.5336 9.97578C21.2261 8.52701 20.5926 7.16732 19.6812 5.99992C18.7698 4.83253 17.6044 3.88811 16.2735 3.23836C14.9426 2.58861 13.4811 2.25061 12.0001 2.25ZM12.0001 20.25C10.5497 20.251 9.12483 19.8691 7.86943 19.1428C7.77751 19.0895 7.67532 19.0563 7.56962 19.0455C7.46391 19.0347 7.35712 19.0464 7.2563 19.08L3.75005 20.25L4.91912 16.7438C4.95281 16.643 4.96473 16.5362 4.95406 16.4305C4.94339 16.3248 4.91039 16.2226 4.85724 16.1306C3.94784 14.5584 3.58272 12.7299 3.81852 10.929C4.05432 9.12801 4.87786 7.4552 6.16139 6.17006C7.44491 4.88491 9.11667 4.05925 10.9173 3.82118C12.718 3.5831 14.5469 3.94591 16.1203 4.85333C17.6937 5.76074 18.9237 7.16204 19.6194 8.83983C20.3152 10.5176 20.4378 12.3781 19.9683 14.1327C19.4987 15.8873 18.4633 17.4379 17.0226 18.5439C15.5818 19.65 13.8164 20.2497 12.0001 20.25Z" fill="#AF9F8D"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="{info[0].social['facebook']}" aria-label="follow our facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12.75 20.2153V14.25H15C15.1989 14.25 15.3897 14.171 15.5303 14.0303C15.671 13.8897 15.75 13.6989 15.75 13.5C15.75 13.3011 15.671 13.1103 15.5303 12.9697C15.3897 12.829 15.1989 12.75 15 12.75H12.75V10.5C12.75 10.1022 12.908 9.72064 13.1893 9.43934C13.4706 9.15804 13.8522 9 14.25 9H15.75C15.9489 9 16.1397 8.92098 16.2803 8.78033C16.421 8.63968 16.5 8.44891 16.5 8.25C16.5 8.05109 16.421 7.86032 16.2803 7.71967C16.1397 7.57902 15.9489 7.5 15.75 7.5H14.25C13.4544 7.5 12.6913 7.81607 12.1287 8.37868C11.5661 8.94129 11.25 9.70435 11.25 10.5V12.75H9C8.80109 12.75 8.61033 12.829 8.46967 12.9697C8.32902 13.1103 8.25 13.3011 8.25 13.5C8.25 13.6989 8.32902 13.8897 8.46967 14.0303C8.61033 14.171 8.80109 14.25 9 14.25H11.25V20.2153C9.13575 20.0223 7.17728 19.0217 5.78198 17.4215C4.38667 15.8214 3.66195 13.7449 3.75855 11.6241C3.85515 9.50324 4.76564 7.50127 6.30064 6.0346C7.83563 4.56793 9.87696 3.74947 12 3.74947C14.1231 3.74947 16.1644 4.56793 17.6994 6.0346C19.2344 7.50127 20.1449 9.50324 20.2415 11.6241C20.3381 13.7449 19.6133 15.8214 18.218 17.4215C16.8227 19.0217 14.8643 20.0223 12.75 20.2153Z" fill="#AF9F8D"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="{info[0].social['instagram']}" aria-label="follow our instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 7.5C11.11 7.5 10.24 7.76392 9.49993 8.25839C8.75991 8.75285 8.18314 9.45566 7.84254 10.2779C7.50195 11.1002 7.41283 12.005 7.58647 12.8779C7.7601 13.7508 8.18868 14.5526 8.81802 15.182C9.44736 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.4988 10.8069 16.0243 9.66303 15.1806 8.81939C14.337 7.97575 13.1931 7.50124 12 7.5ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45542 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05764 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM20.25 16.5C20.25 17.4946 19.8549 18.4484 19.1516 19.1516C18.4484 19.8549 17.4946 20.25 16.5 20.25H7.5C6.50544 20.25 5.55161 19.8549 4.84835 19.1516C4.14509 18.4484 3.75 17.4946 3.75 16.5V7.5C3.75 6.50544 4.14509 5.55161 4.84835 4.84835C5.55161 4.14509 6.50544 3.75 7.5 3.75H16.5C17.4946 3.75 18.4484 4.14509 19.1516 4.84835C19.8549 5.55161 20.25 6.50544 20.25 7.5V16.5ZM18 7.125C18 7.3475 17.934 7.56501 17.8104 7.75002C17.6868 7.93502 17.5111 8.07922 17.3055 8.16436C17.1 8.24951 16.8738 8.27179 16.6555 8.22838C16.4373 8.18498 16.2368 8.07783 16.0795 7.9205C15.9222 7.76316 15.815 7.56271 15.7716 7.34448C15.7282 7.12625 15.7505 6.90005 15.8356 6.69448C15.9208 6.48891 16.065 6.31321 16.25 6.1896C16.435 6.06598 16.6525 6 16.875 6C17.1734 6 17.4595 6.11853 17.6705 6.3295C17.8815 6.54048 18 6.82663 18 7.125Z" fill="#AF9F8D"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    </Drawer>
</header>

<div class="fixed bottom-5 right-0  flex-col gap-4 z-30 hidden xl:flex">
    <a href="{info[0].social.walink}" target="_blank" class="shadow-md shadow-black/50 relative rounded-l-lg 2xl:h-11 h-9 2xl:ps-10 ps-8 pe-3 bg-[#D9D9D9] hover:bg-[#5f564c] transition-all duration-300 flex gap-2 items-center text-secondary hover:text-white font-semibold font-manrope 2xl:text-base text-sm">
        <div class="absolute -bottom-1 -left-4 flex 2xl:w-14 2xl:h-14 w-12 h-12">
            <svg viewBox="0 0 32 32" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"></path> 
                    <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"></path> 
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"></path> 
                    <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"></path> 
                    <defs> 
                        <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse"> <stop stop-color="#af9f8d"></stop> <stop offset="1" stop-color="#af9f8d"></stop> </linearGradient> 
                    </defs> 
                </g>
            </svg>
        </div>
        <p class="capitalize">Chat now - please click here</p>
    </a>
</div>