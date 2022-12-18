function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColor = document.querySelector(".change-color");

btnColor.addEventListener("click", function () {
  const elemBody = document.querySelector("body");
  const textColor = document.querySelector(".color");

  elemBody.style.backgroundColor = getRandomHexColor();

  textColor.innerHTML = getRandomHexColor();
});
