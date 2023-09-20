const menuButton = document.getElementById('menuButton')
const vegetarianButton = document.getElementById('vegetarianButton')
const kebabButton = document.getElementById('kebabButton')
const getVegetarianClass = document.querySelector('.vegetarian')
const getMeatClass = document.querySelector('.meat')
const getKebabClass = document.querySelector('.kebab')


vegetarianButton.addEventListener("click", (e) => {
    if (getVegetarianClass.style.display === 'unset') {
        if (getMeatClass.style.display === 'none' && getKebabClass.style.display === 'none') {
            getMeatClass.style.display = 'unset'
            getKebabClass.style.display = 'unset'
        }
        else {
            getMeatClass.style.display = 'none'
            getKebabClass.style.display = 'none'
        }
    } else {
        getVegetarianClass.style.display = 'unset'
        getMeatClass.style.display = 'none'
        getKebabClass.style.display = 'none'
    }
})

kebabButton.addEventListener("click", (e) => {
    if (getKebabClass.style.display === 'unset') {
        if (getMeatClass.style.display === 'none' && getVegetarianClass.style.display === 'none') {
            getMeatClass.style.display = 'unset'
            getVegetarianClass.style.display = 'unset'
        } else {
            getMeatClass.style.display = 'none'
            getVegetarianClass.style.display = 'none'
        }
    } else {
        getKebabClass.style.display = 'unset'
        getMeatClass.style.display = 'none'
        getVegetarianClass.style.display = 'none'
    }
})

menuButton.addEventListener("click", (e) => {
    getMeatClass.style.display = 'unset'
    getVegetarianClass.style.display = 'unset'
    getKebabClass.style.display = 'unset'
})