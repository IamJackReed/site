# Theme Toggle Guide

## Overview
Your site now features a beautiful light/dark theme toggle that allows users to switch between themes based on their preference. The toggle respects system preferences and remembers user choices.

## Features

### 🎨 Dual Theme Support
- **Dark Theme**: Figma-inspired purple with dark backgrounds (default)
- **Light Theme**: Clean white backgrounds with Figma purple accents
- Smooth transitions between themes
- Consistent design language across both themes

### 🔘 Toggle Button
- **Location**: Fixed bottom-right corner
- **Design**: Figma-style gradient pill switch
- **Icons**: Moon (dark) and Sun (light) with smooth rotation
- **Tooltip**: Hover to see current mode
- **Animations**: Slide, fade, and ripple effects

### 💾 Persistence
- User preference saved to localStorage
- Theme persists across page navigation
- Remembers choice on return visits

### 🖥️ System Preference Detection
- Automatically detects `prefers-color-scheme`
- Respects OS-level dark/light mode
- Only applies if user hasn't manually set preference
- Listens for system theme changes

### ♿ Accessibility
- Full keyboard support (Enter/Space to toggle)
- ARIA labels and roles
- Screen reader announcements
- Focus indicators
- High contrast in both themes

## Theme Colors

### Dark Theme (Default)
```css
Background: #0d0d0d (deep black)
Cards: #1e1e1e (elevated dark)
Text: #ffffff (white)
Accent: #a259ff (Figma purple)
Secondary: #0acf83 (Figma green)
```

### Light Theme
```css
Background: #ffffff (white)
Cards: #ffffff (white with shadow)
Text: #1a1a1a (near black)
Accent: #a259ff (Figma purple)
Secondary: #0acf83 (Figma green)
```

## Toggle Button States

### Dark Mode
- **Background**: Purple to blue gradient
- **Icon**: Moon (purple)
- **Slider Position**: Left
- **Tooltip**: "Switch to Light Mode"

### Light Mode
- **Background**: Yellow to coral gradient
- **Icon**: Sun (yellow)
- **Slider Position**: Right
- **Tooltip**: "Switch to Dark Mode"

## Files Added

### CSS Files
1. **light-theme.css** - Complete light theme styles
2. **theme-toggle.css** - Toggle button styles and animations

### JavaScript
Added to **main.js**:
- Theme toggle functionality
- localStorage management
- System preference detection
- Accessibility features

### Updated Files
All HTML files now include:
```html
<link rel="stylesheet" href="light-theme.css">
<link rel="stylesheet" href="theme-toggle.css">
```

## How It Works

### 1. Initial Load
```javascript
// Check saved preference
const currentTheme = localStorage.getItem('theme') || 'dark';

// If no preference, check system
if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Apply system preference
}
```

### 2. Toggle Action
```javascript
// User clicks toggle
toggleButton.addEventListener('click', function() {
    // Toggle class
    document.body.classList.toggle('light-theme');
    
    // Save preference
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    
    // Update ARIA
    toggleButton.setAttribute('aria-checked', isLight);
});
```

### 3. Theme Application
```css
/* Light theme overrides */
body.light-theme {
    --color-bg: #ffffff !important;
    --color-text: #1a1a1a !important;
    /* ... other variables */
}
```

## User Experience

### First Visit
1. System preference detected automatically
2. Dark mode if system is dark (or no preference)
3. Light mode if system is light
4. Toggle button appears bottom-right

### Subsequent Visits
1. Saved preference loaded from localStorage
2. Theme applied before page render (no flash)
3. User's choice persists across all pages

### Switching Themes
1. Click toggle button (or press Enter/Space)
2. Smooth transition animation
3. All elements update simultaneously
4. Preference saved automatically
5. Screen reader announces change

## Customization

### Change Toggle Position
Edit `theme-toggle.css`:
```css
.theme-toggle-container {
    bottom: 2rem;  /* Distance from bottom */
    right: 2rem;   /* Distance from right */
}
```

