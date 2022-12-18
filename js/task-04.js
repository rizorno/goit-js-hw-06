const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const event = this.dataset.action;
    const span = this.parentElement.querySelector("#value");
    const currentValue = +span.innerHTML;
    let counterValue = 0;

    if (event === "increment") {
      counterValue = currentValue + 1;
    } else {
      // ------ Варіант лічильника (- & +) ------

      // counterValue = currentValue - 1 > 0 ? currentValue - 1 : currentValue - 1;

      // ------ Варіант лічильника (0 & +) ------

      counterValue =
        currentValue - 1 >= 0
          ? currentValue - 1
          : 0 & alert("The counter cannot take a negative value!");
    }
    span.innerHTML = counterValue;
  });
});
