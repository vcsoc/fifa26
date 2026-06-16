# FIFA 2026 Family Scoreboard

A browser-based scoreboard for tracking FIFA 2026 matches together.


![Screenshot](./screenshot.png)

## Features

- Toronto, Ontario local kickoff times for all generated FIFA 2026 tournament matches
- Timezone selector so each user can view match times in their own timezone
- Editable home/away country names with matching flag emoji
- Final score and points entry for every match
- Local change history tracking in the browser
- Update Now button that fills untouched past matches with automatic results
- Search and filter tools for quick browsing
- Export of the change log as JSON

## Run

Open `index.html` in a browser.

For a local server with Node.js:

1. Install Node.js
   - Go to https://nodejs.org/
   - Download the **LTS** version for your operating system
   - Run the installer and keep the default options
   - After installation, open a terminal and confirm it worked:

   ```bash
   node -v
   npm -v
   ```

2. Start the app
   - Open a terminal in this project folder
   - Run:

   ```bash
   npm start
   ```

3. Open the app in your browser

   Visit `http://localhost:8000`.

### Requirements

- Node.js
- A modern web browser

No extra npm packages are required for this project.

## GitHub Pages

Live site:

- https://vcsoc.github.io/fifa26/

This project is configured to deploy to GitHub Pages using GitHub Actions.

To enable it in your GitHub repository:

1. Open the repository on GitHub
2. Go to **Settings** → **Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. Push to the `master` branch to trigger deployment

## Notes

- Data is stored in `localStorage`, so your family updates stay on the same browser/device.
- Update Now only changes matches that have not been saved manually.
- The schedule is generated in tournament order and defaults to the `America/Toronto` timezone, but each user can change that in the top bar.
