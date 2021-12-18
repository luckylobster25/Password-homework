// the variable generateBtn is connecting to the id generate in html.
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt("Type in the length of your password, at least 8 character.")
if (passwordLength < 8) {
    alert("Password must be at least 8 characters");
    passwordLength = prompt("Type in the length of your password, at least 8 character.");
}
var passwordNumExclude = prompt("Do you want number to be included?")
var startFrom = 33
var randomRange = 92
// Write password to the #password input
//given the code, generatePassword is not yet define. 
// function writePassword() {

if (passwordNumExclude == "no") {
    startFrom = 58;
    randomRange = 64;
}

function makePassword() {
    return String.fromCharCode(Math.floor(Math.random() * randomRange) + startFrom);
  }

function generatePassword(passwordLength) {
    var password = '';
    for (var i = 0; i < passwordLength; i++) {
    password += makePassword();
    }
    return password;
}

// Add event listener to generate button
//the first thing the computer going to read is this eventlistener. 
//Whenever the button is clicked it will execute the function writePassword. 

generateBtn.addEventListener("click", function(){
    password = generatePassword(passwordLength);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
});
