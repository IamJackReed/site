# Getting Started

## Viewing Your Site Locally

### Option 1: Open Directly in Browser
1. Navigate to the project folder
2. Double-click `index.html`
3. Your default browser will open the site

### Option 2: Use a Local Server (Recommended)
Using a local server prevents CORS issues and provides a better development experience.

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (if you have it installed):**
```bash
npx http-server -p 8000
```

**Using VS Code:**
- Install the "Live Server" extension
- Right-click `index.html` and select "Open with Live Server"

Then visit: `http://localhost:8000`

## Testing the Disclaimer Gate

1. Open `market-diary.html` in your browser
2. You should see a full-screen disclaimer overlay
3. Click "I Understand and Want to Continue"
4. The page content will appear
5. Refresh the page - you won't see the gate again (it's remembered)

**To reset and test again:**
1. Open browser DevTools (F12)
2. Go to Application → Local Storage
3. Find `marketDisclaimerAccepted` and delete it
4. Refresh the page

## Quick Customization Checklist

- [ ] Update your name in all navigation bars
- [ ] Replace placeholder content in `about.html`
- [ ] Update the hero tagline on `index.html`
- [ ] Add your actual holdings to `market-diary.html`
- [ ] Create your first real blog post
- [ ] Adjust colors in `styles.css` if desired
- [ ] Review and customize disclaimer text
- [ ] Add your copyright year in footers

## File Structure at a Glance

```
Your Website
│
├── index.html                    ← Start here (Home page)
├── about.html                    ← Your bio and approach
├── people-and-teams.html         ← Category page
├── product.html                  ← Category page
├── organisation-and-change.html  ← Category page
├── market-diary.html             ← Investment content (has disclaimer)
│
├── posts/                        ← All blog posts go here
│   ├── sample-market-diary-post.html
│   └── sample-people-teams-post.html
│
├── styles.css                    ← All styling
├── main.js                       ← Disclaimer gate & mobile nav
│
└── README.md                     ← Full documentation
```

## Adding Your First Real Post

1. **Copy a template:**
   - For investment posts: copy `posts/sample-market-diary-post.html`
   - For other posts: copy `posts/sample-people-teams-post.html`

2. **Rename the file:**
   - Use lowercase and hyphens: `my-first-post.html`

3. **Edit the content:**
   - Update the `<title>` tag
   - Change the heading and subtitle
   - Update the date
   - Write your content

4. **Add a card to the category page:**
   - Open the relevant category page (e.g., `people-and-teams.html`)
   - Find the `posts-grid` section
   - Add a new `post-card` (copy an existing one as a template)
   - Update the title, excerpt, date, and link

5. **Test it:**
   - Open the category page
   - Click your new post card
   - Verify everything looks correct

## Common Questions

**Q: How do I change the color scheme?**
A: Edit the CSS variables at the top of `styles.css` (lines 10-20)

**Q: Can I add images to posts?**
A: Yes! Add an `<img>` tag in your post content. Store images in an `images/` folder.

**Q: How do I remove the disclaimer gate?**
A: Comment out or remove the disclaimer gate code in `main.js` (lines 50-120)

**Q: The mobile menu isn't working?**
A: Make sure `main.js` is properly linked in your HTML files

**Q: How do I deploy this?**
A: See the "Deployment" section in README.md

## Need Help?

- Check `README.md` for detailed documentation
- Review the sample posts for structure examples
- Use browser DevTools to inspect and debug
- Test on multiple devices and browsers

---

Ready to make it yours! Start by opening `index.html` in your browser.
