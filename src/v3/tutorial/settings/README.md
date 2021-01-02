---
description: This tutorial will show you how to manage settings, and how to create your own settings adapter.
full_title: Settings Tutorial
---

# Settings Tutorial

This tutorial will show you how to manage settings, and how to create your own settings adapter.

> The `Settings` adapter handles settings requests.

## Usage

### Global

```javascript
const settings = core.make('osjs/settings');

// Saves all settings
settings.save();

// Loads all settings
settings.load();

// Gets a settings object from a namespace
settings.get('some/namespace');

// Sets a settings object to a namespace
settings.set('some/namespace', 'key', 'value')
```

### Application

An application is given the namespace `osjs/application/{name}` (where the name is taken from your application metadata):

```javascript
import {name as applicationName} from './metadata.json';

OSjs.make('osjs/packages').register(applicationName, (core, args, options, metadata) => {
  // Default settings
  options.settings = {
    foo: 'bar'
  };

  const proc = core.make('name', {options, args, metadata});

  // Get a setting
  console.log(proc.settings.foo); // => "bar"

  // Set a setting
  proc.settings.foo = 'baz';

  // Save settings
  proc.saveSettings()
    .then(() => console.log('done'));

  return proc;
};
```

## Custom Settings Adapter

To set up your adapter, see the [settings guide](/guide/settings/README.md).

To generate a new adapter using the example via CLI run `npm run make:settings`.

> For general information about development see [development article](../../development/README.md).

### Client

```javascript
const myAdapter = (core, options) => ({
  async save(values) {
    // Create your own request here with 'values' settings
    return true;
  },

  async load() {
    // Create your own request here and return settings
    return {};
  }
});

export default myAdapter;
```

### Server

```javascript
module.exports = (core, options) => ({
  async save(req, res) {
    // req.body has all settings from client
    return true;
  },

  async load(req, res) {
    // return all settings for user here
    return {};
  }
});
```

## Using classes

You can also use class pattern for your adapter:

```javascript
class MySettingsAdapter {
  constructor(core, options) {
    this.core = core;
    this.options = options;
  }

  async save(values) {
    return true;
  }

  async load() {
    return {};
  }
}

// or for server: module.exports = function()
export default function(core, options) {
  return new MySettingsAdapter(core, options);
}
```
