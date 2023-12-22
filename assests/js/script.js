// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let passwordlength =0;
let passwordCharacters ="";
let numbs ="1234567890";
let smallLetters= "abcdefghijklmnopqrstuvwxyz";
let capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialChars = "\"!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {
  getNumbers();
  getUpperLetters();
  getSmallLetters();
  getSpecialCharacters();
  getPasswordLength();
  let password= "";
  for(let i =0; i<passwordlength; i++){
    password= password.concat(passwordCharacters[Math.floor(Math.random()* passwordCharacters.length)]);
  }
  return password;
}

// validates userinput and make decision whether to include number characters in the  password or not
function getNumbers() {
  let response = prompt("Would you like in include Numbers?", "YES or NO");
  let responseClean=response.toLowerCase();
 if(responseClean !=="no" && responseClean !=="yes"){
    alert("Please enter 'YES' or 'NO'");
    getNumbers();
  }
  if (responseClean==="yes") {
    passwordCharacters=passwordCharacters.concat(numbs);   
  }
   else if(responseClean==="no") {
    passwordCharacters;
  }
}

// validates userinput and make decision whether to include capital letters characters in the  password or not
function getUpperLetters() {
  let response = prompt("Would you like to include capital letters in the password?", "YES or NO");
  let responseClean=response.toLowerCase();
 if(responseClean!=="no" && responseClean!=="yes"){
    alert("Please enter 'YES' or 'NO'");
    getUpperLetters();
  }
  
  if (responseClean==="yes") {
    passwordCharacters=passwordCharacters.concat(capLetters);
  }
  else if(responseClean==="no") {
    passwordCharacters;
  }
}

// validates userinput and make decision whether to include small letters characters in the  password or not
function getSmallLetters() {
  let response = prompt("Would you like to include small letters in the password?", "YES or NO");
  let responseClean=response.toLowerCase();
 if(responseClean!=="no" && responseClean!=="yes"){
    alert("Please enter 'YES' or 'NO'");
    getSmallLetters();
  }
  if (responseClean==="yes") {
    passwordCharacters=passwordCharacters.concat(smallLetters);
  }
   else if(responseClean==="no") {
    passwordCharacters;
  }
}

// validates userinput and make decision whether to include special characters in the  password or not
function getSpecialCharacters() {
  let response = prompt("Would you like to include special characters in the password?", "YES or NO");
  let responseClean=response.toLowerCase();
 if(responseClean!=="no" && responseClean!=="yes"){
    alert("Please enter 'YES' or 'NO'");
    getSpecialCharacters();
    }
  if (responseClean==="yes") {
    passwordCharacters=passwordCharacters.concat(specialChars);
  }
   else if(responseClean==="no") {
    passwordCharacters;
  }
}

// user needes to input a number to determin the password length to be generated
function getPasswordLength() {
  let response = parseInt(prompt("Enter a number between 8 and 128", ""));
 if(response>=8 && response<=128){
    passwordlength= response;
    }
  else{
    alert("Please enter a number between 8 and 128");
     getPasswordLength();
  }
}
