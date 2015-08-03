var isLeapYear = function(year) {
  if (year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0)) {
    return true;
  } else {
    return false;
  }
};

var outputCalc = function(amount) {
  switch(true) {
    case amount <= 10:
      return amount * 0.1;
    case amount <= 20:
      return amount * 0.07;
    case amount <= 30:
      return amount * 0.05;
    case amount > 30:
      return amount * 0.03;
    }
};

var outputHelloWorld = function () {
  return "Hello, world!";
};

module.exports = {
  isLeapYear: isLeapYear,
  outputCalc: outputCalc,
  outputHelloWorld: outputHelloWorld
};
