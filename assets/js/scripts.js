var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function changeColor(numberValue) {
    switch (true) {
        case (numberValue < 0):
            currentNumberWrapper.classList.add("negativeColor");
            break;
        case (numberValue > 0):
            currentNumberWrapper.classList.add("positiveColor");
            break;
        default:
            currentNumberWrapper.classList.remove("negativeColor", "positiveColor");
    }
}

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor(currentNumber);
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor(currentNumber);
}