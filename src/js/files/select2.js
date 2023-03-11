$(document).ready(function () {
  $(".js-example-basic-single").select2({
    width: "auto",
    minimumResultsForSearch: 10,
  });
  $(".filters-catalog__select").select2({
    // multiple: true,
    width: "auto",
    selectionCssClass: "filters-catalog__title",
    dropdownCssClass: "filters-catalog__dropdown",
  });
});
