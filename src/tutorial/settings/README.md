# Settings

The `Settings` class handles settings requests. Two dapters are provided by default:

* `server` (default)
* `localStorage`

See [guide](/guide/settings/README.md) on how to use this in your distribution.

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
