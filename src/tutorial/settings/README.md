# Settings

The `Settings` class handles settings requests. By default a `LocalStorageSettings` and `ServerSettings` module is provided, but you can make your own.

See [guide](/guide/settings/README.md) on how to use this in your distribution.

## Custom Settings Adapter

### Client

```
import {Settings} from '@osjs/client';

export default class MySettings extends Settings {

  async save() {
    // see this.settings
    return false;
  }

  async load() {
    // set this.settings
    return false;
  }
}
```

### Server

```
const {Settings} = require('@osjs/server');

class MySettings extends Settings {
  async save(req, res) {
    // req.body has all given parameters
    return res.json(true);
  }

  async load(req, res) {
    return res.json({});
  }
}

module.exports = MySettings;
```
