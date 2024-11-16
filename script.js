function redirect(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Save user input to localStorage
    localStorage.setItem("stage", document.getElementById("stage").value);
    localStorage.setItem("username", document.getElementById("name").value);


    // Redirect to the appropriate page based on the selected stage
    const stage = document.getElementById("stage").value;
    if (stage === "A1") {
        window.location.href = "quizes.html";
    } else if (stage === "B1") {
        window.location.href = "quizes.html";
    }
}


if (localStorage.getItem('gems') === null) {
    localStorage.setItem('gems', '15');
}

if (localStorage.getItem('profile') === null) {
    localStorage.setItem('profile', 'https://cdn-icons-png.flaticon.com/256/4825/4825112.png');
}

// Retrieve the value of "gems" from local storage
let gems = localStorage.getItem('gems');

// Check if the value exists and if it's negative
if (gems !== null) {
    gems = Number(gems); // Convert the value to a number
    if (gems < 0) {
        // If the value is negative, update it to 0
        localStorage.setItem('gems', '0');
        console.log('The value of "gems" was negative and has been updated to 0.');
    } else {
        console.log(`The value of "gems" is ${gems}. No changes needed.`);
    }
} else {
    console.log('"gems" key does not exist in local storage.');
}


function updateStageIfCompleted() {
    // Retrieve the 'completedQuizzes' key from localStorage
    const completedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes')) || [];
    
    // Define the required lessons
    const requiredLessons = Array.from({ length: 10 }, (_, i) => `a1-l${i + 1}`);
    
    // Check if the array has exactly 10 items and matches the required lessons
    const hasCompletedAll = completedQuizzes.length === 10 && 
                            requiredLessons.every(lesson => completedQuizzes.includes(lesson));
    
    if (hasCompletedAll) {
        // Set the 'stage' key to 'B1'
        localStorage.setItem('stage', 'B1');
    }
}

// Call the function
updateStageIfCompleted();


