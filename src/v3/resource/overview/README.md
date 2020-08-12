---
description: A brief overview on the internals of OS.js v3.
full_title: Architecture and overview
---

# Architecture and overview

This article gives a brief overview of all of the different components that makes up OS.js.

**See [development](../../development/README.md) for a more in-depth look at the development process.**

## Codebase

All of the source is written in [ES6+](http://es6-features.org/). Dependencies are managed with [npm](https://docs.npmjs.com/).

Client-side scripts are written with [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`export`](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export), transpiled with [Babel](https://babeljs.io/) and bundled with [Webpack](https://webpack.js.org/).

The server-side scripts are written with CommonJS and runs purely on nodejs.

## Overview

OS.js is a modular Web Desktop framework that consists of two parts: a client and a server.

The client can run independently from the server, but the server provides a lot of features like persistent settings, authentication and backend filesystems.

Server runs on [Express](https://expressjs.com/) and [Node.js](https://nodejs.org/) (version 10 or later)

Features are implemented via [service providers](../../guide/provider/README.md) so you can extend, replace or remove most features on your own.

[Docker](https://www.docker.com/) is supported out of the box.

![Overview Diagram](overview.png)

> *Simplified diagram of components and their relation.*

These are the standard used core libraries:

* https://github.com/os-js/osjs-common - Base (used in both client & server)
* https://github.com/os-js/osjs-client - Client
* https://github.com/os-js/osjs-server - Server
* https://github.com/os-js/osjs-cli - CLI utilities
* https://github.com/os-js/osjs-gui - GUI components
* https://github.com/os-js/osjs-dialogs - GUI Dialogs
* https://github.com/os-js/osjs-panels - GUI Panels
* https://github.com/os-js/osjs-event-emitter - EventEmitter implementation

All source-code follows the [semantic versioning spesification](https://semver.org/).

## Distribution (installation)

The [OS.js repository](https://github.com/os-js/OS.js) contains a boilerplate you can use to build and bundle your own distributions and installations.

It comes with the following structure, that you can modify as you see fit:

```text
webpack.config.js        Webpack building configuration
package.json             Dependency definitions
node_modules/            Dependencies (npm package)
dist/                    Build output
vfs/                     Filesystem storage
src/                     Sources
    packages/            Custom packages directory
    client/
        index.js         Client bootstrap script
        index.ejs        Base HTML template
        index.scss       Base CSS template
        config.js        Configuration(s)
        favicon.png      Favicon
    server/
        index.js         Server bootstrap script
        config.js        Configuration(s)
    cli/
        index.js         CLI bootstrap script
```

## Modules

Modules come in several forms and provides ways to extend base functionality.

* [Service provider](../../guide/provider/README.md)
* [CLI task](../../guide/cli/README.md#custom-task)
* [Authentication adapter](../../guide/auth/README.md)
* [Settings adapter](../../guide/settings/README.md)
* [Filesystem adapter](../../guide/filesystem/README.md)

See the [official extensions](../official/README.md) for a list of available modules.

## Packages

Packages also come in several types.

* [Application](../../tutorial/application/README.md)
* [Iframe Application](../../tutorial/iframe/README.md) (same as above, but different template)
* [Theme](../../tutorial/theme/README.md#styles)
* [Icons](../../tutorial/theme/README.md#icons)

The standard structure of a package looks like the following:

```text
webpack.config.js        Webpack building configuration
metadata.json            Package information
package.json             Dependency definitions
index.js                 Client source
index.scss               Client styles
server.js                Server source (applications only)
node_modules/            Dependencies (npm package)
dist/                    Build output
```

See the [official extensions](../official/README.md) for a list of available packages.

# Webpack

Webpack is used to build and bundle the distribution, modules and packages.

These are some of the plugins and loaders used throughout codebases:

* [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
* [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin)
* [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
* [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)
* [babel-loader](https://github.com/babel/babel-loader)
* [file-loader](https://github.com/webpack-contrib/file-loader)
* [sass-loader](https://github.com/webpack-contrib/sass-loader)
* [css-loader](https://github.com/webpack-contrib/css-loader)
