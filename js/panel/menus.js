import { getAndShowAllmenus, prepareCreateForm, createNewMenu, removeMenu } from "./funcs/menus.js";

window.removeMenu = removeMenu

window.addEventListener("load", () => {
  const createMenuBtn = document.querySelector("#create-menu-btn");

  prepareCreateForm();
  getAndShowAllmenus();

  createMenuBtn.addEventListener('click', event => {
    event.preventDefault()
    createNewMenu()

  })
});
