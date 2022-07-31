---
description: How to configure OS.js client and server
full_title: Configuration
---

# Configuration

You can find the configuration files (by default) in `src/client/config.js` and `src/server/config.js`.

> [info] This list is not complete. See [`src/config.js`](https://github.com/os-js/osjs-client/blob/master/src/config.js) in `@osjs/client` and [`src/config.js`](https://github.com/os-js/osjs-server/blob/master/src/config.js) `@osjs/server` for advanced settings.

<!-- -->

> [info] Using `NODE_ENV=production` will disable any development features that are enabled by default.

## Caveats

By default all of your settings are *merged* into the default configuration from
the client/server configuration.

To override for example an array instead of appending to it,
update your bootstrap with the following:

```javascript
const osjs = new Core(config, {
  omit: ['vfs.mountpoints']
});
```

## Client

| Key                               | Default value         | Description                                              |
| --------------------------------- | --------------------- | -------------------------------------------------------- |
| `development`                     | `<auto>`              | Enable development mode                                  |
| `standalone`                      | `false`               | Enable standalone mode                                   |
| `login.username`                  | `demo`                | Default login username                                   |
| `login.password`                  | `demo`                | Default login password                                   |
| `http.public`                     | `<auto>`              | Root public path for resolving urls                      |
| `ws.uri`                          | `<auto>`              | WebSocket connection URI                                 |
| `auth.login.username`             | `demo`                | Default login username                                   |
| `auth.login.password`             | `demo`                | Default login password                                   |
| `search.enabled`                  | `true`                | Enable searching feature                                 |
| `desktop.settings.font`           | `Roboto`              | Standard font name                                       |
| `desktop.settings.theme`          | `Standard`            | Standard style theme                                     |
| `desktop.settings.icons`          | `Gnome`               | Standard icon theme                                      |
| `desktop.settings.sounds`         | `FreedesktopSounds`   | Standard sound theme                                     |
| `desktop.settings.background.src` | Internal              | Standard wallpaper                                       |
| `locale.language`                 | `en_EN`               | Default language                                         |
| `vfs.defaultPath`                 | `osjs:/`              | Default and fallback path for VFS                        |

## Server

| Key                                 | Default value       | Description                                                       |
| ----------------------------------- | ------------------- | ----------------------------------------------------------------- |
| `development`                       | `<auto>`            | Enable development mode                                           |
| `logging`                           | `true`              | Log HTTP requests                                                 |
| `index`                             | `index.html`        | Index HTML file                                                   |
| `hostname`                          | `localhost`         | Server hostname                                                   |
| `port`                              | `8000`              | Server port                                                       |
| `public`                            | `/dist`             | The dist directory                                                |
| `morgan`                            | `tiny`              | Morgan logging mode                                               |
| `https.enabled`                     | `false`             | Run server in HTTPS mode                                          |
| `https.options.key`                 | `null`              | Key PEM file contents (`string` or `Buffer`)                      |
| `https.options.cert`                | `null`              | Key Certificate file  contents (`string` or `Buffer`)             |
| `ws.port`                           | `<auto>`            | WebSocket port (defaults to upgrade)                              |
| `auth.defaultGroups`                | `[]`                | Default set of user groups to assign                              |
| `express.maxFieldsSize`             | `20971520`          | HTTP Max POST form/fields size in bytes                           |
| `express.maxFileSize`               | `209715200`         | HTTP Max POST file upload size in bytes                           |
| `session.store.module`              | `connect-loki`      | HTTP Session storage                                              |
| `session.options.name`              | `osjs.sid`          | HTTP Session cookie name                                          |
| `session.options.secret`            | `osjs`              | HTTP Session secret                                               |
| `session.options.resave`            | `false`             | HTTP Session re-save option                                       |
| `session.options.saveUninitialized` | `false`             | HTTP Save uninitialized sessions                                  |
| `session.options.cookie.secure`     | `<auto>`            | HTTP Secure cookie                                                |
| `session.options.cookie.maxAge`     | `<auto>`            | HTTP cookie lifetime                                              |
| `vfs.root`                          | `<auto>`            | VFS Root path (defaults to OS.js `vfs/` directory)                |

### Proxies

You can add proxies via the configuration. See [`express-http-proxy`](https://github.com/villadora/express-http-proxy) for options.

```javascript
{
  proxy: [{
    source: String | RegExp,
    destination: String,
    options: {}
  }]
}
```

## Filesystems

See [filesystem guide](../guide/filesystem/README.md)

## Dotenv

You can provide configuration via a dotenv (`.env`) file to make make it dynamic.

This applies to both the client and the server

```config
OSJS_STANDALONE=true
```

And in your `src/client/config.js` file:

```javascript
{
  standalone: process.env.OSJS_STANDALONE === 'true'
}
```
