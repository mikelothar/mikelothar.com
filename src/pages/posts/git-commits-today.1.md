---
path: "/development/test"
date: "2017-12-21"
title: "Force Jacket:"
subtitle: "Pneumatically-Actuated Jacket for Embodied Haptic Experiences"
---

This little command will show you what commits you did for the last 5 days. Good for many things, like when you need to register time on what code you've been working on.

```bash
git log --committer="your name" --since="5 days ago" --no-merges --pretty=format:"%<(20) %ar %s"
```

Outputs the following:

```bash
33 minutes ago       IU-6260: make sure og:image always have https in prod
2 hours ago          IU-6260: remove duplicate http/https
3 days ago           IU-7998: fix hit area
3 days ago           IU-7998: extend clickable area to whole div, give link pointer on hover
3 days ago           IU-9679: don't show latest login time for 30 s if user closed the notification
3 days ago           IU-9679: remove magic numbers
```
