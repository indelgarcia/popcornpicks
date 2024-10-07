//access_control.js

// on page load, initalize an anonymous function to run the following code
document.addEventListener('DOMContentLoaded', function () {


    // === Helper Functions ===


    // check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // redirect to login page if not logged in
    function redirectToLogin() {
        alert("Please login to access this feature.");
        window.location.href = 'login.html';
    }


    // === Index Page Functions ===

    // get elements by classes
    const watchlistButtons = document.querySelectorAll('.watchlist-btn');
    const reviewCards = document.querySelectorAll('.review-card');

    // event listener to Watchlist buttons
    watchlistButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            if (isLoggedIn !== 'true') {
                event.preventDefault();  // prevent 
                alert("Please login to add to Watchlist!");
                window.location.href = 'login.html';  // Redirect to login page
            }
        });
    });

    // Add event listener to Review cards (general review cards)
    reviewCards.forEach(card => {
        card.addEventListener('click', function (event) {
            if (isLoggedIn !== 'true') {
                redirectToLogin();
            }
            else {
                window.location.href = 'reviews_details.html';  // Redirect to review details page
            }
        });
    });

    
    // === Movie Details Page Functions ===


    // get add-watchlist-btn and write-review-btn by IDs 
    const addToWatchlistButton = document.getElementById('add-watchlist-btn');
    const writeReviewButton = document.getElementById('write-review-btn');

    // get all reviewlinks by class
    const reviewLinks = document.querySelectorAll('.review-link'); 

    // Add event listener to 'Add to Watchlist' button (in movie details page)
    if (addToWatchlistButton) {
        addToWatchlistButton.addEventListener('click', function (event) {
            if (isLoggedIn !== 'true') {
                redirectToLogin();  // Redirect to login page
            }
        });
    }

    // Add event listener to 'Write a Review' button (in movie details page)
    if (writeReviewButton) {
        writeReviewButton.addEventListener('click', function (event) {
            if (isLoggedIn !== 'true') {
                redirectToLogin();  // if not logged in, redirect to login page
            }
            else{
                window.location.href = 'reviews_post.html'; // if logged in, redirect to review post page
            }
        });
    }

    // Add event listener to review cards on the movie details page
    reviewLinks.forEach(link => {
        link.addEventListener('click', function (event) {    
            if (isLoggedIn !== 'true') {
                redirectToLogin();
            } else {
                window.location.href = 'reviews_details.html';
            }
        });
    });
});
