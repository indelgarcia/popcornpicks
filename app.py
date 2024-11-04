from flask import Flask, render_template
# from db import init_db  # Uncomment this when you add the database connection setup

app = Flask(__name__)

# Initialize database connection
# init_db(app)  # Uncomment this to initialize the database when ready

# Register blueprints for modular routing
from routes.auth import auth_bp
from routes.reviews import reviews_bp
from routes.watchlist import watchlist_bp
from routes.movies import movies_bp
from routes.admin import admin_bp  # Import the admin blueprint

app.register_blueprint(auth_bp)
app.register_blueprint(reviews_bp)
app.register_blueprint(watchlist_bp)
app.register_blueprint(movies_bp)
app.register_blueprint(admin_bp)  # Register the admin blueprint

# Homepage route
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
