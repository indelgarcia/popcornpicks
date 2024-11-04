// movie_details.js

// get modal elements
var modal = document.getElementById("image-modal");
var imageTrigger = document.getElementById("image-trigger");
var enlargedImage = document.getElementById("enlarged-image");
var closeBtn = document.getElementsByClassName("close")[0];

// when the user clicks on the movie poster, open the modal
imageTrigger.onclick = function() {
    // get the source of the movie poster and display it in the modal
    enlargedImage.src = document.getElementById("movie-image").src;
    modal.style.display = "block";
}

// when the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// tab function to switch between different tab sections
function openTab(tabClickEvent, tabName) {
    //init variables
    let tabcontent, tablinks;

    // get all elements with class "tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // hide all tab contents
    }

    // get all elements with class "tablinks" and remove the "active" class
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", ""); // remove "active" from all tabs
    }

    // show the selected tab's content
    document.getElementById(tabName).style.display = "block";

    // add the "active" class to the clicked tab
    tabClickEvent.currentTarget.className += " active";
}

// set default active tab when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tab button').click(); // Simulate a click on the first tab button
});


