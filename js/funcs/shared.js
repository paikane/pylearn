import { getMe } from "./auth.js";
import { isLogin, getUrlParam, getToken, showSwal } from "./utils.js";

const showUserNameInNavabar = () => {
  const navbarProfileBox = document.querySelector(".main-header_profile");

  const isUserLogin = isLogin();

  if (isUserLogin) {
    const userInfos = getMe().then((data) => {
      navbarProfileBox.setAttribute("href", "./my-account/Account/index.html");
      navbarProfileBox.innerHTML = `<span class="login-text main-header_profile-text"> ${data.name} </span><i class="main-header_profile-text login-icon fas fa-user"></i>`;
    });
  } else {
    navbarProfileBox.setAttribute("href", "login.html");
    navbarProfileBox.innerHTML =
      '<span class=" login-text main-header_profile-text">ثبت نام / ورود</span> <i class=" main-header_profile-text login-icon fas fa-sign-in-alt"></i>';
  }
};

const getAndShowAllCourses = async () => {
  const coursesContainer = document.querySelector("#courses-container");

  const res = await fetch(`http://localhost:4000/v1/courses`);
  const courses = await res.json();
  console.log(courses);

  courses.slice(0, 6).map((course) => {
    coursesContainer.insertAdjacentHTML(
      "beforeend",
      `
    
    <div class="col-12 col-lg-6 col-xl-4 " data-aos="fade-up">
    <div class="course-box ">
      <a href="courses.html?name=${course.shortName}">
        <img
          src=http://localhost:4000/courses/covers/${course.cover}
          alt="Course img"
          class="course-box__img"
        />
      </a>
      <div class="course-box__main">
        <a href="courses.html?name=${
          course.shortName
        }" class="course-box__title">${course.name}</a>
        <div class="course-box__rating-teacher">
          <div class="course-box__teacher">
            <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
            <a href="#" class="course-box__teacher-link">${course.creator}</a>
          </div>
          <div class="course-box__rating">
          ${Array(5 - course.courseAverageScore)
            .fill(0)
            .map(
              (score) =>
                '<img src="/frontend/images/svgs/star.svg" alt="rating" class="course-box__star"/>'
            )
            .join("")}
          ${Array(course.courseAverageScore)
            .fill(0)
            .map(
              (score) =>
                '<img src="/frontend/images/svgs/star_fill.svg" alt="rating" class="course-box__star"/>'
            )
            .join("")}
          </div>
        </div>

        <div class="course-box__status">
          <div class="course-box__users">
            <i class="fas fa-users course-box__users-icon"></i>
            <span class="course-box__users-text">${course.registers}</span>
          </div>
          <div class="course-box__price">
              ${
                course.price === 0
                  ? "رایگان"
                  : course.price !== 0 && course.discount !== 0
                  ? `<span class="courses-box__price-discount">${(
                      course.price -
                      (course.price * course.discount) / 100
                    ).toLocaleString()}</span>
                    <span class="course-box__price courses-box__undiscount">${course.price.toLocaleString()}</span>`
                  : `<span class="course-box__price">${course.price.toLocaleString()}</span>`
              }
          </div>
        </div>
      </div>

      <div class="course-box__footer">
        <a href="courses.html?name=${
          course.shortName
        }"" class="course-box__footer-link">
          مشاهده اطلاعات
          <i class="fas fa-arrow-left course-box__footer-icon"></i>
        </a>
      </div>
      ${
        course.discount
          ? `
          <span class="courses-box__discount">${course.discount}%</span>
        `
          : ``
      }
    </div>
  </div>
    
    `
    );
  });

  return courses;
};

