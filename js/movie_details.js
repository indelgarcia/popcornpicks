// get modal elements
var modal = document.getElementById("image-modal");
var imageTrigger = document.getElementById("image-trigger");
var enlargedImage = document.getElementById("enlarged-image");
var closeBtn = document.getElementsByClassName("close")[0];

// when the user clicks on the movie poster, open the modal
imageTrigger.onclick = function() {
    // Get the source of the movie poster and display it in the modal
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

// Tab functionality
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set default active tab
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tab button').click();
});
