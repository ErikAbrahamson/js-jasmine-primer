var code = require('../main.js');

describe("Tip Calculator", function() {
  it("should tax 10% on the first $10", function() {
    expect(code.outputCalc(1)).toEqual(0.1);
    expect(code.outputCalc(10)).toEqual(1);
  });
  it("should tax 7% on the second $10", function() {
    expect(code.outputCalc(15)).toEqual(1.05);
  });
});

describe("Hello World", function() {
  it("says 'hello, world!' when ran", function() {
    expect(code.outputHelloWorld()).toEqual("Hello, world!");
  });
});

describe("Leap Year", function() {
  it("should return either true or false for a given year", function() {
    expect(code.isLeapYear(1600)).toEqual(true);
    expect(code.isLeapYear(1200)).toEqual(true);
    expect(code.isLeapYear(1700)).toEqual(false);
    expect(code.isLeapYear(1800)).toEqual(false);
    expect(code.isLeapYear(1900)).toEqual(false);
  });
});
