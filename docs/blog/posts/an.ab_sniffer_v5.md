---
date:
    created: 2025-12-02T10:00:00
authors:
  - bekbolot
categories:
  - Announcement
  - Release
tags:
  - Challenge
  - Bot Detection
  - Automation
readtime: 5
title: Release Auto Browser Sniffer v5
---

## Release of AB Sniffer v5

![AB Sniffer v5](../../assets/images/blog/Frame_Colaboration.png)

We are announcing the release of `ab_sniffer_v5`, a major redesign of the Auto Browser Sniffer challenge. This update introduces a modular detection structure, a revised evaluation pipeline, stricter validation rules, and a more realistic containerized execution environment.

The goal of this release is to provide a more accurate, fair, and production-aligned assessment of automation detection solutions.


!!! info "Release Date"
    AB Sniffer v5 is live starting December 02, 2025 at 10:00 UTC.
    All new miner submissions are evaluated using this version.



# What is New in AB Sniffer v5

This release focuses on architectural improvements, evaluation accuracy, validation enforcement, and consistent testing conditions.



## Modular Detection Architecture

AB Sniffer v5 introduces a strict modular structure for detection logic.
Each automation framework must be implemented in its own dedicated JavaScript file:

* nodriver.js
* seleniumbase.js
* selenium-driverless.js
* patchright.js
* puppeteerextra.js
* zendriver.js
* botasaurus.js
* pydoll.js
* (human scenario included in evaluation)

Each detection file must follow the required structure:

* Exactly one detection function
* Must return a strict boolean
* Must detect only its assigned framework
* Must not exceed 500 lines
* Must pass ESLint rules
* Must follow exact filename conventions

This structure improves clarity, fairness, and consistency across submissions.



## Broader Framework Coverage

AB Sniffer v5 evaluates detection logic against nine total targets:

* Eight automation frameworks
* One real human interaction scenario

This broadened scope allows the system to test a wider range of behaviors—from basic automation fingerprints to advanced, stealth-oriented frameworks.



## Multi-Session Evaluation Engine

Each submission is evaluated through **27 independent sessions**:

* Nine targets
* Three runs per target
* Fresh container per session
* Randomized test order
* Zero shared state

This ensures reproducibility and prevents assumptions based on predictable execution patterns.



## Realistic Browser Environment

Detection logic is tested in both:

* Headless mode
* Headful mode

Participants must ensure stability and accuracy across both environments.


## Stronger Schema Validation

The validator is located here:
[schemas.py](https://github.com/RedTeamSubnet/ab_sniffer/blob/91703da0595672033b160991f491c792c22b8e09/src/api/endpoints/challenge/schemas.py)


This validator enforces:

* Correct number of detection files
* Strict `.js` file extension
* Exact framework-based naming
* No duplicate files
* Maximum 500 lines per file
* Proper modularity

Any invalid submission is rejected before entering the scoring stage.



# Updated Scoring Logic

Scoring uses a consistent system:

| Result            | Points |
| -- |  |
| Perfect detection | 1.0    |
| Collision         | 0.1    |
| Failure           | 0.0    |

Final score is calculated across all 27 sessions.



## Baseline Reference and Baseline Score

In AB Sniffer v5, the baseline implementation has been **moved into internal services**.
These minimal reference scripts serve two purposes:

1. A Structural Example: They provide a perfect, working example of the modular file structure (seleniumbase.js, nodriver.js, etc.) and simple boolean return value that the v5 challenge requires.
2. To Establish a Baseline Score: When evaluated, these scripts produce a "baseline score." This score represents the minimum performance level achieved by using only the most basic and well-known detection signals (like navigator.webdriver).
 
The baseline uses only basic, obvious signals and is not optimized.
Participants are expected to exceed this baseline by detecting patterns the internal reference scripts cannot.



## Similarity Scoring

AB Sniffer v5 applies a similarity check to ensure originality across miner submissions.

**Rule:**

* For every framework detected perfectly, a fixed similarity value of **0.60** is assigned.
* For all remaining frameworks, the system calculates an **average functional similarity** with internal references.
* If this average is **lower than 0.60**, that lower value becomes the final similarity score.
* If similarity is **higher**, meaning the submission behaves too closely to the baseline or other miners, it is disqualified.

This mechanism prevents baseline-level or lightly modified solutions and ensures miners provide independent, meaningful detection logic.



# Summary of Improvements

AB Sniffer v5 introduces:

* Fully modular SDK structure
* Expanded framework coverage
* Multi-session evaluation
* Stronger validation enforcement
* Improved human safety rules
* Container isolation per session
* Consistent scoring logic
* Clear baseline expectations
* Functional similarity enforcement

This update reflects real-world automation-detection challenges more accurately and ensures miners are evaluated on robust, reliable, and original detection strategies.
