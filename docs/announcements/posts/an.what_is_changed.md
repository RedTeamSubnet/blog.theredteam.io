---
date:
    created: 2026-01-29T10:00:00
authors:
  - javokhir
categories:
  - Announcement
  - News
  - Updates
tags:
  - repository
  - migration
  - validator
  - miner
  - challenges
readtime: 6
title: Major System Updates and Repository Migration Complete
---

# Major System Updates and Repository Migration Complete

![Announcement Banner](../../assets/images/annoucements/an.comlite_reconstruction.png)

We're excited to announce several significant improvements to the RedTeam subnet infrastructure, building on the recent repository migration. These changes enhance system reliability, simplify operations, and improve the overall experience for miners and validators.

## 🏗️ Repository Migration Complete

Following our announcement on January 19th, the repository split is now complete. The monolithic `RedTeam` repository has been successfully separated into four focused projects:

- **[Miner Repository](https://github.com/RedTeamSubnet/miner)** - Dedicated miner codebase
- **[Validator Repository](https://github.com/RedTeamSubnet/validator)** - Streamlined validator implementation  
- **[RedTeam Core](https://github.com/RedTeamSubnet/RedTeam)** - Shared components and protocol types
- **Individual Challenge Repositories** - Each challenge now has its own repository

### Template Commit Schema Changes

The template commit schema has been moved to each `<challenge_repo>/template/commits` folder. This provides better organization and makes it easier for miners to understand submission requirements for each specific challenge. More details are available in the [RedTeam documentation](https://docs.theredteam.io).

## HuggingFace Dependency Removed

We've removed the HuggingFace dependency from our system. This decision was made after updating the dashboard with comprehensive information that rendered the external dependency unnecessary. Key benefits:

- **Improved reliability** - Eliminates dependency-related failures in some validators
- **Consistent weight setting** - Removes inconsistencies that were affecting miner incentives
- **Simplified architecture** - Reduces system complexity and potential points of failure

## Humanize Behaviour v5 Challenge Deprecated

The `humanize_behaviour_v5` challenge has been officially removed from active rotation. This decision was based on:

- **Age of challenge** - Originally released 6 months ago
- **Stagnation** - No new submissions for the past 2 months
- **Completion** - All aspects of the challenge were thoroughly solved by the community

The challenge served its purpose in advancing human-like behavior simulation, and we thank all miners who contributed innovative solutions.

## Enhanced Security and Comparison Logic

### Encrypted Commit Display

Comparison output now shows encrypted commit hashes instead of SHA digests of Docker Hub image submissions. This implementation:

- **Protects intellectual property** - Hides implementation details of reference scripts
- **Maintains transparency** - Still allows verification of submission authenticity
- **Improves security posture** - Reduces potential for reverse engineering

### Early Termination for Invalid Submissions

The comparison logic now includes early termination when the similarity score reaches the 0.6 threshold limit. This optimization:

- **Saves computational resources** - Stops processing obviously invalid submissions
- **Improves validator efficiency** - Focuses resources on potentially valid submissions
- **Reduces processing time** - Provides faster feedback for the ecosystem

## Action Items

!!! info "For All Participants"
    - Ensure you're using the new repository structure
    - Update your local clones to point to the new repositories
    - Review the updated documentation at [docs.theredteam.io](https://docs.theredteam.io)
    - Check your environment variables and service configurations

!!! success "Benefits Summary"
    These updates collectively provide:
    - **Faster deployment cycles** for new features and fixes
    - **Better stability** through reduced dependencies
    - **Improved security** with enhanced protection mechanisms
    - **Cleaner codebase** through challenge deprecation and repository organization
    - **More efficient validation** with optimized comparison logic

## System Status and Reliability

The migration has been highly successful with **almost all validators** now updated to the new repository structure. The entire system is functioning smoothly with no significant issues reported. 

!!! tip "Service Status Monitoring"
    For real-time monitoring of our services' uptime and status, you can check our status page at **[status.theredteam.io](https://status.theredteam.io/)**. This provides transparent visibility into system performance for all miners and validators.

## Upcoming Challenges

We're actively developing two new challenges to expand our testing capabilities:

- **dfp v2** (Device Fingerprinter v2) - Enhanced device detection and fingerprinting challenge
- **ada v2** (Anti-Detect Automation Detection v2) - Next-generation automation detection

While we don't have an exact release date yet, we're planning to make these challenges available **within the next month**. These new challenges will continue to push the boundaries of cybersecurity innovation and provide fresh opportunities for miners to showcase their skills.

## 🚀 Looking Forward

These infrastructure improvements position us for rapid development cycles and enhanced reliability. The modular repository structure will allow us to ship features faster while maintaining the stability and security that our community depends on.

If you encounter any issues during this transition, please reach out through our [Discord channel](https://discord.com/channels/799672011265015819/1319313447435108413) or open issues in the relevant repositories.

---

*Continue building innovative solutions and stay tuned for more exciting developments in the RedTeam ecosystem!*
