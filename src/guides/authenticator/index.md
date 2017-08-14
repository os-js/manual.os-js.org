---
title: Authenticator Guide
layout: layout.html
---

# Authenticator Guide

These classes are written in ES6. Look at the API Documentation for methods, etc.

## Client

In this example we just use a dummy user.

```javascript
class MyAuthenticator extends Authenticator {
  login(data) {
    return Promise.resolve({
      userData: data.user, // id, username, groups and so on
      userSettings: data.settings // a tree with settings
    });
  }

  logout() {
    return Promise.resolve(true);
  }

  onCreateUI() {
    // You can construct your login GUI here, but in this example
    // we just short-circuit it to perform a login with given credentials
    return this.onLoginRequest({
      username: 'example',
      password: 'example'
    });
  }
}
```

## Server

In this example we just use a dummy user.

```javascript
const exampleUser = {
  id: 123,
  username: 'example',
  name: 'Example user',
  groups: ['admin']
};

class MyAuthenticator extends Authenticator {
  login(data) {
    // Data from login form is in `data`
    return Promise.resolve(exampleUser);
  }

  logout() {
    return Promise.resolve(true);
  }

  getUserFromRequest(http) {
    return Promise.resolve(User::createFromObject(exampleUser));
  }

  getGroups(user) {
    return Promise.resolve(exampleUser.groups);
  }

  getBlacklist(user) {
    // If you want to blacklist certain packages from the user
    return Promise.resolve([]);
  }
}
```



