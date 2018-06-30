# Installation

Installation is done in a few simple steps and only takes a couple of minutes.

## Requirements

The only dependency is `node 8` or later (and `git` is recommended).

## Setup

Clone the base repository (or download latest release) and install node modules:

```
git clone -b v3 --single-branch https://github.com/os-js/OS.js.git
cd OS.js
npm install
```

Install themes and packages:

```
npm run package:install -- https://github.com/os-js/osjs-standard-theme.git
npm run package:install -- https://github.com/os-js/osjs-example-application.git
```

Then proceed with building:

```
npm run build:manifest
npm run build:dist
```

And finally start the server:

```
npm run serve
```

Make sure to read the [deployment guide](../guide/deploy/README.md) if you plan on installing this on a remote server.

> NOTE: Do not use "sudo" for any of these commands.

## Upgrade

To upgrade, use `npm update` or manually update dependencies defined in the `package.json` file.

You can list outdated modules with `npm outdated`.

## Packages

Packages comes in two types: *Application* and *Theme*.

You can install using `npm` or `git`. After you've installed or upgraded a package run `npm run build:manifest` to update metadata and `npm run build:dist` to rebuild bundles.

> NOTE: Some packages requires to restart the server process.

### Install using git

Run `npm package:install -- https://somewhere/package.git` to automatically clone and install dependencies.

To upgrade packages installed via git, run `npm run package:upgrade`.

### Install using npm

Run `npm run package:discover` to automatically link any packages intalled via npm.

To upgrade packages installed via npm, run `npm update`.

## Service Providers

Install using `npm` then update your entry files:

### Client

Add the provider to your `src/client/index.js` file:

```javascript
import SomeProvider from 'some-provider';

osjs.register(SomeProvider);
```

Then rebuild with `npm run build:dist`.

### Server

Add the provider to your `src/server/index.js` file:

```javascript
const SomeProvider = require('some-provider')

osjs.register(SomeProvider);
```

Then restart your server.
