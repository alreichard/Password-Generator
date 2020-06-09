//Needed variables:
var i = 0;
var specify;
var Password = "";
//Needed arrays:
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ['@', '%', '+', "/","\\", "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Assignment Code:
var generateBtn = document.querySelector("#generate");

// Write password to the #password input:
function writePassword() {
  var password = passWordGen();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Add event listener to generate button:
generateBtn.addEventListener("click", writePassword);

//Function that creates a random number between 0 and any given number (including 0):
function random(number) {
  return Math.floor(Math.random() * number);
};


// while loop continues as long as certain contidtion is met:
function passWordGen() {
  var options = [];
  while (i == 0) {
  //prompts user for a length:
  var howmany = prompt("How long of a passwork would you like? (between 8 and 128 characters");
  //sets peramiter on answers (if not an accepted answer, loops back through):
  if (8 > (parseInt(howmany)) ||(parseInt(howmany)) > 128) {
    alert("Length not in range. Please select a number between 8 and 128.");
  } else if (howmany == null) {
    alert("please select a number");
  //peramiter is met, so while loop condition is broken (i!=0):
  } else {
    i = 1;
 
  }
}

// while loop peramiter (i==1 now):
while (i == 1) {
  
  var options = []
  //creates 5 if statements. if each is true, it adds chosen attribute option to array, and breaks while loop condition:
  var doYouWant = confirm("Would you like lowercase letters?");
  if (doYouWant == true) {
    //concat adds the chosen attribute to the "option" array:
    //lowercase letter:
    options = options.concat("Lowercase");
    i++;

  }
  // uppercase letters:
  doYouWant = confirm("Would you like any letters to be uppercase?");
  if (doYouWant == true) {
    options = options.concat("uppercase");
    i++;
  }
  // numbers:
  doYouWant = confirm("Would you like numbers?");
  if (doYouWant == true) {
    options = options.concat("number");
    i++;
    
  }

  //special characters:
  doYouWant = confirm("Would you like special characters?");
  if (doYouWant == true) {
    options = options.concat("character");
    i++;
  }
  //if no options above are true, reloop:
  if (i==1) {
    alert("you must choose atleast one character type.")
  }
}
// for stament that loops as many time as user password length input:
for (i = 0; i < parseInt(howmany); i++) {
  // for each loop through, variable "choose" equals one of the chosen attributes for the
  //password from above. It does so based on their index that has been randomized:
  var choose = options[random(options.length)]
 // the following if statements will choose a random character in the chosen array based on randomly chosen attribute from above:
  if (choose == "Lowercase" || choose == "uppercase") {
    specify = alphabet[random(26)];
   // sub-category of letters, if the letter is upper or lower case, a random number will be chosen, if it is then uppercase, it 
   //will be switched to one:
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
  //adds the character to the string of characters that will be teh final password
  Password = Password + specify
}
return Password

};

