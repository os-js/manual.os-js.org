---
description: OS.js v3 Settings Tutorial
---

# Settings Tutorial

This tutorial will show you how to manage settings, and how to create your own settings adapter.

> The `Settings` adapter handles settings requests.

See [guide](/guide/settings/README.md) on how to use this in your distribution.

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

## Custom Adapter

### Client

```javascript
const myAdapter = (core, options) => ({
  save: values => {
    // Create your own request here with 'values' settings
    return Promise.resolve(true);
  },

  load: () => {
    // Create your own request here and return settings
    return Promise.resolve({})
  }
});

export default myAdapter;
```

### Server

```javascript
module.exports = (core, options) => ({
  save: (req, res) => {
    // req.body has all settings from client
    return Promise.resolve(true);
  },
  load: (req, res) => {
    // return all settings for user here
    return Promis.resolve({});
  }
});
```
