# Authentication Guide

OS.js provides options for customizing the authentication procedure.

Two adapters are provided by default:

* `server` (default)
* `localStorage`

## Configuring adapter

See [official resource list](/resource/official/README.md) for provided adapters.

> The README file of the module should provide more spesific exaples.

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

## Blacklisting applications

If you return an array of application names in the property `blacklist` from the login, you can hide applicaions from a user.

This can be configured via the authentication adapter you're using.
