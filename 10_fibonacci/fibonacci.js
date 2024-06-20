const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    let sequence = [0];
    for (let i=1; i<=num + 1; i++) {
        if (sequence.length <= 2) {
            sequence.push(1);
        }

        else {
            sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        }
    }
    return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
