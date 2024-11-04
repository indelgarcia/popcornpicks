from flask import Blueprint, render_template
# from db import get_db  # Uncomment this when the database is ready to use

movies_bp = Blueprint('movies', __name__, url_prefix='/movie')

@movies_bp.route('/<int:movie_id>')
def movie_details(movie_id):
    # db = get_db()  # Uncomment and use this to fetch movie details by ID
    return render_template('movie_details.html', movie_id=movie_id)
