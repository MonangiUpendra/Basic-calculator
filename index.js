
function display(value) {
    document.getElementById("result").value += value;
}

function clearDisplay() {
    document.getElementById("result").value = "";
}


function calculate() {
    var p = document.getElementById("result").value;
    try {
        if (p.includes("/0")) {
            throw new Error("Division by zero");
        }
        var q = Function(`'use strict'; return (${p})`)();
        document.getElementById("result").value = q;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}
