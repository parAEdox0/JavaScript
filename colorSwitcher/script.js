const button = document.querySelector(".info button")
const title = document.querySelector(".info p")
const page1 = document.querySelector(".page1")
let color = "#"
let index
let pallete = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

button.addEventListener("click", () => {
    for(let i = 0; i < 6; i++){
        index = Math.floor(Math.random()*16)
        color = color + pallete[index]
    }
    page1.style.backgroundColor = `${color}`
    title.innerText = `Background-Color : ${color}`
    color = "#"
})