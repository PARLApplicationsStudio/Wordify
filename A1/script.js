
// Function to Render Questions
function renderQuestions() {
    const exerciseSection = document.getElementById("exerciseSection");
    exerciseSection.innerHTML = ""; // Clear any existing questions

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.tabIndex = '0';

        switch (q.type) {
            case "normal":
                questionDiv.innerHTML = `<p>${q.question}</p><input type="text" id="question_${index}" placeholder="Type your answer here">`;
                break;

            case "normal-test":
                questionDiv.innerHTML = `<p>${q.question}</p>`;
                q.options.forEach((opt, optIndex) => {
                    questionDiv.innerHTML += `<div class="radio-option"><input type="radio" name="question_${index}" id="question_${index}_option_${optIndex}" value="${opt}"><label for="question_${index}_option_${optIndex}">${opt}</label></div>`;
                });
                break;

            case "fill-blank":
                questionDiv.innerHTML = `<p>${q.question.replace("____", `<input type="text" id="question_${index}" placeholder="Fill in the blank">`)}</p>`;
                break;

            case "fill-in-the-blank-test":
                questionDiv.innerHTML = `<p>${q.question.replace("____", `<input type="text" id="question_${index}" placeholder="Fill in the blank">`)}</p>`;
                q.options.forEach((opt, optIndex) => {
                    questionDiv.innerHTML += `<div class="radio-option"><input type="radio" name="question_${index}" id="question_${index}_option_${optIndex}" value="${opt}"><label for="question_${index}_option_${optIndex}">${opt}</label></div>`;
                });
                break;

            case "list-fill-blank":
                questionDiv.innerHTML = `<p>${q.question.replace("____", `<input type="text" id="question_${index}" placeholder="Fill in the blank">`)}</p>`;
                break;

            case "listening":
                questionDiv.innerHTML = `<p>${q.question}</p><audio src="${q.audioUrl}" type="audio/mpeg" controls style="width: 100%;">Your browser does not support the audio element.</audio>`;
                q.options.forEach((opt, optIndex) => {
                    questionDiv.innerHTML += `<div class="radio-option"><input type="radio" name="question_${index}" id="question_${index}_option_${optIndex}" value="${opt}"><label for="question_${index}_option_${optIndex}">${opt}</label></div>`;
                });
                break;

            case "reference":
                questionDiv.innerHTML = `<p>${q.question}</p>`;
                q.options.forEach((opt, optIndex) => {
                    questionDiv.innerHTML += `<div class="radio-option"><input type="radio" name="question_${index}" id="question_${index}_option_${optIndex}" value="${opt}"><label for="question_${index}_option_${optIndex}">${opt}</label></div>`;
                });
                break;
        }

        exerciseSection.appendChild(questionDiv);
        document.querySelectorAll('input').forEach(function(element) {
            element.setAttribute('tabindex', '0');
            element.setAttribute('autocomplete', 'off')
          });
    });
}

