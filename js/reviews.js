// JS to switch between views and open reviews
document.addEventListener('DOMContentLoaded', () => {
    const verifiedReviewsView = document.getElementById('verified-reviews-view');
    const movieReviewsView = document.getElementById('movie-reviews-view');
    const verifiedReviewsBtn = document.getElementById('verified-reviews-btn');
    const movieReviewsBtn = document.getElementById('movie-reviews-btn');

    // Switch to Verified Reviews View
    verifiedReviewsBtn.addEventListener('click', () => {
        movieReviewsView.style.display = 'none';
        verifiedReviewsView.style.display = 'block';
        verifiedReviewsBtn.classList.add('active');
        movieReviewsBtn.classList.remove('active');
    });

    // Switch to Movie-Specific Reviews View
    movieReviewsBtn.addEventListener('click', () => {
        verifiedReviewsView.style.display = 'none';
        movieReviewsView.style.display = 'block';
        movieReviewsBtn.classList.add('active');
        verifiedReviewsBtn.classList.remove('active');
    });
});
