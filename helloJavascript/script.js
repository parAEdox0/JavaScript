let greeting = document.querySelector(".page1 h1")
let button = document.querySelector(".page1 button")
let userName

button.addEventListener("click", () => {
    userName = prompt("Enter Your Name :)")
    console.log(userName)
    greeting.innerHTML = `Hello <span>${userName}</span>`
})

