✦ Remove "AI" From Google  
The internet used to be for finding things. Let's keep it that way.

Fuck AI-generated summaries, AI Mode tabs, and AI Overviews into every search result, replacing real links with machine-generated guesses.  

This Tampermonkey userscript strips the AI Mode tab from the search bar and appends -ai to every query, telling Google's own search operators to filter AI-related results out of your feed.
No drama. No data collection. Just search results, the way they used to be.

✦ Installation  
Step 1 — Get Tampermonkey:  
[Tampermonkey Website](https://www.tampermonkey.net) OR [Chrome Web Store](https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
(Available for Chrome, Firefox, Edge, Safari, and Opera)  

Step 2 — Install the Script  
[The Tampermonkey script](https://github.com/TurbulentGoat/removeAiFromGoogle/blob/0c67018307a1608799ef83c7d89a0becc79870cc/Google-AI-Remover.user.js)   
Open the Tampermonkey dashboard, click "Create a new script", delete the default contents, paste the full script (see below or grab the raw file from this repo) & hit save!

Step 3 — Search Normally  
That's it. Open google.com, or simply search from the url bar, search for anything, and watch the AI tab disappear. Your query will automatically have -ai appended.

✦ Caveats & Notes

Google changes its DOM regularly. If the AI tab reappears after a Google update, the class names may have changed. Open DevTools, inspect the AI Mode button, and update .olrp5b and the surrounding selectors accordingly.  

The -ai operator is blunt! It will also filter results that happen to use the word "ai" naturally (e.g. searches in other languages, proper nouns). For most English searches this is a worthwhile trade-off.
