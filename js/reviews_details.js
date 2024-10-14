JS:

// JavaScript para manejar el envío del formulario de comentarios
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    // Obtener el texto del comentario
    var commentText = document.getElementById('comment-text').value;

    if (commentText.trim() !== "") {
        // Crear el nuevo comentario en la página
        var newComment = document.createElement('div');
        newComment.classList.add('comment');

        newComment.innerHTML = `
            <img src="images/blank_profile_picture.png" alt="User Avatar" class="comment-avatar">
            <div class="comment-content">
                <p class="comment-username">Current User</p>
                <p class="comment-text">${commentText}</p>
                <p class="comment-timestamp">Just now</p>
            </div>`;

        // Agregar el nuevo comentario a la sección de comentarios
        document.querySelector('.comments-section').appendChild(newComment);

        // Limpiar el campo de texto del comentario
        document.getElementById('comment-text').value = "";
    }
});