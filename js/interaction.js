console.log("Testing!");
const lightMode = document.getElementById("Light-button");
const darkMode = document.getElementById("Dark-button");

const bodyElement = document.querySelector("body");

lightMode.addEventListener("click", function (event) {
    bodyElement.style.backgroundColor = "#ffffff";
    bodyElement.style.color = "black";
});
darkMode.addEventListener("click", function (event) {
    bodyElement.style.backgroundColor = "#383838";
    bodyElement.style.color = "aliceblue";
});