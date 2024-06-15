import {
  getAndShowNavbarMenus,
  getAndShowAllCoursesInCoursesPage,
  insertCourseBoxHtmlTemplate,
} from "./funcs/shared.js";
import { paginateItems, getUrlParam, addParamToUrl } from "./funcs/utils.js";

window.addParamToUrl = addParamToUrl;

window.addEventListener("load", () => {
  getAndShowNavbarMenus();
  getAndShowAllCoursesInCoursesPage().then((course) => {
    console.log(course);
    const coursesPaginationWrapper = document.querySelector(
      "#courses-pagination-wrapper"
    );
    const currentPage = getUrlParam("page");
    const coursesContainer = document.querySelector("#courses-wrapper");
    let shownpagination = paginateItems(
      [...course],
      3,
      coursesPaginationWrapper,
      currentPage
    );
    insertCourseBoxHtmlTemplate([...shownpagination], "row", coursesContainer);
    console.log(shownpagination);
    
  });
});
