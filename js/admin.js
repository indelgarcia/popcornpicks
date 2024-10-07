// admin.js

// function to view all saved users
function viewSavedUsers() {
    // get list of users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    //get the div where the user list will be displayed
    const userListDiv = document.getElementById('user-list');
    userListDiv.innerHTML = ''; // clear old content in div before populating

    // display a message if no users are found
    if (users.length === 0) {
        userListDiv.innerHTML = "<p>No users found.</p>";
        return;
    }

    // Display the list of users with delete buttons
    users.forEach((user, index) => {
        //create html to read: <div class="user-item"></div>
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');
        
        // create html to read: <span>index+1. Username: user1, Email: email1, Password: pass1</span>
        const userInfo = document.createElement('span'); 
        userInfo.textContent = `${index + 1}. Username: ${user.username}, Email: ${user.email}, Password: ${user.password}`;

        // create html to read: <button class="delete-btn">Delete</button>
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => deleteUser(user.username));

        // add the html elements as a child of the userItem div
        userItem.appendChild(userInfo);
        userItem.appendChild(deleteButton);
        userListDiv.appendChild(userItem);
    });
}

// function to delete a user by username
function deleteUser(username) {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // use .filter to create a new array of users excluding the user to be deleted (along with their attributes)
    const updatedUsers = users.filter(user => user.username !== username);

    // save the updated array of users to localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // view the updated list of users
    viewSavedUsers();

    alert(`User ${username} has been deleted.`);
}

// event listener to get the id view-users-btn and add a click event listener, 
// which calls the viewSavedUsers function
document.getElementById('view-users-btn').addEventListener('click', viewSavedUsers);
