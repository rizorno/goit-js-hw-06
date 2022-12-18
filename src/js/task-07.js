const input = document.querySelector("#font-size-control");

input.addEventListener("input", function (event) {
  const text = document.querySelector("#text");
  text.style.fontSize = `${input.value}px`;
});
