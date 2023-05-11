/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, {
  Navigation,
  Autoplay,
  Pagination,
  Thumbs,
  Scrollbar,
  Mousewheel,
} from 'swiper'
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import '../../scss/base/swiper.scss'
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import "swiper/css";

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
  if (document.querySelector('.mainslider__slider')) {
    new Swiper('.mainslider__slider', {
      modules: [Navigation, Autoplay, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      preloadImages: false,
      grabCursor: true,
      autoplay: {
        delay: 20000,
        disableOnInteraction: false,
      },

      pagination: {
        el: '.mainslider__pagination',
        clickable: true,
      },

      navigation: {
        prevEl: '.mainslider .slider-arrow_prev',
        nextEl: '.mainslider .slider-arrow_next',
      },
      // Події
      // on: {},
    })
  }
  if (document.querySelector('.catalog-cards__slider_1')) {
    new Swiper('.catalog-cards__slider_1', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 6,
      spaceBetween: 29,
      autoHeight: true,
      speed: 800,
      preloadImages: false,
      grabCursor: true,
      navigation: {
        prevEl: '.catalog-cards__slider_1 .slider-arrow_prev',
        nextEl: '.catalog-cards__slider_1 .slider-arrow_next',
      },
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
        1400: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    })
  }
  if (document.querySelector('.catalog-cards__slider_2')) {
    new Swiper('.catalog-cards__slider_2', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 6,
      spaceBetween: 29,
      autoHeight: true,
      speed: 800,
      preloadImages: false,
      grabCursor: true,
      navigation: {
        prevEl: '.catalog-cards__slider_2 .slider-arrow_prev',
        nextEl: '.catalog-cards__slider_2 .slider-arrow_next',
      },
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
        1400: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    })
  }
  if (document.querySelector('.products-slider__slider')) {
    new Swiper('.products-slider__slider', {
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 6,
      spaceBetween: 30,
      autoHeight: true,
      speed: 800,
      preloadImages: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      navigation: {
        prevEl: '.products-slider .slider-arrow_prev',
        nextEl: '.products-slider .slider-arrow_next',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
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
    })
  }
  if (document.querySelector('.working-brands__slider')) {
    new Swiper('.working-brands__slider', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 6,
      spaceBetween: 29,
      autoHeight: true,
      speed: 800,
      preloadImages: false,
      grabCursor: true,
      navigation: {
        prevEl: '.working-brands .slider-arrow_prev',
        nextEl: '.working-brands .slider-arrow_next',
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
    })
  }
  if (document.querySelector('.our-partners__slider')) {
    new Swiper('.our-partners__slider', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 25,
      speed: 800,
      preloadImages: false,
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
    })
  }
  if (document.querySelector('.images-product')) {
    const thumbsSlider = new Swiper('.thumbs-images', {
      modules: [Thumbs],
      observer: true,
      watchOverflow: true,
      observeParents: true,
      slidesPerView: 3,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      spaceBetween: 15,
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        490: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        690: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
    })
    new Swiper('.images-product__slider', {
      modules: [Thumbs],
      observer: true,
      watchOverflow: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      thumbs: {
        swiper: thumbsSlider,
      },
    })
  }
  if (document.querySelector('.recommendations-slider__slider')) {
    new Swiper('.recommendations-slider__slider', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 2,
      spaceBetween: 40,
      navigation: {
        prevEl: '.recommendations-slider__arrow-prev',
        nextEl: '.recommendations-slider__arrow-next',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        590: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        1250: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        1700: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
      },
    })
  }
  if (document.querySelector('.slider-main-cart__slider')) {
    new Swiper('.slider-main-cart__slider', {
      modules: [Scrollbar, Mousewheel, Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      direction: 'vertical',
      grabCursor: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 170,
      },
      mousewheel: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
          mousewheel: false,
          direction: 'horizontal',
          navigation: {
            prevEl: '.slider-main-cart .slider-arrow_prev',
            nextEl: '.slider-main-cart .slider-arrow_next',
          },
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    })
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll')
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index]
      const sliderScrollBar =
        sliderScrollItem.querySelector('.swiper-scrollbar')
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
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
      })
      sliderScroll.scrollbar.updateSize()
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск ініціалізації слайдерів
  initSliders()
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
})
