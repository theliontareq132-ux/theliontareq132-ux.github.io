var boxscreen = document.getElementById("screen");

function press(value) {
    boxscreen.value += value;
}

function clearScreen() {
    boxscreen.value = "";
}

function calculate() {
    try {
        boxscreen.value = eval(boxscreen.value);
    } catch (error) {
        boxscreen.value = "I am sorry, there has been an error!";
    }
}