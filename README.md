# PopcornPicks

PopcornPicks is a Flask-powered web application that blends movie discovery with social features. It lets users rate films, share opinions, and keep track of what they want to watch.

## Features
- **Movie ratings & reviews** – explore detailed pages for each film and see what others think.
- **User accounts** – sign up, log in, and manage your profile.
- **Watchlists** – save movies you plan to watch and revisit them later.
- **Admin tools** – placeholder pages for future site management features.

## Project structure
```
app.py               # Flask application entry point
routes/              # Blueprints for auth, reviews, watchlists, movies, and admin
static/              # CSS, JavaScript, and images
templates/           # HTML templates rendered by Flask
```

## Getting started
### Prerequisites
- Python 3.11+
- `pip` for installing Python packages
- Node.js & pnpm (optional, for working on front‑end assets)

### Installation
1. Clone the repository and enter the folder:
   ```bash
   git clone <repository-url>
   cd popcornpicks
   ```
2. Create a virtual environment and install Python dependencies:
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   pip install -r requirements.txt
   ```
3. (Optional) Install front‑end tooling:
   ```bash
   pnpm install
   ```

### Running the app
Start the development server:
```bash
python app.py
```
This will launch a local server at `http://127.0.0.1:5000/`.

## Contributing
PopcornPicks is an educational project built by movie enthusiasts. Issues and pull requests are welcome—feel free to help us improve the platform!

