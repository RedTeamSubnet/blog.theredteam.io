---
date:
    created: 2025-11-04T10:00:00
authors:
  - javokhir
categories:
  - Announcement
  - News
tags:
  - Internal Services
  - Comparison
  - Validation
  - Fairness
readtime: 6
title: "Subnet Announcement: New Structural Changes and Internal Services"
---

## Introduction

We're excited to announce significant updates to RedTeam Subnet's infrastructure, focusing on enhanced fairness, security, and efficiency. These changes introduce new comparison logic and fully integrated internal services to streamline validation and comparison processes.

<!-- more -->

## New Comparison Logic & Best Commit Updates

![Frame Centred](https://github.com/user-attachments/assets/c4776739-d0bf-40be-96e0-ea04115a2b48)

This update resolves a long-standing issue where multiple submissions from the same developer were allowed, leading to potential inconsistencies.

### Key Updates

- **Improved Comparison Logic**: Ensures only the most recent and valid submission per developer is accepted.
- **Submission Validation**: Integrated validation to check submission integrity.
- **Best Commit Updates**: Automatically updates `best_commit` if it becomes invalid.
- **Challenge Integration**: Comparison logic is now centralized, transferring ESLint and comparison logic into internal services.
- **Lowered Similarity Threshold**: Reduced to `0.6` for better accuracy.
- **Comparer Transferred**: Moved to internal services for enhanced security.

### Impact

These changes eliminate redundant submissions, prevent score inconsistencies, and ensure fair reward distribution. All submissions are now validated against developer history.

## Internal Services

Internal services are now fully operational in a secure, hidden environment, providing robust backend support that's inaccessible externally. These services act as a safe zone for sensitive components, currently housing comparison and validation logic, with potential for additional sensitive features in the future.

!!! info "Why Internal Services Are Hidden"
    Internal services are not accessible to anyone externally to prevent miners from reverse-engineering or exploiting the system. By keeping validation and comparison logic hidden, we ensure that miners cannot test, explore, or develop bypass techniques that could undermine the fairness of challenges.

### Validation Service

The validation service performs entire validation of submissions, ensuring they are not only compliant with challenge requirements but also optimized for fair comparison.

- **Linting**: Uses ESLint for JavaScript challenges (AB Sniffer, Device Fingerprinting) and Pylint for Python (Humanize Behaviour).
- **Testing Playground**: Miners can test scripts via our [Replit playground](https://replit.com/@redteamsn61/absnifferv1eslintcheck?v=2#README.md).
- **Comprehensive Checks**: Validates the entire submission to ensure it meets requirements without extraneous code, useless functions, or methods that could affect performance, bypass checks, or skew comparisons.

!!! note "Validation Benefits"
    This thorough validation guarantees that all submissions are legitimate and comparable, promoting a level playing field for all miners.

### Comparison Service

The comparison service is now fully internalized, with all logic hidden from external access.

- **Hidden Logic**: All comparison logic is now internal and secure, preventing any external probing.
- **Reduced Sensitivity**: Due to heavy validation, the comparer is less sensitive, allowing for more accurate evaluations.
- **Threshold Adjustment**: Acceptable similarity score lowered to `0.6` to accommodate refined logic.

!!! warning "Invalid Submissions"
    If a miner's script is found invalid during validation, they will receive an "Invalid submission" note in the [dashboard's](https://dashboard.theredteam.io/) note column. This ensures transparency while maintaining system security.

These enhancements make RedTeam Subnet more secure, fair, and efficient for all participants.

Stay tuned for more updates!