const getAndShowAllPopularCourses = async () => {
  const popularCoursesWrapper = document.querySelector(
    "#popular-courses-wrapper"
  );

  const res = await fetch(`http://localhost:4000/v1/courses/popular`);
  const popularCourses = await res.json();

  popularCourses.forEach((course) => {
    popularCoursesWrapper.insertAdjacentHTML(
      "beforeend",
      `
    
    <div class="swiper-slide">
    <div class="course-box">
      <a href="courses.html?name=${course.shortName}">
        <img
          src="http://localhost:4000/courses/covers/${course.cover}"
          alt="Course img"
          class="course-box__img"
        />
      </a>
      <div class="course-box__main">
        <a href="courses.html?name=${
          course.shortName
        }" class="course-box__title">${course.name}</a>
        <div class="course-box__rating-teacher">
          <div class="course-box__teacher">
            <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
            <a href="#" class="course-box__teacher-link">${course.creator}</a>
          </div>
        </div>
        <div class="course-box__status">
          <span class="course-box__price">${
            course.price === 0 ? "رایگان" : course.price.toLocaleString()
          }</span>
        </div>
      </div>
    </div>
  </div>
    
    
    
    `
    );
  });

  return popularCourses;
};

const getAndShowAllArticles = async () => {
  const articlesWrapper = document.querySelector("#articles-wrapper");

  const res = await fetch(`http://localhost:4000/v1/articles`);
  const articles = await res.json();

  articles.slice(0, 6).forEach((article) => {
    articlesWrapper.insertAdjacentHTML(
      "beforeend",
      `
      <div class="swiper-slide">
      <div class="course-box">
        <a href="/frontend/blog.html">
          <img
            src="http://localhost:4000/courses/covers/${article.cover}"
            alt="Course img"
            class="course-box__img"
          />
        </a>
        <div class="course-box__main">
          <a href="/frontend/blog.html" class="course-box__title">${article.title}</a>
          <div class="course-box__rating-teacher">
            <div class="course-box__teacher">
              <p href="#" class="course-box__teacher-link">
              ${article.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  
    `
    );
  });

  return articles;
};

const getAndShowNavbarMenus = async () => {
  const headerSearchBox = document.querySelector(".main-header_search-box");
  headerSearchBox.addEventListener("keyup", (event) => {
    if (event.target.value) {
      event.target.style.width = "22rem";
    } else {
      event.target.style.width = "13rem";
    }
  });
  const menusWrapper = document.querySelector("#menus-wrapper");

  const res = await fetch(`http://localhost:4000/v1/menus`);
  const menus = await res.json();

  menus.forEach((menu) => {
    // console.log(menu);
    menusWrapper.insertAdjacentHTML(
      "beforeend",
      `
    <li class="main-header__item">
    <a href=category.html?cat=${menu.href}&page=1 class="main-header__link">${
        menu.title
      }
      ${
        menu.submenus.length !== 0
          ? `<i class="fas fa-angle-down main-header__link-icon"></i>
        <ul class="main-header__dropdown">
        ${menu.submenus
          .map(
            (submenu) =>
              `<li class="main-header__dropdown-item">
            <a href="courses.html?name=${submenu.href}" class="main-header__dropdown-link">
             ${submenu.title}
            </a>
          </li>`
          )
          .join("")}
        </ul>`
          : ""
      }
    </a>
  </li>
    `
    );
  });

  // const sidebarLable = document.querySelector('#sidebar-lable')
  // const mainSidebar = document.querySelector('.main-header__menu')
  // let lableBefore = document.styleSheets[7].cssRules[1].cssRules[10]
  // let lableAfter = document.styleSheets[7].cssRules[1].cssRules[11]

  // sidebarLable.addEventListener('click', (event)=> {
  //   if(lableBefore.style.transform == 'translateX(-17rem)'){
  //     lableBefore.style.transform = 'translateX(0.4rem)'
  //   lableAfter.style.transform = 'translateX(0.3rem) rotate(131deg)'
  //   lableBefore.style.animation = 'shake 1.5s  infinite ease-in'
  //   lableAfter.style.animation = 'shake2 1.5s  infinite ease-in-out'
  //   mainSidebar.style.transform = 'translateX(21.5rem)'
  //   }else{
  //     lableBefore.style.transform = 'translateX(-17rem)'
  //   lableAfter.style.transform = 'translateX(-19.5rem) rotate(-39deg)'
  //   lableBefore.style.animation = 'none'
  //   lableAfter.style.animation = 'none'
  //   mainSidebar.style.transform = 'translateX(2rem)'
  //   }
    
  // })
};

const getAndShowCategoryCourses = async () => {
  const categoryName = getUrlParam("cat");
  // console.log(categoryName);
  const res = await fetch(
    `http://localhost:4000/v1/courses/category/${categoryName}`
  );
  const courses = await res.json();

  return courses;
};

