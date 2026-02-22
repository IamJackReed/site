# Customization Checklist

Use this checklist to personalize your website and make it ready for launch.

## Phase 1: Essential Content (Do This First)

### Home Page (`index.html`)
- [ ] Update hero title (currently "Jack Reed")
- [ ] Update hero subtitle (currently "Scrum Master, Business Coach, Private Investor")
- [ ] Update hero tagline about decisions, value, and markets
- [ ] Review and edit the three pillar descriptions
- [ ] Update the "About Me" preview section
- [ ] Update footer copyright year

### About Page (`about.html`)
- [ ] Replace "Who I Am" section with your actual background
- [ ] Update "What I Care About" with your specific interests
- [ ] Customize "How I Work" section with your approach
- [ ] Update "Investing" section if needed
- [ ] Ensure all text reflects your voice and experience

### Market Diary (`market-diary.html`)
- [ ] Update page intro to match your style
- [ ] Replace placeholder holdings with your actual positions (or remove rows)
- [ ] Update holdings table columns if needed
- [ ] Review disclaimer text for UK compliance
- [ ] Remove placeholder post cards or replace with real posts

## Phase 2: Category Pages

### People & Teams (`people-and-teams.html`)
- [ ] Update intro paragraph to reflect your perspective
- [ ] Remove placeholder post cards
- [ ] Add your first real post (or keep placeholders for now)

### Product (`product.html`)
- [ ] Update intro paragraph
- [ ] Remove placeholder post cards
- [ ] Add your first real post (or keep placeholders for now)

### Organisation & Change (`organisation-and-change.html`)
- [ ] Update intro paragraph
- [ ] Remove placeholder post cards
- [ ] Add your first real post (or keep placeholders for now)

## Phase 3: Legal & Compliance

### Disclaimer Review
- [ ] Review disclaimer text in `main.js` (the gate overlay)
- [ ] Review disclaimer banner in `market-diary.html`
- [ ] Review disclaimer in `posts/sample-market-diary-post.html`
- [ ] Ensure all investment pages have the disclaimer banner
- [ ] Consider having a solicitor review the disclaimer language
- [ ] Verify compliance with FCA regulations (if applicable)

### Privacy & Legal
- [ ] Consider adding a Privacy Policy page (if collecting any data)
- [ ] Consider adding a Terms of Use page
- [ ] Update copyright notices with correct year
- [ ] Add any required legal disclaimers for your jurisdiction

## Phase 4: Design Customization (Optional)

### Colors (`styles.css`)
- [ ] Review the color palette (lines 10-20 in styles.css)
- [ ] Adjust `--color-bg` if you want a different background
- [ ] Adjust `--color-accent` for links and highlights
- [ ] Test color contrast for accessibility

### Typography
- [ ] Review heading font (currently Georgia)
- [ ] Review body font (currently system sans-serif)
- [ ] Consider loading custom fonts if desired
- [ ] Adjust font sizes if needed

### Spacing & Layout
- [ ] Test on mobile, tablet, and desktop
- [ ] Adjust spacing variables if needed
- [ ] Review max-width settings for content

## Phase 5: Content Creation

### Write Your First Posts
- [ ] Create at least one post for People & Teams
- [ ] Create at least one post for Product
- [ ] Create at least one post for Organisation & Change
- [ ] Create at least one Market Diary post (if applicable)

### Post Checklist (for each post)
- [ ] Copy appropriate template file
- [ ] Rename file with descriptive slug
- [ ] Update `<title>` tag
- [ ] Update heading and subtitle
- [ ] Update date in `<time>` tag
- [ ] Write content with clear sections
- [ ] Add disclaimer banner (investment posts only)
- [ ] Update back link to correct category
- [ ] Add post card to category page
- [ ] Test all links

## Phase 6: Testing

### Functionality Testing
- [ ] Test disclaimer gate on Market Diary page
- [ ] Click "I Understand" and verify it remembers
- [ ] Clear localStorage and test gate again
- [ ] Test mobile navigation toggle
- [ ] Test all internal links
- [ ] Test all navigation menu items
- [ ] Verify smooth scrolling works

### Cross-Browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Test on mobile Safari (iOS)
- [ ] Test on mobile Chrome (Android)

### Responsive Testing
- [ ] Test on phone (< 480px)
- [ ] Test on tablet (768px)
- [ ] Test on laptop (1024px)
- [ ] Test on desktop (1440px+)
- [ ] Verify tables scroll on mobile
- [ ] Verify navigation collapses properly

### Accessibility Testing
- [ ] Test keyboard navigation (Tab key)
- [ ] Test with screen reader (if possible)
- [ ] Verify all images have alt text (when you add them)
- [ ] Check color contrast ratios
- [ ] Verify ARIA labels are present

## Phase 7: Pre-Launch

### Content Review
- [ ] Proofread all text for typos
- [ ] Check all dates are correct
- [ ] Verify all links work
- [ ] Remove any placeholder content you don't want
- [ ] Ensure consistent tone and voice

### SEO Basics
- [ ] Update all `<title>` tags to be descriptive
- [ ] Consider adding meta descriptions
- [ ] Ensure heading hierarchy is logical (H1 → H2 → H3)
- [ ] Add alt text to images (when you add them)

### Performance
- [ ] Optimize any images you add (compress, resize)
- [ ] Test page load speed
- [ ] Verify no console errors in browser DevTools

## Phase 8: Deployment

### Pre-Deployment
- [ ] Choose a hosting platform (GitHub Pages, Netlify, Vercel, etc.)
- [ ] Register a domain name (optional)
- [ ] Set up SSL certificate (usually automatic with modern hosts)

### Deployment
- [ ] Upload files to hosting platform
- [ ] Test live site thoroughly
- [ ] Verify disclaimer gate works on live site
- [ ] Check all links on live site
- [ ] Test on multiple devices

### Post-Deployment
- [ ] Share with a few trusted people for feedback
- [ ] Monitor for any issues
- [ ] Set up analytics (optional, but consider privacy implications)

## Ongoing Maintenance

### Regular Tasks
- [ ] Write and publish new posts regularly
- [ ] Update holdings table as positions change
- [ ] Review and update disclaimer as regulations change
- [ ] Keep copyright year current
- [ ] Respond to any feedback or issues

### Quarterly Review
- [ ] Review all content for accuracy
- [ ] Check all links still work
- [ ] Update any outdated information
- [ ] Consider design improvements
- [ ] Review analytics (if implemented)

---

## Quick Start Path (Minimum Viable Site)

If you want to launch quickly, focus on these essentials:

1. ✅ Update home page with your name and tagline
2. ✅ Write your About page
3. ✅ Update Market Diary holdings (or remove the table)
4. ✅ Review and approve disclaimer text
5. ✅ Write at least one post in each category
6. ✅ Test disclaimer gate
7. ✅ Test on mobile
8. ✅ Deploy

Everything else can be refined over time!

---

**Remember:** This is your site. Customize it to reflect your voice, your work, and your thinking. The structure is here to support you, not constrain you.
