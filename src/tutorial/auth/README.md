# Auth

The `Auth` class handles authentication requests. By default a `LocalStorageAuth` and `ServerAuth` module is provided, but you can make your own.

See [guide](/guide/auth/README.md) on how to use this in your distribution.

## Custom Auth Adapter

### Client

```
import {Auth} from '@osjs/client';

export default class MyAuth extends Auth {
  async login(values) {
    const fn = () => Promise.resolve({username: 'hello'});
    return this._login(fn);
  }

  async logout(reload = true) {
    const fn = () => Promise.resolve(true);
    return this._logout(fn, reload);
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
