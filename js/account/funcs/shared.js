import { getMe } from "../../funcs/auth.js"
const logout = () => {
    localStorage.removeItem('user')
    return true

}

const getAndShowName = async () => {
    const sidebarName = document.querySelector('.sidebar__name')
    const userInfos = getMe().then(data => {
        sidebarName.innerHTML = data.name
    })
}

export {logout, getAndShowName}