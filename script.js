// Assignment Code
var generateBtn = document.querySelector("#generate");
var copierBtn = document.querySelector("#copier");

function generatePassword() {

// creation of arrays with alpha numeric cases

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["!", "@", "#", "$", "%", "&", "*"];

// empty array to be built using concat and push
 
var resultArray = [];
var userArray = [];

uppercaseArray[1]

  var numCharacter = prompt ("How many characters would you like your password to be? Please enter a value between 8 and 128.");
  var numbers = confirm ("Would you like your password to contain numbers?");
  var uppercases = confirm ("Would you like your password to contain uppercase letters?");
  var lowercases = confirm ("Would you like your password to contain lowercase letters?");
  var characters = confirm ("Would you like your password to contain special characters?");


if (numbers) {
  resultArray = resultArray.concat(numberArray);
} 

if (uppercases) {
  resultArray = resultArray.concat(uppercaseArray);
} 

if (lowercases) {
  resultArray = resultArray.concat(lowercaseArray);
}

if (characters) {
  resultArray = resultArray.concat(characterArray);
}

// joining the arrays
for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function to copy to clipboard on click
function copyToClipboard() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
  alert(copyText.value + " copied to clipboard");
}

// Add event listener to generate and copier button
generateBtn.addEventListener("click", writePassword);
copierBtn.addEventListener("click", copyToClipboard);