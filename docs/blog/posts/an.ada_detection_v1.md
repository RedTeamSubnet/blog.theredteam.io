---
date:
    created: 2025-12-15T10:00:00
authors:
  - bekbolot
categories:
  - Announcement
  - Release
tags:
  - Challenge
  - Anti-Detect
  - Browser Automation
readtime: 5
title: Release Anti-Detect Automation Detection v1
---

## Release of ADA Detection v1

![ADA Detection v1](../../assets/images/annoucements/Frame_Bullet03.png)

We are announcing the release of `ada_detection_v1`, a specialized challenge designed to evaluate detection capabilities within **anti-detect browser environments**. Unlike previous challenges that focused on standard driver fingerprints, ADA operates entirely inside **NST-Browser**, where traditional static signals are masked.

The goal of this challenge is to push the boundaries of behavioral analysis, requiring solutions that detect *how* automation moves and acts, rather than *what* it claims to be.

!!! info "Release Date"
    ADA Detection v1 is live starting December 15, 2025 at 10:00 UTC.
    All new miner submissions are evaluated using this version.

# What is New in ADA Detection v1

This release shifts the focus from static property inspection to dynamic behavioral analysis in a hardened environment.

## The Anti-Detect Environment

ADA Detection v1 runs all evaluations inside **NST-Browser**. In this environment:

* **Fingerprints are masked:** Standard "bot" signals are actively spoofed.
* **Profiles are fresh:** Every run starts with a clean profile.
* **Isolation:** There is zero shared state between runs.

This simulates sophisticated, real-world scraping operations where "navigator.webdriver" checks are obsolete. Participants must rely on orchestration timing, WebSocket control patterns, and behavioral anomalies.

## Strict Human Safety

This challenge introduces a zero-tolerance policy for false positives.
**Human Safety is the kill switch.**

* Real human interactions are randomly injected into the evaluation flow.
* **If your solution flags more than 2 humans as bots, your entire score for the submission is 0.0.**

This ensures that high-performing detection scripts are safe to deploy in production environments without disrupting real user traffic.

## Targeted Framework Coverage

Miners must submit distinct detection logic for four specific automation frameworks commonly used with anti-detect browsers:

* `automation`
* `nodriver`
* `playwright`
* `patchright`
* `puppeteer`

Missing detection logic for any of these frameworks invalidates the submission.

## "Payload-Based" Detection Flow

Unlike previous iterations that might scan for file artifacts, ADA v1 uses a runtime payload system:

1. Scripts execute in the browser page.
2. When automation is confirmed, scripts send a payload to a local `/_payload` endpoint.
3. **Silence is required** during human sessions. Any payload sent during a human interaction counts as a critical mistake.

# Submission Structure

We have streamlined the submission format to be strictly modular.
Submissions must be a JSON object containing exactly four files, named precisely:

```json
  {
    "detection_files": [
      { "file_name": "automation.js", "content": "..." },
      { "file_name": "nodriver.js", "content": "..." },
      { "file_name": "playwright.js", "content": "..." },
      { "file_name": "patchright.js", "content": "..." },
      { "file_name": "puppeteer.js", "content": "..." }
    ]
  }
```

* **File names must match exactly.**
* Each file is responsible *only* for detecting its assigned framework.
* Logic must be self-contained JavaScript (ES6+).

# Updated Scoring Logic

Scoring in ADA v1 is a composite metric normalized between 0.0 and 1.0.

### 1. The Human Safety Gate

Before any points are awarded, human accuracy is checked.

* **Start:** 1.0 points.
* **Penalty:** -0.1 per mistake.
* **Limit:** > 2 mistakes = **0.0 Final Score (Immediate Failure)**.

### 2. Framework Detection (All-or-Nothing)

For each framework (e.g., `nodriver`), your script is tested against multiple runs.

* **1 Point:** Perfect detection across *all* runs for that framework.
* **0 Points:** Any missed detection or collision (reporting the wrong framework).

### 3. Normalization

The final score is calculated by summing your Human Accuracy, Automation Accuracy, and Framework Points, then normalizing against the total number of test cases.

$$
\text{Final Score} = \frac{\text{Human Score} + \text{Automation Score} + \text{Framework Points}}{\text{Total Frameworks} + 1 \text{ Human} + 1 \text{ Auto}}
$$

## Similarity & Incentives

To encourage continuous innovation:

* **Similarity Check:** Submissions are compared against historical data. High similarity to previous solutions results in penalties or rejection.
* **Time Decay:** Scores naturally decay over a 15-day period, incentivizing miners to regularly update and refine their detection heuristics.

# Summary

ADA Detection v1 represents a paradigm shift:

* **Environment:** NST-Browser (Anti-Detect).
* **Philosophy:** Behavioral over Static.
* **Safety:** Strict penalties for false positives.
* **Format:** Modular, payload-based detection.

This challenge rewards miners who can solve the hardest problem in bot detection: distinguishing a sophisticated script from a real human without relying on easily spoofed signals.

!!! Warning "Testing Dependency"
    Miner need to buy profession plan of `nstbrowser` for testing challenge locally. Miners can buy it from NstBrowser's [official page](https://www.nstbrowser.io/en/pricing)
