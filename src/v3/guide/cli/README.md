---
description: OS.js v3 CLI Guide
---

# CLI guide

OS.js comes with a Node CLI utility that provides commands to manage your installation.

## Commands

All commands are provided via `npm` scipts:

* `build` - Builds core and all packages
* `watch` - Same as build, but watches for changes
* `serve` - Starts the server
* `package:discover` - Discovers linked and installed npm packages
* `package:create` - Create a new package

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

## Configuration

You can manage your configurations via [JSON](https://github.com/os-js/osjs-json-config-cli) just like in v2, but is now available in a separate module.

For more information, see the link provided above.

## Custom Tasks

You can add custom tasks via `src/cli/index.js`.

An example:

```javascript

const mod = cli => ({
  'mytask': ({args}) => console.log('Called my task with arguments', args)
});

module.exports = [mod];
```
