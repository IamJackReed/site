# Quick Reference Card

## 🚀 Getting Started (5 Minutes)

1. **Open the site**: Double-click `index.html` or run a local server
2. **Test disclaimer**: Visit `market-diary.html` and accept the gate
3. **View components**: Open `component-showcase.html` for design reference
4. **Read docs**: Start with `GETTING-STARTED.md`

## 📁 Key Files

| File | Purpose |
|------|---------|
| `index.html` | Home page - start here |
| `about.html` | Your bio and approach |
| `market-diary.html` | Investment content + holdings |
| `styles.css` | All styling (edit colors here) |
| `main.js` | Disclaimer gate + mobile nav |
| `component-showcase.html` | Visual reference for all components |

## 🎨 Customization Hot Spots

### Change Colors
**File**: `styles.css` (lines 10-20)
```css
:root {
    --color-bg: #fff1e5;        /* Background */
    --color-accent: #990f3d;    /* Links */
    --color-text: #33302e;      /* Text */
}
```

### Update Your Name
**Files**: All HTML files
- Search for "Jack Reed" and replace

### Edit Disclaimer Text
**Files**: 
- `main.js` (line ~75) - Gate overlay
- `market-diary.html` - Banner
- `posts/sample-market-diary-post.html` - Banner

### Update Holdings
**File**: `market-diary.html`
- Find `<tbody>` section
- Edit table rows

## ✍️ Adding a New Post

1. **Copy template**:
   - Investment: `posts/sample-market-diary-post.html`
   - Other: `posts/sample-people-teams-post.html`

2. **Rename**: `posts/my-new-post.html`

3. **Edit content**:
   - Update `<title>` tag
   - Change heading
   - Update date
   - Write content

4. **Add card to category page**:
```html
<article class="post-card">
    <span class="post-category">Category Name</span>
    <h2 class="post-title">Post Title</h2>
    <p class="post-excerpt">Short description...</p>
    <div class="post-meta">
        <time datetime="2026-01-23">23 January 2026</time>
        <a href="posts/my-new-post.html" class="post-link">Read more →</a>
    </div>
</article>
```

## 🧪 Testing Disclaimer Gate

1. **Clear localStorage**:
   - Open DevTools (F12)
   - Application → Local Storage
   - Delete `marketDisclaimerAccepted`

2. **Visit**: `market-diary.html`

3. **Verify**: Gate appears

4. **Accept**: Click "I Understand"

5. **Refresh**: Gate should NOT appear

## 📱 Responsive Breakpoints

| Device | Width | Notes |
|--------|-------|-------|
| Mobile | < 480px | Single column, burger menu |
| Tablet | 768px | Adjusted spacing |
| Desktop | 1024px+ | Full layout |

## 🎯 Common Tasks

### Remove Placeholder Posts
Delete post cards from:
- `people-and-teams.html`
- `product.html`
- `organisation-and-change.html`
- `market-diary.html`

### Change Font
**File**: `styles.css`
```css
:root {
    --font-heading: 'Georgia', serif;
    --font-body: -apple-system, sans-serif;
}
```

### Adjust Spacing
**File**: `styles.css`
```css
:root {
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
}
```

### Disable Disclaimer Gate
**File**: `main.js` (lines 150-156)
```javascript
// Comment out this section:
/*
if (isInvestmentPage()) {
    if (!hasAcceptedDisclaimer()) {
        showDisclaimerGate();
    }
}
*/
```

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Gate doesn't appear | Clear localStorage and refresh |
| Mobile menu not working | Check `main.js` is linked |
| Styles not loading | Check `styles.css` path |
| Links broken | Use relative paths |

## 📚 Documentation Files

| File | When to Read |
|------|--------------|
| `GETTING-STARTED.md` | First - basic setup |
| `README.md` | Second - full overview |
| `CUSTOMIZATION-CHECKLIST.md` | Before launch - step-by-step |
| `DISCLAIMER-GUIDE.md` | When editing disclaimers |
| `PROJECT-SUMMARY.md` | For complete understanding |

## 🚢 Deployment Checklist

- [ ] Update all placeholder content
- [ ] Test disclaimer gate
- [ ] Test on mobile
- [ ] Proofread all text
- [ ] Check all links
- [ ] Choose hosting platform
- [ ] Upload files
- [ ] Test live site

## 💡 Pro Tips

1. **Use component-showcase.html** as a reference when creating new content
2. **Test disclaimer gate** after any JavaScript changes
3. **Keep backups** before making major changes
4. **Test on real devices**, not just browser DevTools
5. **Review disclaimer text** with a solicitor if concerned about compliance

## 🎨 Design System Quick Reference

### Colors
- Background: `#fff1e5` (soft salmon)
- Accent: `#990f3d` (deep red)
- Text: `#33302e` (dark brown)

### Typography
- Headings: Georgia (serif)
- Body: System sans-serif
- Base: 17px / 1.6 line height

### Components
- `.post-card` - Blog post preview
- `.pillar-card` - Home page sections
- `.disclaimer-banner` - Investment warning
- `.holdings-table` - Investment positions

## 🔗 Useful Commands

### Local Server (Python)
```bash
python -m http.server 8000
```

### Local Server (Node.js)
```bash
npx http-server -p 8000
```

### Clear localStorage (Browser Console)
```javascript
localStorage.removeItem('marketDisclaimerAccepted');
```

### Check localStorage (Browser Console)
```javascript
localStorage.getItem('marketDisclaimerAccepted');
```

## 📞 Need More Help?

- **Setup**: Read `GETTING-STARTED.md`
- **Customization**: Read `CUSTOMIZATION-CHECKLIST.md`
- **Disclaimers**: Read `DISCLAIMER-GUIDE.md`
- **Full docs**: Read `README.md`
- **Overview**: Read `PROJECT-SUMMARY.md`

---

**Keep this file handy for quick reference while working on your site!**
