# Jack Reed - Personal Website

A modern, minimalist personal website for a Scrum Master, Business Coach, and Private Investor.

## Structure

```
/
├── index.html                          # Home page
├── about.html                          # About page
├── people-and-teams.html              # People & Teams category
├── product.html                        # Product category
├── organisation-and-change.html       # Organisation & Change category
├── market-diary.html                  # Market Diary (investment content)
├── posts/
│   └── sample-market-diary-post.html  # Sample blog post template
├── styles.css                         # All styles
├── main.js                            # JavaScript (disclaimer gate, mobile nav)
└── README.md                          # This file
```

## Features

### 1. Information Architecture
- **Home**: Hero section with three core pillars + Market Diary
- **About**: Professional background and approach
- **Three Core Categories**: People & Teams, Product, Organisation & Change
- **Market Diary**: Investment content with holdings table and posts

### 2. Disclaimer System
- **Disclaimer Gate**: First-time visitors to investment content see a full-screen disclaimer
- **localStorage**: Remembers acceptance (stored as `marketDisclaimerAccepted`)
- **Persistent Banner**: Disclaimer banner remains visible on all investment pages
- **Non-Investment Pages**: No gate or disclaimer on other sections

### 3. Design
- **FT-Inspired**: Soft salmon/off-white background, clean typography
- **Responsive**: Works on mobile, tablet, and desktop
- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<article>`, etc.
- **Accessible**: ARIA labels, keyboard navigation support

### 4. Components
- **Post Cards**: Reusable card layout for all blog posts
- **Holdings Table**: Responsive table for current investments
- **Mobile Navigation**: Burger menu on small screens

## Customization Guide

### Adding New Posts

1. **Create a new HTML file** in the `posts/` directory
2. **Copy the structure** from `sample-market-diary-post.html`
3. **Update the content** (title, date, body)
4. **Add a post card** to the relevant category page

Example post card:
```html
<article class="post-card">
    <span class="post-category">People & Teams</span>
    <h2 class="post-title">Your Post Title</h2>
    <p class="post-excerpt">A short excerpt describing the post.</p>
    <div class="post-meta">
        <time datetime="2026-01-23">23 January 2026</time>
        <a href="posts/your-post-slug.html" class="post-link">Read more →</a>
    </div>
</article>
```

### Updating Holdings

Edit the `<tbody>` section in `market-diary.html`:

```html
<tr>
    <td>Company Name</td>
    <td>TICK</td>
    <td>Region</td>
    <td>Your thesis in a few words</td>
    <td>Core/Tactical/Opportunistic</td>
    <td>Time horizon</td>
</tr>
```

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-bg: #fff1e5;           /* Background color */
    --color-accent: #990f3d;       /* Links and accents */
    --color-text: #33302e;         /* Main text color */
    /* ... */
}
```

### Modifying Disclaimer Text

Edit the disclaimer in two places:

1. **Gate overlay**: `main.js` (line ~70)
2. **Banner**: `market-diary.html` and `posts/sample-market-diary-post.html`

### Resetting Disclaimer Acceptance

Users can reset by clearing localStorage:
```javascript
localStorage.removeItem('marketDisclaimerAccepted');
```

Or via browser DevTools → Application → Local Storage

## Technical Details

- **No build process**: Plain HTML, CSS, and JavaScript
- **No dependencies**: No frameworks or libraries
- **Browser support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile-first**: Responsive design with mobile breakpoints

## Deployment

This is a static site. You can deploy to:
- **GitHub Pages**: Push to a repo and enable Pages
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repo
- **Any static host**: Upload via FTP/SFTP

## Next Steps

1. **Add your content**: Replace placeholder text with your actual writing
2. **Customize colors**: Adjust the color palette to your preference
3. **Add images**: Consider adding profile photo or post images
4. **Create posts**: Start writing and publishing your thoughts
5. **Test disclaimer**: Clear localStorage and test the investment gate

## Notes

- The disclaimer gate uses `localStorage`, so it's browser-specific
- All investment pages should include the disclaimer banner
- The site is designed to be easily maintainable without technical knowledge
- Keep the disclaimer language clear and compliant with UK regulations

---

Built with care for clarity, simplicity, and compliance.
