// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var characters = ["a", "b", "c", "d", "e", "f", "g", "A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "!", "#", "&"]
var alpha = "abcdefghijklmnopqrstuvwxyz";
var beta = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

function getRandomNumber(min, max) {
  var randomNumber = Math.random();
  var randomNumberUpToMax = randomNumber * max;
  var randomNumberInRange = min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange);
}

function getRandomValueFromArray(array) {
  var randomArrayPosition = getRandomNumber(0, array.length);
  return array[randomArrayPosition];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {

  var password = "";

  var passwordLength = prompt("How many character from 8 to 128 long do you want your password to be?");

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password must be greater than 8 characters and less than 128");
  }

  var wantsNumbers = confirm("Do you want numbers in your password?");
  var wantsSpecialChar = confirm("Do you want special characters in your password?");
  var wantsAlpha = confirm("Do you want lower case letters in your password?");
  var wantsBeta = confirm("Do you want upper case letters in your password?");

  while(passwordLength > password.length) {
    if (wantsNumbers && (passwordLength > password.length)) {
      password += getRandomValueFromArray(numbers);
    }
    if (wantsSpecialChar && (passwordLength > password.length)) {
      password += getRandomValueFromArray(symbols);
    }
    if (wantsAlpha && (passwordLength > password.length) ) {
      password += getRandomValueFromArray(alpha);
    }
    if (wantsBeta && (passwordLength > password.length)) {
      password += getRandomValueFromArray(beta);
    }
  }

  return password
}

// Step 1: Ask user password questions
// Step 2: Update our possibleCharacters string, based on the user's answers to the questions
// - possibleCharacters += alpha/beta/numeric
// Step 3: FOR LOOP over the passwordLength variable and generate a random value each time
// - password += getRandomValueFromArray(possibleCharacters)



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);