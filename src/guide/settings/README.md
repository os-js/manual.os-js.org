---
description: A guide on customizing settings adapters
full_title: Settings Guide
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
osjs.register(SettingsServiceProvider, {
  args: {
    adapter: 'server'
  }
});
```

### Server

```javascript
const customAdapter = require('custom-adapter');

osjs.register(SettingsServiceProvider, {
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
osjs.register(SettingsServiceProvider, {
  args: {
    adapter: 'server'
  }
});

// server
osjs.register(SettingsServiceProvider, {
  args: {
    adapter: 'fs',
  }
});
```

## Configure adapter settings

The `config` parameter is passed on from your service provider registration:

```javascript
osjs.register(SettingsServiceProvider, {
  args: {
    adapter: customAdapter
    config: { /* Your configuration here */}
  }
});
```

If you have sensitive information in your configuration, consider using [dotenv](https://github.com/motdotla/dotenv).
