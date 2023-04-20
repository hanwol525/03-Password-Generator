// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// define character arrays as variables
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericalChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChars = ["'", '"', "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ",", ".", "/", ":", ";", "<", ">", "^", "`", "~"];

// pull up the character selection prompt
function selectCharacter() {
    document.getElementById("form1").style.display = "block";
    document.getElementById("form2").style.display = "none";
    return;
}

// check for selected password characters
function setCharacter() {
var lowercaseBox = document.getElementById("lowercase-chars").checked;
var uppercaseBox = document.getElementById("uppercase-chars").checked;
var numericalBox = document.getElementById("numerical-chars").checked;
var specialBox = document.getElementById("special-chars").checked;

    if (!lowercaseBox && !uppercaseBox && !numericalBox && !specialBox){
        alert("Please select at least one type of character.");
        selectCharacter();
    }

    if (lowercaseBox || uppercaseBox || numericalBox || specialBox) {
        selectLength();
    }
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
    
    if (7 >= passwordLength && passwordLength > 0 || passwordLength >= 129 || passwordLength == "") {
        alert("Please input a password length between 8 and 128 characters");
        selectLength();
    } else if (128 >= passwordLength && passwordLength >= 8) {
        generatePassword();
    }
    return;
}

// function to generate the password
function generatePassword(){

    // variables for checked checkboxes and a blank array

    var lowercaseBox = document.getElementById("lowercase-chars").checked;
    var uppercaseBox = document.getElementById("uppercase-chars").checked;
    var numericalBox = document.getElementById("numerical-chars").checked;
    var specialBox = document.getElementById("special-chars").checked;

    var passArray = [];

    /* checking to see if checkboxes are checked 
    and adding the characters to the new passArray */

    if (lowercaseBox === true) {
        passArray.push(lowercaseChars.join(""));
    }

    if (uppercaseBox === true) {
        passArray.push(uppercaseChars.join(""));
    }

    if (numericalBox === true) {
        passArray.push(numericalChars.join(""));
    }

    if (specialBox === true) {
        passArray.push(specialChars.join(""));
    }

    var passString = passArray.join("");

    var finalPass = [];

    // starting with i = 1 because the passwords kept coming up 1 character too long

    for (var i = 1; i <= document.getElementById("char-length").value; i++) {
       finalPass.push(passString[Math.floor(Math.random() * passString.length)]);
    }

    alert("Your new password is: " + finalPass.join("") + ". Click 'OK' to return to the generator.");
}