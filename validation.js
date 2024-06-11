function validateForm() {
    // Get form elements
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var errorMessages = document.getElementById("errorMessages");

    // Clear previous error messages
    errorMessages.innerHTML = "";

    // Define regex patterns
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/;

    // Validation checks
    if (name === "") {
        errorMessages.innerHTML += "Name is required.<br>";
    }

    if (email === "") {
        errorMessages.innerHTML += "Email is required.<br>";
    } else if (!emailPattern.test(email)) {
        errorMessages.innerHTML += "Invalid email format.<br>";
    }

    if (password === "") {
        errorMessages.innerHTML += "Password is required.<br>";
    } else if (password.length < 6) {
        errorMessages.innerHTML += "Password must be at least 6 characters long.<br>";
    }

    if (phone === "") {
        errorMessages.innerHTML += "Phone number is required.<br>";
    } else if (!phonePattern.test(phone)) {
        errorMessages.innerHTML += "Invalid phone number. Must be 10 digits.<br>";
    }

    if (address === "") {
        errorMessages.innerHTML += "Address is required.<br>";
    }

    // If there are error messages, prevent form submission
    if (errorMessages.innerHTML !== "") {
        return false;
    }

    // If everything is valid, allow form submission
    return true;
}
