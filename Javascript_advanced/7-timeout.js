// Log the start of the execution queue
console.log('Start of the execution queue');

// Schedule the final code block to be executed with a delay of 0 using setTimeout
setTimeout(() => {
    console.log('Final code block to be executed');
}, 0);

// Loop that iterates 100 times, logging the iteration number each time
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Log the end of the loop printing
console.log('End of the loop printing');
