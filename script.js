// Function to update the position of clock hands based on current time
function updateClock() {
  // Get the current time
  const now = new Date();

  // Extract current seconds, minutes, and hours
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  // Calculate degrees for each hand

  // Each second = 6 degrees (360° / 60 seconds)
  const secondDeg = second * 6;

  // Each minute = 6 degrees + 0.1 degrees per second for smooth movement
  const minuteDeg = minute * 6 + second * 0.1;

  // Each hour = 30 degrees (360° / 12 hours) + fraction from minutes
  const hourDeg = ((hour % 12) / 12) * 360 + (minute / 60) * 30;

  // Apply rotation to the second hand using transform
  document.getElementById('second').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

  // Apply rotation to the minute hand
  document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;

  // Apply rotation to the hour hand
  document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

  // ------------------------------
  // 📆 Display the current date
  // ------------------------------

  // Set options for date formatting
  const options = {
    weekday: 'long',  // e.g., "Wednesday"
    year: 'numeric',  // e.g., "2025"
    month: 'long',    // e.g., "June"
    day: 'numeric'    // e.g., "4"
  };

  // Convert the date to a readable string format
  const dateString = now.toLocaleDateString(undefined, options);

  // Display the date in the HTML element with id="date"
  document.getElementById('date').textContent = dateString;
}

// Call updateClock every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

// Initial call to avoid 1-second delay
updateClock();


// ( those commnets lines in b/w the js part ,explaintion based on js written and this explaintion done by my own knowledge