function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColor = document.querySelector(".change-color");

const textColor = document.querySelector(".color");
textColor.innerHTML = getRandomHexColor();

const elemBody = document.querySelector("body");
elemBody.style.backgroundColor = getRandomHexColor();

btnColor.addEventListener("click", function () {
  elemBody.style.backgroundColor = getRandomHexColor();

  textColor.innerHTML = getRandomHexColor();
});
