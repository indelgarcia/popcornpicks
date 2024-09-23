// Load sidebar dynamically and update based on login status
document.addEventListener('DOMContentLoaded', () => {
  const sidebarContainer = document.getElementById('left-sidebar');
  fetch('left_sidebar.html')
    .then(response => response.text())
    .then(data => {
      sidebarContainer.innerHTML = data;
      // After loading the sidebar, call the updateSidebar function
      updateSidebar(); // Ensures the sidebar reflects the user's login state
    })
    .catch(error => console.error('Error loading the sidebar:', error));
});
