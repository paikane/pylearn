import { getAndShowNavbarMenus, globalSearch } from "./funcs/shared.js";

window.addEventListener("load", () => {
  const globalSearchBtn = document.querySelector("#search-btn");
  const globalSearchInput = document.querySelector("#search-input");
  getAndShowNavbarMenus();
  globalSearch().then((data) => console.log(data));
  globalSearchBtn.addEventListener("click", (event) => {
    headerGlobalSearch();
  });
  globalSearchInput.addEventListener("keyup", (event) => {
    if (event.keyCode == "13") {
      headerGlobalSearch();
    }
  });
  function headerGlobalSearch() {
    location.href = `search.html?value=${globalSearchInput.value.trim()}`;
  }
});


