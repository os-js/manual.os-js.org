---
title: PAM Authenticator
layout: layout.html
---

# PAM Authenticator

Log in via the system authentication system. **This is only available for Linux and Node**.

**NOTE:** Remember to restart the server to reload configuration changes.

**Also set up the [System storage](/configuration/storage/#system) module for this to work as intended.**

## Dependencies

In your OS.js installation directory:

```bash
$ npm install --no-save userid authenticate-pam nan@1.1.0
```

You'll need the development library for libpam if you're on Ubuntu or similar:
```bash
$ sudo apt-get install libpam-1g-dev
```

* On some systems you might have to install `authenticate-pam` with `npm install -g` or else you might get a *Error in service module* upon request.
* Also, on some systems you might have to run OS.js server as a privileged user, or with adjusted SELinux rules.

#include "configuration/authenticator/_pamshadow.md"

