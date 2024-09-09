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

    // Handle "Post Watchlist" button click (you can replace this with a modal or form)
    postWatchlistBtn.addEventListener('click', () => {
        alert('Post Watchlist clicked! This will eventually allow the user to submit a new watchlist.');
    });
});

function openWatchlist() {
    alert('Watchlist clicked! This will eventually show the full list of movies.');
}

function openDiscoverList() {
    alert('Discover pick clicked! This will eventually show the full list of public movies.');
}