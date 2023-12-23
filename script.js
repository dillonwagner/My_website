document.addEventListener('DOMContentLoaded', function() {
  // Function to format the time as H:M:S
  function formatTime(time) {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  // Function to format the date as M-DD-YYYY
  function formatDate(date) {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  }

  // Get the current time in the user's timezone
  const currentTime = new Date();

  // Create a new element for the current time
  const currentTimeElement = document.getElementById('currentTime');

  // Update the element with the current date and time
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayName = daysOfWeek[currentTime.getDay()];

  // Format and display the current date
  const formattedDate = `Current date is ${dayName} ${formatDate(currentTime)}`;
  document.getElementById('currentDate').textContent = formattedDate;

  // Format and display the current time
  const formattedTime = `Current time is ${formatTime(currentTime)}`;
  currentTimeElement.textContent = formattedTime;


  const paragraphs = document.querySelectorAll('.typing');
let index = 0;

function type() {
  if (index === paragraphs.length) {
    return;
  }

  const paragraph = paragraphs[index];
  const text = paragraph.innerHTML;
  const typingSpeed = 100;

  let i = 0;
  paragraph.innerHTML = '';

  function addLetter() {
    paragraph.innerHTML += text.charAt(i);
    i++;

    if (i === text.length) {
      paragraph.classList.remove('typing');
      paragraph.classList.add('typed');
      index++;
      if (index < paragraphs.length) {
        paragraphs[index].classList.add('typing');
      }
      setTimeout(type, 1000);
      return;
    }

    setTimeout(addLetter, typingSpeed);
  }

  addLetter();
}

type();




});
