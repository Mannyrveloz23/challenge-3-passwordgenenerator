// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

//var for letters,numbers, and characters
var lowercaseAlpha = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";
var userSelected = "";


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

//Generate password with user choices

function generatePassword() {
  
  //prevent default refreshing when click
  event.preventDefault();

  //clear previous pass
  password.value === "";
  var randomString = "";

  //User password criteria
  var lowercaseQuestion = prompt("Do you want your password to contain lowercase letters?");
  var uppercaseQuestion = prompt("Do you want your password to contain uppercase letters?");
  var numberQuestion = prompt("Do you want your password to contain numbers?");
  var specialCharQuestion = prompt("Do you want your password to contain special characters?");
  var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

  //Function to lock number between 8 -128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("You must choose a number between 8 characters and 128 characters. Please try again.");
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

  } 
  //ensure that the user choose at least one password criteria
  else if (lowercaseQuestion === false && uppercaseQuestion === false && numberQuestion === false && specialCharQuestion === false) {
    alert ("Choose at least one password criteria.");
    var lowercaseQuestion = prompt("Do you want your password to contain lowercase letters?");
    var uppercaseQuestion = prompt("Do you want your password to contain uppercase letters?");
    var numberQuestion = prompt("Do you want your password to contain numbers?");
   var specialCharQuestion = prompt("Do you want your password to contain special characters?");
    
  }

  if (lowercaseQuestion) {
    userSelected += lowercaseAlpha;
  }

  if (uppercaseQuestion) {
    userSelected += uppercaseAlpha;
  }

  if (numberQuestion) {
    userSelected += numbers;
  }

  if (specialCharQuestion) {
    userSelected += specialChar;
  }

  //Generate a random password with user selections

  for (i = 0; i < passwordLength; i++) {
    randomString += userSelected.charAt(Math.floor(Math.random() * userSelected.length));
  }

  password.value = randomString;


}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
