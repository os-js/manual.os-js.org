# Settings

The `Settings` class handles settings requests. By default a `LocalStorageSettings` and `ServerSettings` module is provided, but you can make your own.

See [guide](/guide/settings/README.md) on how to use this in your distribution.

## Custom Settings Adapter

### Client

```
const myAdapter = (core, options) => ({
  save: values => Promise.resolve(true),
  load: () => Promise.resolve(true)
});

export default myAdapter;
```

### Server

```
module.exports = (core, options) => ({
  save: (req, res) => Promise.resolve(true),
  load: (req, res) => Promis.resolve({})
});
```
