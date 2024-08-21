// External Script

// Function to receive two values from the user
function receiveTwoValues() {
    var value1 = prompt("Enter the first value:");
    var value2 = prompt("Enter the second value:");

    console.log("Values as strings:");
    console.log("Value 1: " + value1);
    console.log("Value 2: " + value2);

    var sum = parseFloat(value1) + parseFloat(value2);
    if (!isNaN(sum)) {
        console.log("Sum of values: " + sum);
    } else {
        console.log("Values cannot be converted to numbers for summation.");
    }
}

// Function to receive five numbers from the user
function receiveFiveNumbers() {
    var numbers = [];
    for (var i = 0; i < 5; i++) {
        var num = prompt("Enter number " + (i + 1) + ":");
        numbers.push(parseFloat(num));
    }

    console.log("Five numbers with 5 digits:");
    numbers.forEach(function(num) {
        console.log(num.toFixed(5));
    });
}

// Call the functions
receiveTwoValues();
receiveFiveNumbers();
