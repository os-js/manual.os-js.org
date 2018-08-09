---
description: OS.js v3 Clipboard Tutorial
---

# Clipboard Tutorial

The client provides a primitieve clipboard:

```javascript
const clipboard = core.make('osjs/clipboard');

// Sets current
clipboard.set(value);

// Gets current
clipboard.get();

// Clears current
clipboard.clear();
```
