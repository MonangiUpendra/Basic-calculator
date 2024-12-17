function display(value){
    document.getElementById("result").value+=value

}
function clearscreen(){
    document.getElementById("result").value=""
}

function calculate(){
    var p=document.getElementById("result").value
    var q=eval(p)
    document.getElementById("result").value=q


}
function remove(){
        var display= document.getElementById("result");
        display.value = display.value.slice(0, -1);
      }


