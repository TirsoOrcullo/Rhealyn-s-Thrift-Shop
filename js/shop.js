const iconMenu = document.querySelector('#iconMenu')
const icon = document.querySelector('#icon')
const navContainer = document.querySelector('.nav-container')

iconMenu.addEventListener('click', () => {
    if (icon.classList.contains('fa-bars')) {
        //icon
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-close')
        //menu
        navContainer.classList.add('show')
        navContainer.classList.remove('hide')
    } else {
        //icon
        icon.classList.add('fa-bars')
        icon.classList.remove('fa-close')
        //menu
        navContainer.classList.remove('show')
        navContainer.classList.add('hide')
    }
})