function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return Math.floor(bmi);
}

// Following line should print 20
console.log(bmiCalculator(65, 1.8));