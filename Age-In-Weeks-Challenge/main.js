function lifeInWeeks(age) {
    var ageLeft = 90 - age;
    console.log("You have " + ageLeft * 365 +
        " days, " + ageLeft * 52 +
        " weeks, and " + ageLeft * 12 +
        " months left.");
}

// The following function call should print
//You have 12410 days, 1768 weeks, and 408 months left.
lifeInWeeks(56);