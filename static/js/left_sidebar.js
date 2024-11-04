// left_sidebar.js


document.getElementById('left-sidebar').innerHTML = `
<div class="sidebar-container" id="sidebar-container">
    <aside class="sidebar" id="sidebar">
        <div class="logo">
            <a href="index.html">
                <img src="static/images/popcorn_logo.png" alt="Logo" class="logo-img">
            </a>
        </div>
        <nav class="menu">
            <ul>
                <li id="login-btn"><a href="login.html"><span class="icon">🔑</span><span class="text">Login</span></a></li>
                <li id="signup-btn"><a href="signup.html"><span class="icon">📝</span><span class="text">Signup</span></a></li>
                <li id="profile-btn" class="hidden"><a href="profile.html"><span class="icon">👤</span><span class="text">Profile</span></a></li>
                <li id="reviews-btn" class="hidden"><a href="reviews_mainpage.html"><span class="icon">⭐️</span><span class="text">Popcorn Reviews</span></a></li>
                <li id="watchlist-btn" class="hidden"><a href="watchlist_mainpage.html"><span class="icon">📺</span><span class="text">Watchlist</span></a></li>
                <li id="postulate-btn" class="hidden"><a href="postulate.html"><span class="icon">📄</span><span class="text">Get Verified</span></a></li>
                <li id="logout-btn" class="hidden"><a href="#" onclick="logout()"><span class="icon">🚪</span><span class="text">Logout</span></a></li>
            </ul>
        </nav>
    </aside>
</div>`;

// check login status to update the sidebar based on whether the user is logged in
checkLoginStatus();
