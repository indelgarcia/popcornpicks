const movieInput = document.getElementById("movieInput");
const addButton = document.getElementById("addButton");
const watchlist = document.getElementById("watchlist");

// Add movie to the watchlist
addButton.addEventListener("click", function () {
  const movieName = movieInput.value.trim(); // Trim to avoid whitespace issues

  if (movieName !== "" && movieName.toLowerCase() !== "lalaland") {
    const li = document.createElement("li");
    li.textContent = movieName;

    // Create a delete button for each movie
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.addEventListener("click", function () {
      watchlist.removeChild(li);
    });

    li.appendChild(deleteButton);
    watchlist.appendChild(li);

  } else if (movieName.toLowerCase() === "lalaland") {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://i5.walmartimages.com/seo/La-La-Land-Movie-Laminated-Poster-Poster-Print-24-x-36_20f02811-01b4-4aea-9bb2-a79942bd2642_1.856c035d66f8fd216f6d933259bc3dfb.jpeg"
    );
    img.setAttribute("width", "200");
    img.setAttribute("height", "300");
    img.setAttribute("alt", "LaLaLand");

    li.appendChild(img); // Correctly append the image to the li element

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.addEventListener("click", function () {
      watchlist.removeChild(li);
    });

    li.appendChild(deleteButton);
    watchlist.appendChild(li);

    // Clear the input field after adding
    movieInput.value = "";
  } else {
    alert("Please enter a movie name.");
  }
});
