---
title: Storage Guide
layout: layout.html
---

# Storage Guide

These classes are written in ES6. Look at the API Documentation for methods, etc.

This is a **Node Server Service**, not a *Service Package* (which is client-side).

## Client

```javascript
class MyStorage extends Storage {
  saveSettings() {}
  saveSession() {}
}
```

## Server

```javascript
class MyStorage extends Storage {
  setSettings() {}
  getSettings() {}
}
```

