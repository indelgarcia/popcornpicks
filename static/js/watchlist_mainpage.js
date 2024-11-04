//watchlist_mainpage.js

// get view elements and buttons
document.addEventListener('DOMContentLoaded', () => {
    const yourWatchlistView = document.getElementById('your-watchlist-view');
    const discoverPicksView = document.getElementById('discover-picks-view');
    const yourWatchlistBtn = document.getElementById('your-watchlist-btn');
    const discoverPicksBtn = document.getElementById('discover-picks-btn');

    // switch to "Your Watchlist" View
    yourWatchlistBtn.addEventListener('click', () => {
        discoverPicksView.style.display = 'none';
        discoverPicksBtn.classList.remove('active');
        yourWatchlistView.style.display = 'block';
        yourWatchlistBtn.classList.add('active');
    });

    // switch to "Discover Picks" View
    discoverPicksBtn.addEventListener('click', () => {
        discoverPicksView.style.display = 'block';
        discoverPicksBtn.classList.add('active');
        yourWatchlistView.style.display = 'none';
        yourWatchlistBtn.classList.remove('active');
    });
});

