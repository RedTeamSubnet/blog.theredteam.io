# AGENTS.md - Development Guidelines for RedTeam Blog

This document provides essential guidelines for agentic coding assistants working on the RedTeam Blog project. Follow these instructions to maintain code quality, consistency, and proper development workflows.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Development Environment](#development-environment)
3. [Build Commands](#build-commands)
4. [Testing](#testing)
5. [Linting & Code Quality](#linting--code-quality)
6. [Code Style Guidelines](#code-style-guidelines)
7. [File Organization](#file-organization)
8. [Git Workflow](#git-workflow)
9. [Documentation Standards](#documentation-standards)

## Project Overview

The RedTeam Blog is a MkDocs-based documentation site that serves as a blog platform for the RedTeam community. It uses:

- **MkDocs Material** for the documentation framework
- **Python 3.10** for scripts and tooling
- **Markdown** for content
- **GitHub Actions** for CI/CD automation

## Development Environment

### Prerequisites

- Python 3.10 (managed via pyenv)
- Virtual environment (`.venv`)

### Setup

```bash
# Install dependencies
pip install -r requirements.txt
pip install -r requirements/requirements.docs.txt

# Install pre-commit hooks
pre-commit install
```

## Build Commands

### Primary Build Commands

#### Build Documentation

```bash
# Build static site to 'site/' directory
make build
# or directly:
mkdocs build

# Build and publish to GitHub Pages
make build  # with --publish flag via script
```

#### Serve Documentation Locally

```bash
# Start development server on port 8000
make docs
# or directly:
mkdocs serve -a 0.0.0.0:8000
```

#### Clean Build Artifacts

```bash
make clean
# or directly:
./scripts/clean.sh
```

### Version Management

```bash
# Get current version
make get-version
./scripts/get-version.sh

# Bump version (patch/minor/major) NEVER RUN THIS COMMAND BECAUSE IT WILL DEPLOY TO PRODUCTION IMMEDIATELY
make bump-version
./scripts/bump-version.sh -b=patch  # or minor, major
```

### Release Management

```bash
# Create GitHub release
make release
./scripts/release.sh

# Update changelog
make changelog
./scripts/changelog.sh
```

### Full Development Cycle

```bash
# Clean, build, and serve
make all
```

## Testing

This project is primarily a documentation site, so automated testing is limited. However:

### Pre-commit Checks

All changes are validated through pre-commit hooks:

```bash
# Run all pre-commit checks
pre-commit run --all-files

# Run specific checks
pre-commit run trailing-whitespace --all-files
pre-commit run shellcheck --all-files
```

### Manual Testing

- **Documentation Build**: Ensure `mkdocs build` completes without errors
- **Local Server**: Test `mkdocs serve` and verify site renders correctly
- **Links**: Check that all internal and external links work
- **Mobile/Desktop**: Test responsiveness across different screen sizes

## Linting & Code Quality

### Pre-commit Hooks (Automatic)

The following checks run automatically on commit:

- JSON/TOML/YAML validation
- End-of-file fixers
- Trailing whitespace removal
- Mixed line endings
- Private key detection
- GitLeaks (secret scanning)
- Detect-secrets
- ShellCheck for shell scripts

### Markdown Linting

```bash
# markdownlint configuration in .markdownlint.json
# - 4-space indentation for lists
# - No line length limits
# - No single title check
# - Allowed HTML elements: center, img, br, hr, code, pre, span, strong, div, p, blockquote, ul, ol, li, a, table, thead, tbody, tr, th, td
```

## Code Style Guidelines

### Python Code Style

#### Formatting

- **Indentation**: 4 spaces (configured in .editorconfig and VSCode settings)
- **Line Length**: 120 characters (VSCode ruler)
- **Imports**: Use absolute imports, group by standard library, third-party, local
- **Black Formatter**: Enabled for Python files with format-on-save

#### Example Python Script Structure

```python
#!/usr/bin/env python3
"""Module docstring describing purpose."""

import os
import sys
from pathlib import Path

# Third-party imports
import yaml

# Local imports
from scripts.utils import helper_function


def main():
    """Main function with proper docstring."""
    try:
        # Implementation
        pass
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
```

#### Naming Conventions

- **Functions**: `snake_case`
- **Variables**: `snake_case`
- **Constants**: `UPPER_SNAKE_CASE`
- **Classes**: `PascalCase`
- **Modules**: `snake_case`

#### Error Handling

- Use explicit exception handling
- Provide meaningful error messages
- Log errors to stderr for scripts
- Return appropriate exit codes

### Shell Scripts

#### Bash Script Standards

- Use `#!/bin/bash` shebang
- Set shell options: `set -euo pipefail`
- Use descriptive variable names with underscores: `_SCRIPT_DIR`
- Include comprehensive error checking
- Use functions for complex logic
- Add comments for complex operations

#### Example Script Structure

```bash
#!/bin/bash
set -euo pipefail

# Documentation comment
_SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
_PROJECT_DIR="$(cd "${_SCRIPT_DIR}/.." >/dev/null 2>&1 && pwd)"
cd "${_PROJECT_DIR}" || exit 2

main() {
    # Main logic here
    echo "Operation completed"
}

main "${@:-}"
```

### Markdown Content

#### Front Matter

```yaml
---
title: Page Title
hide:
  - navigation
  - toc
---
```

#### Content Standards

- Use descriptive headings (H1 for title, H2+ for sections)
- Include alt text for images
- Use proper link formatting
- Leverage MkDocs Material features (admonitions, tabs, etc.)
- Keep line lengths reasonable for readability

#### Code Blocks

```bash
# Use language-specific syntax highlighting
command --option value
```

```python
# Python code example
def function():
    return "example"
```

### YAML Configuration

#### MkDocs Configuration

- Use 2-space indentation (.editorconfig)
- Group related settings logically
- Comment complex configurations
- Validate against MkDocs Material schema

## File Organization

### Directory Structure

```plaintext
/
├── docs/                 # Markdown content
│   ├── blog/            # Blog posts and articles
│   ├── important/       # Important documentation
│   └── assets/          # Static assets (CSS, JS, images)
├── overrides/           # MkDocs theme customizations
├── scripts/             # Build and utility scripts
├── requirements/        # Python dependencies
├── .github/             # GitHub Actions and configuration
└── templates/           # Configuration templates
```

### File Naming

- **Scripts**: `snake_case.sh` (e.g., `build.sh`, `clean.sh`)
- **Markdown**: `kebab-case.md` (e.g., `blog-post.md`)
- **Python**: `snake_case.py` (if any)
- **Assets**: Descriptive names with kebab-case

## Git Workflow

### Branch Strategy

- `main`: Production branch
- `dev`: Development branch
- Feature branches: `feature/description` or `fix/issue-description`

### Commit Standards

- Use conventional commit format when possible
- Write clear, descriptive commit messages
- Keep commits focused on single changes
- Never commit secrets or sensitive data

### Pre-commit Requirements

All commits must pass pre-commit hooks:
```bash
# Install hooks
pre-commit install

# Run manually
pre-commit run --all-files
```

## Documentation Standards

### Content Guidelines

- Write in clear, accessible English
- Use active voice when possible
- Include examples and code snippets
- Maintain consistent terminology
- Update documentation with code changes

### MkDocs Features to Use

- **Navigation**: Proper nav structure in mkdocs.yml
- **Search**: Enabled by default
- **Themes**: Material theme with custom overrides
- **Plugins**: mkdocstrings, tags, search, meta
- **Extensions**: All configured markdown extensions

### Blog Post Structure

```markdown
---
title: "Post Title"
date: YYYY-MM-DD
author: author_name
tags: [tag1, tag2]
---

# Introduction

## Section 1

Content here...

## Section 2

More content...

# Conclusion
```

## Additional Resources

- [MkDocs Documentation](https://www.mkdocs.org/)
- [Material Theme Documentation](https://squidfunk.github.io/mkdocs-material/)
- [Pre-commit Hooks](https://pre-commit.com/)
- [ShellCheck](https://github.com/koalaman/shellcheck)

---

*This document should be updated as development practices evolve. Last updated: January 2026*</content>
<parameter name="filePath">AGENTS.md
