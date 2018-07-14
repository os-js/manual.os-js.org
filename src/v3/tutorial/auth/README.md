# Auth

The `Auth` adapter handles authentication requests.

See [guide](/guide/auth/README.md) on how to use this in your distribution.

## User Information

You can get the user information from `core.make('osjs/auth').user()` in the client and `req.session.user` in the server.

## Custom Adapter

### Client

```javascript
const myAdapter = (core, config) => ({
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

> Please note that the OS.js client expects to receive an JSON object with at least `{id, username}`.

```javascript
module.exports = (core, config) => ({
  login: (req, res) => {
    const {username, password} = req.body;

    if (username === 'anders' && password === 'evenrud') {
      return Promise.resolve({id: 666, username, groups: ['admin']});
    }

    return Promise.resolve(false);
  },

  logout: (req, res) => {
    return Promise.resolve(true);
  }
});
```

### Configuration

The `config` parameter is passed on from your service provider registration:

```javascript
core.register(AuthServiceProvider, {
  args: {
    adapter: customAdapter
    config: { /* Your configuration here */}
  }
});
```

If you have sensitive information in your configuration, consider using [dotenv](https://github.com/motdotla/dotenv).
