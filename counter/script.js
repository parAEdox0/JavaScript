const inc = document.querySelector(".inc")
const dec = document.querySelector(".dec")
const counter = document.querySelector(".page1 h1")
const background = document.querySelector(".page1")

let count = 0;
let red = 55;

function updateCounter(){
    if(count > 20){
        count = 20
        red = 195
    }
    if(count < 0){
        count = 0
        red = 55
    }
    counter.innerText = `${count}`;
    background.style.backgroundColor = `rgb(${red}, 50, 50)`

}

function displayCount(){
console.log(count)

}

inc.addEventListener("click", () => {
    count = count + 1;
    red = red + 7
    updateCounter();
})

dec.addEventListener("click", () => {
    count = count - 1;
    red = red - 7 
    updateCounter();
})
