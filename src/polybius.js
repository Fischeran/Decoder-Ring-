// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

    const key = {"a": 11, "b": 21, "c": 31, "d": 41, "e": 51, "f": 12, "g": 22, 
    "h": 32, "(i/j)": 42, "k": 52, "l": 13, "m": 23, "n": 33, "o": 43, "p": 53,
    "q": 14, "r": 24, "s": 34, "t": 44, "u": 54, "v": 15, "w": 25, "x": 35, "y": 45,
    "z": 55};
    const message = input.toLowerCase();
    const broken = message.split(''); 
    let turnToNumbers = [];
    let joinThis = [];
    let decryptThis = [];



  if (encode === true) {

    broken.forEach((char) => {
      const selected = key[char];
      if (selected || char.includes("a") === true) {turnToNumbers.push(key[char])}
      else if (char.includes("i") === true || char.includes("j") === true) {turnToNumbers.push(42)}
      else {turnToNumbers.push(char)}  
    })
   return turnToNumbers.join('')
  }

  if (encode === false) {

  let sendOver = [];
  let checkOdd = [];

  broken.forEach((numby) => {
    const check = Number(numby);
    if (check > 0){checkOdd.push(numby)}
  })

  let result = (checkOdd.length % 2 == 0) ? "even" : "odd"

  if (result === "odd") {return false}



    broken.forEach((item) => {
      const check = Number(item);
       
      if (check > 0) {sendOver.push(item)}
      else {decryptThis.push(item)}
  
      if (sendOver.length === 2) {decryptThis.push(sendOver.join('')); sendOver = []}
    })

    decryptThis.forEach((value) => {
      const check =  Number(value)

      if (check > 0) for (const letter in key) {if (key[letter] === check) {joinThis.push(letter)}}
      else joinThis.push(value)
      
    })

    return joinThis.join('')
  
    }


  
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
