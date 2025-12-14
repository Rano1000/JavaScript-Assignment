function validateForm() {

    // Get values
    let fullName = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;

    /* ===== FULL NAME VALIDATION ===== */
    if (fullName === "") {
        alert("Full Name cannot be empty.");
        return false;
    }

    let nameParts = fullName.split(" ");
    if (nameParts.length < 2) {
        alert("Full Name must contain at least two words.");
        return false;
    }

    /* ===== EMAIL VALIDATION ===== */
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    /* ===== PASSWORD VALIDATION ===== */
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(password)) {
        alert(
            "Password must be at least 8 characters long and contain:\n" +
            "- One uppercase letter\n" +
            "- One number\n" +
            "- One special character"
        );
        return false;
    }

    /* ===== CONFIRM PASSWORD ===== */
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    /* ===== AGE VALIDATION ===== */
    if (age < 18) {
        alert("You must be 18 years or older to register.");
        return false;
    }

    /* ===== SUCCESS ===== */
    alert("Registration successful!");
    return true;
}
