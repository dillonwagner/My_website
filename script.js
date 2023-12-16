// Define a variable to store the interval ID
var intervalID;

// Define a function that appends the character to the textContainer element
function appendChar() {
  // Append the character to the textContainer element
  textContainer.innerHTML += "█";
}

// Start appending the character every 10 seconds when the page loads
window.onload = function() {
  intervalID = setInterval(appendChar, 30); // 10000 milliseconds = 10 seconds
};

// Stop appending the character after 100 seconds
setTimeout(function() {
    clearInterval(intervalID);
    // Make the text switch between two colors
    let colorCount = 0;
    let colorID = setInterval(function() {
      // Toggle the color of the text
      textContainer.style.color = (colorCount % 2 == 0 ? 'rgb(221, 101, 9)' : 'rgba(221, 101, 9, 0)');
      // Increment the color count
      colorCount++;
      // If the color count reaches 4, stop switching and delete the element
      if (colorCount == 8) {
        clearInterval(colorID);
        setTimeout(function() {
            // Delete the textContainer element from the DOM
            textContainer.remove();
          }, 1000); // 1000 milliseconds = 1 second
    }
  }, 450); // 500 milliseconds = 0.5 seconds
}, 4750); // 100000 milliseconds = 100 seconds
