// @ts-nocheck
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
// Tambahkan modul ke Swiper
Swiper.use([Autoplay, Navigation, EffectFade, Pagination]);

export function initSwiper() {
    // Swiper Room Home Page
    var swiper1 = new Swiper(".myHomeRoomSwiper", {
        direction: "horizontal",
        slidesPerView:1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next-homeroom',
            prevEl: '.swiper-button-prev-homeroom',
        },
        effect: "slide",
        speed:1500,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            640: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.2,
              spaceBetween: 30,
            },
          }
    });

   // Swiper Offers Home Page
    var swiper2 = new Swiper(".myHomeOffersSwiper", {
    direction: "horizontal",
    slidesPerView:1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next-homeoffers',
        prevEl: '.swiper-button-prev-homeoffers',
    },
    effect: "slide",
    speed:1500,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2.2,
          spaceBetween: 30,
        },
      }
    });

    // Swiper Accommodation Page
    var swiper3 = new Swiper(".myAccommodationSwiper", {
        direction: "horizontal",
        slidesPerView:1,
        spaceBetween: 1,
        navigation: {
            nextEl: '.swiper-button-next-accommodation',
            prevEl: '.swiper-button-prev-accommodation',
        },
        effect: "slide",
        speed:1500,
        simulateTouch: false, 
        allowTouchMove: false,
        pagination: {
          el: ".swiper-pagination-accommodation",
          clickable:true,
          // dynamicBullets: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    // Swiper Offers Page
    var swiper4 = new Swiper(".myOffersdetailSwiper", {
        direction: "horizontal",
        slidesPerView:1,
        spaceBetween: 30,
        // navigation: {
        //     nextEl: '.swiper-button-next-offersdetail',
        //     prevEl: '.swiper-button-prev-offersdetail',
        // },
        effect: "slide",
        speed:1500,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }
    });

    // Swiper Accommodation Detail Page
    var swiper5 = new Swiper(".myRoomdetailSwiper", {
        direction: "horizontal",
        slidesPerView:1.3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next-roomdetail',
            prevEl: '.swiper-button-prev-roomdetail',
        },
        effect: "slide",
        speed:1500,
    });

    // Swiper Accommodation Detail Page
    var swiper6 = new Swiper(".myRoomotherSwiper", {
        direction: "horizontal",
        slidesPerView:2.3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next-roomotherdetail',
            prevEl: '.swiper-button-prev-roomotherdetail',
        },
        effect: "slide",
        speed:1500,
    });

    // Swiper Drawer Detail Page
    var swiper7 = new Swiper(".mySwiperDrawer", {
      direction: "horizontal",
      slidesPerView:2.5,
      spaceBetween: 16,
      navigation: {
          nextEl: '.swiper-button-next-drawer',
          prevEl: '.swiper-button-prev-drawer',
      },
      effect: "slide",
      speed:1500,
      observer: true, 
      observeParents: true
    });

     // Swiper Drawer Detail Page
     var swiper8 = new Swiper(".mySwiperImgRoom", {
      direction: "horizontal",
      slidesPerView:1,
      spaceBetween: 0,
      effect: "fade",
      speed:1500,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });

    // Swiper Drawer Detail Page
    var swiper9 = new Swiper(".mySwiperPopup", {
        direction: "horizontal",
        slidesPerView:1,
        spaceBetween: 0,
        effect: "slide",
        speed:1500,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next-popup',
          prevEl: '.swiper-button-prev-popup',
      },
    });

    // Swiper Drawer Detail Page
    var swiper10 = new Swiper(".mySwiperExplore", {
      navigation: {
        nextEl: '.swiper-button-next-explore',
        prevEl: '.swiper-button-prev-explore',
    },
    });

    // Swiper Drawer Detail Page
    var swiper11 = new Swiper(".mySwiperHomeExplore", {
      slidesPerView:1,
      spaceBetween: 0,
      effect: "fade",
      speed:1500,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });

    // Swiper Drawer Detail Page
    var swiper12 = new Swiper(".mySwiperDine", {
      slidesPerView:1,
      spaceBetween: 0,
      effect: "fade",
      speed:1500,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });

    // Swiper Blog Detail Page
    var swiper13 = new Swiper(".myBlogdetailSwiper", {
      direction: "horizontal",
      slidesPerView:1,
      spaceBetween: 30,
      navigation: {
          nextEl: '.swiper-button-next-blogdetail',
          prevEl: '.swiper-button-prev-blogdetail',
      },
      effect: "slide",
      speed:1000,
      autoplay: {
          delay: 4000,
          disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2.3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 2.3,
          spaceBetween: 30,
        },
      }
  });

}