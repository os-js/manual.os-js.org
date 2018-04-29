# Auth

The `Auth` adapter handles authentication requests.

See [guide](/guide/auth/README.md) on how to use this in your distribution.

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
