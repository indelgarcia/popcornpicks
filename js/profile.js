document.addEventListener('DOMContentLoaded', () => {
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    const settingsBtn = document.querySelector('.settings-btn');
    const editProfileModal = document.getElementById('settings-modal'); // This will handle the edit profile tasks
    const generalSettingsModal = document.getElementById('general-settings-modal'); // New modal for general settings
    const closeButtons = document.querySelectorAll('.close-button');

    // Open the Edit Profile modal when the Edit Profile button is clicked
    editProfileBtn.addEventListener('click', () => {
        editProfileModal.style.display = 'block';
    });

    // Open the General Settings modal when the Settings button is clicked
    settingsBtn.addEventListener('click', () => {
        generalSettingsModal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            editProfileModal.style.display = 'none';
            generalSettingsModal.style.display = 'none';
        });
    });

    // Close the modals when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === editProfileModal) {
            editProfileModal.style.display = 'none';
        }
        if (event.target === generalSettingsModal) {
            generalSettingsModal.style.display = 'none';
        }
    });

    // Handle Edit Profile form submission
    const editProfileForm = editProfileModal.querySelector('form');
    editProfileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Retrieve form data
        const username = document.getElementById('username').value;
        const bio = document.getElementById('bio').value;
        const profilePic = document.getElementById('profile-pic').value;

        // Update profile information on the page
        document.querySelector('.user-details h2').textContent = username;
        document.querySelector('.user-details .bio').textContent = bio;
        document.querySelector('.profile-pic').src = profilePic;

        // Close the Edit Profile modal
        editProfileModal.style.display = 'none';
        
        // Optionally, display a success message
        alert('Profile updated successfully!');
    });

    // (Optional) Handle General Settings form submission, if any
    const generalSettingsForm = generalSettingsModal.querySelector('form');
    generalSettingsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle general settings form data (expand as needed)
        alert('General settings updated!');
        generalSettingsModal.style.display = 'none';
    });
});
