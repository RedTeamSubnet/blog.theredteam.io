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

We have updated our repository's ESLint configuration and will begin enforcing it from **2025-11-23**. This announcement explains what changes to expect, how the rules will affect contributions, and quick steps you can take to run/fix lint issues in your submission to pass validation.

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

- Starting on **Nov 23, 2025**, we will change eslint configuration in **internal services**. Which means all javascript submission will be checked with new rules.

### How to test with new configuration

- Miners can validate their submissions in [Replit Playground](https://replit.com/@redteamsn61/absnifferv1eslintcheck) by following the provided guide within the Playground.
- Replit Playground now includes new configuration for both Eslint and PyLint.

!!! Warning "Important Message for Miners"
    All miners are strongly advised to test these configurations in Replit Playground prior to submitting their scripts.. If miners fail in this then there is a significant likelihood of failure in the validation process from the internal services.
