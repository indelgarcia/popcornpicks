from flask import Blueprint, render_template
# from db import get_db  # Uncomment this when the database is ready to use

admin_bp = Blueprint('admin', __name__, url_prefix='/admin')

@admin_bp.route('/')
def admin_dashboard():
    # db = get_db()  # Uncomment and use this to fetch any necessary data for the admin dashboard
    return render_template('admin.html')
