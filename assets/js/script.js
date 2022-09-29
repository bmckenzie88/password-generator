// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables
var result = ""

// array of numbers, specials, uppercase, lowercase
var numbers = [0,1,2,3,4,5,6,7,8,9]
console.log(numbers)
var specials = ["!","@","#","$","%","^","&","*"]
console.log(specials)
var upcase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
console.log(upcase)
var lowcase = upcase.map(element => {
  return element.toLowerCase();
});
console.log(lowcase)
var optionsPool = lowcase



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector ("#password");

  passwordText.value = password;

}

function generatePassword() {
// build random password
// prompt user for length
var lengthChoice = prompt("How many characters?")
// check length,
console.log(lengthChoice)
// prompt/confirm for types of characters
var numberChoice = confirm("Include numbers?")
console.log("include numbers - " + numberChoice)
var specialsChoice = confirm("Include special characters?")
console.log("include special characters - " + specialsChoice)
var upCaseChoice = confirm("Include uppercase letters?")
console.log("include uppercase letters - " + upCaseChoice)

// store responses
// based on responses trim/build customized pools of characters
    if (numberChoice) {
        optionsPool = optionsPool.concat(numbers)
    }
    if (specialsChoice) {
       optionsPool = optionsPool.concat(specials)
    }
    if (upCaseChoice) {
        optionsPool = optionsPool.concat(upcase)
    }
    console.log(optionsPool)
}

// build password character by character
// generate random Int within range of available char length

// add char to result
// repeat until decided length is met
//   return result
// }









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// alert("hello!")
// var isHappy = confirm("are you happy?")
// console.log(isHappy)
// var faveColor = prompt("what is your favorite color?");
// console.log(faveColor);

// random=(math.floor(Math.random()*100) +1)





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// alert("hello!")
// var isHappy = confirm("are you happy?")
// console.log(isHappy)
// var faveColor = prompt("what is your favorite color?");
// console.log(faveColor);

// random=(math.floor(Math.random()*100) +1)