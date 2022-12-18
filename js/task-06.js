const input = document.querySelector("#validation-input");

input.onblur = function (event) {
  if (this.value.length === Number(input.dataset.length)) {
    this.classList.add("valid");
  } else if (
    this.value.length > Number(input.dataset.length) ||
    this.value.length < Number(input.dataset.length)
  ) {
    this.classList.add("invalid");

    // ----- Повідомлення про помилку (опція) -----

    alert(
      `ERROR: You have entered ${this.value.length} symbols, but you need to enter 6!`
    );
  }
};

input.onfocus = function (event) {
  this.classList.remove("invalid");
  this.classList.remove("valid");
};
