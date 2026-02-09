
let display = document.getElementById("display");

function buttonValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  let expression = display.value;
  let result = eval(expression);
  display.value = result;
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