function submitTest() {
    // 1. Calculate the total number of questions and the score per question
    const totalQuestions = questions.length;
    const pointsPerQuestion = 100 / totalQuestions; // Points for each question

    let score = 0;

    // 2. Iterate over each question to check the user's answer
    questions.forEach((question, index) => {
        let userAnswer = "";
        
        // Get the question DOM element based on index
        const questionElement = document.querySelectorAll(".question")[index];

        // Check if it's a text input (normal or fill-in-the-blank type)
        const textInput = questionElement.querySelector("input[type='text']");
        if (textInput) {
            userAnswer = textInput.value.trim().toLowerCase();
        }

        // Check if it's a radio input (multiple-choice type)
        const radioInput = questionElement.querySelector("input[type='radio']:checked");
        if (radioInput) {
            userAnswer = radioInput.value.trim().toLowerCase();
        }

        // 3. Get the correct answer for this question and normalize it
        const correctAnswer = question.correctAnswer.toLowerCase();  // Normalize the correct answer

        // 4. Compare user answer with the correct answer
        if (userAnswer === correctAnswer && userAnswer !== "") {
            // Correct answer, add points
            score += pointsPerQuestion;
            questionElement.classList.add("correct");
        } else {
            // Incorrect answer
            questionElement.classList.add("incorrect");
        }
    });

    // 5. Show the result modal
    const resultModal = document.getElementById("resultModal");
    const resultText = document.getElementById("resultText");

    // Call the animateCounter function to animate the score
    animateCounter(resultText, Math.round(score));


        // 6. Set the score state message based on the score
        const scoreState = document.getElementById("score-state");

        let scoreMessage = "";
        let messageColor = "";
    
        // Define message arrays for each score range
        const excellentMessages = [
            "Outstanding performance! You're a genius!",
            "Perfect score! You've mastered this!",
            "Amazing! You aced everything!"
        ];
    
        const goodMessages = [
            "Great job! You're on the right track!",
            "Well done! Keep up the good work!",
            "Nice! You're really good at this!"
        ];
    
        const averageMessages = [
            "Not bad! Keep practicing to improve!",
            "You're doing great, but there's room for improvement!",
            "Almost there! With a little more effort, you'll do better!"
        ];
    
        const poorMessages = [
            "Don't worry! Keep trying and you'll get there!",
            "Keep practicing! You'll improve with time!",
            "It's okay! Every mistake is a step toward success!"
        ];
    
        // Decide which message to show based on score
        if (score === 100) {
            scoreMessage = excellentMessages[Math.floor(Math.random() * excellentMessages.length)];
            messageColor = "green";
        } else if (score >= 90) {
            scoreMessage = goodMessages[Math.floor(Math.random() * goodMessages.length)];
            messageColor = "blue";
        } else if (score >= 70) {
            scoreMessage = averageMessages[Math.floor(Math.random() * averageMessages.length)];
            messageColor = "orange";
        } else {
            scoreMessage = poorMessages[Math.floor(Math.random() * poorMessages.length)];
            messageColor = "red";
        }
    
        // Apply the score message and style
        scoreState.textContent = scoreMessage;
        scoreState.style.color = messageColor;
    // Display the modal
    resultModal.style.display = "block";

    
                      // Retrieve the array of completed quizzes from localStorage, or initialize as an empty array if not set
                      const completed = JSON.parse(localStorage.getItem("completedQuizzes")) || [];

                      // Use an if statement to check if the test is completed
                      if (completed.includes(testId)) {
    
                      } else {
                        // Add one new quiz (for example, "quiz4")
                        completed.push(testId);

                        // Save the updated array back to localStorage
                        localStorage.setItem("completedQuizzes", JSON.stringify(completed));
                                        // Retrieve the current scores array from localStorage (or initialize an empty array if it doesn't exist)
                        let scores = JSON.parse(localStorage.getItem('scores')) || [];

                        // Add the new score to the array
                        scores.push(Math.round(score));

                        // Store the updated array back into localStorage
                        localStorage.setItem('scores', JSON.stringify(scores));
                              }

}

function closeModal() {
    document.getElementById("resultModal").style.display = "none";
    document.querySelector(".container").style.opacity = '0.6';
    document.querySelector(".container").style.pointerEvents = 'none';
}
  
function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 100); // You can adjust the increment value for speed
    
    function updateCounter() {
      if (current < target) {
        current += increment;
        element.innerText = current;
        setTimeout(updateCounter, 20); // Adjust timing for smoother animation
      } else {
        element.innerText = target;
      }
    }
  
    updateCounter();
  }
  
  window.onload = function() {
    const counterElement = document.getElementById("liveCounter");
    const targetNumber = 123456;  // Replace this with your desired target number
  
    animateCounter(counterElement, targetNumber);
  };
  
// Optional: Enable native smooth scrolling via CSS
document.documentElement.style.scrollBehavior = 'smooth';

// For Mouse Wheel Scroll
window.addEventListener('wheel', function(event) {
  event.preventDefault(); // Prevent default scroll behavior

  const scrollSpeed = 7; // Customize scroll speed

  // Adjust the scroll position based on the wheel event delta
  window.scrollBy({
    top: event.deltaY * scrollSpeed,  // Scroll vertically based on mouse wheel
    left: event.deltaX * scrollSpeed, // Scroll horizontally based on mouse wheel
    behavior: 'smooth' // Smooth scroll behavior
  });
}, { passive: false });

