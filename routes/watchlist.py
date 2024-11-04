from flask import Blueprint, render_template
# from db import get_db  # Uncomment this when the database is ready to use

watchlist_bp = Blueprint('watchlist', __name__, url_prefix='/watchlist')

@watchlist_bp.route('/')
def watchlist_mainpage():
    # db = get_db()  # Uncomment and use this to fetch all watchlist items
    return render_template('watchlist_mainpage.html')

@watchlist_bp.route('/<int:watchlist_id>')
def watchlist_details(watchlist_id):
    # db = get_db()  # Uncomment and use this to fetch details for a specific watchlist item by ID
    return render_template('watchlist_details.html', watchlist_id=watchlist_id)
