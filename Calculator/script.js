const display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value.trim() === "") {
            display.value = "";
            return;
        }

        let expression = display.value.replace(/÷/g, "/").replace(/×/g, "*");
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        }, 1200);
    }
}

// Keyboard Support
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        append(key);
    } else if (key === "Enter") {
        e.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});