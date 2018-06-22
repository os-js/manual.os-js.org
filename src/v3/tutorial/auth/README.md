# Auth

The `Auth` adapter handles authentication requests.

See [guide](/guide/auth/README.md) on how to use this in your distribution.

## User Information

You can get the user information from `core.make('osjs/auth').user()` in the client and `req.session.user` in the server.

## Custom Adapter

### Client

```javascript
const myAdapter = (core, options) => ({
  login: values => {
    // You can transform the form values from login here if you want
    return Promise.resolve(values);
  },

  logout: () => {
    // And perform special operations on logout
    return Promise.resolve(true);
  }
});

export default myAdapter;
```

### Server

In this example we only allow the user `anders` with the password `evenrud`.

```javascript
module.exports = (core, options) => ({
  login: async (req, res) => {
    const {username, password} = req.body;

    if (username === 'anders' && password === 'evenrud') {
      return {id: 666, username, groups: ['admin']};
    }

    return false;
  },

  logout: async (req, res) => {
    return true;
  }
});
```
