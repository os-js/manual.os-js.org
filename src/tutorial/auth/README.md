---
description: This tutorial will show you how to use the authentication system and create custom adapters.
full_title: Authentication Tutorial
---

# Authentication Tutorial

This tutorial will show you how to use the authentication system and create custom adapters.

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

> For general information about development see [development article](../../development/README.md).

### Client

```javascript
const myAdapter = (core, config) => ({
  async login(values) {
    // You can transform the form values from login here if you want
    return values;
  },

  async logout() {
    // And perform special operations on logout
    return true;
  }
});

export default myAdapter;
```

### Server

In this example we only allow the user `anders` with the password `evenrud`.

> Please note that the OS.js client expects to receive an JSON object with at least `{id, username}`.

```javascript
const myAdapter = (core, config) => ({
  async login(req, res) {
    const {username, password} = req.body;

    if (username === 'anders' && password === 'evenrud') {
      return {id: 666, username, groups: ['admin']};
    }

    return false;
  },

  async logout(req, res) {
    return true;
  }
});

module.exports = myAdapter;
```

#### Blacklisting applications

If you return an array of application names in the property `blacklist` from the login, you can hide applications from a user.

This can be configured via the authentication adapter you're using.

## Using classes

You can also use class pattern for your adapter:

```javascript
class MyAuthAdapter {
  constructor(core, config) {
    this.core = core;
    this.options = options;
  }

  async login(values) {
    return values;
  }

  async logout() {
    return true;
  }
}

// or for server: module.exports = function()
export default function(core, options) {
  return new MyAuthAdapter(core, options);
}
```
