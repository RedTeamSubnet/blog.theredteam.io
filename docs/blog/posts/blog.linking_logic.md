---
date:
    created: 2026-04-25T12:00:00
authors:
  - redteam-dev
categories:
  - Technical
  - Subnet
tags:
  - linking-logic
  - miner-identity
  - emission
  - bittensor
readtime: 4
---

# Linking Logic in the RedTeam Subnet

The linking logic is designed to identify when multiple UIDs are likely controlled by the same underlying miner and to treat them as a **single effective identity** during emission distribution.

!!! info "Core Objective"
    Ensure fair treatment by grouping associated UIDs into one logical miner entity for incentive calculations.

---

## When Linking Is Applied

Linking is **not a one-time process**. It is a dynamic evaluation that occurs frequently to reflect the real-time state of the network.

* **Execution Frequency:** Every weight setting interval (approximately every **20 minutes**).
* **Statelessness:** Each interval is evaluated independently.
    * Linking is **recomputed from scratch** each time.
    * No assumptions or data are carried over from previous intervals.

!!! tip "Current State Only"
    The system always reflects the **current signals of each UID**, ensuring it adapts immediately to changes in miner infrastructure.

---

## How Linking Works

During each interval, the system evaluates all active UIDs based on three primary identity signals:

1. **IP Address:** Network-level identification.
2. **Coldkey:** Cryptographic ownership proof.
3. **DockerHub Username:** Operational identification from image deployments.

### Grouping Mechanism

UIDs that share these signals (either fully or in specific combinations) are grouped together.

* Each group represents a **single logical miner**.
* Each UID belongs to **exactly one group** for that interval.

---

## Key Design Characteristics

### 1. Multi-Signal Identity Matching

Linking does not rely on a single identifier. By combining **Network**, **Cryptographic**, and **Operational** identities, the system significantly reduces the chance of trivial duplication or spoofing.

### 2. Single-Step Evaluation

All signals are processed together in one step rather than sequentially.

* **Prevents partial bypass:** For example, changing only an IP while keeping the same coldkey will still result in linkage.
* **Consistency:** Ensures robust and predictable grouping decisions.

### 3. Time-Scoped Grouping

Since linking is recomputed every interval, it is highly flexible. A UID's group can change if its identifiers change, with no permanent or cached linkage history affecting the current window.

### 4. Independence from Scoring

Linking operates purely on identity signals and is decoupled from performance metrics.

* It does **not depend on scores**.
* It does **not consider submission timestamps**.

---

## Practical Effect

Within a given interval, multiple UIDs controlled by the same operator are **collapsed into one identity**. This prevents a single miner from appearing as multiple independent participants, ensuring a level playing field.

!!! note "Non-Punitive Design"
    The system does not block or remove UIDs. It simply groups them for **fair treatment** during reward distribution.

---

## Benefits

* **Reduces UID-based abuse:** Limits the advantage of running multiple UIDs from the same setup.
* **Keeps evaluation current:** Reflects real-time conditions by recomputing every 20 minutes.
* **Avoids rigid penalties:** No permanent banning, only temporary, interval-based association.
* **Adds operational friction:** Requires consistent separation across IP, keys, and accounts to avoid linkage.

---

## Summary

* **Interval:** Applied every 20 minutes.
* **Signals:** Groups UIDs based on IP, Coldkey, and DockerHub username.
* **State:** Stateless across intervals; reflects only the current state.
* **Purpose:** Ensures multiple UIDs from the same source are treated as **one logical miner per interval**.
