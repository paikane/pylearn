import {
  getAndShowAllDiscountsCode,
  prepareCreateNewDiscountCodeForm,
  createDiscountCode,
  removeDiscount,
} from "./funcs/discounts.js";

window.removeDiscount = removeDiscount;

window.addEventListener("load", () => {
  const createDiscountBtnElem = document.querySelector("#create-discount");

  getAndShowAllDiscountsCode();
  prepareCreateNewDiscountCodeForm();
  createDiscountBtnElem.addEventListener("click", (event) => {
    event.preventDefault();
    createDiscountCode();
  });
});
