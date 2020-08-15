---
description: A guide for customizing authentication.
full_title: Authentication Guide
---

# Authentication Guide

OS.js provides options for customizing the authentication procedure.

By default the client is set up to automatically log in with a "demo user" account and the server responds to any authentication request successfully.

This functionality can be changed by configuration and using a different *adapter*

These are the available client adapters:

* `server` - Authenticate via the server (default)
* `localStorage` - Null authentication (used in standalone mode)

And these are the available server adapters:

* `null` - Accepts any authentication request (default)
* [PAM](https://github.com/os-js/osjs-pam-auth) - Log in via host PAM (UNIX only)
* [database](https://github.com/os-js/osjs-database-auth) - Log in via a database

## Removing automatic login

In your `src/client/config.js` file either comment out or remove this section entirely:

```javascript
{
  auth: {
    login: {
      username: 'demo',
      password: 'demo'
    }
  }
}
```

## Configuring adapter

Adapters are listed in the [official resource list](/resource/official/README.md) and above.

> The README file of the module should provide more specific examples.

> See [provider guide](../provider/README.md) for more information about provider setup.

> If you have sensitive information in your configuration, consider using [dotenv](https://github.com/motdotla/dotenv).

Modifying the adapter requires changing the `AuthServiceProvider` options:

### Client

You can set up a custom client adapter to modify the requests etc.:

```javascript
import customAdapter from 'custom-adapter';

core.register(AuthServiceProvider, {
  args: {
    adapter: customAdapter,
    config: { /* Your configuration here */}
  }
});
```

### Server

```javascript
const customAdapter = require('custom-adapter');

core.register(AuthServiceProvider, {
  args: {
    adapter: customAdapter,
    config: { /* Your configuration here */}
  }
});
```
