// document.addEventListener("DOMContentLoaded", () => {
//   //UI
//   const burgerMenu = document.querySelector(".catalog");
//   const burgerBtn = document.querySelector(".catalog-btn");
//   const dropMenu = document.querySelector(".catalog-drop");
//   const burgerCloseBtn = document.querySelector(".catalog__close-btn");
//   const dropMenuList = document.querySelectorAll(".catalog-drop__item");
//   const body = document.body;

//   //Events
//   burgerBtn.addEventListener("click", openBurgerMenu);
//   burgerMenu.addEventListener("mouseover", openDropMenu);
//   burgerCloseBtn.addEventListener("click", closeBtnHeadler);

//   function openBurgerMenu(event) {
//     event.stopPropagation();
//     if (
//       event.target.classList.contains("catalog-btn") ||
//       event.target.closest(".catalog-btn")
//     ) {
//       burgerMenu.classList.add("catalog--active");
//       body.classList.add("lock");
//       body.addEventListener("click", removeBurgerMenu);
//     }
//   }

//   function removeBurgerMenu({ target }) {
//     if (target.classList.contains("catalog") || target.closest(".catalog")) {
//       return;
//     }
//     closeMenu();
//   }

//   function openDropMenu(event) {
//     if (event.target.classList.contains("burger-main-list__link")) {
//       dropMenu.classList.add("catalog-drop--active");
//       const elemId = event.target.dataset.category;
//       let currentElem = null;
//       [...dropMenuList].forEach((elem) => {
//         elem.classList.remove("catalog-drop__item--active");
//         if (elem.id === elemId) {
//           elem.classList.add("catalog-drop__item--active");
//           currentElem = elem;
//         }
//       });
//     }
//   }

//   function closeBtnHeadler({ target }) {
//     if (
//       target.classList.contains("catalog__close-btn") ||
//       target.closest(".catalog__close-btn")
//     ) {
//       closeMenu();
//     }
//   }

//   function closeMenu() {
//     burgerMenu.classList.remove("catalog--active");
//     dropMenu.classList.remove("catalog-drop--active");
//     body.classList.remove("lock");
//     body.removeEventListener("click", removeBurgerMenu);
//   }
// });
