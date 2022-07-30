// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polubius()", () => {

it("Should translate the letters i and j to 42 when encrypting", () => {
const expected = "4432423352125413";
const actual = polybius("thinkful");

expect(expected).to.equal(actual);
})

it("Should translate 42 to (i/j)", () => {
const expected = "th(i/j)nkful";
const actual = polybius("4432423352125413", false);

expect(expected).to.equal(actual);
})


it("ignore capital letters", () => {
const expected = polybius("A meSsage", true);
const actual = polybius("a message", true);

expect(expected).to.equal(actual);
})

it("Should maintain spaces in the message before and after decoding", () => {
const expected = '3251131343 2543241341';
const actual = polybius("Hello world");

expect(expected).to.equal(actual);
})


})