# Settings

The `Settings` adapter handles settings requests.

See [guide](/guide/settings/README.md) on how to use this in your distribution.

## Usage

```
const settings = core.make('osjs/settings');

// Saves all settings
settings.save();

// Loads all settings
settings.load();

// Gets a settings object from a namespace
settings.get('some/namespace');

// Sets a settings object to a namespace
settings.set('some/namespace', {key: 'value'})
```

## Custom Adapter

### Client

```javascript
const myAdapter = (core, options) => ({
  save: values => Promise.resolve(true),
  load: () => Promise.resolve(true)
});

export default myAdapter;
```

### Server

```javascript
module.exports = (core, options) => ({
  save: (req, res) => Promise.resolve(true),
  load: (req, res) => Promis.resolve({})
});
```
