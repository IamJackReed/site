// Search functionality for hashtags
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Handle search
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // Redirect to search results page with query parameter
            window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
        }
    }

    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // If we're on the search results page, perform the search
    if (window.location.pathname.includes('search-results.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('q');
        
        if (query) {
            displaySearchResults(query);
        }
    }
});

// Display search results
function displaySearchResults(query) {
    const searchTitle = document.getElementById('search-title');
    const searchQuery = document.getElementById('search-query');
    const resultsContainer = document.getElementById('search-results');
    const noResults = document.getElementById('no-results');

    // Update title and query display
    searchTitle.textContent = `Search Results for "${query}"`;
    searchQuery.textContent = `Showing posts tagged with #${query.replace('#', '')}`;

    // Sample posts database (you'll need to expand this with your actual posts)
    const posts = [
        {
            title: 'Validation Over Precision: What Modern Product Teams Do Differently',
            url: 'posts/validation-over-precision.html',
            category: 'Product',
            excerpt: 'Looking into what makes great software',
            date: 'January 25, 2026',
            hashtags: ['Product', 'EvidenceBasedManagement', 'FeedbackLoops', 'BuildTheRightThing', 'Validation']
        },
        {
            title: 'Sample People & Teams Post',
            url: 'posts/sample-people-teams-post.html',
            category: 'People & Teams',
            excerpt: 'How teams collaborate, make decisions, and create sustainable ways of working.',
            date: 'January 15, 2026',
            hashtags: ['teams', 'collaboration', 'agile']
        },
        {
            title: 'Sample Market Diary Post',
            url: 'posts/sample-market-diary-post.html',
            category: 'Market Diary',
            excerpt: 'Personal notes on markets, companies, and investment thinking.',
            date: 'January 10, 2026',
            hashtags: ['investing', 'markets', 'bullish']
        }
    ];

    // Filter posts by hashtag
    const searchTerm = query.toLowerCase().replace('#', '');
    const filteredPosts = posts.filter(post => 
        post.hashtags.some(tag => tag.toLowerCase().includes(searchTerm))
    );

    // Display results
    if (filteredPosts.length > 0) {
        resultsContainer.innerHTML = filteredPosts.map(post => `
            <article class="post-card">
                <span class="post-category ${post.category === 'Market Diary' ? 'post-category--investing' : ''}">${post.category}</span>
                <h2 class="post-title">${post.title}</h2>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span>${post.date}</span>
                    <a href="${post.url}" class="post-link">Read more →</a>
                </div>
                <div style="margin-top: 0.5rem;">
                    ${post.hashtags.map(tag => `<span style="color: var(--color-accent); font-size: 0.875rem; margin-right: 0.5rem;">#${tag}</span>`).join('')}
                </div>
            </article>
        `).join('');
        noResults.style.display = 'none';
    } else {
        resultsContainer.innerHTML = '';
        noResults.style.display = 'block';
    }
}
