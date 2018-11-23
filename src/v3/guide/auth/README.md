---
description: OS.js v3 Authentication Guide
full_title: Authentication Guide
---

# Authentication Guide

OS.js provides options for customizing the authentication procedure.

Two adapters are provided by default:

* `server` (default)
* `localStorage`

> NOTE: By default the client is set up to log in with the `demo` account. To disable this behavior, modify your `src/client/config.js` file. See [configuration article](../config/README.md) for more information.

## Configuring adapter

See [official resource list](/resource/official/README.md) for provided adapters.

> The README file of the module should provide more specific examples.

> See [provider guide](../provider/README.md) for more information about provider setup.

### Client

You can set up a custom client adapter to modify the requests etc.:

```javascript
import customAdapter from 'custom-adapter';

core.register(AuthServiceProvider, {
  args: {
    adapter: customAdapter
  }
});
```


### Server

```javascript
const customAdapter = require('custom-adapter');

core.register(AuthServiceProvider, {
  args: {
    adapter: customAdapter
  }
});
```

## Configure adapter settings

The `config` parameter is passed on from your service provider registration:

```javascript
core.register(AuthServiceProvider, {
  args: {
    adapter: customAdapter
    config: { /* Your configuration here */}
  }
});
```

If you have sensitive information in your configuration, consider using [dotenv](https://github.com/motdotla/dotenv).

## Blacklisting applications

If you return an array of application names in the property `blacklist` from the login, you can hide applications from a user.

This can be configured via the authentication adapter you're using.
