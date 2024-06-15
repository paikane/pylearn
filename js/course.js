import { getCoursesDetails, getAndShowNavbarMenus,getAndshowRelatedCourses, submitComment } from "./funcs/shared.js";

window.addEventListener('load', () => {
    const submitCommentBtn = document.querySelector(".comments__respond-btn");


    getAndShowNavbarMenus()
    getCoursesDetails()
    getAndshowRelatedCourses()
    submitCommentBtn.addEventListener("click", () => {
        console.log('Send Comment');
        submitComment()
      });
})

const sidebarLable = document.querySelector('#sidebar-lable')
  const mainSidebar = document.querySelector('.main-header__menu')
  let lableBefore = document.styleSheets[5].cssRules[1].cssRules[10]
  let lableAfter = document.styleSheets[5].cssRules[1].cssRules[11]

  sidebarLable.addEventListener('click', (event)=> {
    console.log(lableBefore);
    if(lableBefore.style.transform == 'translateX(-17rem)'){
      lableBefore.style.transform = 'translateX(0.4rem)'
    lableAfter.style.transform = 'translateX(0.3rem) rotate(131deg)'
    lableBefore.style.animation = 'shake 1.5s  infinite ease-in'
    lableAfter.style.animation = 'shake2 1.5s  infinite ease-in-out'
    mainSidebar.style.transform = 'translateX(21.5rem)'
    }else{
      lableBefore.style.transform = 'translateX(-17rem)'
    lableAfter.style.transform = 'translateX(-19.5rem) rotate(-39deg)'
    lableBefore.style.animation = 'none'
    lableAfter.style.animation = 'none'
    mainSidebar.style.transform = 'translateX(2rem)'
    }
    
  })