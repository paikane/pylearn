
import { logout,getAndShowName} from "./funcs/shared.js";

window.addEventListener('load', () => {
    const logoutUserBtn = document.querySelector('#logout-user')
    getAndShowName()
    logoutUserBtn.addEventListener('click', event => {
        event.preventDefault()
        logout()
        location.href = '../../index.html'
    })
})