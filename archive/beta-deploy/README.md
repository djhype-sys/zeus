# ZEUS Beta — Deploy Package

## Quick Deploy to Netlify (Recommended)

### Option A: Netlify Drop (No account, 30 seconds)
1. Go to https://app.netlify.com/drop
2. Drag this entire folder onto the page
3. Get an instant live URL like `https://zeus-abc123.netlify.app`
4. Share that URL with your pilots

### Option B: Netlify with account (Custom domain later)
1. Sign up at https://netlify.com (free)
2. Click "Add new site" → "Deploy manually"
3. Drag this folder to upload
4. Your site is live immediately

### Option C: GitHub Pages (Free, versioned)
1. Create a new GitHub repo
2. Upload these files to the repo
3. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
4. Your site is live at `https://yourname.github.io/repo-name`

### Option D: Vercel
1. Go to https://vercel.com/new
2. Import from GitHub or drag this folder
3. Deploy instantly

---

## Files in this package

| File | Purpose |
|------|---------|
| `index.html` | The entire ZEUS application (single-file) |
| `manifest.json` | PWA manifest for installability |

---

## Pilot Test Instructions

Send your pilots this message:

> Test ZEUS here: [YOUR-URL]
>
> 1. Click "Explore Demo Workspace" to see pre-loaded data
> 2. Or "Create account" to build your own workspace
> 3. Toggle between Dark Oracle and Light Command Center
> 4. Try: create a job, generate an invoice, check CFO report
> 5. Feedback welcome!

---

## Notes

- All data saves to the browser's localStorage (per device)
- Pilots should bookmark the URL and use the same device
- For production, a backend database is required