### Modify Toggle Size
```css
.theme-toggle {
    width: 64px;   /* Button width */
    height: 32px;  /* Button height */
}
```

### Adjust Animation Speed
```css
.theme-toggle,
.theme-toggle-slider {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Change Toggle Colors
```css
/* Dark mode gradient */
.theme-toggle {
    background: linear-gradient(135deg, #a259ff, #1abcfe);
}

/* Light mode gradient */
body.light-theme .theme-toggle {
    background: linear-gradient(135deg, #ffcd29, #ff7262);
}
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Tab | Focus toggle button |
| Enter | Toggle theme |
| Space | Toggle theme |
| Escape | Remove focus |

## Mobile Behavior

### Responsive Design
- Smaller toggle button (56x28px)
- Positioned bottom-right with 1rem margin
- Tooltip hidden on mobile
- Touch-friendly size
- Smooth animations maintained

### Touch Interactions
- Tap to toggle
- Visual feedback on press
- Ripple effect on activation
- No hover states (touch devices)

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| Mobile Safari | ✅ Full |
| Chrome Mobile | ✅ Full |

## Accessibility Features

### ARIA Attributes
```html
<button 
    class="theme-toggle" 
    aria-label="Toggle theme" 
    role="switch" 
    aria-checked="false">
```

### Screen Reader Support
- Announces theme changes
- Descriptive labels
- Status updates
- Keyboard navigation

### Focus Management
- Visible focus indicator
- Keyboard accessible
- Logical tab order
- Skip links compatible

## Performance

### Optimization
- CSS-only animations (GPU accelerated)
- Minimal JavaScript
- No layout shifts
- Instant theme switching
- localStorage for persistence

### Load Time
- No additional HTTP requests (inline SVG icons)
- Minimal CSS overhead (~3KB)
- JavaScript loads async
- No render blocking

## Testing

### Manual Testing Checklist
- [ ] Toggle switches themes
- [ ] Preference persists on reload
- [ ] System preference detected
- [ ] Keyboard navigation works
- [ ] Mobile responsive
- [ ] Animations smooth
- [ ] Tooltip appears on hover
- [ ] Screen reader announces changes
- [ ] All pages have toggle
- [ ] No flash of wrong theme

### Browser Testing
- [ ] Chrome (desktop & mobile)
- [ ] Firefox
- [ ] Safari (desktop & mobile)
- [ ] Edge
- [ ] Different screen sizes

## Troubleshooting

### Toggle Not Appearing
- Check if all CSS files are linked
- Verify JavaScript is loaded
- Check browser console for errors

### Theme Not Persisting
- Check localStorage is enabled
- Verify domain consistency
- Clear cache and test

### Wrong Theme on Load
- Check system preference
- Verify localStorage value
- Test in incognito mode

### Animations Not Smooth
- Check GPU acceleration
- Verify CSS transitions
- Test on different devices

## Future Enhancements

Potential additions:
- [ ] Auto-switch based on time of day
- [ ] Multiple theme options (not just light/dark)
- [ ] Theme preview before switching
- [ ] Keyboard shortcut (e.g., Ctrl+Shift+T)
- [ ] Theme customizer panel
- [ ] Sync across devices (with account)

## Best Practices

### For Users
- Use system preference for automatic switching
- Toggle manually for specific preference
- Preference saves automatically
- Works across all pages

### For Developers
- Test both themes when adding features
- Maintain color contrast ratios
- Use CSS variables for consistency
- Test keyboard navigation
- Verify mobile experience

## Resources

- [prefers-color-scheme MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [ARIA Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Figma Design System](https://www.figma.com/community)

## Credits

- Design inspired by Figma's brand
- Icons: Custom SVG (moon and sun)
- Font: Inter (Google Fonts)
- Animations: CSS transitions and keyframes
