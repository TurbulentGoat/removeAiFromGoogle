// ==UserScript==
// @name         Google Search -AI Appender
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Appends -ai to Google searches and hides the AI Mode button
// @author       BlouTooth
// @match        https://www.google.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function () {
    'use strict';

    // ─── 1. AUTO-APPEND -ai TO SEARCHES ──────────────────────────────────────
    function shouldRedirect() {
        const path = window.location.pathname;
        const q = new URLSearchParams(window.location.search).get('q');
        if (path !== '/search') return false;
        if (!q || q.trimEnd().endsWith('-ai')) return false;
        return true;
    }
    if (shouldRedirect()) {
        const url = new URL(window.location.href);
        url.searchParams.set('q', url.searchParams.get('q').trimEnd() + ' -ai');
        window.location.replace(url.toString());
    }

    // ─── 2. HIDE THE AI MODE BUTTON ──────────────────────────────────────────
    // Target the listitem whose direct child contains .olrp5b
    // This is unique to AI Mode — no other tab has .olrp5b
    const style = document.createElement('style');
    style.textContent = `
        div[role="listitem"]:has(.olrp5b) { display: none !important;}
    `;
    document.documentElement.appendChild(style);

    function removeAIModeButton() {
        // .olrp5b is exclusive to the AI Mode tab — walk up to the listitem
        document.querySelectorAll('.olrp5b').forEach(el => {
            const listitem = el.closest('div[role="listitem"]');
            if (listitem) listitem.remove();
        });
    }

    if (document.body) removeAIModeButton();

    document.addEventListener('DOMContentLoaded', () => {
        removeAIModeButton();
        new MutationObserver(removeAIModeButton).observe(document.body, {
            childList: true,
            subtree: true
        });
    });
})();
