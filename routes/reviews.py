from flask import Blueprint, render_template
# from db import get_db  # Uncomment this when the database is ready to use

reviews_bp = Blueprint('reviews', __name__, url_prefix='/reviews')

@reviews_bp.route('/')
def reviews_mainpage():
    # db = get_db()  # Uncomment and use this to fetch a list of reviews
    return render_template('reviews_mainpage.html')

@reviews_bp.route('/<int:review_id>')
def reviews_details(review_id):
    # db = get_db()  # Uncomment and use this to fetch review details by ID
    return render_template('reviews_details.html', review_id=review_id)
