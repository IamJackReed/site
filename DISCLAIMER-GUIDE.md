# Disclaimer System Guide

This guide explains how the investment disclaimer system works and how to customize it.

## Overview

The disclaimer system has two components:

1. **Disclaimer Gate**: A full-screen overlay that appears the first time someone visits investment content
2. **Disclaimer Banner**: A persistent banner that remains visible on all investment pages

## How It Works

### First Visit to Investment Content
1. User clicks on Market Diary or any investment post
2. JavaScript detects it's an investment page
3. Full-screen disclaimer gate appears
4. User must click "I Understand and Want to Continue" or "Take Me Back"
5. If they accept, `localStorage` remembers their choice
6. Content becomes visible with disclaimer banner at top

### Subsequent Visits
1. JavaScript checks `localStorage` for acceptance
2. If found, gate doesn't appear
3. Disclaimer banner still shows at top of page
4. User can browse investment content freely

## Technical Implementation

### 1. Page Detection (`main.js`)

```javascript
function isInvestmentPage() {
    const path = window.location.pathname;
    const page = document.querySelector('.market-diary-page');
    const isMarketDiaryPath = path.includes('market-diary') || path.includes('market_diary');
    
    return isMarketDiaryPath || page !== null;
}
```

**How to mark a page as investment content:**
- Add `market-diary` to the filename, OR
- Add class `market-diary-page` to the `<main>` element

### 2. localStorage Key

The system uses: `marketDisclaimerAccepted`

**To check acceptance:**
```javascript
localStorage.getItem('marketDisclaimerAccepted') === 'true'
```

**To reset (for testing):**
```javascript
localStorage.removeItem('marketDisclaimerAccepted');
```

### 3. Disclaimer Gate HTML

The gate is created dynamically by JavaScript. See `main.js` lines 70-110.

### 4. Disclaimer Banner HTML

The banner is static HTML on each investment page:

```html
<div class="disclaimer-banner">
    <h3>⚠️ Disclaimer</h3>
    <p><strong>Nothing on this site is financial advice.</strong> These are my personal notes...</p>
</div>
```

## Customization

### Changing Disclaimer Text

**Gate Text (main.js):**
```javascript
gate.innerHTML = `
    <div class="disclaimer-gate-content">
        <h2 id="disclaimer-title">⚠️ Important Disclaimer</h2>
        <p><strong>Your custom text here</strong></p>
        <!-- ... -->
    </div>
`;
```

**Banner Text (HTML files):**
Edit the `<div class="disclaimer-banner">` section in:
- `market-diary.html`
- `posts/sample-market-diary-post.html`
- Any other investment posts

### Changing Button Text

In `main.js`, find:
```javascript
<button class="btn-primary" id="accept-disclaimer">I Understand and Want to Continue</button>
<button class="btn-outline" id="decline-disclaimer">Take Me Back</button>
```

### Changing Colors

In `styles.css`:
```css
.disclaimer-banner {
    background-color: var(--color-disclaimer);
    border: 2px solid var(--color-disclaimer-border);
}
```

Adjust the CSS variables:
```css
:root {
    --color-disclaimer: #fff4e6;
    --color-disclaimer-border: #d4a574;
}
```

### Changing Behavior

**Make gate appear every time (no localStorage):**
```javascript
// In main.js, comment out this line:
// if (!hasAcceptedDisclaimer()) {
// And replace with:
showDisclaimerGate();
```

**Remove gate entirely (keep banner only):**
```javascript
// In main.js, comment out lines 150-156:
/*
if (isInvestmentPage()) {
    if (!hasAcceptedDisclaimer()) {
        showDisclaimerGate();
    }
}
*/
```

**Change where "Take Me Back" goes:**
```javascript
// In main.js, find:
document.getElementById('decline-disclaimer').addEventListener('click', function() {
    window.location.href = '/';  // Change this URL
});
```

## Adding Investment Content

### New Investment Post

