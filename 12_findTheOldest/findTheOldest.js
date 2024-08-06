const findTheOldest = function(peeps) {
    function getAge(peep) {
        if (!peep.yearOfDeath) {
            return (new Date().getFullYear()) - peep.yearOfBirth;
        }
        return peep.yearOfDeath - peep.yearOfBirth;
    }
    let old = peeps.reduce(function(prev, person) {
        if (getAge(prev) < getAge(person)) {
            return person;
        }
        else {
            return prev;
        }
    });
    return old;
}

// Do not edit below this line
module.exports = findTheOldest;
