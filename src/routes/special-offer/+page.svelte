<script lang="ts">
    import type { PageServerData } from "./$types";
	import Footer from "$lib/components/footer.svelte";
	import Header from "$lib/components/header.svelte";
    import { Tabs, TabItem } from 'flowbite-svelte';
	import { onMount } from "svelte";
	import { initSwiper } from "$lib/js/swiper";
    import 'aos/dist/aos.css';

    // @ts-ignore
	import AOS from 'aos';

    // svelte-ignore export_let_unused
        export let data: PageServerData;
        
        let info = data?.info;
        let offers = data?.offers;
        let rooms = data?.accommodation;
        let seo = data?.seo;

        interface Offer {
            id: number;
            name: string;
            type: string;
            category_type: string;
            featured_images: { path: string }[];
            excerpt: string;
            price: string;
            book_url: string;
        }
        
        type OfferCategory = "accommodation" | "dining" | "spa" | "activities";
        type OfferType = "lembonganoffers" | "trmoffers";

        // Deklarasi filteredOffers dengan tipe yang lebih ketat
        interface FilteredOffers {
            lembonganoffers: {
                accommodation: Offer[];
                dining: Offer[];
                spa: Offer[];
                activities: Offer[];
            };
            trmoffers: {
                accommodation: Offer[];
                dining: Offer[];
                spa: Offer[];
                activities: Offer[];
            };
        }

        // Fungsi utilitas untuk memfilter data berdasarkan type dan category
        const filterOffers = (type: string, category: string) => {
            return offers.filter((item: Offer) => 
                item.type === type && item.category_type === category
            );
        };

        // Tab utama untuk "Our Special Offers"
        const offerTabs = [
            { name: 'Lembongan Offers', dataKey: 'lembonganoffers' },
            { name: 'TRM Brand Offers', dataKey: 'trmoffers' }
        ];
        
        const offerCategories: OfferCategory[] = ['accommodation', 'dining', 'spa', 'activities'];

        let activeTab = 'lembonganoffers';
        let activeCategory = 'accommodation';

       // Filter data untuk setiap kategori dan type
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

        onMount(() => {
            initSwiper();

            AOS.init({
			    duration: 2000,
		    });
        });
</script>

<svelte:head>
    <title>{seo[0].title.offerstit}</title>

	<!-- Meta -->
	<meta name="title" content="{seo[0].meta_title.offersmettit}" />
	<meta name="description" content="{seo[0].description.offersmetdesc}" />
	<meta name="keywords" content="{seo[0].keywords.offerskey}">

	<!-- Open Graph / Facebook -->
    <meta property="og:site_name" content="{info[0].name}">
	<meta property="og:title" content="{seo[0].og_title.offersogtit}">
	<meta name="og:description" content="{seo[0].og_description.offersogdesc}">
    <meta property="og:image" content="{seo[0].images_offers[0]?.path ?? ''}" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{seo[0].twitter_title.offerstwittit}" />
	<meta name="twitter:description" content="{seo[0].twitter_description.offerstwitdesc}" />
	<meta name="twitter:image" content="{seo[0].images_offers[0]?.path ?? ''}" />
</svelte:head>

<Header {info}{offers}{rooms}/>

<section class="w-full h-screen relative bg-slate-40">
	<div class="relative h-full w-full">
		<img src="{info[0].hero_images[2]?.path ?? ''}" class="h-full w-full object-cover" alt="Hero images">
		<div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b  from-slate-900  to-transparent opacity-50 "></div>
        <div class="absolute inset-0 text-white font-marcel 2xl:text-7xl xl:text-6xl md:text-5xl text-4xl flex justify-center items-center w-full h-full ">
            <h1 class="flex" data-aos="fade-up">Special Offers</h1>
        </div>
    </div>
</section>

