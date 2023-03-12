/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, Pagination, Thumbs } from "swiper";
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
  // if (document.querySelector(".swiper")) {
  //   // Вказуємо склас потрібного слайдера
  //   // Створюємо слайдер
  //   new Swiper(".swiper", {
  //     // Вказуємо склас потрібного слайдера
  //     // Підключаємо модулі слайдера
  //     // для конкретного випадку
  //     modules: [Navigation],
  //     observer: true,
  //     observeParents: true,
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //     autoHeight: true,
  //     speed: 800,

  //     //touchRatio: 0,
  //     //simulateTouch: false,
  //     //loop: true,
  //     // loopAdditionalSlides: 3,
  //     //preloadImages: false,
  //     //lazy: true,

  //     /*
  // 		// Ефекти
  // 		effect: 'fade',
  // 		autoplay: {
  // 			delay: 3000,
  // 			disableOnInteraction: false,
  // 		},
  // 		*/

  //     // Пагінація
  //     /*
  // 		pagination: {
  // 			el: '.swiper-pagination',
  // 			clickable: true,
  // 		},
  // 		*/

  //     // Скроллбар
  //     /*
  // 		scrollbar: {
  // 			el: '.swiper-scrollbar',
  // 			draggable: true,
  // 		},
  // 		*/

  //     // Кнопки "вліво/вправо"
  //     navigation: {
  //       prevEl: ".swiper-button-prev",
  //       nextEl: ".swiper-button-next",
  //     },
  //     /*
  // 		// Брейкпоінти
  // 		breakpoints: {
  // 			640: {
  // 				slidesPerView: 1,
  // 				spaceBetween: 0,
  // 				autoHeight: true,
  // 			},
  // 			768: {
  // 				slidesPerView: 2,
  // 				spaceBetween: 20,
  // 			},
  // 			992: {
  // 				slidesPerView: 3,
  // 				spaceBetween: 20,
  // 			},
  // 			1268: {
  // 				slidesPerView: 4,
  // 				spaceBetween: 30,
  // 			},
  // 		},
  // 		*/
  //     // Події
  //     on: {},
  //   });
  // }

  if (document.querySelector(".mainslider__slider")) {
    new Swiper(".mainslider__slider", {
      modules: [Navigation, Autoplay, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      preloadImages: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".mainslider__pagination",
        clickable: true,
      },

      navigation: {
        prevEl: ".mainslider .slider-arrow_prev",
        nextEl: ".mainslider .slider-arrow_next",
      },
      // Події
      // on: {},
    });
  }
  if (document.querySelector(".products-slider__slider")) {
    new Swiper(".products-slider__slider", {
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 6,
      spaceBetween: 30,
      autoHeight: true,
      speed: 800,
      preloadImages: false,
      // loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      navigation: {
        prevEl: ".products-slider .slider-arrow_prev",
        nextEl: ".products-slider .slider-arrow_next",
      },
      // Брейкпоінти
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 15,
        },

        380: {
          slidesPerView: 2,
          spaceBetween: 25,
        },

        578: {
          slidesPerView: 3,
          spaceBetween: 25,
        },

        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1230: {
          slidesPerView: 5,
          spaceBetween: 30,
        },

        // 1750: {
        //   slidesPerView: 5,
        //   spaceBetween: 30,
        // },
        1910: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      },

      // Події
      // on: {},
    });
  }
  if (document.querySelector(".working-brands__slider")) {
    new Swiper(".working-brands__slider", {
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 6,
      spaceBetween: 29,
      autoHeight: true,
      speed: 800,
      preloadImages: false,
      // loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".working-brands .slider-arrow_prev",
        nextEl: ".working-brands .slider-arrow_next",
      },
      // Брейкпоінти
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 15,
        },

        380: {
          slidesPerView: 2,
          spaceBetween: 25,
        },

        578: {
          slidesPerView: 3,
          spaceBetween: 25,
        },

        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1230: {
          slidesPerView: 5,
          spaceBetween: 30,
        },

        1910: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      },

      // Події
      // on: {},
    });
  }
  if (document.querySelector(".our-partners__slider")) {
    new Swiper(".our-partners__slider", {
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 25,
      speed: 800,
      preloadImages: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 25,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },

        992: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
    });
  }
  if (document.querySelector(".images-product")) {
    const thumbsSlider = new Swiper(".thumbs-images", {
      modules: [Navigation, Autoplay, Thumbs],
      observer: true,
      watchOverflow: true,
      observeParents: true,
      slidesPerView: 3,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      spaceBetween: 15,
    });
    new Swiper(".images-product__slider", {
      modules: [Navigation, Autoplay, Thumbs],
      observer: true,
      watchOverflow: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".images-product .slider-arrow_prev",
        nextEl: ".images-product .slider-arrow_next",
      },
      thumbs: {
        swiper: thumbsSlider,
      },
    });
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders();
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
});