const insertCourseBoxHtmlTemplate = (courses, showType, parentElement) => {
  parentElement.innerHTML = "";

  if (showType === "row") {
    courses.forEach((course) => {
      parentElement.insertAdjacentHTML(
        "beforeend",
        `
            <div class="col-12 col-lg-6 col-xl-4">
            <div class="course-box">
              <a href="courses.html?name=${course.shortName}">
                <img src="http://localhost:4000/courses/covers/${
                  course.cover
                }" alt="Course img" class="course-box__img" />
              </a>
              <div class="course-box__main">
                <a href="courses.html?name=${
                  course.shortName
                }" class="course-box__title">${course.name}</a>
        
                <div class="course-box__rating-teacher">
                  <div class="course-box__teacher">
                    <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                    <a href="#" class="course-box__teacher-link">${
                      course.creator
                    }</a>
                  </div>
                  <div class="course-box__rating">
                    ${Array(5 - course.courseAverageScore)
                      .fill(0)
                      .map(
                        (score) =>
                          '<img src="images/svgs/star.svg" alt="rating" class="course-box__star">'
                      )
                      .join("")}
                    ${Array(course.courseAverageScore)
                      .fill(0)
                      .map(
                        (score) =>
                          '<img src="images/svgs/star_fill.svg" alt="rating" class="course-box__star">'
                      )
                      .join("")}
                  </div>
                </div>
        
                <div class="course-box__status">
                  <div class="course-box__users">
                    <i class="fas fa-users course-box__users-icon"></i>
                    <span class="course-box__users-text">${
                      course.registers
                    }</span>
                  </div>
                  <span class="course-box__price">${
                    course.price === 0
                      ? "رایگان"
                      : course.price.toLocaleString()
                  }</span>
                </div>
              </div>
        
              <div class="course-box__footer">
                <a href="courses.html?name=${
                  course.shortName
                }" class="course-box__footer-link">
                  مشاهده اطلاعات
                  <i class="fas fa-arrow-left course-box__footer-icon"></i>
                </a>
              </div>
        
            </div>
          </div>
            `
      );
    });
  } else {
    courses.forEach((course) => {
      parentElement.insertAdjacentHTML(
        "beforeend",
        `
      <div class="col-12">
      <div class="course-box">
          <div class="course__box-header">
              <div class="course__box-right">
                  <a class="course__box-right-link" href="#">
                      <img src=http://localhost:4000/courses/covers/${
                        course.cover
                      } class="course__box-right-img">
                  </a>
              </div>
              <div class="course__box-left">
                  <div class="course__box-left-top">
                      <a href="#" class="course__box-left-link">${
                        course.name
                      }</a>
                  </div>
                  <div class="course__box-left-center">
                      <div class="course__box-left-teacher">
                          <i class="course__box-left-icon fa fa-chalkboard-teacher"></i>
                          <span class="course__box-left-name">${
                            course.creator
                          }</span>
                      </div>
                      <div class="course__box-left-stars">
                        ${Array(5 - course.courseAverageScore)
                          .fill(0)
                          .map(
                            (score) =>
                              '<img src="images/svgs/star.svg" alt="rating" class="course-box__star">'
                          )
                          .join("")}
                        ${Array(course.courseAverageScore)
                          .fill(0)
                          .map(
                            (score) =>
                              '<img src="images/svgs/star_fill.svg" alt="rating" class="course-box__star">'
                          )
                          .join("")}
                      </div>
                  </div>
                  <div class="course__box-left-bottom">
                      <div class="course__box-left-des">
                          <p>امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند. به قدری
                              که
                              حتی امروزه هیچ شرکت برنامه نویسی پروژه های خود را با Vanilla Js پیاده
                              سازی
                              نمی کند و همیشه از کتابخانه ها و فریمورک های موجود استفاده می کند. پس
                              شما هم
                              اگه میخواید یک برنامه نویس عالی فرانت اند باشید، باید کتابخانه های
                              کاربردی
                              که در بازار کار استفاده می شوند را به خوبی بلد باشید</p>
                      </div>
                  </div>
                  <div class="course__box-footer">
                      <div class="course__box-footer-right">
                          <i class="course__box-footer-icon fa fa-users"></i>
                          <span class="course__box-footer-count">${
                            course.registers
                          }</span>
                      </div>
                      <span class="course__box-footer-left">${
                        course.price === 0
                          ? "رایگان"
                          : course.price.toLocaleString()
                      }</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
      `
      );
    });
  }
};

