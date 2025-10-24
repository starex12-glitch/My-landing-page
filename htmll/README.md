Landing Page

This is a simple static landing page built with HTML, CSS and JavaScript.

Quick local test

Open `index.html` in your browser or run a local server (if you have Python):

PowerShell example:

Start-Process .\index.html

Or run a simple HTTP server (Python 3):

cd 'c:\Users\HomePC\Videos\Captures\files\htmll'
python -m http.server 8000
# then open http://localhost:8000

Prepare and push to GitHub (PowerShell)

1. Create a repository on GitHub (via web) or use the GitHub CLI `gh repo create`.
2. From this project folder run:

PowerShell commands:

cd 'c:\Users\HomePC\Videos\Captures\files\htmll'
git init
git add .
git commit -m "Initial landing page"
# replace <username> and <repo> with your values
git remote add origin https://github.com/<username>/<repo>.git
git branch -M main
git push -u origin main

If you have the GitHub CLI (`gh`) you can create a repo and push in one flow:

cd 'c:\Users\HomePC\Videos\Captures\files\htmll'
gh repo create <username>/<repo> --public --source=. --remote=origin --push

Enable GitHub Pages

1. On GitHub go to your repo → Settings → Pages.
2. Under "Source" choose `main` branch and `/ (root)`.
3. Save — your site will be available at `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` for a repo named `<username>.github.io`).

Notes

- The contact form in the template is a front-end simulation. Use Netlify/Formspree or add a backend to collect submissions.
- Replace images in the project folder with your own if desired.

If you want, I can create the initial git commit and push for you — I can't create remote repos on GitHub without your credentials, but I can prepare everything locally and show the exact commands to run.
