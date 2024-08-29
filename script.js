
function validateLogin(event) {
    console.log("Função validateLogin chamada");
    event.preventDefault(); // Prevent form submission

    // Set valid credentials
    const validEmail = "locador@gmail.com";
    const validPassword = "locaaieventos";

    // Capture input values
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loading = document.getElementById("loading");
    const feedback = document.getElementById("feedback");

    // Clears previous feedback and styles
    feedback.textContent = "";
    emailInput.style.borderColor = "";
    passwordInput.style.borderColor = "";

    // Condition for Check if the email and password are correct
    if (emailInput.value === validEmail && passwordInput.value === validPassword) {
        // Show the loading icon
        loading.style.display = "block";

        // After 3 seconds, it shows the success message and reloads the page
        setTimeout(() => {
            loading.style.display = "none";
            feedback.style.color = "green";
            feedback.textContent = "Login realizado com sucesso!";
            setTimeout(() => {
                location.reload(); // Reload the page
            }, 3000); // Reload after 3 seconds
        }, 3000); // Simulates loading time
    } else {
        
        // Circle the email and password fields in red
        emailInput.style.borderColor = "red";
        passwordInput.style.borderColor = "red";
        feedback.style.color = "red";
        feedback.textContent = "Dados inválidos";
    }
}
