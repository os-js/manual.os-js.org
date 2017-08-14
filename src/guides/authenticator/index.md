---
title: Authenticator Guide
layout: layout.html
---

# Authenticator Guide

These classes are written in ES6. Look at the API Documentation for methods, etc.

## Client

```javascript
class MyAuthenticator extends Authenticator {
  login(data) {}
  logout() {}
}
```

## Server

```javascript
class MyAuthenticator extends Authenticator {
  login(data) {}
  logout() {}
  getUserFromRequest(http) {}
  getBlacklist() {}
}
```



