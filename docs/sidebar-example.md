# Sidebar Layout Example

This is an example of how to use the sidebar component inspired by merox.dev.

<div class="blog-layout-with-sidebar">
  <div class="blog-main-content">
    <div class="blog-post">
      <div class="post-content">
        <h2><a href="#">Example Blog Post Title</a></h2>
        <div class="post-meta">
          <span>Oscar</span>
          <span class="post-separator">•</span>
          <span>5 min read</span>
          <span class="post-separator">•</span>
          <span>Oct 15, 2025</span>
        </div>
        <p class="post-excerpt">
          This is an example blog post excerpt. It gives readers a preview of what the post is about and encourages them to read more.
        </p>
      </div>
      <div class="post-image">
        <img src="https://via.placeholder.com/160x100" alt="Post thumbnail">
      </div>
    </div>

    <div class="blog-post">
      <div class="post-content">
        <h2><a href="#">Another Blog Post Example</a></h2>
        <div class="post-meta">
          <span>Javokhir</span>
          <span class="post-separator">•</span>
          <span>3 min read</span>
          <span class="post-separator">•</span>
          <span>Oct 14, 2025</span>
        </div>
        <p class="post-excerpt">
          Another engaging blog post excerpt that captures the essence of the content and makes readers want to learn more.
        </p>
      </div>
      <div class="post-image">
        <img src="https://via.placeholder.com/160x100" alt="Post thumbnail">
      </div>
    </div>
  </div>

  <aside class="blog-sidebar">
    <div class="sidebar-widget">
      <h3>Recent Posts</h3>
      <ul>
        <li>
          <a href="#">
            <span>Getting Started with Red Team Operations</span>
          </a>
          <span class="post-date">Oct 12, 2025</span>
        </li>
        <li>
          <a href="#">
            <span>Advanced Penetration Testing Techniques</span>
          </a>
          <span class="post-date">Oct 10, 2025</span>
        </li>
        <li>
          <a href="#">
            <span>Security Research Best Practices</span>
          </a>
          <span class="post-date">Oct 8, 2025</span>
        </li>
      </ul>
    </div>

    <div class="sidebar-widget">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="https://www.theredteam.io/">Main Website</a></li>
        <li><a href="https://dashboard.theredteam.io/">Dashboard</a></li>
        <li><a href="https://docs.theredteam.io/">Documentation</a></li>
      </ul>
    </div>

    <div class="sidebar-widget sidebar-cta">
      <h3>Join Our Community</h3>
      <p>Get access to exclusive content, challenges, and resources.</p>
      <a href="https://www.theredteam.io/" class="sidebar-cta-button">Get Started</a>
    </div>
  </aside>
</div>

---

## How to Use the Sidebar

To use the sidebar layout on your pages, wrap your content in the following structure:

```html
<div class="blog-layout-with-sidebar">
  <div class="blog-main-content">
    <!-- Your main content here -->
  </div>

  <aside class="blog-sidebar">
    <!-- Sidebar widgets here -->
  </aside>
</div>
```

### Sidebar Widgets

Create sidebar widgets using:

```html
<div class="sidebar-widget">
  <h3>Widget Title</h3>
  <!-- Widget content -->
</div>
```

### CTA Widget

For call-to-action widgets:

```html
<div class="sidebar-widget sidebar-cta">
  <h3>CTA Title</h3>
  <p>Description</p>
  <a href="#" class="sidebar-cta-button">Button Text</a>
</div>
```
