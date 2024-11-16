let totalGems = 0;
        // Create an audio element
        const winSound = new Audio("../sfx/win1.wav");
        winSound.volume = 0.8; // Set volume to 10%

        // Add event listener to play sound on document click
            

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

            case "listening-test":
                  // Listening-Test Question
                  questionDiv.innerHTML = `<p>${q.question}</p><audio src="${q.audioUrl}" type="audio/mpeg" controls style="width: 100%;">Your browser does not support the audio element.</audio>`;
  
                  q.questions.forEach((subQuestion, subIndex) => {
                      const subQuestionDiv = document.createElement("div");
                      subQuestionDiv.classList.add("sub-question");
                      subQuestionDiv.innerHTML = `<p>${subQuestion.question}</p>`;
                      subQuestion.options.forEach((opt, optIndex) => {
                          subQuestionDiv.innerHTML += `<div class="radio-option"><input type="radio" name="question_${index}_subQuestion_${subIndex}" id="question_${index}_subQuestion_${subIndex}_option_${optIndex}" value="${opt}"><label for="question_${index}_subQuestion_${subIndex}_option_${optIndex}">${opt}</label></div>`;
                      });
                      questionDiv.appendChild(subQuestionDiv);
                  });
                  break;                

            case "reference":
                questionDiv.innerHTML = `<p>${q.question}</p>`;
                q.options.forEach((opt, optIndex) => {
                    questionDiv.innerHTML += `<div class="radio-option"><input type="radio" name="question_${index}" id="question_${index}_option_${optIndex}" value="${opt}"><label for="question_${index}_option_${optIndex}">${opt}</label></div>`;
                });
                break;

            case "paragraph":
                  // Rendering the paragraph text
                  questionDiv.innerHTML = `<p class="paragraph-text">${q.text}</p>`;
                  
                  // Rendering the list of questions related to the paragraph
                  q.questions.forEach((subQ, subIndex) => {
                      questionDiv.innerHTML += `<p>${subQ.question}</p>`;
                      subQ.options.forEach((opt, optIndex) => {
                          questionDiv.innerHTML += `<div class="radio-option"><input type="radio" name="question_${index}_subQuestion_${subIndex}" id="question_${index}_subQuestion_${subIndex}_option_${optIndex}" value="${opt}"><label for="question_${index}_subQuestion_${subIndex}_option_${optIndex}">${opt}</label></div>`;
                      });
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
  const totalQuestions = questions.length;
  const pointsPerQuestion = 100 / totalQuestions; // Points for each question

  let score = 0;

  // Iterate over each question to check the user's answer
  questions.forEach((question, index) => {
      let userAnswer = "";
      
      // Get the question DOM element based on index
      const questionElement = document.querySelectorAll(".question")[index];

      // Check for paragraph questions
      if (question.type === "paragraph") {
          question.questions.forEach((subQ, subIndex) => {
              const subQuestionElement = questionElement.querySelectorAll(".radio-option")[subIndex];
              const radioInput = subQuestionElement.querySelector("input[type='radio']:checked");

              // If a radio input is selected
              if (radioInput) {
                  userAnswer = radioInput.value.trim();
              }

              const correctAnswer = subQ.correctAnswer ? subQ.correctAnswer.trim().toLowerCase() : ""; // Safely access correctAnswer

              // Compare user answer with the correct answer
              if (userAnswer.toLowerCase() === correctAnswer && userAnswer !== "") {
                  score += pointsPerQuestion / question.questions.length;
                  subQuestionElement.classList.add("correct");
              } else {
                  subQuestionElement.classList.add("incorrect");
              }
          });
      } else {
          let userAnswer = "";
          const textInput = questionElement.querySelector("input[type='text']");
          if (textInput) {
              userAnswer = textInput.value.trim();
          }

          const radioInput = questionElement.querySelector("input[type='radio']:checked");
          if (radioInput) {
              userAnswer = radioInput.value.trim();
          }

          const correctAnswer = question.correctAnswer ? question.correctAnswer.trim().toLowerCase() : ""; // Safely access correctAnswer
          if (userAnswer.toLowerCase() === correctAnswer && userAnswer !== "") {
              score += pointsPerQuestion;
              questionElement.classList.add("correct");
          } else {
              questionElement.classList.add("incorrect");
          }
      }
  });

  // Display result logic (same as before)
  const resultModal = document.getElementById("resultModal");
  const resultText = document.getElementById("resultText");
  animateCounter(resultText, Math.round(score));

  const scoreState = document.getElementById("score-state");
  let scoreMessage = "";
  let messageColor = "";

  // Define message arrays for each score range
  const username = localStorage.getItem("username");

  const excellentMessages = [
    `You're on fire, ${username}! Genius at work!`,
    "Insane score! Total masterclass!",
    "Brilliant move! Pure brilliance!",
    `${username}, you absolutely crushed it!`,
    "Mastered it! No one’s stopping you!"
  ];
  
  const goodMessages = [
    `Solid work, ${username}! Keep it rolling!`,
    "Nice job! You’re right on track!",
    "You're so close to perfection!",
    `Well done, ${username}! Keep going strong!`,
    "Great work! Just a step away from mastery!"
  ];
  
  const averageMessages = [
    "Almost there! A bit more practice will seal it!",
    `Good effort, ${username}! Just a little more!`,
    "You’re doing well! Keep pushing!",
    "Getting close! Keep working on it!",
    `${username}, just a bit more effort, and you're there!`
  ];
  
  const poorMessages = [
    "Keep at it! Improvement’s around the corner!",
    `No biggie, ${username}! Mistakes help you learn!`,
    "Don’t sweat it, just keep going!",
    "Every try gets you closer—don’t stop now!",
    `${username}, stay at it! You’re making progress!`
  ];
  
  const redirectButton = document.getElementById('redirectBtn');
  const reviseButton = document.getElementById('reviseBtn');

  if (score === 100) {
      scoreMessage = excellentMessages[Math.floor(Math.random() * excellentMessages.length)];
      messageColor = "green";
      resultText.style.color = 'darkgreen';
      reviseButton.style.display = 'none';
      redirectButton.style.pointerEvents = '';
      redirectButton.style.backgroundColor = '';
      winSound.play();
  } else if (score >= 75) {
      scoreMessage = goodMessages[Math.floor(Math.random() * goodMessages.length)];
      messageColor = "blue";
      resultText.style.color = 'darkblue';
      redirectButton.style.pointerEvents = '';
      redirectButton.style.backgroundColor = '';
      winSound.play();

  } else if (score >= 49) {
      scoreMessage = averageMessages[Math.floor(Math.random() * averageMessages.length)];
      messageColor = "orange";
      redirectButton.style.pointerEvents = 'none';
      redirectButton.style.backgroundColor = 'gray';
      resultText.style.color = 'darkorange';
  } else {
      scoreMessage = poorMessages[Math.floor(Math.random() * poorMessages.length)];
      messageColor = "red";
      redirectButton.style.pointerEvents = 'none';
      redirectButton.style.backgroundColor = 'gray';
      resultText.style.color = 'darkred';
  }
  document.querySelector('.modal-content').classList.remove('cover');
  scoreState.innerHTML = scoreMessage;
  scoreState.style.color = messageColor;
  resultModal.style.display = "block";
  setTimeout(function () {
    document.querySelector('.modal-content').classList.add('cover');
  }, 10000);

// Select all elements with the class "incorrect"
const incorrectDivs = document.querySelectorAll('.incorrect');

// Loop through each .incorrect element and add the image if it doesn't already exist
incorrectDivs.forEach(div => {
    if (!div.querySelector('img.wrong-img')) { // Check if an img with class "wrong-img" doesn't exist
        const img = document.createElement('img'); // Create a new img element
        img.src = 'https://img.icons8.com/fluency/48/cancel.png'; // Set the src attribute
        img.width = 30; // Set width to 30px
        img.height = 30; // Set height to 30px
        img.className = 'wrong-img'; // Set the class to 'wrong-img'
        div.appendChild(img); // Append the img to the .incorrect div
        totalGems = totalGems - 0.1;
        
    }
});

// Select all elements with the class "correct"
const correctDivs = document.querySelectorAll('.correct');

// Loop through each .correct element and remove any existing image with class "wrong-img"
correctDivs.forEach(div => {
    const img = div.querySelector('img.wrong-img'); // Find the img with class "wrong-img"
    if (img) {
        img.src = '../icons/ic_tick_gold.png';
        totalGems = totalGems + 1;
    }
});

    // Retrieve the array of completed quizzes from localStorage, or initialize as an empty array if not set
          const completed = JSON.parse(localStorage.getItem("completedQuizzes")) || [];

      // Use an if statement to check if the test is completed
        if (completed.includes(testId)) {
          totalGems = totalGems + 3;
          console.log(totalGems)
    
                      } else {
                        // Add one new quiz (for example, "quiz4")
                        completed.push(testId);

                        // Save the updated array back to localStorage
                        localStorage.setItem("completedQuizzes", JSON.stringify(completed));
                                        // Retrieve the current scores array from localStorage (or initialize an empty array if it doesn't exist)
                        let scores = JSON.parse(localStorage.getItem('scores')) || [];

                        // Add the new score to the array
                        scores.push(Math.round(score));
                        totalGems = totalGems + 15;
                        // Store the updated array back into localStorage
                        localStorage.setItem('scores', JSON.stringify(scores));
                        console.log(totalGems)
                        
          }

      

          if (totalGems < 0) {
            totalGems = 0; // Set totalGems to 0 if it's negative
            console.log(totalGems)
        }

        animateCounter(document.getElementById('gemsEarned'), Math.floor(parseFloat(totalGems)));
        localStorage.setItem('gems', (parseInt(localStorage.getItem('gems')) + totalGems).toString());

        
}



function closeModal() {
    const resultModal = document.getElementById("resultModal");
    resultModal.style.display = "none";
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

    const scrollSpeed = 20; // Customize scroll speed for touch
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

  function redirect() {
    // Step 1: Get the last part of the URL
const currentURL = window.location.href;
const lastPart = currentURL.substring(currentURL.lastIndexOf('/') + 1);

// Step 2: Extract the "L" and the number part
const match = lastPart.match(/L(\d+)\.html/);

if (match) {
    // Step 3: Get the number after "L", increment it
    const number = parseInt(match[1], 10);  // Convert to integer
    const nextNumber = number + 1;

    // Step 4: Construct the new page URL
    const nextPage = `L${nextNumber}.html`;

    // Step 5: Redirect to the new page
    window.location.href = nextPage;
} else {
    console.error("URL format is incorrect.");
}

  }

  function revise() {
    const resultModal = document.getElementById("resultModal");
    resultModal.style.display = "none";
    
    document.querySelectorAll('.correct').forEach(element => {
        element.style.display = 'none';
    });
}



    // Array of gradient background styles
    const gradients = [
      "linear-gradient(100deg, #007bff 30%, #009b5f 100%)",
      "linear-gradient(80deg, #009b5f 30%, #007bff 100%)",
      "linear-gradient(160deg, #00c8ff 30%, #ffbb00 100%)",
      "linear-gradient(60deg, #0033ff 30%, #74009b 100%)",
      "linear-gradient(100deg, #5900ff 30%, #009b55 100%)",
      "linear-gradient(120deg, #ff4800 30%, #ffd500 100%)",
      "linear-gradient(110deg, #006aff 10%, #ff8c00 100%)",
      "linear-gradient(100deg, #ff00a6 8%, #00d575 100%)",
      "linear-gradient(120deg, #ff0000 20%, #00c66d 100%)",
      "linear-gradient(100deg, #5900ff 30%, #ffaa00 100%)",
      "linear-gradient(100deg, #5900ff 30%, #ffbf00 100%)",
      "linear-gradient(100deg, #9d00ff 30%, #009b55 100%)",
      "linear-gradient(100deg, #ff0000 20%, #6600ff 100%)",
      "linear-gradient(100deg, #dfab00 30%, #009b55 100%)",
      "linear-gradient(100deg, #ff2200 30%, #0d009b 100%)"
    ];

    // Function to set a random background gradient
    function setRandomGradient() {
      const header = document.querySelector("header");
      const randomIndex = Math.floor(Math.random() * gradients.length);
      header.style.background = gradients[randomIndex];
    }

    setRandomGradient();

 // Retrieve the list of completed quizzes from localStorage, or initialize it as an empty array if not found
const completed = JSON.parse(localStorage.getItem("completedQuizzes")) || [];

// Check if the test is already completed
if (completed.includes(testId)) {
    // Show the information message
    const infoCarElement = document.getElementById('info-card');
    infoCarElement.style.display = 'flex';

    // Hide the information message after 5 seconds
    setTimeout(() => {
        infoCarElement.style.display = 'none';
    }, 10000);
}

document.getElementById('close-card').addEventListener('click', function(event) {
  const infoCarElement = document.getElementById('info-card');
    infoCarElement.style.display = 'none';
});
                     
   // Use an if statement to check if the test is completed
   if (completed.includes(testId)) {

   } else {
    localStorage.setItem('gems', (parseInt(localStorage.getItem('gems')) - 1.5).toString());
   }


           // Create an audio element
           const clickSound = new Audio("../sfx/click.wav");
           clickSound.volume = 0.05; // Set volume to 10%
   
           // Add event listener to play sound on document click
           document.addEventListener("click", () => {
               clickSound.currentTime = 0; // Restart sound if already playing
               clickSound.play();
           });