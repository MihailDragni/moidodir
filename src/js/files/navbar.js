document.addEventListener("DOMContentLoaded", () => {
  const mobileNavBarMenu = document.querySelector(".catalog-navbar");
  if (mobileNavBarMenu) {
    const mobileNavBarMenuBtn = document.querySelector(
      ".navbar-menu__link_catalog"
    );
    const searchMenu = document.querySelector(".search-menu-navbar");
    const openSearchMenuBtn = document.querySelector(".catalog-navbar__search");
    const closeSearchMenuBtn = document.querySelector(
      ".search-menu-navbar__close"
    );

    mobileNavBarMenuBtn.addEventListener("click", navBarCatalogToggle);
    openSearchMenuBtn.addEventListener("click", searchMenuOpen);
    closeSearchMenuBtn.addEventListener("click", closeSearchMenu);

    function searchMenuOpen(event) {
      event.stopPropagation();
      if (event.target.closest(".catalog-navbar__search"))
        searchMenu.classList.add("_active");
    }

    function closeSearchMenu(event) {
      event.stopPropagation();
      if (event.target.closest(".search-menu-navbar__close"))
        searchMenu.classList.remove("_active");
    }

    function navBarCatalogToggle(event) {
      if (event.target.closest(".navbar-menu__link_catalog")) {
        mobileNavBarMenu.classList.toggle("_active");
      }
    }
  }
});
