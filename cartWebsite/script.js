const products = document.querySelector(".products")
let itemList = [
    {
        name: "Patterened Cotton Shirt",
        src: "https://raw.githubusercontent.com/tech2etc/Build-and-Deploy-Ecommerce-Website/main/img/products/f1.jpg",
        brand: "Adidas", 
        price: "9.9$",
        count: 0,
    },
    {
        name: "White Crew Neck T shirt",
        src: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        brand: "Aspis", 
        price: "4.5$",
        count: 0,
    },
    {
        name: "Black Converse All-Stars",
        src: "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        brand: "Converse", 
        price: "19.9$",
        count: 0,
    },
    {
        name: "Black White and Red Air Jordan",
        src: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        brand: "Nike", 
        price: "29.9$",
        count: 0,
    }
]

function displayItems(){
    var innerContent = ""
    itemList.forEach((item) => {
        innerContent += `<div class="item flex flex-col items-center mr-[30px] p-3 border-solid border-2 border-[#dddcdc] rounded-[20px]">
        <div class="itemImg" h-[30vh] w-[20vw]>
            <img class="h-[300px] w-[90%] rounded-[13px]"
                src="${item.src}"
                alt="">
        </div>
        <div class="itemBrand pt-2 text-gray-600">
            ${item.brand}
        </div>
        <div class="itemName text-[20px] font-[750]">
            ${item.name}
        </div>
        <div class="flex justify-between items-center p-2">
            <div class="itemPrice text-[20px] font-[700] text-[teal]">
                ${item.price}
            </div>
            <div id="itemCart" class="addToCart">
                <i
                    class="fa-solid fa-cart-shopping bg-[#ccf5d4] cursor-pointer p-3 rounded-[50%] text-[teal] text-[20px]"></i>
            </div>
            <div class="cartControls mt-[11px] items-center gap-[8px] hidden">
                <button class="px-3 py-1 bg-green-400 rounded-[50%] plus">+</button>
                <p class="text-[20px]">0</p><button
                    class="px-3 py-1 bg-red-400 rounded-[50%] minus">-</button>
            </div>
        </div>
    </div>`
    })
    products.innerHTML = innerContent
}
displayItems();


const itemCart = document.querySelectorAll(".addToCart")
const navCounter = document.querySelector("#navCounter")
const cartControls = document.querySelectorAll(".cartControls")
const cc = document.querySelectorAll(".cartControls p")
const plus = document.querySelectorAll(".plus")
const minus = document.querySelectorAll(".minus")




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



