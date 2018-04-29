# Auth

The `Auth` class handles authentication requests. By default a `LocalStorageAuth` and `ServerAuth` module is provided, but you can make your own.

See [guide](/guide/auth/README.md) on how to use this in your distribution.

## Custom Auth Adapter

### Client

```
const myAdapter = (core, options) => ({
  login: values => Promise.resolve(values),
  logout: () => Promise.resolve(true)
});

export default myAdapter;
```

### Server

```
module.exports = (core, options) => ({
  login: (req, res) => Promise.resolve(req.body),
  logout: (req, res) => Promis.resolve(true)
});
```
