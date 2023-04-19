// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// pull up the character selection prompt
function selectCharacter() {
    document.getElementById("form1").style.display = "block";
    document.getElementById("form2").style.display = "none";
    return;
}

// pull up the length selection prompt
function selectLength() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "inline";
    return;
}

// check input to make sure the password is 8< and <128 characters
function setLength() {
    document.getElementById("form2").style.display = "none";
    var passwordLength = document.getElementById("char-length").value;
    
    if (8 > passwordLength && passwordLength > 1 || passwordLength > 128) {
        alert("Please input a password length between 8 and 128 characters");
        selectLength();
    } else if (128 > passwordLength && passwordLength > 8) {
        //generate pw fxn
    }
}

// redefining pw length globally
var passwordLength = document.getElementById("char-length").value;

// defining character sets as variables
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChars = "1234567890";
var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// functions to randomize characters (use in for-loop later?)
function yesLower() {
    var yesLower = lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
    return yesLower;
}

function yesUpper() {
    var yesUpper = uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
    return yesUpper;
}

function yesNumber() {
    var yesNumber = numericalChars[Math.floor(Math.random() * numericalChars.length)];
    return yesNumber;
}

function yesSpecial() {
    var yesSpecial = specialChars[Math.floor(Math.random() * specialChars.length)];
    return yesSpecial;
}

function setCharacter() {
    var lowercaseBox = document.getElementById("lowercase-chars").checked;
    var uppercaseBox = document.getElementById("uppercase-chars").checked;
    var numericalBox = document.getElementById("numerical-chars").checked;
    var specialBox = document.getElementById("special-chars").checked;

    // TO DO: create empty list and fill up by appending w/ a for loop
    // look up "flatten functions"

    // if each thing is checked, then use those type of characters in the pw
    // i have no idea how to do this? i think maybe setting the variables to -1-
    // -2- include smth about being checked, then use some kinda function to 
    // -3- add the characters of whatever was selected to the password generator fxn
    // i think it would be simplest to just have all of the checked characters added -1-
    // -2- to the password and then slice or smth based on the length the user sets?
}


// Write password to the #password input
// function writePassword() {
  // var password = generatePassword();
  //var passwordText = document.querySelector("#password");

    // passwordText.value = password;
//}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

