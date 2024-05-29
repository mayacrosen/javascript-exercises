const removeFromArray = function() {
    const args = Array.from(arguments);
    let fixed = args[0];
   
    for (let eraserIndex = 1; eraserIndex<args.length; eraserIndex++) {
        eraser = args[eraserIndex];
        function valueFilter(value) {
            return value != eraser;
        }
        fixed = fixed.filter(valueFilter);

    }
    return fixed;
};

console.log(removeFromArray([1234], 1, 2));
// Do not edit below this line
module.exports = removeFromArray;
