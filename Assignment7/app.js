// variables
var input = new Array();
var  result;

// to get input char on each button press
function getBtnChar(char){
    input.push(char);
    document.getElementById("display").value= input.join("");
}

// reset input
function resetInput(){
    input= [];
    document.getElementById("display").value= input.join("");
}
// reset one char
function resetOneChar(){
    input.pop();
    document.getElementById("display").value= input.join("");
}
// calculate result
function getResult(){
 result = eval(input.join(""));
 input= [];
 input.push(result);
 document.getElementById("display").value= input.join("");
}
