# Settings Guide

OS.js provides options for customizing the settings storage.

> By default a "null" handler is user, which just saves the settings into the browser local storage.

## Configuring adapter

See [official resource list](/resource/official/README.md) for provided adapter.

> The README file of the module should provide more spesific exaples.

### Client

```javascript
const osjs = new Core(config, {
  registerDefault: {
    settings: {
      adapter: 'server'
    }
  }
});

### Server

```javascript
const instance = new Core(config, {
  registerDefault: {
    settings: {
      adapter: fn
    }
  }
});
```

## Configuring defaults

The default settings are located in `settings.defaults` (see `@osjs/client/src/config.js`).

You can override these settings. Make sure to bump the `__revision__` value to make sure new settings are migrated.
