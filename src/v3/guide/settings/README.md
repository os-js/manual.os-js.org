---
description: OS.js v3 Settings Guide
---

# Settings Guide

OS.js provides options for customizing the settings storage.

Two adapters are provided by default:

* `localStorage` (in-browser, default)
* `server` (via server)

## Configuring adapter

See [official resource list](/resource/official/README.md) for provided adapter.

> The README file of the module should provide more specific examples.

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
const customAdapter = require('custom-adapter');

core.register(SettingsServiceProvider, {
  args: {
    adapter: customAdapter
  }
});
```

### Storing on filesystem

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

## Configure adapter settings

The `config` parameter is passed on from your service provider registration:

```javascript
core.register(SettingsServiceProvider, {
  args: {
    adapter: customAdapter
    config: { /* Your configuration here */}
  }
});
```

If you have sensitive information in your configuration, consider using [dotenv](https://github.com/motdotla/dotenv).
