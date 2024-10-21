// admin.js

let isUserListVisible = false; // Track the state of the user list visibility

// Function to view or hide saved users
function toggleUserList() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userListDiv = document.getElementById('user-list');

    if (isUserListVisible) {
        // Hide the user list
        userListDiv.innerHTML = ''; // Clear the content
        isUserListVisible = false;
        document.getElementById('view-users-btn').textContent = 'View Users';
    } else {
        // Show the user list
        userListDiv.innerHTML = ''; // Clear any previous content

        if (users.length === 0) {
            userListDiv.innerHTML = "<p>No users found.</p>";
        } else {
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

        isUserListVisible = true;
        document.getElementById('view-users-btn').textContent = 'Hide Users';
    }
}

// Function to delete a user by username
function deleteUser(username) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.filter(user => user.username !== username);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert(`User ${username} has been deleted.`);
    toggleUserList(); // Refresh the list after deleting
}

// Event listener for the toggle button
document.getElementById('view-users-btn').addEventListener('click', toggleUserList);
