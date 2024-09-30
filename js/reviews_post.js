document.addEventListener('DOMContentLoaded', () => {

    
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');
    const ratingDisplay = document.getElementById('rating-display');  // New rating display element
    const reviewText = document.getElementById('review-text');
    const wordCount = document.getElementById('word-count');
    const cancelBtn = document.getElementById('cancel-btn');

    // Interactive star rating system (click and hover)
    stars.forEach((star, index) => {
        // Click event to lock the rating
        star.addEventListener('click', () => {
            const rating = index + 1;  // Get the correct rating based on the index (1-based)
            ratingValue.value = rating;

            // Highlight the stars up to the clicked one
            resetStars();
            highlightStars(rating);

            // Display the selected rating (e.g., 5/10)
            ratingDisplay.textContent = `${rating}/10`;
        });

        // Hover event to highlight stars up to the hovered one
        star.addEventListener('mouseover', () => {
            resetStars();
            highlightStars(index + 1);  // Highlight stars up to the hovered one
        });

        // Remove hover effect and reset stars when mouse leaves
        star.addEventListener('mouseout', () => {
            resetStars();
            highlightStars(ratingValue.value); // Reapply the highlight for the selected rating
        });
    });

    // Word count display
    reviewText.addEventListener('input', () => {
        wordCount.textContent = `Word Count: ${reviewText.value.split(/\s+/).filter(word => word.length > 0).length}`;
    });

    // Cancel button redirects to previous page
    cancelBtn.addEventListener('click', () => {
        window.history.back();
    });

    // Form submission logic
    document.getElementById('review-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Review Submitted!'); // Placeholder action for form submission
    });

    // Helper function to highlight stars up to a specific value
    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.textContent = '★';  // Filled star
                star.style.color = '#ffcc00';  // Solid yellow color
            }
        });
    }

    // Helper function to reset all stars to the default state
    function resetStars() {
        stars.forEach(star => {
            star.textContent = '☆';  // Unfilled star
            star.style.color = '#ffcc00';  // Lighter yellow color for hover
        });
    }
});
