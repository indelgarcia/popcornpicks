// profile.js


document.addEventListener('DOMContentLoaded', () => {
    // get the Edit Profile and Settings buttons
    const editProfileBtn = document.querySelector('.edit-profile-btn');
    const settingsBtn = document.querySelector('.settings-btn');
    const editProfileModal = document.getElementById('settings-modal');
    const generalSettingsModal = document.getElementById('general-settings-modal'); 
    const closeButtons = document.querySelectorAll('.close-button');

    // open the Edit Profile modal when the Edit Profile button is clicked
    editProfileBtn.addEventListener('click', () => {
        editProfileModal.style.display = 'block';
    });

    // open the General Settings modal when the Settings button is clicked
    settingsBtn.addEventListener('click', () => {
        generalSettingsModal.style.display = 'block';
    });

    // close the modal when the close button is clicked
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            editProfileModal.style.display = 'none';
            generalSettingsModal.style.display = 'none';
        });
    });

    // close the modals when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === editProfileModal) {
            editProfileModal.style.display = 'none';
        }
        if (event.target === generalSettingsModal) {
            generalSettingsModal.style.display = 'none';
        }
    });

    // get the form inside the Edit Profile modal
    const editProfileForm = editProfileModal.querySelector('form');
    // handle the form submission
    editProfileForm.addEventListener('submit', (event) => {
        // ensure the page is not buggy
        event.preventDefault();
        // retrieve edit profile form data
        const username = document.getElementById('username').value;
        const bio = document.getElementById('bio').value;
        const profilePic = document.getElementById('profile-pic').value;

        // update profile information on the page
        document.querySelector('.user-details h2').textContent = username;
        document.querySelector('.user-details .bio').textContent = bio;
        document.querySelector('.profile-pic').src = profilePic;

        // close the Edit Profile modal
        editProfileModal.style.display = 'none';
        
        // display a success message
        alert('Profile updated successfully!');
    });

    // handle general settings form submission
    const generalSettingsForm = generalSettingsModal.querySelector('form');
    generalSettingsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('General settings updated!');
        generalSettingsModal.style.display = 'none';
    });
});
