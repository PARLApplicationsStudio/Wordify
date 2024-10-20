function redirect(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Save user input to localStorage
    localStorage.setItem("stage", document.getElementById("stage").value);
    localStorage.setItem("username", document.getElementById("name").value);

    // Redirect to the appropriate page based on the selected stage
    const stage = document.getElementById("stage").value;
    if (stage === "A1") {
        window.location.href = "A1/index.html";
    } else if (stage === "A2") {
        window.location.href = "A2/index.html";
    }
}