// For Touch Scroll (on mobile/tablet)
let startY = 0; // Track the starting Y position of the touch
let isTouching = false;

window.addEventListener('touchstart', function(event) {
  // When the touch starts, store the Y position
  startY = event.touches[0].clientY;
  isTouching = true;
}, { passive: true });

window.addEventListener('touchmove', function(event) {
  if (isTouching) {
    event.preventDefault(); // Prevent the default scrolling behavior

    const scrollSpeed = 6; // Customize scroll speed for touch
    const deltaY = startY - event.touches[0].clientY; // Calculate the difference in Y position

    // Adjust the scroll position based on touch movement
    window.scrollBy({
      top: deltaY * scrollSpeed,  // Scroll vertically based on touch movement
      behavior: 'smooth'  // Smooth scroll behavior
    });

    startY = event.touches[0].clientY; // Update the startY for next movement
  }
}, { passive: false });

window.addEventListener('touchend', function() {
  isTouching = false; // Reset the touch state when the touch ends
});

  
document.addEventListener('click', function() {
    // Check if the browser supports the fullscreen API
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // Internet Explorer/Edge
      document.documentElement.msRequestFullscreen();
    }
  });

          // Adding smooth scroll to all elements in the page
          document.body.addEventListener('click', function(event) {
            if (event.target && event.target.classList.contains('section')) {
                // Scroll to the clicked element smoothly
                event.target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        

        if (window.innerHeight < 600) {
            alert('To interact with Wordify, your screen height must be at least 600 pixels');
            window.location.href = "../index.html";  // Redirect to the specified page after alert
        }

        
        document.getElementById('exit').addEventListener('click', function() {

                      // Retrieve the array of completed quizzes from localStorage, or initialize as an empty array if not set
            const completed = JSON.parse(localStorage.getItem("completedQuizzes")) || [];

            // Use an if statement to check if the test is completed
            if (completed.includes(testId)) {
              window.history.back();
            } else {
                                // Display a confirmation dialog
                const confirmation = confirm("Are you sure you want to go back? Unsaved data will be lost.");
                
                // Navigate back only if the user confirms
                if (confirmation) {
                    window.history.back();
                }
            }
      });

// Load questions on page load
window.onload = renderQuestions;

renderQuestions;
    

// Function to check if all inputs are filled or checked
function checkInputs() {
  const inputs = document.querySelectorAll('input[type="text"], input[type="radio"]');
  let allFilled = true;

  // Loop through all inputs and check if they are filled or checked
  inputs.forEach(input => {
    if ((input.type === 'text' && input.value.trim() === '') || 
        (input.type === 'radio' && !input.checked)) {
      allFilled = false;
    }
  });

  // Get the button and enable/disable it based on the input state
  const nextBtn = document.getElementById('nextBtn'); // Adjust if necessary
  nextBtn.disabled = !allFilled; // Disable button if any input is empty or unchecked
}

// Add event listeners for all text and radio inputs
document.querySelectorAll('input[type="text"], input[type="radio"]').forEach(input => {
  input.addEventListener('input', checkInputs); // For text input
  input.addEventListener('change', checkInputs); // For radio buttons
});

// Initial check in case there is already a value or checked radio
checkInputs();


  
  if (!localStorage.getItem('username') || !localStorage.getItem('stage')) {
    // Show the overlay if either key is empty
    document.querySelector('.overlay').style.display = '';
  } else {
    // Hide the overlay if both keys are present
    document.querySelector('.overlay').style.display = 'none';
  }

  // Function to check and toggle the visibility of the loading div
  function checkQuestions() {
    const loading = document.querySelector('.loading');
    const questionDivs = document.querySelectorAll('.question');

    // If there are no question divs, show the target div
    if (questionDivs.length === 0) {
      loading.style.display = 'block';  // Show the loading div
    } else {
      loading.style.display = 'none';  // Hide the loading div
    }
  }

  // Check every second (1000 milliseconds)
  setInterval(checkQuestions, 100);
