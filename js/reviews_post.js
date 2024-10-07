//reviews_post.js is used to implement the Write a Review form 
// on the reviews Post Page.

document.addEventListener('DOMContentLoaded', () => {
    // get elements for the write a review form
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');
    const ratingDisplay = document.getElementById('rating-display');  // New rating display element
    const reviewText = document.getElementById('review-text');
    const wordCount = document.getElementById('word-count');
    const cancelBtn = document.getElementById('cancel-btn');

    // interactive star rating system (click and hover)
    stars.forEach((star, index) => {
        // click event to lock the rating
        star.addEventListener('click', () => {
            const rating = index + 1;  // get the correct rating based on the index (starts at 0)
            ratingValue.value = rating;

            // highlight the stars up to the clicked one
            resetStars();
            highlightStars(rating);

            // display the selected rating (e.g., 5/10)
            ratingDisplay.textContent = `${rating}/10`;
        });

        // hover event to highlight stars up to the hovered one
        star.addEventListener('mouseover', () => {
            resetStars();
            highlightStars(index + 1);
        });

        // remove hover effect and reset stars when mouse leaves
        star.addEventListener('mouseout', () => {
            resetStars();
            highlightStars(ratingValue.value); // reapply the highlight for the selected rating if clicked
        });
    });

    // word count display
    reviewText.addEventListener('input', () => {
        //split by whitespace, remove empty strings, and count the length
        wordCount.textContent = `Word Count: ${reviewText.value.split(/\s+/).filter(word => word.length > 0).length}`;
    });

    // cancel button redirects to previous page
    cancelBtn.addEventListener('click', () => {
        window.history.back();
    });

    // form submission logic
    document.getElementById('review-form').addEventListener('submit', (event) => {
        alert('Review Submitted!'); // alert message for review submission
        window.history.back();  // redirect to previous page
    });

    // helper function to highlight stars up to a specific value
    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.textContent = '★';  // filled star
                star.style.color = 'gold';  // gold color
            }
        });
    }

    // helper function to reset all stars to the default state
    function resetStars() {
        stars.forEach(star => {
            star.textContent = '☆';  // unfilled star
            star.style.color = 'light gold'; 
        });
    }
});
