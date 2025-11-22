---
date:
    created: 2025-11-20T10:00:00
authors:
  - javokhir
categories:
  - Announcement
tags:
  - Linting
  - ESLint
  - PyLint
readtime: 3
title: ESLint Configuration Enforcement, Effective Nov 21
---

## New ESLint rules will be enforced from Nov 23

![Thumbnail](../../assets/images/an.new_eslint_rules.png)

We have updated our repository's ESLint configuration and will begin enforcing it from **2025-11-23**. This announcement explains what changes to expect, how the rules will affect contributions, and quick steps you can take to run/fix lint issues locally.

### What Changed

- The updated ESLint config applies to all JavaScript files (`**/*.{js,mjs,cjs}`).
- Key style and safety rules include:
  - **Max line length:** 100 characters (`max-len`).
  - **Indentation:** 2 spaces, `SwitchCase: 1` (`indent`).
  - **Semicolons:** required (`semi: always`).
  - **Quotes:** double quotes preferred, allow escape (`quotes: double`).
  - **No trailing spaces** and **newline at EOF** (`no-trailing-spaces`, `eol-last`).
  - **Object/array spacing** and spacing around blocks/keywords/arrows.
  - **Arrow parens:** always include parentheses for arrow args.
  - **Trailing commas:** always-multiline and proper comma spacing.

### Why this change

- Consistency: a single, clear style improves readability across contributions.
- Automation: consistent rules enable safer automatic fixes and better CI enforcement.
- Quality: some rules help avoid easy-to-miss bugs and reduce style debates in reviews.

### How this affects contributors

- Starting on **Nov 21, 2025**, CI will fail if ESLint violations are present in pushed code for JS files.