1. **Copy template:**
   ```
   posts/sample-market-diary-post.html
   ```

2. **Ensure it has the disclaimer banner:**
   ```html
   <div class="disclaimer-banner">
       <h3>⚠️ Disclaimer</h3>
       <p>...</p>
   </div>
   ```

3. **Name the file with "market-diary" OR add class:**
   - Filename: `posts/market-diary-my-post.html`, OR
   - Add to `<main>`: `<main class="content-page market-diary-page">`

4. **Test the gate:**
   - Clear localStorage
   - Visit the new post
   - Verify gate appears

### New Investment Category Page

If you add a new investment section (e.g., "Portfolio Updates"):

1. **Add the disclaimer banner at the top**
2. **Add class to main element:**
   ```html
   <main class="content-page market-diary-page">
   ```
3. **Test the gate**

## Testing Checklist

- [ ] Clear localStorage
- [ ] Visit Market Diary page
- [ ] Verify gate appears
- [ ] Click "Take Me Back" - should go to home
- [ ] Visit Market Diary again
- [ ] Click "I Understand" - should show content
- [ ] Verify banner is visible at top
- [ ] Refresh page - gate should NOT appear
- [ ] Visit an investment post - gate should NOT appear
- [ ] Clear localStorage again
- [ ] Visit investment post directly - gate SHOULD appear
- [ ] Test on mobile device
- [ ] Test with keyboard (Tab, Enter, Escape)

## Browser Compatibility

The disclaimer system uses:
- `localStorage` (supported in all modern browsers)
- ES6 JavaScript (supported in all modern browsers)
- CSS Grid and Flexbox (supported in all modern browsers)

**Fallback for old browsers:**
If localStorage isn't available, the gate will appear every time (which is safer from a compliance perspective).

## Legal Considerations

### UK Compliance (FCA)

The current disclaimer text is designed for UK compliance, but you should:

1. **Review with a solicitor** if you're concerned about FCA regulations
2. **Consider your specific situation** (are you a regulated adviser? Do you manage money for others?)
3. **Update regularly** as regulations change

### Key Points in Current Disclaimer

- ✅ States clearly "not financial advice"
- ✅ Describes content as "personal notes and opinions"
- ✅ States "educational and informational purposes only"
- ✅ Explicitly says "does not constitute investment advice"
- ✅ Recommends users "do your own research"
- ✅ Suggests speaking to "regulated financial adviser"

### What the Disclaimer Does NOT Do

- ❌ Provide complete legal protection
- ❌ Replace proper legal advice
- ❌ Guarantee FCA compliance
- ❌ Protect against all liability

**Always consult a qualified solicitor for legal advice.**

## Troubleshooting

### Gate doesn't appear
- Check if localStorage already has `marketDisclaimerAccepted` set
- Verify page is detected as investment content
- Check browser console for JavaScript errors
- Ensure `main.js` is properly linked

### Gate appears every time
- Check if localStorage is working (try setting a test value)
- Verify `acceptDisclaimer()` function is being called
- Check for JavaScript errors in console

### Banner doesn't show
- Verify HTML includes `<div class="disclaimer-banner">`
- Check if CSS is properly loaded
- Inspect element to see if it's hidden by other styles

### Mobile issues
- Test on actual device, not just browser DevTools
- Check if JavaScript is enabled
- Verify viewport meta tag is present

## Future Enhancements

Consider adding:

1. **Cookie consent integration** (if you add analytics)
2. **Version tracking** (show gate again if disclaimer text changes)
3. **Analytics tracking** (how many people accept vs decline)
4. **A/B testing** different disclaimer wording
5. **Multi-language support** for international visitors

## Summary

The disclaimer system is designed to:
- ✅ Be legally protective
- ✅ Be user-friendly (remember acceptance)
- ✅ Be visible (persistent banner)
- ✅ Be customizable
- ✅ Work on all devices

Remember: The disclaimer is a tool, not a substitute for proper legal advice. Always consult with a qualified solicitor about your specific situation.