const coursesSorting = (array, filterMethod) => {
  let outputArray = [];

  switch (filterMethod) {
    case "free": {
      outputArray = array.filter((course) => course.price === 0);
      break;
    }
    case "money": {
      outputArray = array.filter((course) => course.price !== 0);
      break;
    }
    case "first": {
      outputArray = [...array].reverse();
      break;
    }
    case "last": {
      outputArray = array;
      break;
    }
    case "default": {
      outputArray = array;
      break;
    }
    default: {
      outputArray = array;
    }
  }

  return outputArray;
};

const getCoursesDetails = () => {
  const courseShortName = getUrlParam("name");
  // select elem from DOM
  const breadcrumbCourseName = document.querySelector(
    ".breadcrumb__course-name"
  );
  const breadcrumbCategory = document.querySelector(".breadcrumb-category");
  const courseTitleElem = document.querySelector(".course-info__title");
  const courseDescriptionElem = document.querySelector(".course-info__text");
  const courseCategoryElem = document.querySelector(".course-info__link");
  const courseRegisterInfoElem = document.querySelector(
    ".course-info__footer-btn"
  );
  const coursePosterElem = document.querySelector(".course-info__video");
  const courseStatusElem = document.querySelector(".course-status");
  const courseSupportElem = document.querySelector(".course-support");
  const courseLastUpdateElem = document.querySelector(".course-last-update");
  const courseTimeElem = document.querySelector(".course-total-time");

  const courseStudentCountElem = document.querySelector(
    ".course-studend__count"
  );
  const commentsContentWrapper = document.querySelector(".comments__content");

  fetch(`http://localhost:4000/v1/courses/${courseShortName}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((res) => res.json())
    .then((course) => {
      console.log(course);
      breadcrumbCategory.textContent = course.categoryID.title;
      breadcrumbCategory.href = `category.html?cat=${course.categoryID.name}&page=1`;
      courseTitleElem.innerHTML = course.name;
      courseDescriptionElem.innerHTML = course.description;
      courseCategoryElem.innerHTML = course.categoryID.title;
      coursePosterElem.setAttribute(
        "poster",
        `http://localhost:4000/courses/covers/${course.cover}`
      );
      breadcrumbCourseName.innerHTML = course.name;
      if (course.isUserRegisteredToThisCourse) {
        courseRegisterInfoElem.insertAdjacentHTML(
          "beforeend",
          `
        دانشجوی دوره هستید
        `
        );
        courseRegisterInfoElem.style.backgroundColor = "#efefef";
        courseRegisterInfoElem.style.color = "var(--primary-color)";
        courseRegisterInfoElem.style.borderColor = "var(--primary-color)";
        courseRegisterInfoElem.style.cursor = "text";
      } else {
        courseRegisterInfoElem.insertAdjacentHTML(
          "beforeend",
          `
        ثبت نام در دوره
        `
        );
        courseRegisterInfoElem.addEventListener("click", async (event) => {
          event.preventDefault();
          // console.log("sabt nam dar dore");
          if (course.price == 0) {
            const res = await fetch(
              `http://localhost:4000/v1/courses/${course._id}/register`,
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${getToken()}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ price: 0 }),
              }
            );
            if (res.ok) {
              showSwal(
                "با موفقیت در دوره ثبت نام شدید",
                "success",
                "خیلی هم عالی",
                () => {
                  location.reload();
                }
              );
            }
          } else {
            showSwal(
              "آیا کد تخفیف دارید؟",
              "warning",
              ["نه", "آره"],
              async (result) => {
                if (result) {
                  swal({
                    title: "کد تخفیف را وارد نمایید",
                    content: "input",
                    button: "اعمال تخفیف",
                  }).then((code) => {
                    fetch(`http://localhost:4000/v1/offs/${code}`, {
                      method: "POST",
                      headers: {
                        Authorization: `Bearer ${getToken()}`,
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ course: course._id }),
                    })
                      .then((res) => {
                        if (res.status === 404) {
                          showSwal(
                            "کد تخفیف معتبر نمی‌باشد",
                            "error",
                            "ای بابا",
                            () => {}
                          );
                        } else if (res.status === 409) {
                          showSwal(
                            "مهلت استفاده از کد تخفیف به اتمام رسیده",
                            "error",
                            "ای بابا",
                            () => {}
                          );
                        }
                        return res.json();
                      })
                      .then((code) => {
                        console.log(code);

                        fetch(
                          `http://localhost:4000/v1/courses/${course._id}/register`,
                          {
                            method: "POST",
                            headers: {
                              Authorization: `Bearer ${getToken()}`,
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              price:
                                course.price -
                                (course.price * code.percent) / 100,
                            }),
                          }
                        ).then((res) => {
                          if (res.ok) {
                            showSwal(
                              "با موفقیت در دوره ثبت نام شدید",
                              "success",
                              "هورررراااا",
                              () => {
                                location.reload();
                              }
                            );
                          }
                        });
                      });
                  });
                } else {
                  const res = await fetch(
                    `http://localhost:4000/v1/courses/${course._id}/register`,
                    {
                      method: "POST",
                      headers: {
                        Authorization: `Bearer ${getToken()}`,
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ price: course.price }),
                    }
                  );
                  if (res.ok) {
                    showSwal(
                      "با موفقیت در دوره ثبت نام شدید",
                      "success",
                      "خیلی هم عالی",
                      () => {
                        location.reload();
                      }
                    );
                  }
                }
              }
            );
          }
        });
      }

      courseStatusElem.innerHTML = course.isComplete
        ? "تکمیل شده"
        : "درحال برگذاری";
      courseSupportElem.innerHTML = course.support;
      courseLastUpdateElem.innerHTML = course.updatedAt.slice(0, 10);
      let time = 0;
      let courseTotaltime = course.sessions.map((item) =>
        parseInt(item.time, 10)
      );
      for (let i = 0; i < courseTotaltime.length; i++) {
        time += courseTotaltime[i];
      }
      courseTimeElem.insertAdjacentHTML("beforeend", `${time} دقیقه`);
      courseStudentCountElem.innerHTML = course.courseStudentsCount;

      // show course session

      const sessionsWrapper = document.querySelector(".session-wrapper");

      if (course.sessions.length) {
        course.sessions.forEach((session, index) => {
          sessionsWrapper.insertAdjacentHTML(
            "beforeend",
            `
  
      <div class="accordion-body introduction__accordion-body">
      <div class="introduction__accordion-right">
        <span class="introduction__accordion-count">${index + 1}</span>
        <i class="fab fa-youtube introduction__accordion-icon"></i>
        ${
          session.free || course.isUserRegisteredToThisCourse
            ? `<span href="#" class="introduction__accordion-link">
        ${session.title}
        </span>`
            : `<a class="introduction__accordion-link" style='cursor: pointer;'>
        ${session.title}
        </a>`
        }
      </div>
      <div class="introduction__accordion-left">
        <span class="introduction__accordion-time">
          ${session.time}
        </span>
        ${
          session.free || course.isUserRegisteredToThisCourse
            ? `<i class='fas fa-lock introduction__accordion-time'></i>`
            : `<i class='fas fa-lock-open introduction__accordion-time'></i>`
        }
      </div>
    </div>
      `
          );
        });
      } else {
        sessionsWrapper.insertAdjacentHTML(
          "beforeend",
          `
  
      <div class="accordion-body introduction__accordion-body">
      <div class="introduction__accordion-right">
        <span class="introduction__accordion-count">--</span>
        <i class="fab fa-youtube introduction__accordion-icon"></i>
        <a href="#" class="introduction__accordion-link">
        هنوز هیچ دوره ای آپلود نشده است
        </a>
      </div>
      <div class="introduction__accordion-left">
        <span class="introduction__accordion-time">
          00:00
        </span>
      </div>
    </div>
      `
        );
      }

      // show course comments

      if (course.comments.length) {
        course.comments.forEach((comment) => {
          commentsContentWrapper.insertAdjacentHTML(
            "beforeend",
            `
      <div class="comments__item">
                <div class="comments__question">
                    <div class="comments__question-header">
                        <div class="comments__question-header-right">
                            <span class="comments__question-name comment-name">${
                              comment.creator.name
                            }</span>
                            <span class="comments__question-status comment-status">
                            (${
                              comment.creator.role === "USER"
                                ? " دانشجو "
                                : " مدرس "
                            })
                            </span>
                            <span class="comments__question-date comment-date">${comment.createdAt.slice(
                              0,
                              10
                            )}</span>
                        </div>
                        <div class="comments__question-header-left">
                            <a class="comments__question-header-link comment-link" href="#">پاسخ</a>
                        </div>
                    </div>
                    <div class="comments__question-text">
                       
                        <p class="comments__question-paragraph comment-paragraph">
                          ${comment.body}
                        </p>
                    </div>
                </div>
                ${
                  comment.answerContent
                    ? `
                      <div class="comments__ansewr">
                          <div class="comments__ansewr-header">
                              <div class="comments__ansewr-header-right">
                                  <span class="comments__ansewr-name comment-name">
                                 ${comment.answerContent.creator.name}
                                      </span>
                                  <span class="comments__ansewr-staus comment-status">
                                    (${
                                      comment.answerContent.creator.role ===
                                      "USER"
                                        ? " دانشجو "
                                        : " مدرس "
                                    })
                                  </span>
                                  <span class="comments__ansewr-date comment-date">${comment.answerContent.createdAt.slice(
                                    0,
                                    10
                                  )}</span>
                              </div>
                              <div class="comments__ansewr-header-left">
                                  <a class="comments__ansewr-header-link comment-link" href="#">پاسخ</a>
                              </div>
                          </div>
                          <div class="comments__ansewr-text">
                              <p class="comments__ansewr-paragraph comment-paragraph">
                                ${comment.answerContent.body}
                              </p>
                          </div>
                      </div>
                    `
                    : ""
                }
              </div>
      `
          );
        });
      } else {
        commentsContentWrapper.insertAdjacentHTML(
          "beforeend",
          `
    <div class='alert alert-danger rounded-4'>هنوز هیچ کامنتی برای این دوره ثبت نشده است.</div>
    `
        );
      }
    });
};

