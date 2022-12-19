const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const event = this.dataset.action;
    const span = this.parentElement.querySelector("#value");
    const currentValue = +span.innerHTML;

    let counterValue = 0;

    if (event === "increment") {
      counterValue = currentValue + 1;
    }

    if (event === "decrement") {
      if (currentValue - 1 >= 0) {
        counterValue = currentValue - 1;
      } else if (currentValue - 1 === -1) {
        let message = confirm(
          "The counter will take a negative value! Do you want to continue?"
        );
        if (message === true) {
          counterValue = currentValue - 1;
        } else if (message === false) {
          counterValue = 0;
        }
      } else if (currentValue - 1 < 0) {
        counterValue = currentValue - 1;
      }
    }

    span.innerHTML = counterValue;
  });
});
