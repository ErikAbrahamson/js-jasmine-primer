var outputHelloWorld = function () {
  return "Hello, world!";
};

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

var changeToUpper = function(list) {
  var copy = [];
  for (var i = 0; i < list.length; i ++) {
    copy.push(list[i].toUpperCase());
  }
  return copy;
};

var findGreatestStrength = function(objectArray) {
  var max = 0;
  for (var i = 0; i < objectArray.length; i++) {
    if (objectArray[i].strength > max) {
      max = objectArray[i];
    }
  }
  return max;
};

module.exports = {
  isLeapYear: isLeapYear,
  outputCalc: outputCalc,
  outputHelloWorld: outputHelloWorld,
  changeToUpper: changeToUpper,
  findGreatestStrength: findGreatestStrength
};
