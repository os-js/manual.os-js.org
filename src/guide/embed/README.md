---
description: A guide on how to embed OS.js
full_title: Embedding Guide
---

# Embedding Guide

It is possible to select which DOM nodes to use for spawning the OS.js client.

In your `src/client/index.js` file:

```javascript
const init = () => {
  const osjs = new Core(config, {

    // What node to place all dynamically created DOM
    root: document.body,

    // What node to place dynamically loaded scripts etc.
    resourceRoot: document.querySelector('head')
  });

  // ...
};

window.addEventListener('DOMContentLoaded', () => init());
```
