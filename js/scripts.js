//back end logic
var userInput = "";
var lastDig = "";
var secondLastDig = parseInt(userInput.charAt(userInput.length-2));
var thirdLastDig = parseInt(userInput.charAt(userInput.length-3));
var fourthlastDig = parseInt(userInput.charAt(userInput.length-4));
var array1 = [];
var populate1 = "";


var createArray1 = function(input) {
  lastDig = parseInt(input.charAt(input.length-1));
  populate1 = "I".repeat(lastDig);
  array1 = populate1.split("");

  if (lastDig > 8) {
    array1.splice(-8,8,"X");
  }
  else if (lastDig >= 5) {
    array1.splice(0,5,"V");
  }
  else if (lastDig > 3) {
    array1.splice(1,4,"V");
  }
alert(array1);
}

//front end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = $("#user-input").val();
    createArray1(userInput);


  });
});
