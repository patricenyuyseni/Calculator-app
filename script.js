let display = document.getElementById("display");
let expression = "";
let newNumber = false; 

function buttonValue(value) {

  expression += value; 

  if (!isNaN(value) || value === ".") {

    if (newNumber) {
      display.value = value;
      newNumber = false;
    } else {
      display.value += value;
    }

  } else {
    newNumber = true;
  }
}

function clearDisplay() {
  display.value = '';
  expression = '';
  newNumber = false;
}
function calculate() {
  let result = Function('"use strict"; return (' + expression + ')')();
  display.value = result;
  expression = result.toString();
  newNumber = true;
}


function deleteLast() {
  display.value = display.value.slice(0, -1);
  expression = expression.slice(0, -1);
}
