---
description: A guide for using and extending the CLI
full_title: CLI Guide
---

# CLI guide

OS.js comes with a Node CLI utility that provides commands to manage your installation.

## Commands

You can use the CLI with `npx osjs-cli <task>`, but for your convenience, you can also run `npm run <task>`.

These are the available default tasks:

* `package:discover` - Discovers linked and installed npm packages
* `package:create` - Create a new package (**deprecated**)
* `make:application` - Create a new application package
* `make:provider` -  Create a new service provider
* `make:auth` - Create a new authentication adapter
* `make:settings` - Create a new settings adapter
* `make:vfs` - Create a new VFS adapter

And the following scripts are provided via `npm run` only:

* `build` - Builds core and all packages
* `watch` - Same as build, but watches for changes
* `serve` - Starts the server

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
  // Basic callback
  mytask: async ({logger, options, args}) => {
    console.log('Called my task with arguments', args)
    return true;
  },

  // Can also be an object for more features
  myothertask: {
    description: 'Task description in help readout',
    help: 'Optional info to show on --help for this command',
    options: {
      '-foo': 'Some description'
    },
    action: async ({logger, options, args}) => {
      return true;
    }
  }
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
