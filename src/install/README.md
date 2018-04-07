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

Install themes and packages:

```
npm run install:package -- https://github.com/os-js/osjs-standard-theme.git
npm run install:package -- https://github.com/os-js/osjs-example-application.git
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

## Packages

Packages comes in two types: *Application* and *Theme*.

You can install using `npm` or `git`. After you've installed the package, rebuild your dist:

```
npm run build:manifest
npm run build:dist
```

### Using git

Use the provided script:

```
npm install:package -- https://somewhere/package.git
```

Or manually clone directly into `src/packages`. Make sure to run `npm install` inside the target to install dependencies (if required).

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
