# Remove AI From Google

> The internet used to be for finding things. Let's keep it that way.

![GitHub Stars](https://img.shields.io/github/stars/TurbulentGoat/removeAiFromGoogle?style=flat-square)
![GitHub Repo Size](https://img.shields.io/github/repo-size/TurbulentGoat/removeAiFromGoogle?style=flat-square)
![License](https://img.shields.io/github/license/TurbulentGoat/removeAiFromGoogle?style=flat-square)

---

Fuck AI-generated summaries, AI Mode tabs, and AI Overviews shoved into every search result, replacing real links with machine-generated guesses.

This Tampermonkey userscript strips the AI Mode tab from the search bar and appends `-ai` to every query, using Google's own search operators to filter AI-related noise out of your feed.

No drama. No data collection. Just search results, the way they used to be.

---

## Features

- **Removes the AI Mode tab** from the Google search bar automatically
- **Appends `-ai` to every query** using Google's native search operator to suppress AI-generated results
- Runs silently on `google.com`, no popups, no settings, no fuss
- Lightweight: a single userscript file, no external dependencies
- Works across **Chrome, Firefox, Edge, Safari, and Opera** via Tampermonkey

---

## Preview

> _Screenshot or demo GIF coming soon, before/after showing the AI tab removed and cleaner search results._

---

## Installation

### Step 1 - Get Tampermonkey

Install the Tampermonkey browser extension:

- [Tampermonkey Website](https://www.tampermonkey.net)
- [Chrome Web Store](https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)

> Available for Chrome, Firefox, Edge, Safari, and Opera.

### Step 2 - Install the Script

**Option A - Copy & Paste:**

1. Open the Tampermonkey dashboard
2. Click **"Create a new script"**
3. Delete the default contents
4. Paste the full contents of [`Google-AI-Remover.user.js`](https://raw.githubusercontent.com/TurbulentGoat/removeAiFromGoogle/main/Google-AI-Remover.user.js)
5. Hit **Save**

**Option B - Direct Install (if supported by your browser/Tampermonkey version):**

Click the raw script link above. Tampermonkey may prompt you to install it directly.

### Step 3 - Search Normally

That's it. Open [google.com](https://www.google.com) or search from the URL bar. The AI Mode tab will disappear, and `-ai` will be silently appended to your queries.

---

## How It Works

The script does two things:

1. **Hides the AI Mode tab**: injects a CSS rule targeting the tab's unique class (`.olrp5b`) and removes it from the DOM via a `MutationObserver` to catch dynamically loaded elements.
2. **Filters AI results**: intercepts search requests and appends ` -ai` to the query parameter, triggering Google's own operator to exclude pages containing the word "ai".

```js
// Append -ai to search queries (only runs after confirming q is non-null)
const q = url.searchParams.get('q');
url.searchParams.set('q', q.trimEnd() + ' -ai');

// Hide the AI Mode tab via CSS
div[role="listitem"]:has(.olrp5b) { display: none !important; }
```

---

## Caveats & Notes

- **Google changes its DOM regularly.** If the AI tab reappears after a Google update, the class names may have changed. Open DevTools, inspect the AI Mode button, and update `.olrp5b` and the surrounding selectors accordingly.

- **The `-ai` operator is blunt.** It will also filter results that naturally use the word "ai" (e.g. searches in other languages, proper nouns). For most English searches this is a worthwhile trade-off.

---

## Contributing

Got a fix or improvement? PRs are welcome.

1. Fork the repo
2. Make your changes in a new branch
3. Open a pull request with a clear description of what you changed and why

Please keep it focused and minimal. This script does one thing and should stay that way.

---

## License

MIT. Do whatever you want with it. See [`LICENSE`](LICENSE) for details.
