import {
  getAndShowAllCourses,
  getAndShowAllPopularCourses,
  getAndShowAllArticles,
  getAndShowNavbarMenus,
} from "./funcs/shared.js";

const $ = document;
const landingTitle = $.querySelector(".landing__title");
const courseCount = $.querySelector("#course-count");
const usersCount = $.querySelector("#users-count");
const articlesCount = $.querySelector("#articles-count");
const globalSearchBtn = $.querySelector("#search-btn");
const globalSearchInput = $.querySelector("#search-input");

window.addEventListener("load", () => {
  AOS.init();
  let landingText = ["مثل آبِـــــــــ خـــــــــوردن یاد بگیر !"];
  let firstLandinfText = 'مثل'
  let secondLandinfText = 'آبِـــــــــ خـــــــــوردن'


  let typeIndex = 0;

  

  // typeWriter(landingText, typeIndex);
  makeCounter(24, courseCount);
  makeCounter(35, usersCount);
  makeCounter(69, articlesCount);

  getAndShowAllCourses();
  getAndShowAllPopularCourses();
  getAndShowAllArticles();
  getAndShowNavbarMenus();
  globalSearchBtn.addEventListener("click", (event) => {
    headerGlobalSearch();
  });
  globalSearchInput.addEventListener("keyup", (event) => {
    if (event.keyCode == "13") {
      headerGlobalSearch();
    }
  });

  const landingBtn = document.querySelector('.landing__btn')
  landingBtn.addEventListener('click', () => {
    window.scrollTo(0,700)
  })
});

function makeCounter(max, elem) {
  let counter = 0;
  const interval = setInterval(() => {
    if (max === counter) {
      clearInterval(interval);
    }
    elem.innerHTML = counter;
    counter++;
  }, 100);
}
function headerGlobalSearch() {
  location.href = `search.html?value=${globalSearchInput.value.trim()}`;
}


var typeWriterElement = document.querySelector('.landing__title');

// The TextArray: 
var textArray = ["مثل آبِـــــــــ خـــــــــوردن یاد بگیر !"];




function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		// generate a random Number to emulate Typing on the Keyboard.
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
      // console.log(i);
		},rndTyping);
	} 
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},100);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
      // console.log(i);
		});
	}  
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},50);
	
const sidebarLable = document.querySelector('#sidebar-lable')
  const mainSidebar = document.querySelector('.main-header__menu')
  let lableBefore = document.styleSheets[6].cssRules[1].cssRules[10]
  let lableAfter = document.styleSheets[6].cssRules[1].cssRules[11]

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