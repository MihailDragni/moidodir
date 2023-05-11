$(document).ready(function () {
  // $(".lang-topbar__select").select2({
  //   width: "auto",
  //   minimumResultsForSearch: 10,
  //   dropdownCssClass: "select-dropdown",
  // });

  $(".filters-catalog__select").select2({
    // multiple: true,
    width: "auto",
    dropdownCssClass: "select-dropdown",
  });

  $(".form-acc-settings__select_tel").select2({
    width: "auto",
    dropdownCssClass: "select-dropdown_form",
  });

  $(".checkout-fields__select_tel").select2({
    width: "auto",
    dropdownCssClass: "select-dropdown_form",
  });

  $(".form-acc-settings__select_adress").select2({
    width: "100%",
    dropdownCssClass: "select-dropdown_form",
  });

  $(".checkout-fields__select_adress").select2({
    width: "100%",
    dropdownCssClass: "select-dropdown_form",
  });
});
