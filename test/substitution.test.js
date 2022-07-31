// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");


describe("substitution()", () => {

it("Should allow for symbols such as *, &, and $", () => {
const expected = "y&ii$r&"
const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");

expect(actual).to.equal(expected)
})

it("Should Maintain spaces", () => {
const expected = 'elp xhm xf mbymwwmfj dne';
const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");

expect(actual).to.equal(expected)    
})

it("Should ignore capital letters ", () => {
const expected = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");;
const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");

expect(actual).to.equal(expected)  
})

it("Should return false if alphabet is not exactly 26 characters", () => {
expected = false;
actual = substitution("You are an excellent spy", "kswaflnthdjpzibev");

expect(actual).to.equal(expected) 
})

it("Should have no repeating characters in the alphabet", () => {
const expected = false;
const actual = substitution("you are an excellent spy", "xoyqmcgruxswaflnxhdjxzixev")


    expect(actual).to.equal(expected)   
})

})