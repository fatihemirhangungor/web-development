function fibonacciGenerator(n){
    var output = [];

    if (n === 1) {
        output.push(0);
    }
    else if (n === 2) {
        output.push(0);
        output.push(1);
    }
    else {
        var i = 2;
        var counter = 2;
        var value;

        output.push(0);
        output.push(1);

        while (counter < n) {
            
            value = output[i-1] + output[i-2];
            output.push(value);
            i++;
            counter++;    
        }
    }
    return output;
}

console.log(fibonacciGenerator(6));