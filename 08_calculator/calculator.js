const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (!(arr.length)) {
    return 0;
  }
  return arr.reduce((sum, current) => sum + current);
};

const multiply = function(arr) {
  if (!(arr.length)) {
    return 0;
  }
  return arr.reduce((product, current) => product * current);
};

const power = function(a, b) {
  let finalNum = 1;
  for (let i = 0; i < b; i++) {
    finalNum = finalNum * a;
  }
  return finalNum;
};

const factorial = function(num) {
  let finalNum = 1;
  for (let i = 1; i <= num; i++) {
    finalNum = i * finalNum;
  }
	return finalNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
