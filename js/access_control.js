document.addEventListener('DOMContentLoaded', function () {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Get all Watchlist buttons and review cards
    const watchlistButtons = document.querySelectorAll('.watchlist-btn');
    const reviewCards = document.querySelectorAll('.review-card');

    // If the user is not logged in, redirect when clicking the Watchlist button
    watchlistButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            if (isLoggedIn !== 'true') {
                event.preventDefault();  // Prevent default action
                alert("Please login to add to Watchlist!");
                window.location.href = 'login.html';  // Redirect to login page
            }
        });
    });

    // If the user is not logged in, redirect when clicking any Review Card
    reviewCards.forEach(card => {
        card.addEventListener('click', function (event) {
            if (isLoggedIn !== 'true') {
                event.preventDefault();  // Prevent default action
                alert("Please login to view reviews!");
                window.location.href = 'login.html';  // Redirect to login page
            }
        });
    });
});
