# CLI

OS.js comes with a Node CLI utility that provides commands to manage your installation.

## Commands

All commands are provided via `npm` scipts:

* `build:manifest` - Builds package manifest (exposed to the client)
* `build:dist` - Builds core and all packages
* `watch:dist` - Same as build, but watches for changes
* `serve` - Starts the server
* `package:install` - Installs a git package
* `package:upgrade` - Upgrades git packages
* `package:discover` - Discovers and links npm pakages

## Examples

```
# Build everything
npm run build:dist

# Builds only core
npm run build:dist -- --core

# Builds given application
npm run build:dist -- --application=MyApplication

# Builds a set of application applications
npm run build:dist -- --applications=MyApplication,MyOtherApplication

# Builds only applications
npm run build:dist -- --applications

# Builds only themes
npm run build:dist -- --themes

# Install a package via git
npm run package:install -- https://site/repo.git
npm run build:manifest
npm run build:dist

# Upgrades git packages
npm run package:upgrade
npm run build:manifest
npm run build:dist

# Set up npm based packages
npm run package:discover
npm run build:manifest
npm run build:dist
```

## Custom Tasks

You can add custom tasks via `src/cli/index.js`.

An example:

```javascript

const mod = cli => ({
  'mytask': ({args}) => console.log('Called my task with arguments', args)
});

module.exports = [mod];
```
