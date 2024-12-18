function display(value){
    document.getElementById("result").value+=value

}
function clearscreen(){
    document.getElementById("result").value=""
}

function calculate(){
    var p=document.getElementById("result").value
    try {
        var q = Function(`'use strict'; return (${p})`)();
        document.getElementById("result").value = q;
    } 
    catch (e) {
        document.getElementById("result").value = "Error";
    }
}
function remove() {
    var display = document.getElementById("result");
    if (display.value === "Error") {
        display.value = "";
    } else {
        display.value = display.value.slice(0, -1);
    }
}
