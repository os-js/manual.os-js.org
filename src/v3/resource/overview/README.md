---
description: A brief overview on the internals of OS.js v3.
full_title: Architecture and overview
---

# Architecture and overview

This article gives a brief overview of all of the different components that makes up OS.js.

**See [development](../../development/README.md) for a more in-depth look at the development process.**

## Codebase

All of the source is written in [ES6+](http://es6-features.org/). Dependencies are managed with `npm`.

Client-side scripts are written with [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`export`](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export), transpiled with [Babel](https://babeljs.io/) and bundled with [Webpack](https://webpack.js.org/).

The server-side scripts are written with CommonJS and runs purely on nodejs.

## Overview

OS.js is a modular Web Desktop framework that consists of two parts: a client and a server.

The client can run independently from the server, but the server provides a lot of features like persistent settings, authentication and backend filesystems.

Server runs on [Express](https://expressjs.com/) and [Node.js](https://nodejs.org/) (version 10 or later)

Features are implemented via [service providers](../../guide/provider/README.md) so you can extend, replace or remove most features on your own.

![Overview Diagram](overview.png)

> *Simplified diagram of components and their relation.*

## Distribution

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

See the [official resources](../official/README.md) for a list of available modules.

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

See the [official resources](../official/README.md) for a list of available packages.

