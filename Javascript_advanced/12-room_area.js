// Define the roomDimensions object with width, length, and getArea function
const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length;
    }
};

// Bind the getArea function to the roomDimensions object
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// Test the boundGetArea function
console.log(boundGetArea()); // Should log: 5000
