---
date:
    created: 2025-11-16T10:00:00
authors:
  - javokhir
categories:
  - Announcement
tags:
  - Docker
  - containerd
  - CI
  - Challenges
readtime: 4
title: "Docker v29: Pinning to v28 for Challenge Stability"
---

## Summary

Docker released v29 recently. The new release includes changes to engine behavior and the default storage subsystem that caused build-time failures in our challenge runners. Because our challenges often use the popular `get-latest-docker` helper (which pulls the newest engine binary), pulling v29 introduced instability for image builds in our Docker-in-Docker challenge layout. To preserve stable validation and fair comparisons, challenge runners are pinned to Docker **v28** for now. Testing and validation remain supported on v28.

![Docker v29 Breaking Challenge Builds](../../assets/images/docker_v29_issue_poster.png)

## What happened

- Docker v29 adjusted interactions with `containerd` and storage subsystems and changed defaults that affect lightweight installs and DinD (Docker-in-Docker) builds.
- Our challenge build flow performs image builds inside DinD runners. During builds we remove APT/cache files with a cleanup step such as:
  `rm -rfv /var/lib/apt/lists/* /var/cache/apt/archives/* /tmp/* /root/.cache/* "/home/${USER}/.cache/*"`
  On v29 this cleanup surfaced permission/consistency issues because some runtime files that were previously safe to remove are now used differently by the engine/storage stack.
- Multiple miners reported build failures when their challenge images were built under v29; scoring and validators themselves were not affected because they run from cached challenge containers (so cached runners continued to work).
- The new default storage subsystem in v29 requires extra setup for some challenge environments; rather than patch each challenge build immediately we applied a stable pin to v28.

## Immediate mitigation

!!! warning "Pinned to Docker v28"
    Challenge runners will no longer pull the absolute latest Docker binary by default. We will install and test with Docker **v28** until upstream fixes or clear migration guidance are available.

Additional mitigation provided:

- We added an option to disable the v29 default snapshotter behavior. A JSON option such as:

```json
{ "features": { "containerd-snapshotter": false } }
```

can avoid the new storage-subsystem behaviour; this option is exposed as a toggle in our `docker-entrypoint.sh` so maintainers can opt to run with that compatibility mode if they need to test on v29.

## Impact on challenges

- Failures occurred during image builds (DinD) rather than validator/runtime scoring; miners observed build-time errors and permission problems.
- Reproducibility and fairness could be affected if different runs pick different engine versions during build time.
- Some challenges that rely on specific filesystem/layout assumptions may need small changes to support v29 safely.

## How to test locally

- Install Docker v28 (package manager or official v28 release).
- Recreate the challenge build environment locally and run the same image build steps used by the runner.
- To test v29 compatibility, either:
    - Use the provided `docker-entrypoint.sh` toggle that injects `{"features":{"containerd-snapshotter": false}}` into the daemon config, or
    - Manually set the equivalent daemon configuration before running builds.
- If you see permission or missing-file errors during builds, check any aggressive cleanup steps (like the `rm -rfv ...` cleanup) and avoid removing runtime files that the engine or containerd expects.

## Next steps

- Update `get-latest-docker` (or our wrapper) to default to v28 and document the pinned version in challenge READMEs.
- Add CI checks to assert the engine version and surface DinD build failures early.
- Monitor upstream Moby/Docker fixes and re-evaluate rolling to v29 once compatibility is verified and documented.
- For maintainers who need v29 features, open an issue with justification; we can provide targeted runner configs or opt-in settings.

## References

- [Moby issue discussion](https://github.com/moby/moby/issues/51475#issuecomment-3526792046)
- [Docker v29 release notes](https://github.com/moby/moby/releases/tag/docker-v29.0.0)
- [Docker / containerd storage docs](https://docs.docker.com/engine/storage/containerd/)
