---
date:
    created: 2026-01-19T10:00:00
authors:
  - javokhir
categories:
  - Announcement
  - News
tags:
  - repository
  - migration
  - validator
readtime: 4
title: Repository split and migration deadline
---

## Repository split and migration deadline

![Announcement Banner](../../assets/images/annoucements/an.new_structure.png)

We are separating the monolithic `RedTeam` repository into four focused projects so updates can ship faster and operators can manage only what they run. The split will be merged on **Jan 25, 2026**. After the merge, any validator still using the old repo will stop working.

### What moved where

!!! info "Repositories and docs"
    - **Shared core** contains shared services and protocol types. Find the source in the streamlined [RedTeam repo](https://github.com/RedTeamSubnet/RedTeam), which we're transitioning to `redteam_core`.
    - **Miner** documentation is available in the [Miner docs](https://docs.theredteam.io/latest/miner/), and the code is in the [miner repository](https://github.com/RedTeamSubnet/miner).
    - **Validator** documentation is available in the [Validator docs](https://docs.theredteam.io/latest/validator/), and the code is in the [validator repository](https://github.com/RedTeamSubnet/validator).

### Required actions for validators

- Stop your existing validator that was built from the monolithic repo.
- Clone the dedicated validator repository and follow the installation steps provided in its README.
- Update your environment variables and service definitions to point at the new codebase.
- Restart the validator and confirm it by monitoring the logs.
- Before Jan 25, ensure your team understands the split: miners use the miner repo, validators use the validator repo, and shared bits live in `redteam_core`.

### Timeline

- **Now**: The migration window is open, and we encourage you to switch immediately.
- **Jan 25, 2026**: The new repos become authoritative. Validators still on the old repo will stop and lose rewards until migrated.

### Why the change

- This split enables faster, isolated releases for miners, validators, and the scoring server.
- It provides tighter blast-radius control and clearer ownership for each role.
- We keep `redteam_core` lighter by including only shared components.
- The result is a simpler security posture where public APIs stay public while validator runtimes and shared core remain compartmentalized.
- It makes onboarding easier since miners and validators only pull what they need, reducing update friction and dependency drift.

If you hit issues while migrating, open a GitHub issue in the relevant repo or reach out in our public [Discord channel on the Bittensor server](https://discord.com/channels/799672011265015819/1319313447435108413).
