# Configuration

You can find the configuration files (by default) in `src/conf/` directory.

## Client

| Key             | Default value | Description                                              |
| --------------- | ------------- | -------------------------------------------------------- |
| development     | `true`        | Enable development mode                                  |
| standalone      | `false`       | Enable standalone mode                                   |
| public          | `<auto>`      | Root public path for resolving urls                      |
| theme           | `Standard`    | Default theme metadata name                              |
| login.username  | `demo`        | Default login username                                   |
| login.password  | `demo`        | Default login password                                   |
| ws.protocol     | `<auto>`      | WebSocket protocol                                       |
| ws.port         | `<auto>`      | WebSocket port                                           |
| ws.hostname     | `<auto>`      | WebSocket hostname                                       |
| ws.path         | `<auto>`      | WebSocket path                                           |

## Server

| Key                         | Default value | Description                                             |
| --------------------------- | ------------- | ------------------------------------------------------- |
| logging                     | `true`        | Log HTTP requests                                       |
| index                       | `index.html`  | Index HTML file                                         |
| hostname                    | `localhost`   | Server hostname                                         |
| port                        | `8000`        | Server port                                             |
| public                      | `/dist`       | The dist directory                                      |
| morgan                      | `tiny`        | Morgan logging mode                                     |
| ws.port                     | `<auto>`      | WebSocket port (defaults to upgrade)                    |
| session.secret              | `osjs`        | HTTP Session secret                                     |
| session.resave              | `false`       | HTTP Session resave option                              |
| session.saveUninitialized   | `false`       | HTTP Save uninitialzed sessions                         |
| session.cookie.secure       | `<auto>`      | HTTP Secure cookie                                      |

## Webpack

The module `osjs-cli` builds a Webpack configuration for you.

It consists of a basic setup with:

* `sass-loader`
* `babel-loader`
* `file-loader`
* `copy-webpack-plugin`
* `html-webpack-plugin`

You can easily make your own or use your existing project configuration (if you want to embed OS.js).
