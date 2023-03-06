document.addEventListener("DOMContentLoaded", () => {
  const catalog = document.querySelector(".catalog");
  if (catalog) {
    //UI

    const body = document.body;
    const catalogBtn = document.querySelector(".catalog-btn");
    const catalogCloseBtn = document.querySelector(".catalog__close-btn");
    const secondColumn = document.querySelector(".catalog__second-column");
    const secondColumnList = document.querySelectorAll(
      ".catalog__second-column .column-catalog__item"
    );
    const thirdColumn = document.querySelector(".catalog__third-column");
    const thirdColumnList = document.querySelectorAll(
      ".catalog__third-column .column-catalog__item"
    );
    const allSecondColumnLinks = document.querySelectorAll(
      ".catalog__second-column .drop-menu-list__link"
    );

    //Events

    catalogBtn.addEventListener("click", openCatalog);
    if (window.innerWidth >= 992) {
      catalog.addEventListener("mouseover", openSecondColumn);
    } else {
      catalog.addEventListener("click", openSecondColumn);
    }

    catalog.addEventListener("click", getBack);
    catalog.addEventListener("click", openSecondColumn);
    catalogCloseBtn.addEventListener("click", closeBtnHeadler);
    secondColumn.addEventListener("click", openThirdColumn);

    //Vars

    let mainCurrentLink = null;
    let secondCurrenLink = null;

    function getBack(event) {
      event.stopPropagation();
      if (event.target.classList.contains("column-catalog__back")) {
        const currentCulmn = event.target.closest(".column-catalog");
        if (currentCulmn) {
          currentCulmn.classList.remove("_active");
          let columnCatalogItem = currentCulmn.querySelector(
            ".column-catalog__item--active"
          );
          if (columnCatalogItem) {
            columnCatalogItem.classList.remove("column-catalog__item--active");
          }
          let activeLink = currentCulmn.querySelector(
            ".drop-menu-list__link._active"
          );
          if (activeLink) {
            activeLink.classList.remove("_active");
          }
        }
      }
    }

    function openCatalog(event) {
      event.stopPropagation();
      if (
        event.target.classList.contains("catalog-btn") ||
        event.target.closest(".catalog-btn")
      ) {
        catalog.classList.add("catalog--active");
        body.classList.add("body-lock");
        body.addEventListener("click", removeCatalog);
      }
    }

    function removeCatalog({ target }) {
      if (target.classList.contains("catalog") || target.closest(".catalog")) {
        return;
      }
      closeMenu();
    }

    function openSecondColumn({ target }) {
      if (
        target.classList.contains("main-column-catalog__link") ||
        target.closest(".main-column-catalog__link")
      ) {
        mainCurrentLink?.classList.remove("_active");
        secondCurrenLink?.classList.remove("_active");
        thirdColumn.classList.remove("_active");
        let currentElem = target.closest(".main-column-catalog__link");
        currentElem.classList.add("_active");
        mainCurrentLink = currentElem;
        secondColumn.classList.add("_active");
        const elemId = target.dataset.mainCategory;
        [...secondColumnList].forEach((elem) => {
          elem.classList.remove("column-catalog__item--active");
          if (elem.id === elemId) {
            elem.classList.add("column-catalog__item--active");
          }
        });
      }
    }

    function openThirdColumn(event) {
      if (
        event.target.closest(".drop-menu-list__link") &&
        event.target.dataset.secondCategory
      ) {
        event.preventDefault();
        secondCurrenLink = event.target.closest(".drop-menu-list__link");
        let clickedElem = secondCurrenLink;
        if (clickedElem.classList.contains("_active")) {
          allSecondColumnLinks.forEach((elem) =>
            elem.classList.remove("_active")
          );
          thirdColumn.classList.remove("_active");
          return;
        }
        allSecondColumnLinks.forEach((elem) =>
          elem.classList.remove("_active")
        );
        clickedElem.classList.add("_active");
        thirdColumn.classList.add("_active");
        const elemId = event.target.dataset.secondCategory;
        [...thirdColumnList].forEach((elem) => {
          elem.classList.remove("column-catalog__item--active");
          if (elem.id === elemId) {
            elem.classList.add("column-catalog__item--active");
          }
        });
      }
    }

    function closeBtnHeadler({ target }) {
      if (
        target.classList.contains("catalog__close-btn") ||
        target.closest(".catalog__close-btn")
      ) {
        closeMenu();
      }
    }

    function closeMenu() {
      catalog.classList.remove("catalog--active");
      secondColumn.classList.remove("_active");
      if (mainCurrentLink) {
        mainCurrentLink.classList.remove("_active");
      }
      if (secondCurrenLink) {
        secondCurrenLink.classList.remove("_active");
      }
      [...secondColumnList].forEach((elem) => {
        elem.classList.remove("column-catalog__item--active");
      });
      [...thirdColumnList].forEach((elem) => {
        elem.classList.remove("column-catalog__item--active");
      });
      body.classList.remove("body-lock");
      body.removeEventListener("click", removeCatalog);
    }
  }
});
