console.log("Testing!");
const lightMode = document.getElementById("Light-button");
const darkMode = document.getElementById("Dark-button");

const bodyElement = document.querySelector("body");
const headerTextElement = document.getElementById("headerText");
const aboutTextElement = document.getElementById("aboutText");
const paragraphTextElement = document.getElementById("paragraphText");
const likeTextElement = document.getElementById("likeText");
const listTextElement = document.querySelector("li");

lightMode.addEventListener("click", function (event) {
    bodyElement.style.backgroundColor = "#ffffff";
    headerTextElement.style.color = "black";
    aboutTextElement.style.color = "black";
    paragraphTextElement.style.color = "black";
    likeTextElement.style.color = "black";
    listTextElement.style.color = "black";
});
darkMode.addEventListener("click", function (event) {
    bodyElement.style.backgroundColor = "#383838";
    headerTextElement.style.color = "aliceblue";
    aboutTextElement.style.color = "aliceblue";
    paragraphTextElement.style.color = "aliceblue";
    likeTextElement.style.color = "aliceblue";
    listTextElement.style.color = "aliceblue";
});