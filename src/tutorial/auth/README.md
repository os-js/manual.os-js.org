# Auth

The `Auth` class handles authentication requests. By default a `LocalStorageAuth` and `ServerAuth` module is provided, but you can make your own.

See [guide](/guide/auth/README.md) on how to use this in your distribution.

## Custom Auth Adapter

### Client

```
import {Auth} from '@osjs/client';

export default class MyAuth extends Auth {
  async login(values) {
    return {username: 'hello'};
  }

  async logout(reload = true) {
    return true;
  }
}
```

### Server

```
const {Auth} = require('@osjs/server');

class MyAuth extends Auth {
  async login(req, res) {
    const {username} = req.body;

    req.session.username = username;

    res.json({
      user: {username}
    });
  }

  async logout(req, res) {
    try {
      req.session.destroy();
    } catch (e) {
      console.warn(e);
    }

    res.json({});
  }
}

module.exports = MyAuth;
```
