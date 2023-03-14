$(document).ready(function () {
  $(".lang-topbar__select").select2({
    width: "auto",
    minimumResultsForSearch: 10,
    dropdownCssClass: "select-dropdown",
  });
  $(".filters-catalog__select").select2({
    // multiple: true,
    width: "auto",
    dropdownCssClass: "select-dropdown",
  });
});
