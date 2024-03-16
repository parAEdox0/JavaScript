const itemCart = document.querySelectorAll(".addToCart")
const navCounter = document.querySelector("#navCounter")
const cartControls = document.querySelectorAll(".cartControls")
const cc = document.querySelectorAll(".cartControls p")
const plus = document.querySelectorAll(".plus")
const minus = document.querySelectorAll(".minus")



let itemList = []

for(let i = 0; i < itemCart.length; i++){
    itemList[i] = {
        name: "",
        count: 0,
    };
}

console.log(itemList)

// console.log(itemCart, cartControls, cc, plus, minus)

for(let i = 0; i < itemCart.length; i++){
    itemCart[i].addEventListener("click", () => {
        navCounter.style.display = `block`
        itemCart[i].style.display = `none`
        cartControls[i].style.display = `flex`
    })
}

for(let i = 0; i < plus.length; i++){
    plus[i].addEventListener("click", () => {
        // console.log(i)
        itemList[i].count +=1
        cc[i].innerText = itemList[i].count
        updateCounter()
    })
}

for(let i = 0; i < plus.length; i++){
    minus[i].addEventListener("click", () => {
        // console.log(i)
        if(itemList[i].count > 0){
            itemList[i].count -= 1
        }
        if(itemList[i].count == 0){
            itemCart[i].style.display = `block`
            cartControls[i].style.display = `none`
        }
        cc[i].innerText = itemList[i].count
        updateCounter()

    })
}
function updateCounter(){
let counter = 0
for(let i = 0; i < itemList.length; i++){
    console.log(i, `=`, itemList[i].count)
    counter += itemList[i].count
}
navCounter.innerText = counter
}



