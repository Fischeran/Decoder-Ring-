// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
   if (!alphabet || alphabet.length !== 26){return false}


   let check = ""

   for (let i = 0; i < alphabet.length; i++){
    if (check.includes(alphabet[i]) === false) {check += alphabet[i]}
   }

   if (check.length !== alphabet.length) {return false}


    const brokenAlpha = alphabet.split('');
    const message = input.toLowerCase();
    const broken = message.split('');
    let joinThis = []
      
    const [ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z ] = brokenAlpha;
      
    let newAlphabet = { "a": a, "b": b, "c": c, "d": d, "e": e, "f": f, "g": g, 
    "h": h, "i": i, "j": j, "k": k, "l": l, "m": m, "n": n, "o": o, "p":p,
    "q": q, "r": r, "s": s, "t": t, "u": u, "v": v, "w": w, "x": x, "y": y,
    "z": z}  
    
    //Currently everything above works and newAlphabet was succesful
      
     if (encode === true) {broken.forEach((char) => {
      const selected = newAlphabet[char];
    
      if (selected){joinThis.push(newAlphabet[char])}
      else {joinThis.push(char)}
    })
    
    return joinThis.join('')
     } 
    
    if (encode === false) {
    
    broken.forEach((unit) => {
         


      if (unit !== " ") {for (const letter in newAlphabet) {if (newAlphabet[letter] === unit){joinThis.push(letter)} }} 
     else {joinThis.push(unit)}})


    return joinThis.join('')
    }
    
    
      
    }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
