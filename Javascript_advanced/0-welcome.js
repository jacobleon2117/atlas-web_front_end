function welcome(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;

    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }

    displayFullName();
}

// Testing the function
welcome('Holberton', 'School');
// Uncommenting the line below would cause a ReferenceError because fullName is scoped inside the welcome function
// alert(fullName);
