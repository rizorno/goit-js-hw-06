function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const divParent = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  divParent.innerHTML = "";
  input.value = "0";
}

function createBoxes(amount) {
  amount = input.value;
  let sizeBasic = 30;

  for (let i = 0; i < amount; i++) {
    const divChild = document.createElement("div");
    divParent.append(divChild);
    const sizeCurrent = sizeBasic + i * 10;

    divParent.firstChild.style.cssText = `width: ${sizeBasic}px; height: ${sizeBasic}px; background-color: ${getRandomHexColor()}`;
    divParent.lastChild.style.cssText = `width: ${sizeCurrent}px; height: ${sizeCurrent}px; background-color: ${getRandomHexColor()}`;
  }
}
