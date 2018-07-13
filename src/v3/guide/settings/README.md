# Settings Guide

OS.js provides options for customizing the settings storage.

Two dapters are provided by default:

* `localStorage` (in-browser, default)
* `server` (via server)

## Configuring adapter

See [official resource list](/resource/official/README.md) for provided adapter.

> The README file of the module should provide more spesific exaples.

> See [provider guide](../provider/README.md) for more information about provider setup.

### Client

```javascript
core.register(SettingsServiceProvider, {
  args: {
    adapter: 'server'
  }
});
```

### Server

```javascript
core.register(SettingsServiceProvider, {
  args: {
    adapter: fn
  }
});
```

## Storing on filesystem

You can use the provided 'fs' adapter to store settings on a filesystem:

> Settings are stored in `home:/.osjs/settings.json` by default.

```javascript
// client
core.register(SettingsServiceProvider, {
  args: {
    adapter: 'server'
  }
});

// server
core.register(SettingsServiceProvider, {
  args: {
    adapter: 'fs',
  }
});
```
