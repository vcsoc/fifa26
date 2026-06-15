# FIFA 2026 Family Scoreboard

A browser-based scoreboard for tracking FIFA 2026 matches together.


![Screenshot](./screenshot.png)

## Features

- Toronto, Ontario local kickoff times for all generated FIFA 2026 tournament matches
- Editable home/away country names with matching flag emoji
- Final score and points entry for every match
- Local change history tracking in the browser
- Auto Update button that fills untouched past matches with automatic results
- Search and filter tools for quick browsing
- Export of the change log as JSON

## Run

Open `index.html` in a browser.

For a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

- Data is stored in `localStorage`, so your family updates stay on the same browser/device.
- Auto Update only changes matches that have not been saved manually.
- The schedule is generated in tournament order and shown in the `America/Toronto` timezone.
