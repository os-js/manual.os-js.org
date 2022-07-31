---
description: A guide for customizing authentication.
full_title: Authentication Guide
---

# Authentication Guide

OS.js provides options for customizing the authentication procedure.

By default the client is set up to automatically log in with a "demo user"
account and the server responds to any authentication request successfully.

This functionality can be changed by configuration and using a different *[#configuring-adapter](adapter)*

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

To change the client-side authentication adapter, modify your bootstrap file `src/client/index.js`.

```javascript
import customAdapter from 'custom-adapter';

osjs.register(AuthServiceProvider, {
  args: {
    // Default
    adapter: 'server',

    // Custom
    adapter: customAdapter,
    config: { /* Your configuration here */}
  }
});
```

### Server

To change the server-side authentication adapter, modify your bootstrap file `src/server/index.js`.

```javascript
const customAdapter = require('custom-adapter');

osjs.register(AuthServiceProvider, {
  args: {
    adapter: customAdapter,
    config: { /* Your configuration here */}
  }
});
```
