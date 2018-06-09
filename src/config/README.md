# Configuration

You can find the configuration files (by default) in `src/conf/` directory.

> NOTE: This list is not complete. See `src/config.js` in `@osjs/client` and `@osjs/server` for more information.

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
| vfs.mountpoints         | Array         | See [filesystem guide](guide/filesystem/README.md)       |
| auth.login.ui           | Object        | See customize login                                      |
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
| session.resave              | `false`             | HTTP Session resave option                                        |
| session.saveUninitialized   | `false`             | HTTP Save uninitialzed sessions                                   |
| session.cookie.secure       | `<auto>`            | HTTP Secure cookie                                                |
| vfs.mountpoints             | Array               | See [filesystem guide](guide/filesystem/README.md)                |
| proxy[]                     | Array               |                                                                   |
| proxy[].source              | `String or RegExp`  | Proxy source                                                      |
| proxy[].destination         | String              | Proxy destination                                                 |
| proxy[].options             | Object              | Proxy [options](https://github.com/villadora/express-http-proxy)  |

## Webpack

The module `osjs-cli` builds a Webpack configuration for you.

The `createWebpack()` method used returns a Webpack configuration tree that you can further modify.

> It's recommended to use `require.resolve` when defining plugins and presets for webpack and babel.

| Key                         | Default value      | Description                                             |
| --------------------------- | ------------------ | ------------------------------------------------------- |
| mode                        | `development`      | Compile mode                                            |
| context                     | `<auto>`           | Context                                                 |
| splitChunks                 | `false`            | Split chunks                                            |
| runtimeChunk                | `false`            | Split runtime chunk                                     |
| minimize                    | `<auto>`           | Minimizes bundles                                       |
| sourceMap                   | `true`             | Provide sourcemap for bundles                           |
| devtool                     | `source-map`       | Sourcemap generation type                               |
| outputPath                  | `<auto>`           | Bundle output path                                      |
| symlinks                    | `true`             | Resolve symlinks                                        |
| entry                       | Object/Array       | Entry definitions                                       |
| plugins                     | Array              | Plugin definitions                                      |
| rules                       | Array              | Rule definitions                                        |
| jsx                         | `false`            | Provide [JSX](https://www.npmjs.com/package/babel-plugin-transform-react-jsx) support |
| define                      | Object             | Add [definitions](https://webpack.js.org/plugins/define-plugin/) |
| copy                        | Array              | [Copy](https://github.com/webpack-contrib/copy-webpack-plugin) files |
| html                        | Object             | Provide [HTML](https://github.com/jantimon/html-webpack-plugin) for bundle |
| html.template               | `<auto>`           | Template filename                                       |
| html.title                  | `OS.js`            | Title                                                   |
| babel                       | Object             | Babel rc object                                         |
| babel.cacheDirectory        | `true`             | Babel cache                                             |
| babel.plugins               | Array              | Babel plugins                                           |
| babel.presets               | Array              | Babel presets                                           |
