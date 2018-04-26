# Settings Guide

OS.js provides options for customizing the settings storage.

> By default a "null" handler is user, which just saves the settings into the browser local storage.

## Changing

See [official resource list](/resource/official/README.md) for provided methods.

To use a handler, simply change the options passed on to the settings provider:

> The README file of the module should provide more spesific exaples.

```javascript
// server
const instance = new Core(config, {
  registerDefault: {
    settings: {
      class: ClassReference
    }
  }
});

// client
import {ServerSettings} from '@osjs/client';

const osjs = new Core(config, {
  registerDefault: {
    settings: {
      class: ServerSettings
    }
  }
});
```

## Default Configuration

The default settings are located in `user.settings` (see `@osjs/client/src/config.js`).

You can override these settings. Make sure to bump the `__revision__` value to make sure new settings are migrated.
