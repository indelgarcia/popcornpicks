// Simulating user login state using localStorage
const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

// Update sidebar based on login state
const updateSidebar = () => {
  const sidebarItems = document.querySelectorAll('.menu ul li');
  
  if (isLoggedIn) {
    // Hide login and signup buttons for logged-in users
    sidebarItems.forEach(item => {
      const linkText = item.querySelector('.text').textContent.trim();
      if (linkText === 'Login' || linkText === 'Signup') {
        item.style.display = 'none'; // Hide login and signup
      }
    });
  } else {
    // Show only login and signup for unregistered users
    sidebarItems.forEach(item => {
      const linkText = item.querySelector('.text').textContent.trim();
      if (linkText !== 'Login' && linkText !== 'Signup') {
        item.style.display = 'none'; // Hide all other buttons if not logged in
      }
    });
  }
};

// Handle the watchlist and review button clicks
const restrictAccess = () => {
  // Watchlist
  const watchlistButtons = document.querySelectorAll('.watchlist-btn');
  watchlistButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (!isLoggedIn) {
        window.location.href = 'login.html'; // Redirect to login if not logged in
      } else {
        window.location.href = 'watchlist.html'; // Allow if logged in
      }
    });
  });

  // Reviews
  const reviewLinks = document.querySelectorAll('.user-reviews-section a');
  reviewLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (!isLoggedIn) {
        e.preventDefault(); // Prevent the default behavior
        window.location.href = 'login.html'; // Redirect to login page
      }
    });
  });
};

// Call functions on page load
document.addEventListener('DOMContentLoaded', () => {
  updateSidebar(); // Update sidebar based on login status
  restrictAccess(); // Restrict watchlist and reviews access
});
