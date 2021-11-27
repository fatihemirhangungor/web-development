function bmiCalculator(weight, height) {
    var interpretation;
    var bmi = weight / Math.pow(height, 2);

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    else if (bmi > 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    else if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}

console.log(bmiCalculator(60, 2));