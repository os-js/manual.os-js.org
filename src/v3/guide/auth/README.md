# Authentication Guide

OS.js provides options for customizing the authentication procedure.

Two adapters are provided by default:

* `server` (default)
* `localStorage`

## Configuring adapter

See [official resource list](/resource/official/README.md) for provided adapters.

> The README file of the module should provide more spesific exaples.

### Server

```javascript
core.register(AuthServiceProvider, {
  args: {
    adapter: fn
  }
});
```

## Blacklisting applications

If you return an array of application names in the property `blacklist` from the login, you can hide applicaions from a user.

This can be configured via the authentication adapter you're using.
