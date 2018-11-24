---
description: How to configure OS.js v3 client and server
full_title: Configuration
---

# Configuration

You can find the configuration files (by default) in `src/client/config.js` and `src/server/config.js`.

> [info] This list is not complete. See [src/config.js](https://github.com/os-js/osjs-client/blob/master/src/config.js) in `@osjs/client` and [src/config.js](https://github.com/os-js/osjs-server/blob/master/src/config.js) `@osjs/server` for advanced settings.

<!-- -->

> [info] Using `NODE_ENV=production` will disable any development features that are enabled by default.

## Client

| Key                             | Default value         | Description                                              |
| ------------------------------- | --------------------- | -------------------------------------------------------- |
| development                     | `<auto>`              | Enable development mode                                  |
| standalone                      | `false`               | Enable standalone mode                                   |
| public                          | `<auto>`              | Root public path for resolving urls                      |
| login.username                  | `demo`                | Default login username                                   |
| login.password                  | `demo`                | Default login password                                   |
| ws.protocol                     | `<auto>`              | WebSocket protocol                                       |
| ws.port                         | `<auto>`              | WebSocket port                                           |
| ws.hostname                     | `<auto>`              | WebSocket hostname                                       |
| ws.path                         | `<auto>`              | WebSocket path                                           |
| auth.login.username             | `demo`                | Default login username                                   |
| auth.login.password             | `demo`                | Default login password                                   |
| search.enabled                  | `true`                | Enable searching feature                                 |
| desktop.settings.font           | `Roboto`              | Standard font name                                       |
| desktop.settings.theme          | `Standard`            | Standard style theme                                     |
| desktop.settings.icons          | `Gnome`               | Standard icon theme                                      |
| desktop.settings.sounds         | `FreedesktopSounds`   | Standard sound theme                                     |
| desktop.settings.background.src | `require(...)`        | Standard wallpaper                                       |
| locale.language                 | `en_EN`               | Default language                                         |
| vfs.defaultPath                 | `osjs:/`              | Default and fallback path for VFS                        |

### Filesystems

See [filesystem guide](../guide/filesystem/README.md)

## Server

| Key                                 | Default value       | Description                                                       |
| ----------------------------------- | ------------------- | ----------------------------------------------------------------- |
| development                         | `<auto>`            | Enable development mode                                           |
| logging                             | `true`              | Log HTTP requests                                                 |
| index                               | `index.html`        | Index HTML file                                                   |
| hostname                            | `localhost`         | Server hostname                                                   |
| port                                | `8000`              | Server port                                                       |
| public                              | `/dist`             | The dist directory                                                |
| morgan                              | `tiny`              | Morgan logging mode                                               |
| ws.port                             | `<auto>`            | WebSocket port (defaults to upgrade)                              |
| express.maxFieldsSize               | `20971520`          | HTTP Max POST form/fields size in bytes                           |
| express.maxFileSize                 | `209715200`         | HTTP Max POST file upload size in bytes                           |
| session.store.module                | `connect-loki`      | HTTP Session storage                                              |
| session.options.name                | `osjs.sid`          | HTTP Session cookie name                                          |
| session.options.secret              | `osjs`              | HTTP Session secret                                               |
| session.options.resave              | `false`             | HTTP Session re-save option                                       |
| session.options.saveUninitialized   | `false`             | HTTP Save uninitialized sessions                                  |
| session.options.cookie.secure       | `<auto>`            | HTTP Secure cookie                                                |
| session.options.cookie.maxAge       | `<auto>`            | HTTP cookie lifetime                                              |

### Proxies

You can add proxies via the configuration. See [express-http-proxy](https://github.com/villadora/express-http-proxy) for options.

```javascript
{
  proxy: [{
    source: String | RegExp,
    destination: String,
    options: {}
  }]
}

```

### Filesystems

See [filesystem guide](../guide/filesystem/README.md)

# Caveats

By default all of your settings are *merged* into the default configuration from the libraries.
In some cases you might want to force certain entries in the tree to override completely.

You can do this by providing the following option in your bootstrap file:

```javascript
const osjs = new Core(config, {
  // 'ws' will *always* be read from your 'config' instead of the
  // internal one, including *every* sub-item(s).
  omit: ['ws'],

  // You can resolve via the dot notation
  omit: ['ws.port']
});
```
