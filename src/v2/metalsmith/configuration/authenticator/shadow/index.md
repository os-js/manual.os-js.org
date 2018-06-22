---
title: Shadow Authenticator
layout: layout.html
---

# Shadow Authenticator

Log in via the system authentication system. **This is only available for Linux and Node**.

**Also set up the [System storage](/configuration/storage/#system) module for this to work as intended.**

**NOTE:** Remember to restart the server to reload configuration changes.

## Dependencies

In your OS.js installation directory:

```bash
$ npm install --no-save git+https://github.com/andersevenrud/passwd-linux userid
```

#include "configuration/authenticator/_pamshadow.md"
