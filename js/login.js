import { login } from "./funcs/auth.js";

const loginBtn = document.querySelector("#login-btn");
let toggleEye = document.querySelector("#change-eye");
const passwordFild = document.querySelector("#password");
const identifierInput = document.querySelector("#identifier");
if (localStorage.getItem("identifier") && localStorage.getItem("password")) {
  identifierInput.value = localStorage.getItem("identifier");
}

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();

  login();
});
toggleEye.addEventListener("click", (event) => {
  if (event.target.tagName == "path") {
    console.log(event.target.parentNode.classList[1]);
    if (event.target.parentNode.classList[1] == "fa-eye-slash") {
      event.target.parentNode.classList.remove("fa-eye-slash");
      event.target.parentNode.classList.add("fa-eye");
      passwordFild.setAttribute("type", "text");
    } else {
      event.target.parentNode.classList.add("fa-eye-slash");
      event.target.parentNode.classList.remove("fa-eye");
      passwordFild.setAttribute("type", "password");
    }
  } else {
    if (event.target.classList[1] == "fa-eye-slash") {
      event.target.classList.remove("fa-eye-slash");
      event.target.classList.add("fa-eye");
      passwordFild.setAttribute("type", "text");
    } else {
      event.target.classList.add("fa-eye-slash");
      event.target.classList.remove("fa-eye");
      passwordFild.setAttribute("type", "password");
    }
  }
  // console.log(event.target.tagName);
  //  let f = event.target.classList[1]
  //  console.log(f);

  //   if (f == "fa-eye-slash") {

  //     event.target.classList.remove("fa-eye-slash");
  //     event.target.classList.add("fa-eye");
  //   } else {
  //     event.target.classList.add("fa-eye-slash");
  //     event.target.classList.remove("fa-eye");
  //   }
});
