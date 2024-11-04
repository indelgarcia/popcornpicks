from flask import Blueprint, render_template
# from db import get_db  # Uncomment this when the database is ready to use

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login')
def login():
    # db = get_db()  # Uncomment and use this to fetch user data for login validation
    return render_template('login.html')

@auth_bp.route('/signup')
def signup():
    # db = get_db()  # Uncomment and use this to insert new user data into the database
    return render_template('signup.html')

@auth_bp.route('/profile')
def profile():
    # db = get_db()  # Uncomment and use this to fetch user profile data
    return render_template('profile.html')
