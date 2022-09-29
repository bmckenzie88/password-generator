// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables

// array of numbers, specials, uppercase, lowercase

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector ("#password");

  passwordText.value = password;

}

function generatePassword() {
// build random password
// prompt user for length
// check length,
// prompt/confirm for types of characters
// store responses
// based on responses trim/build customized pools of characters  
// build password character by character
// generate random Int within range of available char length
// add char to result
// repeat until decided length is met
}









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// alert("hello!")
// var isHappy = confirm("are you happy?")
// console.log(isHappy)
// var faveColor = prompt("what is your favorite color?");
// console.log(faveColor);

// random=(math.floor(Math.random()*100) +1)