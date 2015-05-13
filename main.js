




var number1 = document.querySelector("#num_one");
var number2 = document.querySelector("#num_two");
var answer = document.querySelector("#answer");
var btn = document.querySelector("#calculateBtn");

function add () {
  var num1 = Number(number1.value);
  var num2 = Number(number2.value);
  var sum = num1 + num2;
  answer.innerHTML = sum.toString();
}


btn.addEventListener("click", add);


