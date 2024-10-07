// reviews_mainpage.js is used to switch between the Verified reviews 
// and Movie-Specific Reviews views on the reviews Main Page.


document.addEventListener('DOMContentLoaded', () => {

    // get view elements and buttons
    const verifiedReviewsView = document.getElementById('verified-reviews-view');
    const movieReviewsView = document.getElementById('movie-reviews-view');
    const verifiedReviewsBtn = document.getElementById('verified-reviews-btn');
    const movieReviewsBtn = document.getElementById('movie-reviews-btn');

    // switch to Verified Reviews View
    verifiedReviewsBtn.addEventListener('click', () => {
        movieReviewsView.style.display = 'none';
        verifiedReviewsView.style.display = 'block';
        verifiedReviewsBtn.classList.add('active');
        movieReviewsBtn.classList.remove('active');
    });

    // switch to Movie-Specific Reviews View
    movieReviewsBtn.addEventListener('click', () => {
        verifiedReviewsView.style.display = 'none';
        movieReviewsView.style.display = 'block';
        movieReviewsBtn.classList.add('active');
        verifiedReviewsBtn.classList.remove('active');
    });
});
