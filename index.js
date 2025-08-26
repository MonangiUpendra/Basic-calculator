function append(value) {
  document.getElementById("result").value += value;
}

function clearDisplay() {
  document.getElementById("result").value = "";
}

function removeChar() {
  let display = document.getElementById("result");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = document.getElementById("result").value;

    // Handle percentage
    expression = expression.replace(/%/g, "/100");

    let result = Function(`'use strict'; return (${expression})`)();
    document.getElementById("result").value = result;
  } catch (e) {
    document.getElementById("result").value = "Error";
  }
}

/* Keyboard Support */
document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key) || "+-*/.%".includes(key)) {
    append(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    removeChar();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