const getAndshowRelatedCourses = async () => {
  const courseShortName = getUrlParam("name");
  const relatedCoursesWrapper = document.querySelector(".related-courses");

  const res = await fetch(
    `http://localhost:4000/v1/courses/related/${courseShortName}`
  );
  const relatedcourses = await res.json();
  console.log(relatedcourses);
  relatedcourses.forEach((relatedcourse) => {
    relatedCoursesWrapper.insertAdjacentHTML(
      "beforeend",
      `
    
    <div class="related-course__box">
    <div class="related-course__box-right">
      <img src="http://localhost:4000/courses/covers/${relatedcourse.cover}" alt="" class="related-course__cover">
      <a href="courses.html?name=${relatedcourse.shortName}" class="related-course__cover-link">${relatedcourse.name}</a>
    </div>
    <div class="related-course__box-left">
      <a href="courses.html?name=${relatedcourse.shortName}" class="related-course__link">مشاهده</a>
      <i class="fas fa-arrow-circle-left related-course__link-icon"></i>
    </div>
  </div>
    `
    );
  });
};

const globalSearch = async () => {
  const coursesSearchResult = document.querySelector("#courses-container");
  const articlesSearchResult = document.querySelector("#articles-wrapper");
  const searchValue = getUrlParam("value");
  const res = await fetch(`http://localhost:4000/v1/search/${searchValue}`);
  const searchDatas = await res.json();
  console.log(searchDatas);
  if (searchDatas.allResultCourses.length) {
    searchDatas.allResultCourses.forEach((course) => {
      coursesSearchResult.insertAdjacentHTML(
        "beforeend",
        `
      
      <div class="col-4">
      <div class="course-box">
        <a href="courses.html?name=${course.shortName}">
          <img
            src="http://localhost:4000/courses/covers/${course.cover}"
            alt="Course img"
            class="course-box__img"
          />
        </a>
        <div class="course-box__main">
          <a href="courses.html?name=${
            course.shortName
          }" class="course-box__title">${course.name}</a>
          <div class="course-box__rating-teacher">
            <div class="course-box__teacher">
              <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
              <a href="#" class="course-box__teacher-link">محمد امین سعیدی راد</a>
            </div>
            <div class="course-box__rating">
            <img src="/frontend/images/svgs/star_fill.svg" alt="rating" class="course-box__star"/>
            <img src="/frontend/images/svgs/star_fill.svg" alt="rating" class="course-box__star"/>
            <img src="/frontend/images/svgs/star_fill.svg" alt="rating" class="course-box__star"/>
            <img src="/frontend/images/svgs/star_fill.svg" alt="rating" class="course-box__star"/>
            <img src="/frontend/images/svgs/star_fill.svg" alt="rating" class="course-box__star"/>
            </div>
          </div>
  
          <div class="course-box__status">
            <div class="course-box__users">
              <i class="fas fa-users course-box__users-icon"></i>
              <span class="course-box__users-text">${course.registers}</span>
            </div>
            <span class="course-box__price">${
              course.price === 0 ? "رایگان" : course.price.toLocaleString()
            }</span>
          </div>
        </div>
  
        <div class="course-box__footer">
          <a href="courses.html?name=${
            course.shortName
          }" class="course-box__footer-link">
            مشاهده اطلاعات
            <i class="fas fa-arrow-left course-box__footer-icon"></i>
          </a>
        </div>
      </div>
    </div>
      
      `
      );
    });
  } else {
    coursesSearchResult.insertAdjacentHTML(
      "beforeend",
      `
    <div class='alert alert-danger rounded-4 mt-5'>هیچ دوره ای برای جستوجوی شما یافت نشد.</div>
    `
    );
  }

  if (searchDatas.allResultArticles.length) {
    searchDatas.allResultArticles.forEach((article) => {
      articlesSearchResult.insertAdjacentHTML(
        "beforeend",
        `
      <div class='col-4'>
      <div class="course-box">
      <a href="#">
        <img
          src="http://localhost:4000/courses/covers/${article.cover}"
          alt="Course img"
          class="course-box__img"
        />
      </a>
      <div class="course-box__main">
        <a href="#" class="course-box__title">${article.title}</a>
        <div class="course-box__rating-teacher">
          <div class="course-box__teacher">
            <p href="#" class="course-box__teacher-link">
            ${article.description}
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
      `
      );
    });
  } else {
    articlesSearchResult.insertAdjacentHTML(
      "beforeend",
      `
    <div class='alert alert-danger rounded-4 mt-5'>هیچ مقاله ای برای جستوجوی شما یافت نشد.</div>
    `
    );
  }

  return searchDatas;
};

