// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("Button Is Working!!")

  var password = prompt("Length Of Password");
   if (password=="12") {
   }
   var password = prompt("Do You Want Upper Case Letters?");
   if (password=="yes") {

   }
   var password = prompt("Do You Want Lower Case Letters?");
   if (password=="yes") {
   }
   var password = prompt("Do You Want Special Characters?");
   if (password=="yes") {
   }

   else 
   {
    document.getElementById("#generate").value = "test";  
}}

document.getElementById('password').innerHTML = string(12);
window.addEventListener('load',function(){
  generateNewPassword();
})



function string(stringLength){
var stringLength = 12;
var randomString = '';
var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz`~!@#$%^&*()-_=+?';
for(var i, i = 0; i < stringLength; i++){
  randomString += character.charAt(Math.floor(Math.random() * character.length))
  

  }

console.log(randomString);
}



// Write password to the #password input
 function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword );
