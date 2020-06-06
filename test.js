var specify;
var password;
var options = []

var alphabet = ["a", "b", "c","d","e","f","g", "h","i", "k", "k","l","m", "n","o", "p","q","r","s","t","u","v","w","x","y","z"]
var numbers =["0", "1", "2","3","4","5","6","7","8","9"]
var characters = []

function random(number) {
    Math.floor(Math.random() * number)
}


// alert (lenght) = var lenof
var howmany = prompt("How long of a passwork would you like? (between 8 and 128 characters");

// alert (lowercase) = var
var doYouWant = alert("Would you like letters?");
if (doYouWant != null) {
    options = options.concat("Lowercase");
}
// alert (uppercase)
doYouWant = alert("Would you like any letters to be uppercase?");
if (doYouWant != null) {
    options = options.concat("uppercase");
}
// alert number (number)
doYouWant = alert("Would you like numbers?");
if (doYouWant != null) {
    options = options.concat("number");
}
// alert special 

doYouWant = alert("Would you like special characters?");
if (doYouWant != null) {
    options = options.concat("character");
}

for (i = 0; i <= parseInt(howmany); i++) {
    var choose = options[random(options.length)]
    if (choose == "Lowercase" || choose == "uppercase") {
         specify = alphabet[random(26)]
        if (choose == "uppercase") {
            specify = specify.toUpperCase
        }
    }
    else if (choose == "number") {
        specify = numbers[random(9)] 
    }
    else if (choose == "character") {
        specify = characters[random(23)]  
    }
    Password = Password + specify
}

