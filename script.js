// Assignment Code
var generateBtn = document.querySelector("#generate");
var legthOfPass = prompt("How long shall your password be?")
var charSpecialInclude = prompt("Do you want to include special character?");
var CharNumInclude = prompt("Do you want to include number?");

var charSpecialNum  = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNum = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSpecial = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charOnly = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

if (CharNumInclude == "yes" && charSpecialInclude == "yes") {
    passChoice = charSpecialNum;
}else if (charSpecialInclude == "yes" && CharNumInclude == "no" ) {
    passChoice = charSpecial;
}else if (charSpecialInclude == "no" && CharNumInclude == "yes" ) {
    passChoice = charNum;
} else {
    passChoice = charOnly;
}
password = ""
// function generatePassword() {
    var passLength = legthOfPass
    for (var i = 0; i <= passLength; i ++){
        var randoMize = Math.floor(Math.random()*passChoice);
        password += passChoice.substring(randoMize, randoMize +1);
    }
    console.log(password)
// }
// generatePassword()

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   // This line is targeting what

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
