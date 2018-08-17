---
description: OS.js v3 Configuration Manual
---

# Configuration

You can find the configuration files (by default) in `src/client/config.js` and `src/server/config.js`.

> [info] This list is not complete. See `src/config.js` in `@osjs/client` and `@osjs/server` for more information.

<!-- -->

> [info] Using `NODE_ENV=production` will disable any development features that are enabled by default.

## Client

| Key                     | Default value | Description                                              |
| ----------------------- | ------------- | -------------------------------------------------------- |
| development             | `true`        | Enable development mode                                  |
| standalone              | `false`       | Enable standalone mode                                   |
| public                  | `<auto>`      | Root public path for resolving urls                      |
| theme                   | `Standard`    | Default theme metadata name                              |
| login.username          | `demo`        | Default login username                                   |
| login.password          | `demo`        | Default login password                                   |
| ws.protocol             | `<auto>`      | WebSocket protocol                                       |
| ws.port                 | `<auto>`      | WebSocket port                                           |
| ws.hostname             | `<auto>`      | WebSocket hostname                                       |
| ws.path                 | `<auto>`      | WebSocket path                                           |
| vfs.defaultPath         | `osjs:/`      | Default and fallback path for VFS                        |
| vfs.mountpoints         | Array         | See [filesystem guide](../guide/filesystem/README.md)    |
| auth.ui                 | Object        | See customize login                                      |
| auth.login.username     | String        | Default login username                                   |
| auth.login.password     | String        | Default login password                                   |
| desktop                 | Object        | Default desktop settings                                 |
| locale                  | Object        | Default locale settings                                  |
| application.categories  | Object        | Default application categories                           |

## Server

| Key                         | Default value       | Description                                                       |
| --------------------------- | ------------------- | ----------------------------------------------------------------- |
| logging                     | `true`              | Log HTTP requests                                                 |
| index                       | `index.html`        | Index HTML file                                                   |
| hostname                    | `localhost`         | Server hostname                                                   |
| port                        | `8000`              | Server port                                                       |
| public                      | `/dist`             | The dist directory                                                |
| morgan                      | `tiny`              | Morgan logging mode                                               |
| ws.port                     | `<auto>`            | WebSocket port (defaults to upgrade)                              |
| session.secret              | `osjs`              | HTTP Session secret                                               |
| session.resave              | `false`             | HTTP Session re-save option                                        |
| session.saveUninitialized   | `false`             | HTTP Save uninitialized sessions                                   |
| session.cookie.secure       | `<auto>`            | HTTP Secure cookie                                                |
| vfs.mountpoints             | Array               | See [filesystem guide](../guide/filesystem/README.md)             |
| proxy[]                     | Array               |                                                                   |
| proxy[].source              | `String or RegExp`  | Proxy source                                                      |
| proxy[].destination         | String              | Proxy destination                                                 |
| proxy[].options             | Object              | Proxy [options](https://github.com/villadora/express-http-proxy)  |

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
