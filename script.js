
var generateBtn = document.querySelector("#generate");
// This variable target n connected to the html button.
var passwordLength = prompt("Type in the length of your password, at least 8 character.")
// when application is open, this prompt is the first to pop up. 
if (passwordLength < 8) || (passwordLength === "") {
    alert("Password must be at least 8 characters");
    passwordLength = prompt("Type in the length of your password, at least 8 character.");
    // When user put a number less than 8 or nothing in, alert will pop up and will allow user to input again. 
}
var passwordNumExclude = prompt("Do you want number to be included?")
// this prompt is asking if number should be included or not.
var startFrom = 33
var randomRange = 92
// these two variables is what determine rather to include numbers in there or not.

if (passwordNumExclude == "no") {
    startFrom = 58;
    randomRange = 64;
    // if user input is to not include number then the code will only select from charcode where there is no number. 
}

function makePassword() {
    return String.fromCharCode(Math.floor(Math.random() * randomRange) + startFrom);
  }
// this function is to random grab one of the character from a list of characters depending where to start and how much to include in it. 
function generatePassword(passwordLength) {
    var password = '';
    for (var i = 0; i < passwordLength; i++) {
    password += makePassword();
    }
    return password;
}
// this is the function to generate a password accordingly. taking from user input early, it determine how long the password to be.
generateBtn.addEventListener("click", function(){
    password = generatePassword(passwordLength);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
});
// last code here is to display the password that was generated right back to the webpage when button is clicked. 