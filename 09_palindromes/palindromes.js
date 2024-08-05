const palindromes = function(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789"
    return sentence.toLowerCase()
    .split("")
    .filter(letter => alphabet.includes(letter))
    .reverse()
    .join("")
    == sentence.toLowerCase()
    .split("")
    .filter(letter => alphabet.includes(letter))
    .join("");
}

// Do not edit below this line
module.exports = palindromes;
