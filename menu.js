const button = document.querySelector('.nav-menu')

button.addEventListener('click', function (event) {
    const menu = document.querySelector('.nav-list')
    menu.classList.toggle('collapse')
})