// auth.js

// Signup Function
function signup(event) {
    event.preventDefault();  // Prevents page reload

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(user => user.username === username || user.email === email);

    if (userExists) {
        alert("Username or email is already taken!");
        return;
    }

    const newUser = { username, email, password };
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
    alert("Account created successfully!");

    window.location.href = 'index.html';
}

// Login Function
function login(event) {
    event.preventDefault();  // Prevents page reload

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loggedInUser', username);
        alert("Login successful!");

        window.location.href = 'index.html';
    } else {
        alert("Invalid username or password");
    }
}

// Logout Function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    alert("Logged out successfully!");

    window.location.href = 'index.html';
}

// Check login status and toggle visibility of login/logout buttons
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const loginLink = document.querySelector('a[href="login.html"]').parentElement;
    const signupLink = document.querySelector('a[href="signup.html"]').parentElement;
    const profileLink = document.getElementById('profile-btn');
    const reviewsButton = document.getElementById('reviews-btn');
    const watchlistButton = document.getElementById('watchlist-btn');
    const logoutButton = document.getElementById('logout-btn');

    if (isLoggedIn === 'true') {
        // Hide login and signup, show profile, reviews, watchlist, and logout
        loginLink.classList.add('hidden');
        signupLink.classList.add('hidden');
        profileLink.classList.remove('hidden');
        reviewsButton.classList.remove('hidden');
        watchlistButton.classList.remove('hidden');
        logoutButton.classList.remove('hidden');
    } else {
        // Show login and signup, hide profile, reviews, watchlist, and logout
        loginLink.classList.remove('hidden');
        signupLink.classList.remove('hidden');
        profileLink.classList.add('hidden');
        reviewsButton.classList.add('hidden');
        watchlistButton.classList.add('hidden');
        logoutButton.classList.add('hidden');
    }
}

function logout() {
    // Clear session data from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    
    alert("Logged out successfully!");

    // Redirect to the homepage after logout
    window.location.href = 'index.html';
}



// Run on page load
window.onload = function() {
    checkLoginStatus();
}
