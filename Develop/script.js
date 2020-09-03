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

function generatePassword() {
  var pw = "";

  var nums ="123456789";
  var lowerChar = "abcdefghijklmnopqrstuvwxyz";
  var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXZY";
  var specialChar = "!#$%&'()*+,-./:;<=>?@[]\^_`{|}~"
  var choices = " ";



var pwLength = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));
console.log(pwLength)
 if(pwLength < 8 || pwLength >=129){ alert("Please choose length between 8 and 128");

 var pwLength = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));}
 else{}

 

var usesLower = confirm("Click OK to confirm lower case characters");
console.log(usesLower)

var usesUpper = confirm("Click OK to confirm upper case characters");
console.log(usesUpper)

var usesSpecial = confirm("Click OK to confirm special characters");
console.log(usesSpecial)

var usesNum = confirm("Click OK to confirm numeric characters");
console.log(usesNum)
//                           if all 4 answers are negative
if (usesLower == false && usesUpper == false && usesSpecial == false && usesNum == false) {
  alert("Must select at least one character type");
}


//                              If all 4 cases are positive
else if (usesLower == true && usesUpper == true && usesSpecial == true && usesNum == true) {
  choices = nums + lowerChar + upperChar + specialChar
  console.log(choices);
}



  //                              If all 4 cases have 3 truths

  else if ( usesUpper == true && usesSpecial == true && usesNum == true) {
    choices = nums + upperChar + specialChar
  console.log(choices);
  }
  else if (usesLower == true &&  usesSpecial == true && usesNum == true) {
    choices = lowerChar + nums + specialChar
  console.log(choices);
  }
  else if (usesLower == true && usesUpper == true &&  usesNum == true) {
    choices = lowerChar + upperChar + nums
  console.log(choices);
  }
  else if (usesLower == true && usesUpper == true && usesSpecial == true) {
    choices = lowerChar + upperChar + specialChar
  console.log(choices);
  }

  //                                  if 2 cases are positive
  else if (usesLower == true && usesUpper == true) {
    choices = lowerChar + upperChar 
  console.log(choices);
  }
  else if (usesUpper == true && usesSpecial == true) {
    choices =upperChar + specialChar
  console.log(choices);
  }
  else if (usesUpper == true && usesNum == true) {
    choices =upperChar + nums
  console.log(choices);
  }
  else if (usesLower == true && usesSpecial == true) {
    choices = lowerChar + specialChar
  console.log(choices);
  }
  else if (usesLower == true && usesNum == true) {
    choices = lowerChar + nums 
  console.log(choices);
  }
  else if (usesSpecial == true && usesNum == true) {
    choices = nums + specialChar
  console.log(choices);
  }
  //                      if one case is positive
  else if(usesLower== true){
    choices = lowerChar
    console.log(choices);
  }
  else if(usesUpper== true){
    choices = upperChar
    console.log(choices);
  }
  else if(usesSpecial== true){
  choices = specialChar
  console.log(choices);
  }
  else if(usesNum== true){
    choices = nums
    console.log(choices);
  }
  
    for(var i = 0; i < pwLength; i ++){
    pw += choices.charAt(Math.floor(Math.random()* choices.length +1))
      console.log(pw)


     }
     return pw
 


  }
