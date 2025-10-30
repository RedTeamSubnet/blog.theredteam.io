---
date:
    created: 2025-10-28T10:00:00
authors:
  - bekbolot
categories:
  - Announcement
  - News
tags:
  - miner-update
  - incentive-logic
  - IP-linking
  - cold-key
readtime: 5
---

## Miner Linking & Incentive Logic Update

As the network expands, maintaining fairness in how incentives are distributed has become increasingly important. We noticed that some miners were submitting multiple solutions under **different UIDs**, which sometimes resulted in **duplicate rewards** for the same participant.

This wasn't due to bad intent many miners run multiple nodes or test different setups. However, the system initially treated each UID as a separate entity, which led to some miners unintentionally receiving more incentives than intended.

**What We Improved**
We've introduced several upgrades to make incentive distribution **more accurate and consistent**:

1. **IP-Linking Logic**
    - Submissions coming from the same IP address are now **linked together**.
    - All such linked submissions are treated as originating from **one miner**.
2. **Cold Key Filtering**
    - We've added an additional verification step using **miner cold keys**.
    - If multiple submissions share the same cold key, they're automatically grouped as one miner.
3. **Per-Challenge Evaluation**
    - The system now identifies all submissions from a linked miner (same IP or cold key) **per challenge**.
    - Only the **maximum scored submission** per challenge is considered for incentives. Oathers condidered as overwritten sub
    - This ensures that miners are rewarded for their **best performance**, not the number of submissions.

![Miner Linking & Incentive Logic Diagram](../../assets/images/diagram-redteam.jpg)

 **With this update:**

- Each miner is now represented uniquely, even if operating multiple UIDs.
- Incentives are based solely on the **best submission per challenge**.
- The overall reward system is now **fairer, more stable, and more reflective of real contributions**.
