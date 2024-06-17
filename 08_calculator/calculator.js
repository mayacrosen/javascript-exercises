const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, current) => sum * current, 1);
};

const power = function(a, b) {
  let raised = 1;
  for (i=0; i<b; i++) {
    raised = raised * a;
  }
	return raised;
};

const factorial = function(num) {
	let factorialed = 1;
  for (let i=1; i<=num; i++) {
    factorialed = factorialed * i;
  }
  return factorialed;
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
