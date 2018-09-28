---
description: OS.js v3 CLI Guide
---

# CLI guide

OS.js comes with a Node CLI utility that provides commands to manage your installation.

## Commands

All commands are provided via `npm` scripts:

* `build` - Builds core and all packages
* `watch` - Same as build, but watches for changes
* `serve` - Starts the server
* `package:discover` - Discovers linked and installed npm packages
* `package:create` - Create a new package (**deprecated**)
* `make:application` - Create a new application package
* `make:provider` -  Create a new service provider
* `make:auth` - Create a new authentication adapter
* `make:settings` - Create a new settings adapter
* `make:vfs` - Create a new VFS adapter

> You can also use `npx osjs-cli <task>`.

> If you're using `docker-compose` simply prepend this to perform the commands inside the image: `docker-compose exec osjs ...`.

## Server Arguments

The server accepts a set of arguments that *overrides* configuration files.

> NOTE: If you start the server with `npm`, you have to do `npm run serve -- --arg=value`

* `--logging=boolean` Enable http logging (same as config `logging`)
* `--morgan=string` Morgan logging options (same as config `morgan`)
* `--port=integer` HTTP Server port (same as config `port`)
* `--development=boolean` Development mode (same as config `development`)
* `--secret=string` Session secret (same as config `session.options.secret`)

## Custom Tasks

You can add custom tasks via `src/cli/index.js`.

An example:

```javascript
const mod = cli => ({
  'mytask': ({args}) => console.log('Called my task with arguments', args)
});

module.exports = {
  tasks: [mod]
};
```

## Custom package discovery paths

You can also add custom package discovery paths for `npm run package:discover` so you don't have to use npm.

> NOTE: Packages still require the `package.json` file.

```javascript
const path = require('path');

module.exports = {
  discover: [
    path.resolve(__dirname, '../packages') // OS.js/src/packages
  ]
};
```
