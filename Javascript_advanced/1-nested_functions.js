// Define global variable
let globalVariable = 'Welcome';

// Outer function
function outer() {
    // Alert global variable
    alert(globalVariable);

    // Define course variable
    let course = 'Holberton';

    // Inner function
    function inner() {
        // Alert global variable and course concatenated
        alert(globalVariable + ' ' + course);

        // Define exclamation variable
        let exclamation = '!';

        // Inception function
        function inception() {
            // Alert global variable, course, and exclamation concatenated
            alert(globalVariable + ' ' + course + exclamation);
        }

        // Call inception function
        inception();
    }

    // Call inner function
    inner();
}

// Call outer function (main entry point)
outer();

// Call inner function within outer
// inner(); // Uncommenting this line would cause an error because inner is not in the global scope

// Call inception function within inner
// inception(); // Uncommenting this line would cause an error because inception is scoped within inner
