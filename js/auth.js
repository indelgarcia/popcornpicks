// auth.js


// === Signup Auth Functions === //
function signup(event) {
    // prevents page reload to run custom logic before redirecting.
    event.preventDefault(); 

    // get signup form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // signup form validation, check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // retrieve 'users' from localStorage, if none, initialize eempty array.
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // check if username or email is already taken (.some-> return true on first match)
    const userExists = users.some(user => user.username === username || user.email === email);

    if (userExists) {
        alert("Username or email is already taken!");
        return;
    }

    // create new user object with attributes username, email, and password from form values
    const newUser = { username, email, password };
    // Add the new user to the list of users
    users.push(newUser);

    // save the updated user list in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // automatically log the user in and alert user
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loggedInUser', username);
    alert("Account created successfully! You are now logged in.");

    // redirect to the homepage on successful signup
    window.location.href = 'index.html';
}

// === Login Auth Functions === //
function login(event) {
    // prevents page reload to run custom logic before redirecting.
    event.preventDefault(); 

    // get login form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // retrieve 'users' from localStorage, if none, initialize empty array.
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // validate user credentials
    const validUser = users.find(user => user.username === username && user.password === password);

    // if user is valid, set isLoggedIn and loggedInUser in localStorage and alert user
    if (validUser) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loggedInUser', username);
        alert("Login successful!");

        // redirect to the homepage on successful login
        window.location.href = 'index.html';
    } else {
        // alert user if invalid credentials
        alert("Invalid username or password");
    }
}

// logout Function
function logout() {
    // clear logged in status and user from localStorage and alert user
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    alert("Logged out successfully!");

    // redirect to the homepage after logout
    window.location.href = 'index.html';
}

// === Sidebar Auth Functions === // 

// check login status and toggle visibility of login/logout buttons
function checkLoginStatus() {
    // get isLoggedIn status from localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // get login, signup, profile, reviews, watchlist, and logout buttons
    const loginLink = document.querySelector('a[href="login.html"]').parentElement;
    const signupLink = document.querySelector('a[href="signup.html"]').parentElement;
    const profileLink = document.getElementById('profile-btn');
    const reviewsButton = document.getElementById('reviews-btn');
    const watchlistButton = document.getElementById('watchlist-btn');
    const logoutButton = document.getElementById('logout-btn');

    if (isLoggedIn === 'true') {
        // if logged in: 
        // hide login and signup, 
        // show profile, reviews, watchlist, and logout
        loginLink.classList.add('hidden');
        signupLink.classList.add('hidden');
        profileLink.classList.remove('hidden');
        reviewsButton.classList.remove('hidden');
        watchlistButton.classList.remove('hidden');
        logoutButton.classList.remove('hidden');
    } else {
        // if logged out:
        // show login and signup, 
        // hide profile, reviews, watchlist, and logout
        loginLink.classList.remove('hidden');
        signupLink.classList.remove('hidden');
        profileLink.classList.add('hidden');
        reviewsButton.classList.add('hidden');
        watchlistButton.classList.add('hidden');
        logoutButton.classList.add('hidden');
    }
}

// Run on page load
window.onload = function() {
    checkLoginStatus();
}
