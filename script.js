
// Creating sets for all desired character option sets using arrays //
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];
// declares user responses as an empty array when the page loads //
var usersresponses = [];



// Prompts user questions and generates password based on responses //

  function generatePassword() {
    var passwordLength = prompt("How long of a password? It can be between 8 and 128 characters");
    // validates password length //
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Must be within 8 and 128 characters!");
      return;
    }
    var askNumbers = confirm("Do you want to include numbers in your password?");
    var askLowerCase = confirm("Do you want any lowercase letters in your password?");
    var askUpperCase = confirm("Do you want any upper case letters in your password?");
    var askSpecial = confirm("Do you want to include special characters in your password?");
    // sets the userresponses to an empty array when the user chooses to make another password//
    // this prevents the array from having unwanted characters and possible duplicates //
    usersresponses = [];
      // if the user wants numbers this adds their response to the pool characters //
      if (askNumbers === true) {
        usersresponses = usersresponses.concat(numbers)
      }
  
      // if the user wants an uppercase letter this adds their response to the pool of characters //
      if (askUpperCase === true) {
        usersresponses = usersresponses.concat(upperCase)
      }
  
      // if the user wants a lowercase letter this adds their response to the pool of characters //
      if (askLowerCase === true) {
        usersresponses = usersresponses.concat(lowerCase)
      }
  
      // if the user wants a special character this adds their response to the pool of characters //
      if (askSpecial === true) {
        usersresponses = usersresponses.concat(special)
      }
  
      // if the user happens to say they dont want any of the character options they will be alerted that they must choose something //
      if (askNumbers === false && askUpperCase === false && askLowerCase === false && askSpecial === false) {
        alert("Must pick atleast one!");
        return;
        
        
      }
      // this randomizes based on the legnth of the password the user selects //
      var passwordStr = "";

      for (i=0; i<passwordLength; i++) {
        var rannum = Math.floor(Math.random()* usersresponses.length);
        passwordStr = passwordStr + usersresponses[rannum];
      }

    return passwordStr;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
