//back end logic
var userInput = "";
var lastDig = "";
var secondLastDig = "";
var thirdLastDig = "";
var fourthlastDig = "";
var array1 = [];
var array10 = [];
var array100 = [];
var populate1 = "";
var populate10 = "";
var populate100 = "";
var populate1000 = "";
var string1 = "";
var string10 = "";
var string100 = "";

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
  string1 = array1.join("");
}

var createArray10 = function(input) {
  secondLastDig = parseInt(input.charAt(input.length-2));
  populate10 = "X".repeat(secondLastDig);
  array10 = populate10.split("");

  if (secondLastDig > 8) {
    array10.splice(-8,8,"C");
  }
  else if (secondLastDig >= 5) {
    array10.splice(0,5,"L");
  }
  else if (secondLastDig > 3) {
    array10.splice(1,4,"L");
  }
  string10 = array10.join("");
}

var createArray100 = function(input) {
  thirdLastDig = parseInt(input.charAt(input.length-3));
  populate100 = "C".repeat(thirdLastDig);
  array100 = populate100.split("");

  if (thirdLastDig > 8) {
    array100.splice(-8,8,"M");
  }
  else if (thirdLastDig >= 5) {
    array100.splice(0,5,"D");
  }
  else if (thirdLastDig > 3) {
    array100.splice(1,4,"D");
  }
  string100 = array100.join("");
}

var create1000 = function(input) {
  fourthLastDig = parseInt(input.charAt(input.length-4));
  populate1000 = "M".repeat(fourthLastDig);
}

//front end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = $("#user-input").val();
    createArray1(userInput);
    createArray10(userInput);
    createArray100(userInput);
    create1000(userInput);
    $("#numeral").text(populate1000 + string100 + string10 + string1);
  });
});
