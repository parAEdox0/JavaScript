

const newPageImage = document.querySelector(".newPageImage");
const clickedImage = localStorage.getItem("clickedImage");

newPageImage.innerHTML = `<img class="w-[90%] rounded-[20px]"
src="${clickedImage}" alt="">`



