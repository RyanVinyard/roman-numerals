//back end logic
var userInput = "";
var lastDig = "";
var secondLastDig = parseInt(userInput.charAt(userInput.length-2));
var thirdLastDig = parseInt(userInput.charAt(userInput.length-3));
var fourthlastDig = parseInt(userInput.charAt(userInput.length-4));
var array1 = [];

var createArray1 = function(input) {
  lastDig = parseInt(input.charAt(input.length-1));
  array1.push("I".repeat(lastDig));
  

}


//front end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = $("#user-input").val();
    createArray1(userInput);


  });
});
