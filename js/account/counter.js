import { getMe } from "../funcs/auth.js";


const getAndShowName = async () => {
  const mainTitleName = document.querySelector(".main__title-name");
  const userInfos = getMe().then((data) => {
    mainTitleName.innerHTML = `${data.name}`;
  });
};


getAndShowName()