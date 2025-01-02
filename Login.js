// Switch between Login and Sign Up forms
function showLogin() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-btn').classList.add('active');
    document.getElementById('signup-btn').classList.remove('active');
}

function showSignup() {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-btn').classList.add('active');
    document.getElementById('login-btn').classList.remove('active');
}

// Email Validation Function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Password Validation Function
function validatePassword(password) {
    const minLength = 8;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const uppercase = /[A-Z]/;
    const number = /[0-9]/;

    if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
    }
    if (!specialChar.test(password)) {
        return "Password must contain at least one special character.";
    }
    if (!uppercase.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!number.test(password)) {
        return "Password must contain at least one number.";
    }

    return null;
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Both fields are required.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format.");
        return;
    }

    alert("Login Successful!");
});

// Handle sign-up form submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (!name || !email || !password) {
        alert("All fields are required.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format.");
        return;
    }

    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
        alert(passwordValidationError);
        return;
    }

    alert("Account Created Successfully!");
});


