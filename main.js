/**
 * Main JavaScript for Jack Reed's Personal Website
 * Handles disclaimer gate for investment content and mobile navigation
 */

// ===================================
// Mobile Navigation Toggle
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    }
});

// ===================================
// Disclaimer Gate for Investment Content
// ===================================

/**
 * Check if the current page is investment-related
 * @returns {boolean}
 */
function isInvestmentPage() {
    const path = window.location.pathname;
    const page = document.querySelector('.market-diary-page');
    const isMarketDiaryPath = path.includes('market-diary') || path.includes('market_diary');
    
    return isMarketDiaryPath || page !== null;
}

/**
 * Check if user has accepted the disclaimer
 * @returns {boolean}
 */
function hasAcceptedDisclaimer() {
    return localStorage.getItem('marketDisclaimerAccepted') === 'true';
}

/**
 * Set disclaimer acceptance in localStorage
 */
function acceptDisclaimer() {
    localStorage.setItem('marketDisclaimerAccepted', 'true');
}

/**
 * Create and show the disclaimer gate overlay
 */
function showDisclaimerGate() {
    // Create overlay
    const gate = document.createElement('div');
    gate.className = 'disclaimer-gate';
    gate.setAttribute('role', 'dialog');
    gate.setAttribute('aria-labelledby', 'disclaimer-title');
    gate.setAttribute('aria-modal', 'true');
    
    // Create content
    gate.innerHTML = `
        <div class="disclaimer-gate-content">
            <h2 id="disclaimer-title">⚠️ Important Disclaimer</h2>
            <p><strong>Nothing on this site is financial advice.</strong></p>
            <p>The content you are about to view contains my personal notes and opinions about markets and investing. This information is shared for educational and informational purposes only.</p>
            <p>It does not constitute investment advice, a recommendation, or an invitation to buy or sell any security. I am not a regulated financial adviser.</p>
            <p>Please do your own research and, if needed, speak to a regulated financial adviser before making any investment decisions.</p>
            <p>By continuing, you acknowledge that you understand this disclaimer.</p>
            <div class="disclaimer-gate-buttons">
                <button class="btn-primary" id="accept-disclaimer">I Understand and Want to Continue</button>
                <button class="btn-outline" id="decline-disclaimer">Take Me Back</button>
            </div>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(gate);
    
    // Prevent scrolling when gate is open
    document.body.style.overflow = 'hidden';
    
    // Handle accept button
    document.getElementById('accept-disclaimer').addEventListener('click', function() {
        acceptDisclaimer();
        removeDisclaimerGate();
    });
    
    // Handle decline button
    document.getElementById('decline-disclaimer').addEventListener('click', function() {
        // Navigate back to home page
        window.location.href = '/';
    });
    
    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.location.href = '/';
        }
    });
}

/**
 * Remove the disclaimer gate overlay
 */
function removeDisclaimerGate() {
    const gate = document.querySelector('.disclaimer-gate');
    if (gate) {
        gate.remove();
        document.body.style.overflow = '';
    }
}

/**
 * Initialize disclaimer gate on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    // Only show gate on investment pages
    if (isInvestmentPage()) {
        // Check if user has already accepted
        if (!hasAcceptedDisclaimer()) {
            showDisclaimerGate();
        }
    }
});

// ===================================
// Utility: Smooth Scroll for Anchor Links
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});


// ===================================
// Theme Toggle (Light/Dark Mode)
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or default to dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply theme on load
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    
    // Create theme toggle button
    createThemeToggle();
    
    function createThemeToggle() {
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'theme-toggle-container';
        
        toggleContainer.innerHTML = `
            <div class="theme-toggle-tooltip">Switch to ${currentTheme === 'dark' ? 'Light' : 'Dark'} Mode</div>
            <button class="theme-toggle" aria-label="Toggle theme" role="switch" aria-checked="${currentTheme === 'light'}">
                <div class="theme-toggle-slider">
                    <svg class="theme-toggle-icon icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="#a259ff"></path>
                    </svg>
                    <svg class="theme-toggle-icon icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="5" stroke="#ffcd29"></circle>
                        <line x1="12" y1="1" x2="12" y2="3" stroke="#ffcd29"></line>
                        <line x1="12" y1="21" x2="12" y2="23" stroke="#ffcd29"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="#ffcd29"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="#ffcd29"></line>
                        <line x1="1" y1="12" x2="3" y2="12" stroke="#ffcd29"></line>
                        <line x1="21" y1="12" x2="23" y2="12" stroke="#ffcd29"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="#ffcd29"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="#ffcd29"></line>
                    </svg>
                </div>
            </button>
        `;
        
        document.body.appendChild(toggleContainer);
        
        // Add click event
        const toggleButton = toggleContainer.querySelector('.theme-toggle');
        const tooltip = toggleContainer.querySelector('.theme-toggle-tooltip');
        
        toggleButton.addEventListener('click', function() {
            toggleTheme();
        });
        
        // Keyboard support
        toggleButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleTheme();
            }
        });
        
        function toggleTheme() {
            const isLight = document.body.classList.contains('light-theme');
            
            if (isLight) {
                document.body.classList.remove('light-theme');
                localStorage.setItem('theme', 'dark');
                toggleButton.setAttribute('aria-checked', 'false');
                tooltip.textContent = 'Switch to Light Mode';
            } else {
                document.body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
                toggleButton.setAttribute('aria-checked', 'true');
                tooltip.textContent = 'Switch to Dark Mode';
            }
            
            // Announce to screen readers
            announceThemeChange(!isLight);
        }
        
        function announceThemeChange(isLight) {
            const announcement = document.createElement('div');
            announcement.setAttribute('role', 'status');
            announcement.setAttribute('aria-live', 'polite');
            announcement.className = 'sr-only';
            announcement.textContent = `Switched to ${isLight ? 'light' : 'dark'} mode`;
            document.body.appendChild(announcement);
            
            setTimeout(() => {
                announcement.remove();
            }, 1000);
        }
    }
});

// ===================================
// Respect System Preference
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Only apply system preference if user hasn't set a preference
    if (!localStorage.getItem('theme')) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (!prefersDark) {
            document.body.classList.add('light-theme');
        }
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.body.classList.remove('light-theme');
            } else {
                document.body.classList.add('light-theme');
            }
        }
    });
});