const submitComment = async () => {
  const commentTextareaElem = document.querySelector(
    ".comments__score-input-respond"
  );
  const commentScoreElem = document.querySelector("#comment-score");
  let score = 5;
  let courseShortName = getUrlParam("name");

  commentScoreElem.addEventListener(
    "change",
    (event) => (score = event.target.value)
  );

  const newCommentInfos = {
    body: commentTextareaElem.value.trim(),
    courseShortName,
    score,
  };

  const res = await fetch(`http://localhost:4000/v1/comments`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCommentInfos),
  });

  console.log(res);

  if (res.ok) {
    showSwal(
      "کامنت مورد نظر شما با موفقیت ثبت شد",
      "success",
      "خیلی هم عالی",
      () => {}
    );
  }
};

const getAndShowAllCoursesInCoursesPage = async () => {
  const res = await fetch(`http://localhost:4000/v1/courses`);
  const courses = await res.json();

  return courses;
};

export {
  showUserNameInNavabar,
  getAndShowAllCourses,
  getAndShowAllPopularCourses,
  getAndShowAllArticles,
  getAndShowNavbarMenus,
  getAndShowCategoryCourses,
  insertCourseBoxHtmlTemplate,
  coursesSorting,
  getCoursesDetails,
  getAndshowRelatedCourses,
  globalSearch,
  submitComment,
  getAndShowAllCoursesInCoursesPage,
};
