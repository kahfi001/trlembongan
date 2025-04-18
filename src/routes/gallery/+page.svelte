<script context="module" lang="ts">
    // Declare Fancybox as a global variable
    declare const Fancybox: any;
    
</script>

<script lang="ts">
    import type { PageServerData } from "./$types";
    import Footer from "$lib/components/footer.svelte";
    import Header from "$lib/components/header.svelte";
    import { onMount } from "svelte";
    import 'aos/dist/aos.css';
  
    // @ts-ignore
    import AOS from 'aos';
  
  
    export let data: PageServerData;
  
    let info = data?.info;
    let offers = data?.offers;
    let rooms = data?.accommodation;
    let seo = data?.seo;
    let gallery = data?.gallery ?? [];
  
    let activeFilter: string = "*";
    let isotopeInstance: any;
    let galleryEl: HTMLElement;
    
    function isYoutubeShorts(url: string): boolean {
        return /youtube\.com\/shorts\//.test(url);
    }
    // Function URL Youtube
    function extractYoutubeId(url: string): string {
    const youtubeRegularRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const youtubeShortsRegex = /(?:youtube\.com\/shorts\/|youtu\.be\/)([^"&?\/\s]{11})/;

    const matchRegular = url.match(youtubeRegularRegex);
    const matchShorts = url.match(youtubeShortsRegex);

    // Prioritize shorts link
    if (matchShorts) {
        return matchShorts[1];
    } else if (matchRegular) {
        return matchRegular[1];
    }

    return '';
    }

    function getYoutubeEmbedUrl(url: string): string {
    const id = extractYoutubeId(url);
    if (id) {
        return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&cc_load_policy=0&hl=en`;
    }
    return '';
    }

    interface FeaturedImage {
        path: string;
    }

    interface VideoLink {
    url: string;
    }

    interface Media {
    path: string;
    type: 'image' | 'video';
    }

    interface GalleryItemRaw {
    id: number;
    name: string;
    slug: string;
    featured_images: FeaturedImage[];
    video_link?: VideoLink[];
    }

    interface GalleryItem extends GalleryItemRaw {
    featured_media: Media[];
    }

    $: galleryWithMedia = gallery.map((item: GalleryItemRaw): GalleryItem => {
    const images = item.featured_images?.map((image: FeaturedImage): Media => ({
        path: image.path,
        type: 'image'
    })) ?? [];

    const videos = item.video_link?.map((video: VideoLink): Media => ({
        path: video.url,
        type: 'video'
    })) ?? [];

    return {
        ...item,
        featured_media: [...images, ...videos]
    };
    });

    function setActive(filter: string) {
    activeFilter = filter;
    if (isotopeInstance) {
        isotopeInstance.arrange({ filter: filter === '*' ? '*' : `.${filter}` });
    }
    }


    onMount(async () => {
        // Load Phosphor Icons
        const phosphorScript = document.createElement('script');
        phosphorScript.src = 'https://unpkg.com/@phosphor-icons/web';
        phosphorScript.async = true;
        document.head.appendChild(phosphorScript);
    
        // Load Fancybox
        const fancyboxScript = document.createElement('script');
        fancyboxScript.src = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js';
        fancyboxScript.async = true;
        document.head.appendChild(fancyboxScript);
    
        const fancyboxStyle = document.createElement('link');
        fancyboxStyle.rel = 'stylesheet';
        fancyboxStyle.href = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css';
        document.head.appendChild(fancyboxStyle);
    
        fancyboxScript.onload = () => {
            // @ts-ignore
            Fancybox.bind('[data-fancybox="gallery"]');
        };
    
        AOS.init({ duration: 2000 });
    
        // @ts-ignore: Tidak ada deklarasi tipe resmi
        const imagesLoaded = (await import('imagesloaded')).default;
    
        // @ts-ignore: Tidak ada deklarasi tipe resmi
        const Isotope = (await import('isotope-layout')).default;

        imagesLoaded(galleryEl, () => {
            isotopeInstance = new Isotope(galleryEl, {
                itemSelector: '.gallery-item',
                layoutMode: 'masonry',
                masonry: {
                    gutter: 0
                }
            });
        });

        console.log(galleryWithMedia);
    });
</script>
    

<svelte:head>
	<title>{seo[0].title.galtit}</title>

	<!-- Meta -->
	<meta name="title" content="{seo[0].meta_title.galmettit}" />
	<meta name="description" content="{seo[0].description.galdesc}" />
	<meta name="keywords" content="{seo[0].keywords.galkey}">

	<!-- Open Graph / Facebook -->
    <meta property="og:site_name" content="{info[0].name}">
	<meta property="og:title" content="{seo[0].og_title.galogtit}">
	<meta name="og:description" content="{seo[0].og_description.galogdesc}">
    <meta property="og:image" content="{seo[0].images_gallery[0]?.path ?? ''}" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{seo[0].twitter_title.galtwittit}" />
	<meta name="twitter:description" content="{seo[0].twitter_description.galtwitdesc}" />
	<meta name="twitter:image" content="{seo[0].images_gallery[0]?.path ?? ''}" />
</svelte:head>

<Header {info}{offers}{rooms}/>

<section class="w-full h-screen relative bg-slate-40">
	<div class="absolute left-16 inset-0 right-16 flex flex-col text-white text-start justify-center items-center z-10" data-aos="fade-up">
		<div class="flex flex-col w-full items-center">
			<h1 class="font-marcel 2xl:text-7xl xl:text-5xl sm:text-4xl text-3xl font-normal text-center" data-aos="fade-up">Gallery</h1>
		</div>
	</div>

	<div class="relative h-full w-full">
		<img src="{info[0].hero_images[5]?.path ?? ''}" class="h-full w-full object-cover" alt="Hero images">
		<div class="absolute inset-0 w-full h-full bg-gradient-to-b  from-slate-900  to-transparent opacity-50 "></div>
	</div>
</section>

<section class="bg-lightbg">

    <div class="container 2xl:px-14 md:px-10 px-0 2xl:py-36 md:py-32 py-20">

        <div class="relative 2xl:pb-16 xl:pb-14 pb-10 px-8 container flex flex-col 2xl:gap-10 xl:gap-8 gap-6 items-center justify-center">
            <div class="text-gold">
                <p class="font-marcel 2xl:text-5xl xl:text-4xl text-3xl flex flex-col items-center 2xl:gap-6 gap-4">
                    Images Gallery
                    <span class="w-1/2 bg-[#CFC9B9] h-1"></span>
                </p>
            </div>
        
            <!-- Filter Buttons -->
            <div class="flex flex-wrap 2xl:gap-3 gap-2 w-full h-full justify-center">
                <button 
                on:click={() => setActive("*")}
                class="2xl:py-4 xl:py-3 2xl:px-8 xl:px-6 px-4 py-2 text-gold bg-[#F6F3EB] rounded-xl font-manrope 2xl:text-2xl xl:text-xl md:text-base text-sm capitalize max-w-max"
                class:!bg-[#AF9F8D]={activeFilter === "*"}
                class:text-white={activeFilter === "*"}
                >
                all images
                </button>
        
                {#each gallery as item}
                <button 
                    on:click={() => setActive(item.slug)}
                    class="2xl:py-4 xl:py-3 2xl:px-8 xl:px-6 px-4 py-2 text-gold bg-[#F6F3EB] rounded-xl font-manrope 2xl:text-2xl xl:text-xl md:text-base text-sm capitalize max-w-max"
                    class:!bg-[#AF9F8D]={activeFilter === item.slug}
                    class:text-white={activeFilter === item.slug}
                >
                    {item.name}
                </button>
                {/each}
            </div>
        </div>
        
        <!-- Gallery Grid -->
        <div class="relative container">
            <div bind:this={galleryEl} id="gallery" class="my-8">
                {#each galleryWithMedia as item}
                    {#each item.featured_media as media}
                        <div class="gallery-item {item.slug} lg:w-1/3 w-1/2 p-1">
                            <a
                                href={media.type === 'video' && media.path.includes('youtu')
                                ? getYoutubeEmbedUrl(media.path)
                                : media.path}
                                data-fancybox="gallery"
                                data-type={media.type === 'video' ? 'video' : undefined}
                            >
                                {#if media.type === 'video' && media.path.includes('youtu')}
                                    <!-- Video Containment -->
                                    <div class={`overflow-hidden w-full ${
                                        isYoutubeShorts(media.path) ? 'aspect-[9/16]' : 'aspect-video'
                                      } pointer-events-none`}>
                                        <iframe
                                        src={getYoutubeEmbedUrl(media.path)}
                                        title={`Video preview of ${item.name}`}
                                        frameborder="0"
                                        allow="autoplay; encrypted-media; loop;"
                                        allowfullscreen
                                        class="w-full h-full "
                                        ></iframe>
                                    </div>
                                {:else}
                                    <img
                                        src={media.path}
                                        alt={item.name}
                                        class=" w-full h-auto object-cover"
                                    />
                                {/if}
                            </a>
                        </div>
                    {/each}
                {/each}
            </div>
        </div>

    </div>
</section>


<Footer {info} />


