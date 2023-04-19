// Assignment code here


// setting the variables for password characters

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericalChars = "1234567890"
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function selectCharacter() {
    document.getElementById("form1").style.display = "block";
    document.getElementById("form2").style.display = "none";
}

function selectLength() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "inline";
}

function generatePassword() {
    document.getElementById("form2").style.display = "none";
    // smth to check if certain boxes are checked
    // smth to log input/have "too long"/"too short" messages that pop up when they 128 < input < 8
    // smth to generate the password based on what boxes are checked
}

// Write password to the #password input
// function writePassword() {
  // var password = generatePassword();
  //var passwordText = document.querySelector("#password");

    // passwordText.value = password;
//}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

