✦ Remove "AI" From Google  
The internet used to be for finding things. Let's keep it that way.

Google has been quietly injecting AI-generated summaries, AI Mode tabs, and AI Overviews into every search result — replacing real links with machine-generated guesses. This Tampermonkey userscript pushes back. It strips the AI Mode tab from the search bar and appends -ai to every query, telling Google's own search operators to filter AI-related results out of your feed.
No drama. No data collection. Just search results, the way they used to be.

✦ What It Does  
Removes AI Mode tab:  
The "AI Mode" button in Google's search filter bar is surgically removed from the DOM — no flash, no flicker.  
Appends -ai to searches:  
Every search query gets  -ai added automatically, filtering AI-heavy results at the query level

✦ Installation  
Step 1 — Get Tampermonkey  
You'll need the Tampermonkey browser extension to run userscripts.  
[Tampermonkey Website](https://www.tampermonkey.net)  
[Chrome Web Store](https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
Available for Chrome, Firefox, Edge, Safari, and Opera  

Step 2 — Install the Script  
[The Tampermonkey script](https://github.com/TurbulentGoat/removeAiFromGoogle/blob/0c67018307a1608799ef83c7d89a0becc79870cc/Google-AI-Remover.user.js)  
Open the Tampermonkey dashboard  
Click "Create a new script"  
Delete the default contents
Paste the full script (see below or grab the raw file from this repo)
Hit Save (Ctrl+S / Cmd+S)

Step 3 — Search Normally  
That's it. Open google.com, search for anything, and watch the AI tab disappear. Your query will automatically have -ai appended.

✦ How It Works (Technical)  
Google's AI Mode tab has a unique class — .olrp5b — that doesn't appear on any other tab in the search bar. The script uses this as its anchor point:

At document-start, a CSS rule using :has(.olrp5b) hides the parent listitem before it ever paints on screen
After DOM load, the element is physically removed via el.closest('div[role="listitem"]') — not just hidden, gone
A MutationObserver watches document.body for any re-injected elements (Google does this frequently with its JavaScript-driven UI) and removes them instantly

The -ai suffix uses Google's own search operator syntax to exclude results containing the word "ai" — same as manually typing it yourself, just automatic.

✦ Caveats & Notes

Google changes its DOM regularly. If the AI tab reappears after a Google update, the class names may have changed. Open DevTools, inspect the AI Mode button, and update .olrp5b and the surrounding selectors accordingly.  

The -ai operator is blunt! It will also filter results that happen to use the word "ai" naturally (e.g. searches in other languages, proper nouns).  
For most English searches this is a worthwhile trade-off.
