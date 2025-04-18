<script lang="ts">
	import { initSwiper } from '$lib/js/swiper';
	import { onMount } from 'svelte';
	

	export let popup;


	let popupModal = false;
	let isMobile = false;

	onMount(() => {
        initSwiper();
		isMobile = window.innerWidth <= 768;

		if (!sessionStorage.getItem('popupShown')) {
			setTimeout(() => {
				if (isMobile) {
					popupModal = true;
					sessionStorage.setItem('popupShown', 'true');
				} else {
					if ('requestIdleCallback' in window) {
						requestIdleCallback(() => {
							popupModal = true;
							sessionStorage.setItem('popupShown', 'true');
						});
					} else {
						popupModal = true;
						sessionStorage.setItem('popupShown', 'true');
					}
				}
			}, 5000);
		}
	});

	function closeModal() {
		popupModal = false;
	}
</script>


<!-- Render pop-up jika kondisi terpenuhi -->
{#if popupModal && popup.length > 0}
	<div tabindex="-1" class="fixed inset-0 z-[60] flex justify-center items-center">
		<div class="relative md:max-w-3xl max-w-screen-sm container">
			<!-- Close button -->
			<button
				type="button"
				class="absolute top-2 right-10 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center  dark:hover:text-white"
				on:click={closeModal}
				style="z-index: 40;"
			>
				<svg
					class="w-3 h-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
				<span class="sr-only">Close modal</span>
			</button>

			<!-- Desktop Pop-up -->
			<div class="hidden md:block">
				<!-- Swiper -->
                <div class="swiper mySwiperPopup">
                    <div class="swiper-wrapper">
                        {#each popup as item }
                        <div class="swiper-slide">
                            <a target="_blank" href="/" class="h-full w-full" aria-label="popup images">
                                <img src="{item.images_desktop[0].path}"  class="h-full w-full object-cover object-center" alt="">
                            </a>
                        </div>
                        {/each}
                    </div>
                    <div class="swiper-button-next swiper-button-next-popup after:text-gold"></div>
                    <div class="swiper-button-prev swiper-button-prev-popup after:text-gold"></div>
                </div>
			</div>

			<!-- Mobile Pop-up -->
			<div class="block md:hidden">
				<!-- Swiper -->
                <div class="swiper mySwiperPopup">
                    <div class="swiper-wrapper">
                        {#each popup as item }
                        <div class="swiper-slide">
                            <a target="_blank" href="/" class="h-full w-full" aria-label="popup images">
                                <img src="{item.images_mobile[0].path}"  class="h-full w-full object-cover object-center" alt="">
                            </a>
                        </div>
                        {/each}
                    </div>
                    <div class="swiper-button-next swiper-button-next-popup after:text-gold"></div>
                    <div class="swiper-button-prev swiper-button-prev-popup after:text-gold"></div>
                </div>
			</div>
		</div>
	</div>
{/if}

