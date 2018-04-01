# Installation

Installation is done in a few simple steps and only takes a couple of minutes.

## Requirements

The only dependency is `node 8` or later.

## Setup

Clone the base repository and install node modules:

```
git clone -b v3 --single-branch https://github.com/os-js/OS.js.git
cd OS.js
npm install
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

## Upgrade

To upgrade, use `npm update` or manually update dependencies defined in the `package.json` file.

If you have applications installed with `git` you'll have to manually update these.

## Applications

You can install using `npm` or `git`. After you've downloaded the application simply rebuild with:

```
npm run build:manifest
npm run build:dist
```

### Using git

Clone directly into `src/packages`. Make sure to run `npm install` inside the target to install dependencies (if required).

### Using npm

Make a symlink in `src/packages` to the installed application in `node_modules/`.

## Service Providers

Install using `npm` and add the provider to your `src/client/index.js` file:

```javascript
import SomeProvider from 'some-provider';

// ...
osjs.register(SomeProvider);
// ...

```

Then rebuild with `npm run build:dist`.
