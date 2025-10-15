---
date:
    created: 2025-10-15T08:22:00
authors:
  - javokhir
categories:
  - Announcement
  - News
tags:
  - Challenge
  - EsLint
readtime: 3
title: Release Auto Browser Sniffer v4
---

## Release: `ab_sniffer_v4`. New frameworks & global ESLint enforcement

We're excited to announce the release of **`ab_sniffer_v4`**, a new challenge template that introduces additional evaluation frameworks and raises the baseline quality standards for all submissions.

!!! warning "Release Date"
    **`ab_sniffer_v4` will be released on:** **October 16, 2025 — 10:00 AM UTC**.  
    Please treat that as the authoritative go-live time for the new challenge.

### What’s included in `ab_sniffer_v4`

!!! info "New frameworks"
    The v4 release adds **three new frameworks** for miner submissions:
    - **`botasaurus`**: automaton framework for scripted bot evaluations.  
    - **`pydoll`**: Python-based evaluation harness for flexible test scenarios.  
    - **`human`**: *real device interaction* mode.

!!! note "About `human` framework"
    The **`human`** framework uses a **real device** interacting with the miner's injected web page. This allows evaluation of miner scripts under realistic user-driven conditions (touch/keyboard interactions, timing variability, and real browser/device subtleties). In other words, `human` tests how your script behaves when a real person interacts with the page, not a synthetic emulator.
### ESLint: now enforced across all challenges

!!! tip "Global ESLint enforcement"
    To raise baseline code quality and prevent rule bypassing, **ESLint checks are now integrated into all challenges**, not just `ab_sniffer_v4`. The shared ESLint configuration sets:

    - `noInlineConfig: true`

    This prevents miners from disabling rules via inline comments such as `/* eslint-disable */` or `// eslint-disable-line`. If a rule flags a problem, the correct approach is to address the underlying issue or propose a change to the shared config — not to silence the linter inline.

!!! danger "Important"
    Inline ESLint disables will be **ignored and flagged**. Please update code to conform to the rules or submit a change request for the shared config if you have a legitimate need.

### Why these changes

!!! quote "Rationale"
    The new frameworks (including the real-device `human` mode) and the global ESLint enforcement improve the *realism*, *fairness*, and *maintainability* of the RedTeam evaluation ecosystem. They help ensure that miners are judged on robust, reproducible behavior and on sound implementation practices.
