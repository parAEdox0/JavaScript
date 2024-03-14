const ulOne =  document.querySelector(".ulOne");
const ulTwo =  document.querySelector(".ulTwo");
const ulThree =  document.querySelector(".ulThree");

ulTwo.addEventListener("click", () => {
    ulTwo.classList.add("bgBlack")
    ulOne.classList.remove("bgBlack")
    ulThree.classList.remove("bgBlack")
})

ulThree.addEventListener("click", () => {
    ulThree.classList.add("bgBlack")
    ulOne.classList.remove("bgBlack")
    ulTwo.classList.remove("bgBlack")
})

ulOne.addEventListener("click", () => {
    ulOne.classList.add("bgBlack")
    ulThree.classList.remove("bgBlack")
    ulTwo.classList.remove("bgBlack")
})

const hero = document.querySelector(".hero")

const arrayOfData = [
    { name: "Dark Matter", image: "https://i.pinimg.com/564x/aa/eb/fe/aaebfea32a329788cf3b4f3d181d81a6.jpg" },
    { name: "City Plane", image: "https://i.pinimg.com/564x/b9/bc/c4/b9bcc4cf09bf3e2a59db3e0485dd66aa.jpg" },
    { name: "Paper on Fire", image: "https://i.pinimg.com/564x/2f/e9/c5/2fe9c5ccdae654bbe538e966f0b80ce9.jpg" },
    { name: "The Dubai Mall", image: "https://i.pinimg.com/564x/62/66/67/626667d699fc4d3d7bc2c80315ce0c08.jpg" },
    { name: "Explore The Galaxy", image: "https://i.pinimg.com/564x/2e/c8/ec/2ec8ec56c104947dd3f3083bfbaba174.jpg" },
    { name: "Boom", image: "https://i.pinimg.com/564x/64/ce/aa/64ceaa6f4e4524db4790ede22d4259ac.jpg" },
    { name: "The Lost City of Z", image: "https://i.pinimg.com/564x/36/bd/76/36bd76bc55cfb3f35225aae064b37c19.jpg" },
    { name: "Car", image: "https://i.pinimg.com/736x/e2/24/52/e224520bf63488fc66c81391b312fe80.jpg" },
    { name: "Black Smoke", image: "https://i.pinimg.com/564x/66/4c/69/664c691f058f955f8a8ce4c85d8014e2.jpg" },
    { name: "Purple Sunset", image: "https://i.pinimg.com/564x/ae/4f/fb/ae4ffbf9bd35689b133b65a8efad042b.jpg" },
    { name: "Orange Smoke", image: "https://i.pinimg.com/564x/8f/6a/fe/8f6afee23e4dfc8fa9c8d9b120cb6a87.jpg" },
    { name: "City Scape", image: "https://i.pinimg.com/564x/66/cc/bd/66ccbd41ae3fc974dd088196e05a1829.jpg" },
    { name: "Neon City", image: "https://i.pinimg.com/564x/be/05/d5/be05d5a544c73053f9506da459a5c207.jpg" },
    { name: "Shirogami", image: "https://i.pinimg.com/564x/41/98/c1/4198c1454f9f690fa1dc0844ceaab93e.jpg" },
    { name: "Pastel Car", image: "https://i.pinimg.com/564x/86/a9/ce/86a9ce945024a5bf13ffb236805ce5f6.jpg" },
    { name: "Iron Man", image: "https://i.pinimg.com/564x/e3/a8/6b/e3a86be66e0fa121e31ae0152e3e87a3.jpg" },
    { name: "My Dream", image: "https://i.pinimg.com/564x/70/dd/a4/70dda4514a824b1eb35d13cc912e75d2.jpg" },
    { name: "Anime Lad", image: "https://i.pinimg.com/564x/88/7b/78/887b78ec8030ca4a43b0078620e2d749.jpg" },
    { name: "Matte Laptop Wallpaper", image: "https://i.pinimg.com/564x/46/95/ab/4695ab2e031f45be1a1a2f2dbe722826.jpg" },
    { name: "Aesthetic Train", image: "https://i.pinimg.com/564x/53/56/c8/5356c8751aa24fe26908f6bd8b8666c3.jpg" },
    { name: "Ocean", image: "https://i.pinimg.com/564x/70/ae/15/70ae151b9bd3966ebe9a8644f4d51bcb.jpg" },
    { name: "Spiderman", image: "https://i.pinimg.com/564x/41/06/22/4106221d069094eef9eed3df3c44f7f3.jpg" }
]

function showTheCards() {
    var clutter = ""
    arrayOfData.forEach((obj) => {
        clutter += `<div class="heroImg"><img src="${obj.image}"
        alt=""></div>`
    })
    // console.log(clutter)
    hero.innerHTML = clutter
}

function handleSearch() {

}

handleSearch();
showTheCards();

const search = document.querySelector(".search input")
const overlay = document.querySelector(".overlay")
const find = document.querySelector(".find")

search.addEventListener("click", () => {
    overlay.style.display = "block"
    find.style.display = "block"
})

overlay.addEventListener("click", () => {
    overlay.style.display = "none"
    find.style.display = "none"
})

search.addEventListener("input", () => {
    const searchValue = search.value.trim().toLowerCase();
    let filteredArray = [
        {name: "Search Anything"},
        {name: "You like or are curious about :)"}
    ];
    console.log(searchValue)

    if (searchValue !== '') {
        filteredArray = arrayOfData.filter((obj) => obj.name.toLowerCase().startsWith(searchValue))
    }

    console.log(filteredArray)

    let clutter = ""
    filteredArray.forEach((obj) => {
        clutter += `<div class="findInput">
        <i class="ri-search-line"></i>
        <p>${obj.name}</p>
    </div>`
    })

    if (clutter === '') {
        clutter = "<p>No search results found.</p>";
    }

    find.innerHTML = clutter
})













