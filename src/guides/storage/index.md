---
title: Storage Guide
layout: layout.html
---

# Storage Guide

These classes are written in ES6. Look at the API Documentation for methods, etc.

## Client

```javascript
class MyStorage extends Storage {
  saveSettings(pool, storage) {
    // If you don't need to modify the request,
    // just let the base class handle it.

    return super.saveSettings(...arguments); // => Promise
  }

  saveSession() {
    // If you don't need to modify the session,
    // just let the base class handle it.

    return super.saveSession(...arguments); // => Promise
  }
}
```

## Server

```javascript
class MyStorage extends Storage {
  setSettings(user, settings) {
    return Promise.resolve(true);
  }

  getSettings(user) {
    return Promise.resolve({});
  }
}
```

