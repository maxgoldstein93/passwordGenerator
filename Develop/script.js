// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// function generatePassword() {
  // var pw = " ";

  var nums =["123456789"];
  var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];
  var upperChar = ["ABCDEFGHIJKLMNOP"];
  var specialChar = [" !#$%&'()*+,-./:;<=>?@[]\^_`{|}~"]
  var choices = " ";



var pwLength = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));
console.log(pwLength)
//  if(pwLength < 8 || pwLength >129){ var pwLength = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));
//  console.log(pwLength)}   NEED TO FIGURE OUT

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
  console.log(choices = nums.concat(lowerChar, upperChar, specialChar));
}



  //                              If all 4 cases have 3 positive

  else if ( usesUpper == true && usesSpecial == true && usesNum == true) {
    console.log(choices = nums.concat(upperChar, specialChar));
  }
  else if (usesLower == true && usesUpper == false && usesSpecial == true && usesNum == true) {
    console.log(choices = nums.concat(lowerChar, specialChar));
  }
  else if (usesLower == true && usesUpper == true && usesSpecial == false && usesNum == true) {
    console.log(choices = nums.concat(lowerChar, upperChar));
  }
  else if (usesLower == true && usesUpper == true && usesSpecial == true && usesNum == false) {
    console.log(choices = lowerChar.concat(upperChar, specialChar));
  }

  //                                  if 2 cases are positive
  else if (usesLower == true && usesUpper == true && usesSpecial == false && usesNum == false) {
    console.log(choices = lowerChar.concat(upperChar));
  }
  else if (usesLower == false && usesUpper == true && usesSpecial == true && usesNum == false) {
    console.log(choices = upperChar.concat( specialChar));
  }
  else if (usesLower == false && usesUpper == true && usesSpecial == false && usesNum == true) {
    console.log(choices = nums.concat(upperChar));
  }
  else if (usesLower == true && usesUpper == false && usesSpecial == true && usesNum == false) {
    console.log(choices = lowerChar.concat(specialChar));
  }
  else if (usesLower == true && usesUpper == false && usesSpecial == false && usesNum == true) {
    console.log(choices = nums.concat(lowerChar));
  }
  else if (usesLower == false && usesUpper == false && usesSpecial == true && usesNum == true) {
    console.log(choices = nums.concat(specialChar));
  }
  //                      if one case is positive
  else if(usesLower== true){(console.log( choices= lowerChar));
  }
  else if(usesUpper== true){(console.log( choices= upperChar));
  }
  else if(usesSpecial== true){(console.log( choices= specialChar));
  }
  else if(usesNum== true){(console.log( choices= nums));
  }
  
  
  

    // for(var i = 0; i < pwLength.length; i ++){
    // console.log(pw = pw + choices.charAt(Math.floor(Math.random()* Math.floor(choices.length -1))))


    //  }













//    return pw


  // }
