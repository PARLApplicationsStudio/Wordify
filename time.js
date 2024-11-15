// Check if the "time-interacted" key exists in localStorage
if (!localStorage.getItem("time-interacted")) {
    // Initialize the counter if it's not already set
    localStorage.setItem("time-interacted", 0);
}

// Function to update the time in localStorage
function updateTime() {
    // Get the current value of "time-interacted" from localStorage
    let currentTime = parseInt(localStorage.getItem("time-interacted"), 10);
    
    // Increment the time by 1 minute (1 minute = 1 count)
    currentTime += 1;
    
    // Update the localStorage value
    localStorage.setItem("time-interacted", currentTime);
    
    // Optional: Log to console or update a UI element to show the time
    console.log(`Time interacted: ${currentTime} minutes`);
}

// Start the counter to run every minute (60,000 ms)
setInterval(updateTime, 60000);
