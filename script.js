let count = 0;
let maxLimit = 10;

function updateDisplay() {
    document.getElementById("counter").innerText = count;
}

function increase() {
    if (count < maxLimit) {
        count++;
        document.getElementById("message").innerText = "";
    } else {
        document.getElementById("message").innerText = "Maximum limit reached!";
    }
    updateDisplay();
}

function decrease() {
    count--;
    if (count < 0) {
        count = 0;
    }
    document.getElementById("message").innerText = "";
    updateDisplay();
}

function reset() {
    count = 0;
    document.getElementById("message").innerText = "";
    updateDisplay();
}
