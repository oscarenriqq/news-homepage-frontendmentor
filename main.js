
const openMenu = () => {
    document.querySelector('.menu-mobile').classList.add('show')
}

const closeMenu = () => {
    document.querySelector('.menu-mobile').classList.remove('show')
}

document.querySelector('.menu-icon').addEventListener('click', openMenu)
document.querySelector('.menu-icon-close').addEventListener('click', closeMenu)