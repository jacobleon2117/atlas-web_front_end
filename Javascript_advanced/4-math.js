// Function to create a closure for division
function divideBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber / firstNumber;
    };
}

// Function to create a closure for addition
function addBy(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}

// Create closures using divideBy and addBy
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

// Test cases
console.log(addBy100(20));    // Should log: 120
console.log(divideBy10(20));  // Should log: 2
console.log(divideBy100(200)); // Should log: 2
console.log(addBy1000(20));   // Should log: 1020
