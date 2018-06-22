# Auth

The `Auth` adapter handles authentication requests.

See [guide](/guide/auth/README.md) on how to use this in your distribution.

## User Information

You can get the user information from `core.make('osjs/auth').user()` in the client and `req.session.user` in the server.

## Custom Adapter

### Client

```javascript
const myAdapter = (core, options) => ({
  login: values => Promise.resolve(values),
  logout: () => Promise.resolve(true)
});

export default myAdapter;
```

### Server

```javascript
module.exports = (core, options) => ({
  login: (req, res) => Promise.resolve(req.body),
  logout: (req, res) => Promis.resolve(true)
});
```
