document.addEventListener('DOMContentLoaded', function () {
    // check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // get elements: watchlist and review cards (for index)
    const watchlistButtons = document.querySelectorAll('.watchlist-btn');
    const reviewCards = document.querySelectorAll('.review-card');

    // get elements: add to watchlist and write review buttons (for movie details page)
    const addToWatchlistButton = document.getElementById('add-watchlist-btn');
    const writeReviewButton = document.getElementById('write-review-btn');
    const reviewLinks = document.querySelectorAll('.review-link');

    // redirect to login page if not logged in
    function redirectToLogin() {
        alert("Please login to access this feature.");
        window.location.href = 'login.html';
    }

    // event listener to Watchlist buttons (general watchlist buttons)
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
        });
    });

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
                redirectToLogin();  // redirect to login page
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
                redirectToLogin();  // Redirect to login page
            }
        });
    });
});
