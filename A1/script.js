// Get the user's name from localStorage and display it
const userName = localStorage.getItem('username');
document.getElementById('greeting').textContent = `Hello, ${userName}!`;
