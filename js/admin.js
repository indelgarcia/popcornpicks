// admin.js

// Function to view all saved users
function viewSavedUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userListDiv = document.getElementById('user-list');
    userListDiv.innerHTML = ''; // Clear the div before populating

    if (users.length === 0) {
        userListDiv.innerHTML = "<p>No users found.</p>";
        return;
    }

    // Display the list of users with delete buttons
    users.forEach((user, index) => {
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');
        
        const userInfo = document.createElement('span');
        userInfo.textContent = `${index + 1}. Username: ${user.username}, Email: ${user.email}, Password: ${user.password}`;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteUser(user.username));

        userItem.appendChild(userInfo);
        userItem.appendChild(deleteButton);
        userListDiv.appendChild(userItem);
    });
}

// Function to delete a user by username
function deleteUser(username) {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Filter out the user to delete
    const updatedUsers = users.filter(user => user.username !== username);

    // Save the updated list of users to localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Update the user list after deletion
    viewSavedUsers();

    alert(`User ${username} has been deleted.`);
}

// Event listener to view users when the button is clicked
document.getElementById('view-users-btn').addEventListener('click', viewSavedUsers);
