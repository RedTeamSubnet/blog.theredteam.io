# UI Customization Guide

This site uses a modular CSS system that makes it easy to customize every aspect of the design.

## 📁 CSS File Structure

All customization files are in `/docs/assets/css/`:

```text
docs/assets/css/
├── colors.css        # Color scheme (primary, accent, backgrounds)
├── typography.css    # Fonts, sizes, weights
├── layout.css        # Spacing, padding, margins
├── components.css    # Cards, buttons, tables, etc.
└── custom.css        # Additional custom styles
```

---

## 🎨 1. Colors (`colors.css`)

### Change Primary/Accent Colors

```css
/* Light Mode */
[data-md-color-scheme="default"] {
    --md-primary-fg-color: #c62828;      /* Change this for primary color */
    --md-accent-fg-color: #ef5350;       /* Change this for accent color */
}

/* Dark Mode */
[data-md-color-scheme="slate"] {
    --md-primary-fg-color: #c62828;      /* Primary color in dark mode */
    --md-accent-fg-color: #ef5350;       /* Accent color in dark mode */
}
```

### Change Background Colors

```css
[data-md-color-scheme="default"] {
    --md-default-bg-color: #ffffff;      /* Page background */
    --md-code-bg-color: #f5f5f5;         /* Code block background */
}
```

---

## ✍️ 2. Typography (`typography.css`)

### Change Fonts

```css
:root {
    --custom-font-body: "Public Sans", sans-serif;      /* Body text font */
    --custom-font-heading: "Public Sans", sans-serif;   /* Heading font */
    --custom-font-code: "JetBrains Mono", monospace;    /* Code font */
}
```

### Change Font Sizes

```css
:root {
    /* Heading sizes (min = mobile, max = desktop) */
    --custom-h1-size-min: 2rem;
    --custom-h1-size-max: 2.5rem;

    /* Body text size */
    --custom-body-size-min: 0.9rem;
    --custom-body-size-max: 1rem;
}
```

### Change Font Weights

```css
:root {
    --custom-weight-normal: 400;
    --custom-weight-medium: 500;
    --custom-weight-semibold: 600;
    --custom-weight-bold: 700;
}
```

---

## 📐 3. Layout & Spacing (`layout.css`)

### Change Content Width

```css
:root {
    --custom-content-max-width: 1200px;    /* Maximum width of content */
}
```

### Change Spacing Scale

```css
:root {
    --custom-space-xs: 0.5rem;    /* Extra small spacing */
    --custom-space-sm: 0.75rem;   /* Small spacing */
    --custom-space-md: 1rem;      /* Medium spacing */
    --custom-space-lg: 1.5rem;    /* Large spacing */
    --custom-space-xl: 2rem;      /* Extra large spacing */
}
```

### Change Border Radius

```css
:root {
    --custom-radius-sm: 4px;     /* Small radius (inline code) */
    --custom-radius-md: 8px;     /* Medium radius (cards, tables) */
    --custom-radius-lg: 12px;    /* Large radius (large cards) */
}
```

---

## 🧩 4. Components (`components.css`)

### Customize Cards

```css
.md-typeset .grid.cards > ul > li,
.md-typeset .grid.cards > ol > li {
    border-radius: var(--custom-radius-lg);
    box-shadow: var(--custom-shadow-medium);
    padding: var(--custom-space-lg);
}
```

### Customize Code Blocks

```css
.md-typeset code {
    background-color: rgba(211, 47, 47, 0.08);  /* Inline code background */
    border-radius: var(--custom-radius-sm);
}
```

### Customize Tables

```css
.md-typeset table:not([class]) th {
    background-color: rgba(211, 47, 47, 0.05);  /* Table header background */
}
```

---

## 🚀 Quick Start Examples

### Example 1: Change to Blue Theme

In `colors.css`:

```css
[data-md-color-scheme="default"] {
    --md-primary-fg-color: #1976d2;      /* Blue primary */
    --md-accent-fg-color: #42a5f5;       /* Light blue accent */
}
```

### Example 2: Increase Font Sizes

In `typography.css`:

```css
:root {
    --custom-h1-size-max: 3rem;          /* Larger H1 */
    --custom-body-size-max: 1.1rem;      /* Larger body text */
}
```

### Example 3: Add More Spacing

In `layout.css`:

```css
.md-typeset h2 {
    margin-top: 3rem;                    /* More space before H2 */
}
```

---

## 💡 Tips

1. **Test changes incrementally** - Change one variable at a time
2. **Use browser DevTools** - Inspect elements to see which CSS applies
3. **Keep backups** - Copy files before making major changes
4. **Use CSS variables** - Most values use `--custom-*` variables for easy changing
5. **Check both light/dark modes** - Test your changes in both themes

---

## 📚 Resources

- [Material for MkDocs Customization](https://squidfunk.github.io/mkdocs-material/customization/)
- [CSS Variables Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Google Fonts](https://fonts.google.com/) - For custom font options

---

Need help? Check the comments in each CSS file for more guidance!
