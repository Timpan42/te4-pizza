document.addEventListener('touchstart', onTouchStart, { passive: true });
const pizzas = document.querySelectorAll('.pizza')
let number = 1
pizzas.forEach(pizza => {
    pizza.children[0].innerHTML = number + '. ' + pizza.children[0].innerHTML
    number++
})