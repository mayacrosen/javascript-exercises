const removeFromArray = function() {
    const args = Array.from(arguments);
    const ogArray = args.shift();
    return ogArray.filter(item => !(args.includes(item)));
}

console.log(removeFromArray([1, 2, 3, 4], 1, 2));
// Do not edit below this line
module.exports = removeFromArray;
