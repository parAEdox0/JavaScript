const imageObjects = [
    { name: "Dark Matter", src: "https://i.pinimg.com/564x/aa/eb/fe/aaebfea32a329788cf3b4f3d181d81a6.jpg" },
    { name: "Plane over the city", src: "https://i.pinimg.com/564x/b9/bc/c4/b9bcc4cf09bf3e2a59db3e0485dd66aa.jpg" },
    { name: "Photoshoot idea burning newspaper", src: "https://i.pinimg.com/564x/2f/e9/c5/2fe9c5ccdae654bbe538e966f0b80ce9.jpg" },
    { name: "The Dubai Mall", src: "https://i.pinimg.com/564x/62/66/67/626667d699fc4d3d7bc2c80315ce0c08.jpg" },
    { name: "Explore the galaxy", src: "https://i.pinimg.com/564x/2e/c8/ec/2ec8ec56c104947dd3f3083bfbaba174.jpg" },
    { name: "Artistic city boom", src: "https://i.pinimg.com/564x/64/ce/aa/64ceaa6f4e4524db4790ede22d4259ac.jpg" },
    { name: "The lost city of Z", src: "https://i.pinimg.com/564x/36/bd/76/36bd76bc55cfb3f35225aae064b37c19.jpg" },
    { name: "Blue patterened car", src: "https://i.pinimg.com/736x/e2/24/52/e224520bf63488fc66c81391b312fe80.jpg" },
    { name: "Orange Gray Smoke", src: "https://i.pinimg.com/564x/66/4c/69/664c691f058f955f8a8ce4c85d8014e2.jpg" },
    { name: "Purple Beach Sunset", src: "https://i.pinimg.com/564x/ae/4f/fb/ae4ffbf9bd35689b133b65a8efad042b.jpg" },
    { name: "Red Black Smoke", src: "https://i.pinimg.com/564x/8f/6a/fe/8f6afee23e4dfc8fa9c8d9b120cb6a87.jpg" },
    { name: "Drone City Pic", src: "https://i.pinimg.com/564x/66/cc/bd/66ccbd41ae3fc974dd088196e05a1829.jpg" },
    { name: "Neon City", src: "https://i.pinimg.com/564x/be/05/d5/be05d5a544c73053f9506da459a5c207.jpg" },
    { name: "Shirogami", src: "https://i.pinimg.com/564x/41/98/c1/4198c1454f9f690fa1dc0844ceaab93e.jpg" },
    { name: "Abstract Car Paint", src: "https://i.pinimg.com/564x/86/a9/ce/86a9ce945024a5bf13ffb236805ce5f6.jpg" },
    { name: "Iron Man", src: "https://i.pinimg.com/564x/e3/a8/6b/e3a86be66e0fa121e31ae0152e3e87a3.jpg" },
    { name: "My Dream", src: "https://i.pinimg.com/564x/70/dd/a4/70dda4514a824b1eb35d13cc912e75d2.jpg" },
    { name: "Anime Abstract", src: "https://i.pinimg.com/564x/88/7b/78/887b78ec8030ca4a43b0078620e2d749.jpg" },
    { name: "Black aesthetic laptop wallpaper", src: "https://i.pinimg.com/564x/46/95/ab/4695ab2e031f45be1a1a2f2dbe722826.jpg" },
    { name: "Soothing train paint", src: "https://i.pinimg.com/564x/53/56/c8/5356c8751aa24fe26908f6bd8b8666c3.jpg" },
    { name: "Beach Baby", src: "https://i.pinimg.com/564x/70/ae/15/70ae151b9bd3966ebe9a8644f4d51bcb.jpg" },
    { name: "Spider Man", src: "https://i.pinimg.com/564x/41/06/22/4106221d069094eef9eed3df3c44f7f3.jpg" },
    { name: "Apple Products", src: "https://i.pinimg.com/564x/2e/b8/72/2eb872769a1726d4ed6b433f4f31b3b5.jpg" }
];

const navInput = document.querySelector(".navInput input");
const overlay = document.querySelector(".overlay");
const search = document.querySelector(".search");
let toFind;

function updateToFind(value) {
    toFind = value;
    displayFind(toFind)
}

function displayFind(value) {
    let innerSearch = "";
    let filteredArray = []

    filteredArray = imageObjects.filter((obj) => obj.name.toLowerCase().startsWith(value))

    if (value == "blank") {
        filteredArray = [
            { name: "Search anything you like" },
            { name: "Or curious about" }
        ]
    }

    if (filteredArray.length == 0) {
        search.innerHTML = `<div class="flex items-center px-4 py-3 gap-3">
        <p>Search result not found</p></div>`
    }
    else {


        filteredArray.forEach((obj) => {
            innerSearch += `<div class="flex items-center px-4 py-3 gap-3">
            <i class="fa-solid fa-magnifying-glass"></i>
            <p>${obj.name}</p>
            </div>`
        })

        search.innerHTML = innerSearch
    }



}

navInput.addEventListener("click", () => {
    overlay.style.display = `block`;
    search.style.display = `block`;
});

overlay.addEventListener("click", () => {
    overlay.style.display = `none`;
    search.style.display = `none`;
});

navInput.addEventListener("input", () => {
    let searchValue
    if (navInput.value != "") {
        searchValue = navInput.value.toLowerCase();
        updateToFind(searchValue);
    }
    if (navInput.value == "") {
        searchValue = "blank";
        updateToFind(searchValue);
    }
})






