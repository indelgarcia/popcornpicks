// Load sidebar dynamically
document.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.getElementById('left-sidebar');
    fetch('left_sidebar.html')
      .then(response => response.text())
      .then(data => {
        sidebarContainer.innerHTML = data;
      })
      .catch(error => console.error('Error loading the sidebar:', error));
  });
  