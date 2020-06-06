var i = 0
var specify;
var Password = "";

var options = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var characters = ['@', '%', '+', "/","o", "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']

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

function random(number) {
  return Math.floor(Math.random() * number);
}


// alert (lenght) = var lenof
while (i == 0) {
  var howmany = prompt("How long of a passwork would you like? (between 8 and 128 characters");
  if (8 > (parseInt(howmany)) ||(parseInt(howmany)) > 128) {
    alert("Length not in range. Please select a number between 8 and 128.");
  } else if (howmany == null) {
    alert("please select a number");
  } else {
    i = 1;
    alert("yes");
  }
}
i=0
// alert (lowercase) = var
while (i == 0) {
  var doYouWant = confirm("Would you like letters?");
  if (doYouWant != null) {
    options = options.concat("Lowercase");
    i++;
    // for loop
  }
  // alert (uppercase)
  doYouWant = confirm("Would you like any letters to be uppercase?");
  if (doYouWant != null) {
    options = options.concat("uppercase");
    i++;
  }
  // alert number (number)
  doYouWant = confirm("Would you like numbers?");
  if (doYouWant != null) {
    options = options.concat("number");
    i++;
  }

  // alert special 
  doYouWant = confirm("Would you like special characters?");
  if (doYouWant != null) {
    options = options.concat("character");
    i++;
  }
  else {
    alert("you must choose atleast one character type.")
  }
}

for (i = 0; i < parseInt(howmany); i++) {
  var choose = options[random(options.length)]

  if (choose == "Lowercase" || choose == "uppercase") {
    specify = alphabet[random(26)];
    console.log(specify);
    if (choose == "uppercase") {
      specify = specify.toUpperCase();
    }
  }
  else if (choose == "number") {
    specify = numbers[random(9)];
  }
  else if (choose == "character") {
    specify = characters[random(23)];
  }
  Password = Password + specify
}

alert(Password)

