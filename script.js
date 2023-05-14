// Get references to the #generate and #password elements
var generateBtn = document.querySelector("#generate");
var passwordInput = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordInput.value = password; // changed to passwordInput to reference the #password element
}

function generatePassword() {
  // Prompt user for password criteria
  var passwordLength = parseInt(prompt("How many characters would you like your password to contain? (between 8 and 128)"));

  // Check if input is a number and within valid range
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Invalid input. Please enter a number between 8 and 128."));
  }

  var includeLowercase = confirm("Click OK to include lowercase characters.");
  var includeUppercase = confirm("Click OK to include uppercase characters.");
  var includeNumeric = confirm("Click OK to include numeric characters.");
  var includeSpecial = confirm("Click OK to include special characters.");

  // Check if at least one character type is selected
  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    includeLowercase = confirm("Click OK to include lowercase characters.");
    includeUppercase = confirm("Click OK to include uppercase characters.");
    includeNumeric = confirm("Click OK to include numeric characters.");
    includeSpecial = confirm("Click OK to include special characters.");
  }

  // Generate password based on selected criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomCharType = "";
    var randomChar = "";

// Select a random character type
var charTypes = [];

if (includeLowercase) {
  charTypes.push("lowercase");
}

if (includeUppercase) {
  charTypes.push("uppercase");
}

if (includeNumeric) {
  charTypes.push("numeric");
}

if (includeSpecial) {
  charTypes.push("special");
}

var randomCharType = charTypes[Math.floor(Math.random() * charTypes.length)];

// Generate a random character based on the selected character type
if (randomCharType === "lowercase") {
  randomChar = lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
} else if (randomCharType === "uppercase") {
  randomChar = uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
} else if (randomCharType === "numeric") {
  randomChar = numericChars.charAt(Math.floor(Math.random() * numericChars.length));
} else if (randomCharType === "special") {
  randomChar = specialChars.charAt(Math.floor(Math.random() * specialChars.length));
}

    password += randomChar;
  }

  // Return the generated password
  return password;
}