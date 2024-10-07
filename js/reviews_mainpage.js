// reviews_mainpage.js is used to switch between the Verified reviews 
// and Movie-Specific Reviews views on the reviews Main Page.


document.addEventListener('DOMContentLoaded', () => {

    // get view elements and buttons
    const allReviewsView = document.getElementById('all-reviews-view');
    const movieReviewsView = document.getElementById('movie-reviews-view');
    const allReviewsBtn = document.getElementById('all-reviews-btn');
    const movieReviewsBtn = document.getElementById('movie-reviews-btn');

    // switch to Verified Reviews View
    allReviewsBtn.addEventListener('click', () => {
        movieReviewsView.style.display = 'none';
        allReviewsView.style.display = 'block';
        allReviewsBtn.classList.add('active');
        movieReviewsBtn.classList.remove('active');
    });

    // switch to Movie-Specific Reviews View
    movieReviewsBtn.addEventListener('click', () => {
        allReviewsView.style.display = 'none';
        movieReviewsView.style.display = 'block';
        movieReviewsBtn.classList.add('active');
        allReviewsBtn.classList.remove('active');
    });
});
