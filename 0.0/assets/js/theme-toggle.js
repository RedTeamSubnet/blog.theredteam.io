// Theme toggle functionality
// Note: Instant theme application is in <head> (main.html) for zero-flash navigation
document.addEventListener('DOMContentLoaded', function () {
  const KEY = 'rd_theme';
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const getSaved = () => {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  };

  const systemPref = () => (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'slate' : 'default');

  const apply = (scheme) => {
    if (scheme === 'auto') {
      document.documentElement.removeAttribute('data-md-color-scheme');
      document.body.removeAttribute('data-md-color-scheme');
    } else {
      document.documentElement.setAttribute('data-md-color-scheme', scheme);
      document.body.setAttribute('data-md-color-scheme', scheme);
    }

    // Update Radix UI-style switch appearance
    const isDark = scheme === 'slate';
    btn.setAttribute('data-state', isDark ? 'checked' : 'unchecked');
    btn.setAttribute('aria-checked', isDark ? 'true' : 'false');
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');

    try { localStorage.setItem(KEY, scheme); } catch (e) {}
  };

  // Initialize button state
  let scheme = getSaved() || systemPref();
  apply(scheme);

  // Click handler
  btn.addEventListener('click', function () {
    const current = document.documentElement.getAttribute('data-md-color-scheme') || systemPref();
    const next = current === 'slate' ? 'default' : 'slate';
    apply(next);
  });

  // System preference changes
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq.addEventListener) {
      mq.addEventListener('change', () => {
        if (!getSaved()) apply(systemPref());
      });
    }
  }
});
