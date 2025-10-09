document.addEventListener("DOMContentLoaded", function () {
    //Get the form
    const form = document.getElementById(registration-form);

    //Get the division where feedback will be displayed
    const feedbackDiv = document.getElementById(form-feedback);

    //Add a submit event listener
    form.addEventListener("submit", function (event) {
        // Initialize validation variables
        let isValid = true;
        let messages = [];
        // Username validation
        const username = document.getElementById("username").value.trim();
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }
        // Email validation
        const email = document.getElementById("email").value.trim();
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }
        // Password validation
        const password = document.getElementById("password").value.trim();
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 character long");
        }
        /* If not valid, prevent form submission and show errors
        if (!isValid) {
            event.preventDefault();
            alert(messages.join("\n"));
        }*/
        // Feeddback display logic
        feedbackDiv.style.display = "block"; //make visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#23a745"; //green
            form.reset(); // optional: clear form after success
        }   else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color ="#dc3545"; //red
        }
    });
});