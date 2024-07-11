// Define the user object with the specified attributes
const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Johns',
    location: 'Netherlands',
    occupation: 'Engineer'
};

// Create the logWelcomeUser function
function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

// Bind the logWelcomeUser function to the user object
const bindLogWelcomeUser = logWelcomeUser.bind(user);

// Call the function with the string 'Welcome'
bindLogWelcomeUser('Welcome');

// To demonstrate that calling with 'Hello' works as required
bindLogWelcomeUser('Hello'); // Should log: Hello, Buillaume. Your occupation is: Engineer
