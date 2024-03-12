const redInc = document.querySelector("#redInc")
const redDec = document.querySelector("#redDec")
const greenInc = document.querySelector("#greenInc")
const greenDec = document.querySelector("#greenDec")
const blueInc = document.querySelector("#blueInc")
const blueDec = document.querySelector("#blueDec")
const spanRed = document.querySelector("#spanRed")
const spanGreen = document.querySelector("#spanGreen")
const spanBlue = document.querySelector("#spanBlue")

const heading = document.querySelector(".page1 h1")

const background = document.querySelector(".page1")

let red = 0;
let green = 0;
let blue = 0;

function changeBackground() {
    background.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function updateRed() {
    console.log(red)
    if(red < 0){
        red = 0;
    }
    if(red > 255){
        red = 255;
    }
    spanRed.innerText = `${red}`
    changeBackground()
}

redInc.addEventListener("click", () => {
    red = red + 10;
    updateRed();
})

redDec.addEventListener("click", () => {
    red = red - 10;
    updateRed();
})

function updateGreen() {
    console.log(green)
    if(green < 0){
        green = 0;
    }
    if(green > 255){
        green = 255;
    }
    spanGreen.innerText = `${green}`
    changeBackground()
}

greenInc.addEventListener("click", () => {
    green = green + 10;
    updateGreen();
})

greenDec.addEventListener("click", () => {
    green = green - 10;
    updateGreen();
})

function updateBlue() {
    console.log(blue)
    if(blue < 0){
        blue = 0;
    }
    if(blue > 255){
        blue = 255;
    }
    spanBlue.innerText = `${blue}`
    changeBackground()
}

blueInc.addEventListener("click", () => {
    blue = blue + 10;
    updateBlue();
})

blueDec.addEventListener("click", () => {
    blue = blue - 10;
    updateBlue();
})

