const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", function (event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
});

text.style.fontSize = `${fontSizeControl.value}px`;
