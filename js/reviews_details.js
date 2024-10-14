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
            <img src="https://via.placeholder.com/50" alt="User Avatar" class="comment-avatar">
            <div class="comment-content">
                <p class="comment-username">Current User</p>
                <p class="comment-text">${commentText}</p>
                <p class="comment-timestamp">Just now</p>
                <div class="comment-actions">
                    <button class="reply-btn">Reply</button>
                    <span class="report-abuse"><a href="#">Report</a></span>
                </div>
            </div>
        `;

        // Agregar el nuevo comentario a la sección de comentarios
        document.querySelector('.comments-section').appendChild(newComment);

        // Limpiar el campo de texto del comentario
        document.getElementById('comment-text').value = "";
    }
});