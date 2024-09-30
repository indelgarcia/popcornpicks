document.addEventListener('DOMContentLoaded', function () {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Get all Watchlist buttons and review cards (for homepage or other sections)
    const watchlistButtons = document.querySelectorAll('.watchlist-btn');
    const reviewCards = document.querySelectorAll('.review-card');

    // Get elements specific to movie details page
    const addToWatchlistButton = document.getElementById('add-watchlist-btn');
    const writeReviewButton = document.getElementById('write-review-btn');
    const reviewLinks = document.querySelectorAll('.review-link');

    // Function to redirect to login page if not logged in
    function redirectToLogin() {
        alert("Please login to access this feature.");
        window.location.href = 'login.html';
    }

    // Add event listener to Watchlist buttons (general watchlist buttons)
    watchlistButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            if (isLoggedIn !== 'true') {
                event.preventDefault();  // Prevent default action
                alert("Please login to add to Watchlist!");
                window.location.href = 'login.html';  // Redirect to login page
            }
        });
    });

    // Add event listener to Review cards (general review cards)
    reviewCards.forEach(card => {
        card.addEventListener('click', function (event) {
            if (isLoggedIn !== 'true') {
                event.preventDefault();  // Prevent default action
                alert("Please login to view reviews!");
                window.location.href = 'login.html';  // Redirect to login page
            }
        });
    });

    // Add event listener to 'Add to Watchlist' button (specific to movie details page)
    if (addToWatchlistButton) {
        addToWatchlistButton.addEventListener('click', function (event) {
            if (isLoggedIn !== 'true') {
                event.preventDefault();  // Prevent default action
                redirectToLogin();  // Redirect to login page
            }
        });
    }

    // Add event listener to 'Write a Review' button (specific to movie details page)
    if (writeReviewButton) {
        writeReviewButton.addEventListener('click', function (event) {
            if (isLoggedIn !== 'true') {
                event.preventDefault();  // Prevent default action
                redirectToLogin();  // Redirect to login page
            }
        });
    }

    // Add event listener to review cards on the movie details page
    reviewLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            if (isLoggedIn !== 'true') {
                event.preventDefault();  // Prevent default action
                redirectToLogin();  // Redirect to login page
            }
        });
    });
});
