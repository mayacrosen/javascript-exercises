const palindromes = function (sentence) {
    let arrayed = sentence.split("").filter(letter => !(letter == " " || letter == "," 
        || letter == "." || letter == "!")).map(letter => letter.toLowerCase());
    return arrayed.join("") == arrayed.slice().reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
