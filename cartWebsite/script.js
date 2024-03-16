const itemCart = document.querySelectorAll(".addToCart")
const navCounter = document.querySelector("#navCounter")
const cartControls = document.querySelectorAll(".cartControls")
const cc = document.querySelectorAll(".cartControls p")
const plus = document.querySelectorAll(".plus")
const minus = document.querySelectorAll(".minus")

console.log(itemCart, cartControls, cc, plus, minus)

for(let i = 0; i < itemCart.length; i++){
    itemCart[i].addEventListener("click", () => {
        itemCart[i].style.display = `none`
        cartControls[i].style.display = `flex`
    })
}