<section class="w-full h-full relative 2xl:py-36 xl:py-32 py-20 2xl:px-24 xl:px-20 px-8 bg-lightbg ">
    
    <Tabs contentClass="bg-lightbg " tabStyle="pill" defaultClass="flex justify-center items-center bg-lightbg ">
        {#each offerTabs as tab, index}
            <TabItem  open={tab.dataKey == activeTab} on:click={() => {
                activeTab = tab.dataKey;
                activeCategory = 'accommodation'; // Reset activeCategory saat tab berubah
            }}  activeClasses="2xl:px-12 xl:px-0 px-2 2xl:py-6 xl:py-4 py-4 2xl:text-3xl xl:text-2xl text-base 2xl:border-b-4 xl:border-b-2 border-b-2 border-secondary border-solid text-secondary font-manrope" inactiveClasses="2xl:px-12 xl:px-10 px-2 2xl:py-6 xl:py-4 py-4 2xl:text-3xl xl:text-2xl text-base text-gold font-manrope">
                
                <span slot="title">{tab.name}</span>

                <Tabs contentClass="bg-lightbg 2xl:pt-12 xl:pt-10 pt-16" tabStyle="pill" defaultClass="flex flex-wrap w-full items-center place-content-center place-items-center justify-center bg-lightbg 2xl:pt-28 xl:pt-24 pt-12">
                    {#each offerCategories as category}
                            <TabItem  open={category === activeCategory} 
                            on:click={() => activeCategory = category}  activeClasses="capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl bg-gold text-white" inactiveClasses="capitalize 2xl:px-10 xl:px-8 2xl: px-6 py-5 xl:py-3 font py-3 font-manrope 2xl:text-2xl xl:text-xl text text-base text-gold">
                                <span slot="title">{category}</span>

                                <div class="grid md:grid-cols-2 grid-cols-1 2xl:gap-x-20 xl:gap-x-16 2xl:gap-y-28 xl:gap-y-24 md:gap-x-16 gap-y-16">

                                    {#if filteredOffers[tab.dataKey as 'lembonganoffers' | 'trmoffers'][category] && filteredOffers[tab.dataKey as 'lembonganoffers' | 'trmoffers'][category].length > 0}
                                    
                                    {#each filteredOffers[tab.dataKey as 'lembonganoffers' | 'trmoffers'][category] as item}
                                        <div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-6">
                                            <img src="{item.featured_images[1]?.path || item.featured_images[0]?.path || ''}" class="aspect-[16/11] w-full h-full object-cover rounded-2xl object-center" alt="offers">
                                            <ul class="flex flex-col 2xl:gap-3 xl:gap-2 gap-4">
                                                <li class="font-marcel text-gold 2xl:text-4xl xl:text-3xl text-3xl xl:min-h-16 min-h-12 md:line-clamp-2">{item.name}</li>
                                                <li class="font-manrope text-secondary 2xl:text-xl xl:text-base text-base leading-7 xl:min-h-14 min-h-12 md:line-clamp-2">{@html item.excerpt}</li>
                                                <li class="font-manrope text-secondary font-semibold 2xl:text-xl xl:text-base text-base leading-7">{item.price}</li>
                                            </ul>
                                            <div class="flex 2xl:gap-4 xl:gap-3 gap-3">
                                                <a href="/special-offer/{item.slug}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">
                                                    view detail
                                                </a>
                                                    <a href="{item.book_url}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">
                                                    book now
                                                </a>
                                            </div>
                                        </div>
                                    {/each}
                                    
                                    {:else}
                                        <div class="col-span-2 font-manrope text-center text-secondary">
                                            No Offers Available
                                        </div>
                                    {/if}
                                </div>

                            </TabItem>
                    {/each}

                </Tabs>

            </TabItem>
        {/each}
        
        <!-- <TabItem  open activeClasses="2xl:px-12 xl:px-0 px-2 2xl:py-6 xl:py-4 py-4 2xl:text-3xl xl:text-2xl text-base 2xl:border-b-4 xl:border-b-2 border-b-2 border-secondary border-solid text-secondary font-manrope" inactiveClasses="2xl:px-12 xl:px-10 px-2 2xl:py-6 xl:py-4 py-4 2xl:text-3xl xl:text-2xl text-base text-gold font-manrope">
            
            <span slot="title">Our Special Offers</span>

            <Tabs contentClass="bg-lightbg 2xl:pt-12 xl:pt-10 pt-16" tabStyle="pill" defaultClass="flex flex-wrap w-full items-center place-content-center place-items-center justify-center bg-lightbg 2xl:pt-28 xl:pt-24 pt-12">
                <TabItem open activeClasses="capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl bg-gold text-white" inactiveClasses="capitalize 2xl:px-10 xl:px-8 2xl: px-6 py-5 xl:py-3 font py-3 font-manrope 2xl:text-2xl xl:text-xl text text-base text-gold">
                    <span slot="title">Accommodation</span>

                    <div class="grid md:grid-cols-2 grid-cols-1 2xl:gap-x-20 xl:gap-x-16 2xl:gap-y-28 xl:gap-y-24 md:gap-x-16 gap-y-16">
                        {#each filteredOffers.lembonganoffers.accommodation as item}
                        <div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-6">
                            <img src="{item.featured_images[0].path}" class="aspect-[16/10] w-full h-full object-cover rounded-2xl object-center" alt="offers">
                            <ul class="flex flex-col 2xl:gap-3 xl:gap-2 gap-4">
                                <li class="font-marcel text-gold 2xl:text-4xl xl:text-3xl text-3xl xl:min-h-16 min-h-12 md:line-clamp-2">{item.name}</li>
                                <li class="font-manrope text-secondary 2xl:text-xl xl:text-base text-base leading-7 xl:min-h-14 min-h-12 md:line-clamp-2">{@html item.excerpt}</li>
                                <li class="font-manrope text-secondary font-semibold 2xl:text-xl xl:text-base text-base leading-7">{item.price}</li>
                            </ul>
                            <div class="flex 2xl:gap-4 xl:gap-3 gap-3">
                                <a href="/special-offer/{item.slug}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">
                                    view detail
                                </a>
                                    <a href="{item.book_url}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">
                                    book now
                                </a>
                            </div>
                        </div>
                        {:else}
                        <div class="col-span-2 font-manrope text-center text-secondary">
                            No Offers Available
                        </div>
                        {/each}
                    </div>

                </TabItem>
                <TabItem  activeClasses="capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl bg-gold text-white" inactiveClasses="capitalize 2xl:px-10 xl:px-8  px-6 2xl:py-5 xl:py-3  py-3 font-manrope 2xl:text-2xl xl:text-xl text-base text-gold">
                    <span slot="title">Dining</span>

                    <div class="grid md:grid-cols-2 grid-cols-1 2xl:gap-x-20 xl:gap-x-16 2xl:gap-y-28 xl:gap-y-24 md:gap-x-16 gap-y-16">
                        {#each filteredOffers.lembonganoffers.dining as item}
                        <div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-6">
                            <img src="{item.featured_images[0].path}" class="aspect-[16/10] w-full h-full object-cover rounded-2xl" alt="offers">
                            <ul class="flex flex-col 2xl:gap-3 xl:gap-2 gap-4">
                                <li class="font-marcel text-gold 2xl:text-4xl xl:text-3xl text-3xl xl:min-h-16 min-h-12 md:line-clamp-2">{item.name}</li>
                                <li class="font-manrope text-secondary 2xl:text-xl xl:text-base text-base leading-7 xl:min-h-14 min-h-12 md:line-clamp-2">{@html item.excerpt}</li>
                                <li class="font-manrope text-secondary font-semibold 2xl:text-xl xl:text-base text-base leading-7">{item.price}</li>
                            </ul>
                            <div class="flex 2xl:gap-4 xl:gap-3 gap-3">
                                <a href="/special-offer/{item.slug}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">
                                    view detail
                                </a>
                                    <a href="{item.book_url}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">
                                    book now
                                </a>
                            </div>
                        </div>
                        {:else}
                        <div class="col-span-2 font-manrope text-center text-secondary">
                            No Offers Available
                        </div>
                        {/each}
                    </div>

                </TabItem>
                <TabItem  activeClasses="text-right capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl bg-gold text-white" inactiveClasses="capitalize 2xl:px-10 xl:px-8 w-max px-6 2xl:py-5 xl:py-3  py-3 font-manrope 2xl:text-2xl xl:text-xl  text-base text-gold">
                    <span slot="title">Spa</span>
                    
                    <div class="grid md:grid-cols-2 grid-cols-1 2xl:gap-x-20 xl:gap-x-16 2xl:gap-y-28 xl:gap-y-24 md:gap-x-16 gap-y-16">
                        {#each filteredOffers.lembonganoffers.spa as item}
                        <div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-6">
                            <img src="{item.featured_images[0].path}" class="aspect-[16/10] w-full h-full object-cover rounded-2xl" alt="offers">
                            <ul class="flex flex-col 2xl:gap-3 xl:gap-2 gap-4">
                                <li class="font-marcel text-gold 2xl:text-4xl xl:text-3xl text-3xl xl:min-h-16 min-h-12 md:line-clamp-2">{item.name}</li>
                                <li class="font-manrope text-secondary 2xl:text-xl xl:text-base text-base leading-7 xl:min-h-14 min-h-12 md:line-clamp-2">{@html item.excerpt}</li>
                                <li class="font-manrope text-secondary font-semibold 2xl:text-xl xl:text-base text-base leading-7">{item.price}</li>
                            </ul>
                            <div class="flex 2xl:gap-4 xl:gap-3 gap-3">
                                <a href="/special-offer/{item.slug}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">
                                    view detail
                                </a>
                                    <a href="{item.book_url}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">
                                    book now
                                </a>
                            </div>
                        </div>
                        {:else}
                        <div class="col-span-2 font-manrope text-center text-secondary">
                            No Offers Available
                        </div>
                        {/each}
                    </div>

                </TabItem>
                <TabItem  activeClasses="capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl bg-gold text-white" inactiveClasses="capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl text-base text-gold">
                    <span slot="title">Activities</span>
                    
                    <div class="grid md:grid-cols-2 grid-cols-1 2xl:gap-x-20 xl:gap-x-16 2xl:gap-y-28 xl:gap-y-24 md:gap-x-16 gap-y-16">
                        {#each filteredOffers.lembonganoffers.activities as item}
                        <div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-6">
                            <img src="{item.featured_images[0].path}" class="aspect-[16/10] w-full h-full object-cover rounded-2xl" alt="offers">
                            <ul class="flex flex-col 2xl:gap-3 xl:gap-2 gap-4">
                                <li class="font-marcel text-gold 2xl:text-4xl xl:text-3xl text-3xl xl:min-h-16 min-h-12 md:line-clamp-2">{item.name}</li>
                                <li class="font-manrope text-secondary 2xl:text-xl xl:text-base text-base leading-7 xl:min-h-14 min-h-12 md:line-clamp-2">{@html item.excerpt}</li>
                                <li class="font-manrope text-secondary font-semibold 2xl:text-xl xl:text-base text-base leading-7">{item.price}</li>
                            </ul>
                            <div class="flex 2xl:gap-4 xl:gap-3 gap-3">
                                <a href="/special-offer/{item.slug}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">
                                    view detail
                                </a>
                                    <a href="{item.book_url}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">
                                    book now
                                </a>
                            </div>
                        </div>
                        {:else}
                        <div class="col-span-2 font-manrope text-center text-secondary">
                            No Offers Available
                        </div>
                        {/each}
                    </div>

                </TabItem>
            </Tabs>

        </TabItem>
        <TabItem  activeClasses="2xl:px-12 xl:px-0 px-2 2xl:py-6 xl:py-4 py-4 2xl:text-3xl xl:text-2xl text-base 2xl:border-b-4 xl:border-b-2 border-b-2 border-secondary border-solid text-secondary font-manrope" inactiveClasses="2xl:px-12 xl:px-10 px-2 2xl:py-6 xl:py-4 py-4 2xl:text-3xl xl:text-2xl text-base text-gold font-manrope">
            <span slot="title">TRM Brands Offers</span>
            
            <Tabs contentClass="bg-lightbg 2xl:pt-12 xl:pt-10 pt-16" tabStyle="pill" defaultClass="flex flex-wrap w-full items-center place-content-center place-items-center justify-center bg-lightbg 2xl:pt-28 xl:pt-24 pt-12">
                <TabItem open activeClasses="capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl bg-gold text-white" inactiveClasses="capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl text-base text-gold">
                    <span slot="title">Accommodation</span>

                    <div class="grid md:grid-cols-2 grid-cols-1 2xl:gap-x-20 xl:gap-x-16 2xl:gap-y-28 xl:gap-y-24 md:gap-x-16 gap-y-16">
                        {#each filteredOffers.trmoffers.accommodation as item}
                        <div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-6">
                            <img src="{item.featured_images[0].path}" class="aspect-[16/10] w-full h-full object-cover rounded-2xl" alt="offers">
                            <ul class="flex flex-col 2xl:gap-3 xl:gap-2 gap-4">
                                <li class="font-marcel text-gold 2xl:text-4xl xl:text-3xl text-3xl xl:min-h-16 min-h-12 md:line-clamp-2">{item.name}</li>
                                <li class="font-manrope text-secondary 2xl:text-xl xl:text-base text-base leading-7 xl:min-h-14 min-h-12 md:line-clamp-2">{@html item.excerpt}</li>
                                <li class="font-manrope text-secondary font-semibold 2xl:text-xl xl:text-base text-base leading-7">{item.price}</li>
                            </ul>
                            <div class="flex 2xl:gap-4 xl:gap-3 gap-3">
                                <a href="/special-offer/{item.slug}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">
                                    view detail
                                </a>
                                    <a href="{item.book_url}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">
                                    book now
                                </a>
                            </div>
                        </div>
                        {:else}
                        <div class="col-span-2 font-manrope text-center text-secondary">
                            No Offers Available
                        </div>
                        {/each}
                    </div>
                    
                </TabItem>
                <TabItem activeClasses="capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl bg-gold text-white" inactiveClasses="capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl text-base text-gold">
                    <span slot="title">Dining</span>
                    
                    <div class="grid md:grid-cols-2 grid-cols-1 2xl:gap-x-20 xl:gap-x-16 2xl:gap-y-28 xl:gap-y-24 md:gap-x-16 gap-y-16">
                        {#each filteredOffers.trmoffers.dining as item}
                        <div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-6">
                            <img src="{item.featured_images[0].path}" class="aspect-[16/10] w-full h-full object-cover rounded-2xl" alt="offers">
                            <ul class="flex flex-col 2xl:gap-3 xl:gap-2 gap-4">
                                <li class="font-marcel text-gold 2xl:text-4xl xl:text-3xl text-3xl xl:min-h-16 min-h-12 md:line-clamp-2">{item.name}</li>
                                <li class="font-manrope text-secondary 2xl:text-xl xl:text-base text-base leading-7 xl:min-h-14 min-h-12 md:line-clamp-2">{@html item.excerpt}</li>
                                <li class="font-manrope text-secondary font-semibold 2xl:text-xl xl:text-base text-base leading-7">{item.price}</li>
                            </ul>
                            <div class="flex 2xl:gap-4 xl:gap-3 gap-3">
                                <a href="/special-offer/{item.slug}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">
                                    view detail
                                </a>
                                    <a href="{item.book_url}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">
                                    book now
                                </a>
                            </div>
                        </div>
                        {:else}
                        <div class="col-span-2 font-manrope text-center text-secondary">
                            No Offers Available
                        </div>
                        {/each}
                    </div>
                    
                </TabItem>
                <TabItem activeClasses="capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl bg-gold text-white" inactiveClasses="capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl text-base text-gold">
                    <span slot="title">Spa</span>
                    
                    <div class="grid md:grid-cols-2 grid-cols-1 2xl:gap-x-20 xl:gap-x-16 2xl:gap-y-28 xl:gap-y-24 md:gap-x-16 gap-y-16">
                        {#each filteredOffers.trmoffers.spa as item}
                        <div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-6">
                            <img src="{item.featured_images[0].path}" class="aspect-[16/10] w-full h-full object-cover rounded-2xl" alt="offers">
                            <ul class="flex flex-col 2xl:gap-3 xl:gap-2 gap-4">
                                <li class="font-marcel text-gold 2xl:text-4xl xl:text-3xl text-3xl xl:min-h-16 min-h-12 md:line-clamp-2">{item.name}</li>
                                <li class="font-manrope text-secondary 2xl:text-xl xl:text-base text-base leading-7 xl:min-h-14 min-h-12 md:line-clamp-2">{@html item.excerpt}</li>
                                <li class="font-manrope text-secondary font-semibold 2xl:text-xl xl:text-base text-base leading-7">{item.price}</li>
                            </ul>
                            <div class="flex 2xl:gap-4 xl:gap-3 gap-3">
                                <a href="/special-offer/{item.slug}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">
                                    view detail
                                </a>
                                    <a href="{item.book_url}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">
                                    book now
                                </a>
                            </div>
                        </div>
                        {:else}
                        <div class="col-span-2 font-manrope text-center text-secondary">
                            No Offers Available
                        </div>
                        {/each}
                    </div>
                    
                </TabItem>
                <TabItem activeClasses="capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl bg-gold text-white" inactiveClasses="capitalize 2xl:px-10 xl:px-8 px-6 2xl:py-5 xl:py-3 py-3 font-manrope 2xl:text-2xl xl:text-xl text-base text-gold">
                    <span slot="title">Activities</span>
                    
                    <div class="grid md:grid-cols-2 grid-cols-1 2xl:gap-x-20 xl:gap-x-16 2xl:gap-y-28 xl:gap-y-24 md:gap-x-16 gap-y-16">
                        {#each filteredOffers.trmoffers.activities as item}
                        <div class="flex flex-col 2xl:gap-8 xl:gap-6 gap-6">
                            <img src="{item.featured_images[0].path}" class="aspect-[16/10] w-full h-full object-cover rounded-2xl" alt="offers">
                            <ul class="flex flex-col 2xl:gap-3 xl:gap-2 gap-4">
                                <li class="font-marcel text-gold 2xl:text-4xl xl:text-3xl text-3xl xl:min-h-16 min-h-12 md:line-clamp-2">{item.name}</li>
                                <li class="font-manrope text-secondary 2xl:text-xl xl:text-base text-base leading-7 xl:min-h-14 min-h-12 md:line-clamp-2">{@html item.excerpt}</li>
                                <li class="font-manrope text-secondary font-semibold 2xl:text-xl xl:text-base text-base leading-7">{item.price}</li>
                            </ul>
                            <div class="flex 2xl:gap-4 xl:gap-3 gap-3">
                                <a href="/special-offer/{item.slug}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-gold border-gold border border-solid hover:text-white hover:bg-gold transition-all duration-300">
                                    view detail
                                </a>
                                    <a href="{item.book_url}" class="flex items-center font-manrope 2xl:text-2xl xl:text-xl text-base 2xl:px-10 xl:px-8 px-6 2xl:py-4 xl:py-3 py-3 capitalize text-white bg-gold hover:bg-[#827668] transition-all duration-300">
                                    book now
                                </a>
                            </div>
                        </div>
                        {:else}
                        <div class="col-span-2 font-manrope text-center text-secondary">
                            No Offers Available
                        </div>
                        {/each}
                    </div>

                </TabItem>
            </Tabs>

        </TabItem> -->

    </Tabs>

</section>

<Footer {info} />

