/**
 * Custom Inline Search Integration
 * Performs search and displays results inline without modal
 */

document.addEventListener('DOMContentLoaded', function() {
  const customInput = document.getElementById('custom-search-input');
  const resultsDropdown = document.getElementById('search-results-dropdown');

  if (!customInput || !resultsDropdown) {
    console.warn('Custom search elements not found');
    return;
  }

  let searchData = null;
  let debounceTimer = null;

  // Load search index from MkDocs
  async function loadSearchIndex() {
    try {
      const response = await fetch('/search/search_index.json');
      const data = await response.json();
      searchData = data.docs;
      return true;
    } catch (error) {
      console.error('Failed to load search index:', error);
      return false;
    }
  }

  // Simple search function
  function performSearch(query) {
    if (!searchData || !query || query.length < 2) {
      return [];
    }

    const lowerQuery = query.toLowerCase();
    const results = [];

    for (const doc of searchData) {
      const title = (doc.title || '').toLowerCase();
      const text = (doc.text || '').toLowerCase();
      const location = doc.location || '';

      // Check if query matches title or text
      if (title.includes(lowerQuery) || text.includes(lowerQuery)) {
        const titleMatch = title.includes(lowerQuery);
        const textIndex = text.indexOf(lowerQuery);

        // Extract context around match
        let excerpt = '';
        if (textIndex !== -1) {
          const start = Math.max(0, textIndex - 50);
          const end = Math.min(text.length, textIndex + 100);
          excerpt = (start > 0 ? '...' : '') +
                   text.substring(start, end) +
                   (end < text.length ? '...' : '');
        }

        results.push({
          title: doc.title,
          text: excerpt || text.substring(0, 150) + '...',
          location: location,
          score: titleMatch ? 2 : 1
        });
      }
    }

    // Sort by relevance (title matches first)
    results.sort((a, b) => b.score - a.score);
    return results.slice(0, 10); // Return top 10 results
  }

  // Display search results
  function displayResults(results, query) {
    if (!query || query.length < 2) {
      resultsDropdown.classList.remove('active');
      return;
    }

    if (results.length === 0) {
      resultsDropdown.innerHTML = '<div class="search-result-empty">No results found</div>';
      resultsDropdown.classList.add('active');
      return;
    }

    const baseUrl = window.location.origin;
    let html = '';

    for (const result of results) {
      // Highlight query in title and text
      const highlightedTitle = highlightText(result.title, query);
      const highlightedText = highlightText(result.text, query);

      html += `
        <a href="${baseUrl}/${result.location}" class="search-result-item">
          <div class="search-result-title">${highlightedTitle}</div>
          <div class="search-result-text">${highlightedText}</div>
        </a>
      `;
    }

    resultsDropdown.innerHTML = html;
    resultsDropdown.classList.add('active');
  }

  // Highlight matching text
  function highlightText(text, query) {
    if (!text) return '';
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark style="background-color: rgba(74, 157, 236, 0.3); padding: 0 2px; border-radius: 2px;">$1</mark>');
  }

  // Escape regex special characters
  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Handle input changes
  customInput.addEventListener('input', function(e) {
    const query = e.target.value;

    // Debounce search
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      if (!searchData) {
        await loadSearchIndex();
      }

      const results = performSearch(query);
      displayResults(results, query);
    }, 150);
  });

  // Handle focus - show results if there's already a query
  customInput.addEventListener('focus', async function() {
    if (!searchData) {
      await loadSearchIndex();
    }

    if (customInput.value.length >= 2) {
      const results = performSearch(customInput.value);
      displayResults(results, customInput.value);
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!customInput.contains(e.target) && !resultsDropdown.contains(e.target)) {
      resultsDropdown.classList.remove('active');
    }
  });

  // Handle escape key to close dropdown
  customInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      resultsDropdown.classList.remove('active');
      customInput.blur();
    }
  });

  // Pre-load search index
  loadSearchIndex();
});
