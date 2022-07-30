// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe ("caesar()", () => {
it("Should return False if shift is not present", () => {
   
    const actual = caesar("thinkful");
    const expected = false;

    expect(actual).to.equal(expected)
    })

it("Should return False if shift equal to 0", () => {
   
   const actual = caesar("thinkful", 0);
   const expected = false;
    
    expect(actual).to.equal(expected)
    }) 
    
it("Should return False if shift greater than 25", () => {
   
    const actual = caesar("thinkful", 28);
    const expected = false;
         
    expect(actual).to.equal(expected)
  }) 
      
it("Should return False if shift less than -25", () => {
   
    const actual = caesar("thinkful", -40);
    const expected = false;
         
    expect(actual).to.equal(expected);
}) 
 //Finished my first set of tests so adding a line break here
 /*==========================================================
 ========================================================== 
 ========================================================== 
 ========================================================== 
 ========================================================== */
 
 it("Should ignore capitol letters", () => {

    const actual = caesar("ENCoDe ThiS", 5);
    const expected = caesar("encode this", 5);

    expect(actual).to.equal(expected);

 })
 
 
 //Finished my Second set of tests so adding a line break here
 /*==========================================================
 ========================================================== 
 ========================================================== 
 ========================================================== 
 ========================================================== */

 it("Should handle shifts that go past the end of the alphabet", () => {

    const actual = caesar("This is a secret message!", 8);
    const expected = 'bpqa qa i amkzmb umaaiom!';

    expect(actual).to.equal(expected);

 })

 //Finished my Third set of tests so adding a line break here
 /*==========================================================
 ========================================================== 
 ========================================================== 
 ========================================================== 
 ========================================================== */


 it("Should maintain spaces and nonalphabetic symbols before/after encoding", () => {

    const actual = caesar("This is a secret message!", 8);
    const expected = 'bpqa qa i amkzmb umaaiom!';

    expect(actual).to.equal(expected);

 })



}) //Ending of describe function DO NOT CHANGE