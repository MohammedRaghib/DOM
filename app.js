const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("red benz.jpg")';
});
grayColor[0].addEventListener("click", function () {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("gray benz.webp")';
});
blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("black benz.jpg")';
});
const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click", cart);
const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};
feedbackBtn.addEventListener("click", feedback);

const redColor1 = document.querySelector(".red1");
const blackColor1 = document.querySelector(".black1");
const imageCard1 = document.querySelector(".product-image1");
const feedbackBtn1 = document.querySelector(".feedback1");
const grayColor1 = document.getElementsByClassName("gray1");
const cartButton1 = document.getElementById("button1");
const itemTag1 = document.getElementsByTagName("h3")[1];

redColor1.addEventListener("click", function () {
    cartButton1.style.backgroundColor = "red";
    itemTag1.style.backgroundColor = "red";
    imageCard1.style.backgroundImage = 'url("red lambo.jpg")';
});
grayColor1[0].addEventListener("click", function () {
    cartButton1.style.backgroundColor = "gray";
    itemTag1.style.backgroundColor = "gray";
    imageCard1.style.backgroundImage = 'url("gray lambo.jpg")';
});
blackColor1.addEventListener("click", function () {
    cartButton1.style.backgroundColor = "black";
    itemTag1.style.backgroundColor = "black";
    imageCard1.style.backgroundImage = 'url("black lambo.jpg")';
});
const cart1 = () => {
    cartButton1.style.display = "none";
    feedbackBtn1.style.display = "block";
};
cartButton1.addEventListener("click", cart1);
const feedback1 = () => {
    cartButton1.style.display = "block";
    feedbackBtn1.style.display = "none";
};
feedbackBtn1.addEventListener("click", feedback1);