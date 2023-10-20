document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('floating-header');
    header.style.opacity = '0'; // Initially, set the header to fully transparent
  
    // Use setTimeout to delay the initial fade-in
    setTimeout(function() {
      header.style.opacity = '1'; // Fade in the header when the page loads
    }, 450); // Adjust the delay time as needed (e.g., 1000ms = 1 second)
  
    window.addEventListener('scroll', function() {
      if (window.scrollY < 10) { // Only when the user scrolls within the first 10 pixels
        header.style.opacity = '1'; // Make the header fully visible
      } else {
        header.style.opacity = '0'; // Fade out the header when scrolling beyond 10 pixels
      }
    });
  });