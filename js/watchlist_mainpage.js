// JS for managing the watchlist functionalities
document.addEventListener('DOMContentLoaded', () => {
    const yourWatchlistView = document.getElementById('your-watchlist-view');
    const discoverPicksView = document.getElementById('discover-picks-view');
    const yourWatchlistBtn = document.getElementById('your-watchlist-btn');
    const discoverPicksBtn = document.getElementById('discover-picks-btn');
    const postWatchlistBtn = document.getElementById('post-watchlist-btn');

    // Switch to "Your Watchlist" View
    yourWatchlistBtn.addEventListener('click', () => {
        discoverPicksView.style.display = 'none';
        yourWatchlistView.style.display = 'block';
        yourWatchlistBtn.classList.add('active');
        discoverPicksBtn.classList.remove('active');
    });

    // Switch to "Discover Picks" View
    discoverPicksBtn.addEventListener('click', () => {
        yourWatchlistView.style.display = 'none';
        discoverPicksView.style.display = 'block';
        discoverPicksBtn.classList.add('active');
        yourWatchlistBtn.classList.remove('active');
    });
});

