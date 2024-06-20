const findTheOldest = function(people) {
    let largest = people.reduce(function(big, person) {
        let tempAge = person.yearOfDeath - person.yearOfBirth;
        if (tempAge > (big.yearOfDeath - big.yearOfBirth)) {
            return person;
        }
        // below is the line that fixed the weird 
        return big;});

    return largest.name;
};

// Do not edit below this line
module.exports = findTheOldest;
