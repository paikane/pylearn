import {
  getAndShowAllUsers,
  removeUser,
  blockUser,
  createNewUser,
  changeRole
} from "./funcs/users.js";
window.removeUser = removeUser;
window.blockUser = blockUser;
window.changeRole = changeRole

window.addEventListener("load", () => {
  const createNewUserBtn = document.querySelector("#create-new-user");
  getAndShowAllUsers();
  createNewUserBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createNewUser();
  });
});
