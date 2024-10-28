document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');
    const ratingDisplay = document.getElementById('rating-display');
    const reviewText = document.getElementById('review-text');
    const reviewTitle = document.getElementById('review-title');
    const cancelBtn = document.getElementById('cancel-btn');
    const form = document.getElementById('review-form');
    const wordCountDisplay = document.getElementById('word-count');
    const MIN_WORD_COUNT = 5; // Minimum word count requirement for the review

    // ====== Star rating interaction logic ======
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            const rating = index + 1;
            ratingValue.value = rating;
            resetStars();
            highlightStars(rating);
            ratingDisplay.textContent = `${rating}/10`;
        });

        star.addEventListener('mouseover', () => {
            resetStars();
            highlightStars(index + 1);
        });

        star.addEventListener('mouseout', () => {
            resetStars();
            highlightStars(ratingValue.value);
        });
    });

    // ====== Star highlight helpers ======
    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.textContent = '★';
                star.style.color = 'gold';
            }
        });
    }

    function resetStars() {
        stars.forEach(star => {
            star.textContent = '☆';
            star.style.color = 'lightgoldenrodyellow';
        });
    }

    // ====== Word count display and validation on input ======
    reviewText.addEventListener('input', () => {
        const wordCount = getWordCount(reviewText.value);
        wordCountDisplay.textContent = `Word Count: ${wordCount}`;

        // Validate word count and highlight if necessary
        if (wordCount < MIN_WORD_COUNT) {
            displayErrorMessage(reviewText, `Review must be at least ${MIN_WORD_COUNT} words.`);
        } else {
            clearErrorMessage(reviewText);
        }
    });

    // Helper function to calculate word count
    function getWordCount(text) {
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    }

    // Cancel button redirects to previous page
    cancelBtn.addEventListener('click', () => {
        window.history.back();
    });

    // Form validation function
    function validateForm() {
        let valid = true;

        // Validate the Review Title
        if (reviewTitle.value.trim() === "") {
            displayErrorMessage(reviewTitle, "Review title cannot be empty.");
            valid = false;
        } else {
            clearErrorMessage(reviewTitle);
        }

        // Validate the Review Text with word count check
        const wordCount = getWordCount(reviewText.value);
        if (wordCount < MIN_WORD_COUNT) {
            displayErrorMessage(reviewText, `Review must be at least ${MIN_WORD_COUNT} words.`);
            valid = false;
        } else {
            clearErrorMessage(reviewText);
        }

        // Validate the Rating
        if (!ratingValue.value) {
            displayErrorMessage(ratingDisplay, "Please select a star rating.");
            valid = false;
        } else {
            clearErrorMessage(ratingDisplay);
        }

        return valid;
    }

    // Display error message next to the input, ensuring it's only shown once
    function displayErrorMessage(input, message) {
        let errorMessage = input.parentNode.querySelector(".error-message");

        if (!errorMessage) {
            errorMessage = document.createElement("span");
            errorMessage.classList.add("error-message");
            input.parentNode.appendChild(errorMessage);
        }

        errorMessage.textContent = message;
        input.classList.add("error");
        errorMessage.style.display = "inline";
    }

    // Clear the error message and styling
    function clearErrorMessage(input) {
        input.classList.remove("error");
        const errorMessage = input.parentNode.querySelector(".error-message");
        if (errorMessage) {
            errorMessage.style.display = "none";
        }
    }

    // Form submission with validation check
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        let isValid = validateForm();

        if (isValid) {
            alert('Review Submitted!');
            window.history.back(); // Redirect if valid
        }
    });
});
