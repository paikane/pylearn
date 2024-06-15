import { getAdminInfos, logout } from "./funcs/utils.js";
import {
  insertNotificationHtmlTemplate,
  seenNotification,
} from "./funcs/notificatios.js";



window.seenNotification = seenNotification;

window.addEventListener("load", () => {
  const adminNameElem = document.querySelector("#admin-name");
  const notificationsIconElem = document.querySelector("#notifications-icon");
  const notificationsBoxElem = document.querySelector(
    ".home-notification-modal"
  );
  const logoutBtnElem = document.querySelector("#logout-btn");
  let menuBtn = document.querySelector(".sidebar-menu-btn");
  const menuIcon = document.querySelector(".sidebar-menu-btn i")
  let body = document.body;

  getAdminInfos().then((admin) => {
    // console.log(admin);
    if (admin.role === "ADMIN") {
      adminNameElem.innerHTML = admin.name;
      //   adminWelcomeNameElem.innerHTML = admin.name;
    } else {
      location.replace("../../login.html");
    }
    notificationsIconElem.addEventListener("mouseenter", () => {
      notificationsBoxElem.classList.add("active-modal-notfication");
    });

    notificationsBoxElem.addEventListener("mouseleave", () => {
      notificationsBoxElem.classList.remove("active-modal-notfication");
    });
    insertNotificationHtmlTemplate(admin.notifications);
  });

  logoutBtnElem.addEventListener("click", (event) => {
    event.preventDefault();
    logout();
    location.href = "../../index.html";
  });

  menuBtn.addEventListener("click", function () {
    if (body.className !== "active-sidebar") {
      menuIcon.classList.remove("fa-times")
      menuIcon.classList.add("fa-bars")
      body.classList.add("active-sidebar");
      body.classList.remove("notactive-sidebar");
    } else {
      body.classList.add("notactive-sidebar");
      body.classList.remove("active-sidebar");
      menuIcon.classList.add("fa-times")
      menuIcon.classList.remove("fa-bars")
    }
  });

  // active side bar 
  const sidebarLinks = document.querySelectorAll('.sidebar-menu__items')
const windowPathname = window.location.pathname
console.log(sidebarLinks);
console.log(windowPathname);

sidebarLinks.forEach(sidebarLink => {
  const sidebarLinksPathname = new URL(sidebarLink.href).pathname
  console.log("goz" + sidebarLinksPathname);
  if((windowPathname == sidebarLinksPathname) || (windowPathname == '/frontend/panel/main/index.html' && sidebarLinksPathname == '/frontend/panel/main/index.html' )){
    sidebarLink.parentElement.classList.add('active-menu')
  }
})

});

