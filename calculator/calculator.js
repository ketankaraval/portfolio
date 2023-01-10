var c;
function clearscreen(){
    document.getElementById("result").value = " ";
}
function display(value){
    document.getElementById("result").value += value;
}
// function calculate(){
//     var p = document.getElementById("result").value;
//     var q = eval(p);
//     document.getElementById("result").value = q;
// }
function newCalculate(){
    var a = document.getElementById("result").value;
    // console.log(a);
    var firstNumber = a.slice(0,c-1);
    // console.log(firstNumber);
    firstNumber = Number(firstNumber);
    var secondNumber = a.slice(c);
    // console.log(secondNumber);
    secondNumber = Number(secondNumber);
    var myOperator = a.slice(c-1,c);
    // console.log(myOperator);
    var x = operator(firstNumber,secondNumber,myOperator);
    document.getElementById("result").value = x;
   
}
function disPlay(value){ 
    let myOperator = document.getElementById("result").value+=value;
    c = myOperator.length;
    console.log(c);
}
function operator(firstNumber,secondNumber,myOperator){
    switch(myOperator){
        case "+":
            var q = firstNumber + secondNumber;
            break;
        case "-": 
            q = firstNumber - secondNumber;
            break;
        case "*": 
            q = firstNumber * secondNumber;
            break;
        case "/": 
            q = firstNumber / secondNumber;
            break;
        default :
             q = "error";            
    }
    return q;
}