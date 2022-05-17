let currentNumberDisplay = document.querySelector("#currentNumber");
let decreaseBtn = document.querySelector(".decrease");
let increaseBtn = document.querySelector(".increase");
let currentNumber = 0;

decreaseBtn.addEventListener("click", () => {
    if (currentNumber <= 10 && currentNumber > 0) {
        currentNumber--;
        currentNumberDisplay.innerHTML = currentNumber;
        return currentNumberDisplay;
    } else {
        decreaseBtn.style.disabled = true;
    }
});

increaseBtn.addEventListener("click", () => {
    if (currentNumber < 10 && currentNumber >= 0) {
        currentNumber++;
        currentNumberDisplay.innerHTML = currentNumber;
        return currentNumberDisplay;
    } else {
        increaseBtn.style.disabled = true;
    }
});
