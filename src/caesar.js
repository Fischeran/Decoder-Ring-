// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
   if (!shift || shift > 25 || shift < -25) {return false};
   //first we set the input to be lower case
   const message = input.toLowerCase();
   //then we want to define alphabet to referance for our key 
   const alphabet = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, 
"h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "o": 14, "p":15,
"q":16, "r":17, "s": 18, "t": 19, "u": 20, "v": 21, "w": 22, "x": 23, "y": 24,
"z": 25};
//then we want to turn the lowercased message into an array for each character
    const broken = message.split(''); 
   //encode will go here
   let turnToNumbers = [];
   let joinThis = [];

    if (encode === true) {
      
//this turns our letters in to numbers which can then be increased
    broken.forEach((char) => {
      const selected = alphabet[char];
      if (selected || char.includes("a") === true) {turnToNumbers.push(alphabet[char] + shift)}
      else {turnToNumbers.push(char)}
    })

    turnToNumbers.forEach((numeral) =>{
    const check = typeof numeral;
    if (numeral > 25) {numeral -= 26};
    if (numeral < 0) {numeral += 26};
    
    if (check === "number") { for (const value in alphabet){if (alphabet[value] === numeral) {joinThis.push(value)}}}
    else joinThis.push(numeral)
    })
    }


   //decode will go here
   if (encode === false) {

    broken.forEach((char) => {
      const selected = alphabet[char];
      if (selected || char.includes("a") === true) {turnToNumbers.push(alphabet[char] - shift)}
      else {turnToNumbers.push(char)}
    })

    turnToNumbers.forEach((numeral) =>{
    const check = typeof numeral;
    if (numeral > 25) {numeral -= 26};
    if (numeral < 0) {numeral += 26};
    
    if (check === "number") { for (const value in alphabet){if (alphabet[value] === numeral) {joinThis.push(value)}}}
    else joinThis.push(numeral)

    })

   }


  return joinThis.join("")

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
