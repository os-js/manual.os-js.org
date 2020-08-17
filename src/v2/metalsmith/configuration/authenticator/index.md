---
title: Authenticator
layout: layout.html
---

# Authenticator

The `Authenticator` handles authentication, groups and blacklists etc. for users.

## Demo

For demonstration purposes. Does not do any actual athentication and has no restrictions.

```bash
$ node osjs config:set --name=authenticator --value=demo
$ node osjs build:config
```

## PAM

[PAM](/configuration/authenticator/pam/) is the main way of using Linux authentication system.

## Shadow

[Shadow](/configuration/authenticator/shadow/) is an alternate way of using Linux authentication system.

## Database

[Database](/configuration/authenticator/database/) allows for authentication via a Database.
