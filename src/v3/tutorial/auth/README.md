---
description: OS.js v3 Authentication Tutorial
---

# Auth Tutorial

This tutorial will show you how to create your own authentication adapter.

> The `Auth` adapter handles authentication requests.

## Usage

The client authentication service provides some API methods:

```javascript
const auth = core.make('osjs/auth');
auth.user(); // Get user information
auth.show(fn); // Shows the authentication dialog (internal usage only)
auth.login({username, password}); // Log in a user
auth.logout(reload?); // Log out current user
```

## User Information

You can get the user information from `core.make('osjs/auth').user()` in the client and `req.session.user` in the server.

## Custom Authentication Adapter

To set up your adapter, see the [authentication guide](/guide/auth/README.md).

To generate a new adapter using the example via CLI run `npm run make:auth`.

### Client

```javascript
const myAdapter = (core, config) => ({
  login: values => {
    // You can transform the form values from login here if you want
    return Promise.resolve(values);
  },

  logout: () => {
    // And perform special operations on logout
    return Promise.resolve(true);
  }
});

export default myAdapter;
```

### Server

In this example we only allow the user `anders` with the password `evenrud`.

> Please note that the OS.js client expects to receive an JSON object with at least `{id, username}`.

```javascript
module.exports = (core, config) => ({
  login: (req, res) => {
    const {username, password} = req.body;

    if (username === 'anders' && password === 'evenrud') {
      return Promise.resolve({id: 666, username, groups: ['admin']});
    }

    return Promise.resolve(false);
  },

  logout: (req, res) => {
    return Promise.resolve(true);
  }
});
```
