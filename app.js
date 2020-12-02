function add(){
  var firstNumber = document.getElementById("firstNumber").value;
  var a = parseInt(firstNumber);
  var secondNumber = document.getElementById("secondNumber").value
  var b = parseInt(secondNumber);
  if(a + b >= 1){
  var addAns = document.getElementById("addAns").innerHTML;
  document.getElementById("addAns").innerHTML = a + b;
  }
  else{
  var addAns = document.getElementById("addAns").innerHTML;
  document.getElementById("addAns").innerHTML = "Nada";
  }
}
function subtract(){
  var firstNumber = document.getElementById("subOne").value;
  var a = parseInt(firstNumber);
  var secondNumber = document.getElementById("subTwo").value
  var b = parseInt(secondNumber);
  var addAns = document.getElementById("subAns").innerHTML;
  document.getElementById("subAns").innerHTML = a - b;
}
function multiply(){
  var firstNumber = document.getElementById("mulOne").value;
  var a = parseInt(firstNumber);
  var secondNumber = document.getElementById("mulTwo").value
  var b = parseInt(secondNumber);
  var addAns = document.getElementById("mulAns").innerHTML;
  document.getElementById("mulAns").innerHTML = a * b;
}
function divide(){
  var firstNumber = document.getElementById("divOne").value;
  var a = parseInt(firstNumber);
  var secondNumber = document.getElementById("divTwo").value
  var b = parseInt(secondNumber);
  var addAns = document.getElementById("divAns").innerHTML;
  document.getElementById("divAns").innerHTML = a / b;
}
