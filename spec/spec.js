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

describe('Make strings uppercase', function() {
  it('should return a string in uppercase format', function() {
    expect(code.changeToUpper(['a','b'])).toEqual(['A','B']);
  });
});

describe("Compare vals in object array", function() {
  it("takes in an array of objects and returns the object with the greatest strength attribute", function() {
    var list = [{strength: 20, name: 'A'}, {strength: 10, name: 'B'}];
    expect(code.findGreatestStrength(list)).toEqual(list[0]);
  });
});
