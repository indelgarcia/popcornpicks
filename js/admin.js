// admin.js



// === User List ===
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





// === Verification Requests ===
// Mocking the data - Fetch from localStorage or API
const verifiedRequests = JSON.parse(localStorage.getItem('verifiedRequests')) || [];

// Function to render verified requests
function renderVerifiedRequests() {
    const requestContainer = document.getElementById('verified-user-requests');
    requestContainer.innerHTML = ''; // Clear previous content

    if (verifiedRequests.length === 0) {
        requestContainer.innerHTML = "<p>No verification requests at the moment.</p>";
        return;
    }

    verifiedRequests.forEach((request, index) => {
        const requestItem = document.createElement('div');
        requestItem.classList.add('user-item');

        const requestInfo = document.createElement('span');
        requestInfo.textContent = `${index + 1}. ${request.name} ${request.surname}`;

        const viewButton = document.createElement('button');
        viewButton.textContent = 'View';
        viewButton.addEventListener('click', () => openModal(request));

        requestItem.appendChild(requestInfo);
        requestItem.appendChild(viewButton);
        requestContainer.appendChild(requestItem);
    });
}

// Function to open the modal with request details
function openModal(request) {
    document.getElementById('modal-name').textContent = request.name;
    document.getElementById('modal-surname').textContent = request.surname;
    document.getElementById('modal-references').textContent = request.references;
    document.getElementById('modal-cv').href = request.cv;

    document.getElementById('request-modal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('request-modal').style.display = 'none';
}

// Event listeners for modal actions
document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('accept-btn').addEventListener('click', () => handleRequest('accept'));
document.getElementById('deny-btn').addEventListener('click', () => handleRequest('deny'));

// Handle request acceptance or denial
function handleRequest(action) {
    if (action === 'accept') {
        alert(`Request Accepted`);
    }
    else {
        alert(`Request Denied`);
    }
    closeModal();
    // Additional logic for handling accept/deny
}

// Initial render
renderVerifiedRequests();