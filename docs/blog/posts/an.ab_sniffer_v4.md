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
<img width="1920" height="1080" alt="Add a heading" src="https://github.com/user-attachments/assets/9335e859-90b8-4277-b95f-eabc55e3a041" />

We're excited to announce the release of **`ab_sniffer_v4`**, a new challenge template that introduces additional evaluation frameworks and raises the baseline quality standards for all submissions.

!!! warning "Release Date"
    **`ab_sniffer_v4` will be released on:** **October 16, 2025 10:00 AM UTC**.  
    Please treat that as the authoritative go-live time for the new challenge.

### What’s included in `ab_sniffer_v4`

The v4 release adds **three new frameworks** for miner submissions:
- **`botasaurus`**: automaton framework for scripted bot evaluations.  
- **`pydoll`**: Python-based evaluation harness for flexible test scenarios.  
- **`human`**: *real device interaction* mode.

The **`human`** framework uses a **real device** interacting with the miner's injected web page. This allows evaluation of miner scripts under realistic user-driven conditions (touch/keyboard interactions, timing variability, and real browser/device subtleties). In other words, `human` tests how your script behaves when a real person interacts with the page, not a synthetic emulator.

### ESLint: now enforced across all challenges

To raise baseline code quality and prevent rule bypassing, **ESLint checks are now integrated into all challenges**, not just `ab_sniffer_v4`. The shared ESLint configuration sets:

```json
"noInlineConfig": true
```

This prevents miners from disabling rules via inline comments such as `/* eslint-disable */` or `// eslint-disable-line`. If a rule flags a problem, the correct approach is to address the underlying issue or propose a change to the shared config — not to silence the linter inline.

Inline ESLint disables will be **ignored and flagged**. Please update code to conform to the rules or submit a change request for the shared config if you have a legitimate need.

### Scoring results (`scoring_result`)

Miners can now view their validator scoring results in JSON form (available from the Hugging Face view for the submission). The `scoring_result` JSON contains per-run validator outputs — for example, predictions, detection flags, driver/framework used, and execution time.

**Short example of `scoring_result`:**

```json
{
    "0": [
        {
            "driver": "human",
            "predicted": "HeadlessBot",
            "detected": false,
            "execution_time": 15.676664113998413
        }
    ],
    "1": [
        {
            "detected": false,
            "predicted": "Chrome",
            "driver": "seleniumbase",
            "execution_time": 15.242670774459839
        }
    ],
    "2": [
        {
            "driver": "human",
            "predicted": "HeadlessBot",
            "detected": false,
            "execution_time": 12.766318559646606
        }
    ],
    "3": [
        {
            "detected": false,
            "predicted": "Chrome",
            "driver": "seleniumbase",
            "execution_time": 15.284128427505493
        }
    ],
    "4": [
        {
            "driver": "human",
            "predicted": "HeadlessBot",
            "detected": false,
            "execution_time": 12.783197164535522
        }
    ],
    "5": [
        {
            "detected": false,
            "predicted": "Chrome",
            "driver": "seleniumbase",
            "execution_time": 15.305853605270386
        }
    ]
}
```

**Fields explained:**

- `driver`: the evaluation framework / driver used (e.g., `human`, `seleniumbase`, `botasaurus`, `pydoll`).
- `predicted`: result of a submission for that session.
- `detected`: boolean indicating that marks match of pridicted value with the driver.
- `execution_time`: the execution time of script in that session in seconds (float).

!!! note "Where to find it"
    `scoring_result` JSON is available in the validators' Hugging Face view for your submission . Check the submission page to download or inspect the JSON for each validator run.

### Why these changes

The new frameworks (including the real-device `human` mode) and the global ESLint enforcement improve the *realism*, *fairness*, and *maintainability* of the RedTeam evaluation ecosystem. They help ensure that miners are judged on robust, reproducible behavior and on sound implementation practices.
