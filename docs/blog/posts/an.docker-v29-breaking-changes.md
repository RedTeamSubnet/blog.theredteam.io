---
date:
    created: 2025-11-16T09:00:00
authors:
  - javokhir
categories:
  - Announcement
  - News
tags:
  - Docker
  - Infrastructure
  - Breaking Changes
  - Testing
readtime: 5
title: "Subnet Announcement: Docker v29 Breaking Changes and Version Pinning"
---

## Introduction

Docker recently released version 29, which includes significant breaking changes that affect our challenge infrastructure. This announcement explains the changes, their impact on RedTeam Subnet, and our decision to temporarily pin to Docker v28.

<!-- more -->

## Docker v29 Breaking Changes

![Docker Version Update](../../assets/images/docker-v29-update.png)

Docker v29 introduces the containerd image store as the **default** storage backend, replacing the traditional GraphDriver-based image store. While this change brings performance improvements and better alignment with OCI standards, it also introduces breaking changes that affect existing workflows.

### Key Changes in Docker v29

- **Containerd Image Store as Default**: The containerd image store (previously experimental) is now the default backend.
- **API and CLI Changes**: Some Docker API endpoints and CLI commands behave differently with the new image store.
- **Compatibility Issues**: Existing tools and scripts that rely on the GraphDriver-based image store may not work correctly.
- **Migration Required**: Moving to the new image store requires careful testing and potential code adjustments.

### Technical Details

For more information about the containerd image store and migration guide, see:

- [Docker v29.0.0 Release Notes](https://github.com/moby/moby/releases/tag/docker-v29.0.0)
- [Containerd Image Store Documentation](https://docs.docker.com/engine/storage/containerd/)
- [GitHub Issue #51475](https://github.com/moby/moby/issues/51475#issuecomment-3526792046)

## Impact on RedTeam Subnet Challenges

Our challenge infrastructure heavily relies on Docker for creating isolated testing environments. Each challenge uses the popular `get-latest-docker` binary to automatically download and install the latest Docker version.

### Issues Discovered

!!! warning "Compatibility Problems"
    After the Docker v29 release, we identified several compatibility issues:
    
    - **Challenge Environment Setup**: Some challenges failed during Docker setup phase.
    - **Image Management**: Container image operations behaved differently than expected.
    - **Testing Failures**: Automated tests showed inconsistent results with Docker v29.

These issues prevented miners from properly testing their submissions and could have led to unfair scoring.

## Our Solution: Pinning to Docker v28

To ensure stability and consistent testing for all participants, we have made the following decision:

!!! info "Version Pinning Strategy"
    - **Current Version**: We are now pinning to Docker v28 across all challenges.
    - **Installation Method**: Updated the `get-latest-docker` binary to specifically pull Docker v28.
    - **Testing Status**: All challenges are now fully compatible and tested with Docker v28.

### Why Docker v28?

- **Stability**: Docker v28 is a proven, stable release with well-understood behavior.
- **Compatibility**: All existing challenges work seamlessly with Docker v28.
- **Testing**: Comprehensive testing confirms all challenge environments function correctly.
- **Miner Experience**: Ensures consistent and fair testing environment for all miners.

## Testing and Validation

We have thoroughly tested all challenges with Docker v28:

- ✅ **AB Sniffer Challenge**: Fully functional with Docker v28.
- ✅ **Device Fingerprinting**: All test cases passing.
- ✅ **Humanize Behaviour**: Complete validation successful.
- ✅ **Environment Setup**: Docker installation and configuration working as expected.

## Future Plans

!!! note "Roadmap for Docker v29"
    We are actively working on Docker v29 compatibility:
    
    - **Evaluation**: Analyzing the changes required for full Docker v29 support.
    - **Testing**: Setting up dedicated test environments with Docker v29.
    - **Migration Plan**: Developing a phased approach to upgrade when ready.
    - **Communication**: Will announce the upgrade well in advance to give miners time to prepare.

We will continue to monitor the Docker v29 ecosystem and plan our migration carefully to ensure zero downtime and a smooth transition for all participants.

## What This Means for Miners

For miners, this change is transparent:

- **No Action Required**: The challenge infrastructure automatically uses Docker v28.
- **Consistent Testing**: All miners test against the same Docker version, ensuring fairness.
- **Stable Environment**: No unexpected behavior or breaking changes during testing.

Stay tuned for updates on Docker v29 migration!
