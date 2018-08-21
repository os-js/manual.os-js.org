---
description: OS.js v3 Migraion Guide
---

# Migration Guide

## 3.0.0 - August 21st 2018

This is just a recommendation. Since `@osjs/client@3.0.0-alpha.63` and `@osjs/cli@3.0.0-alpha.40` the metadata is no longer mutated and you can safely import and pass your own metadata file directly.

Notice that the first parameter in `register()` now refers to the metadata directly and the fourth parameter (`metadata`) in the callback can now be removed because you import your own.

```javascript
// From
OSjs.make('osjs/packages').register('MyApplication', (core, args, options, metadata) => {
  const proc = core.make('osjs/application', {args, options, metadata});

  return proc;
});

// To
import metadata from './metadata.json';

OSjs.make('osjs/packages').register(metadata.name, (core, args, options) => {
  const proc = core.make('osjs/application', {args, options, metadata});

  return proc;
});
```

## 3.0.0 - July 24th 2018

Some breaking changes were made to how base and packages are built.

The gist here is that all OS.js packages are now pre-build with a self-contained Babel+Webpack
setup and published on npm.

The "base" OS.js repository now also has its own self-contained Webpack setup instead of relying on `@osjs/cli`.

*You should empty `dist/` before building*

### Complete change list

* `webpack.config.js` now in the root of `OS.js` repo 
* Old `src/client/webpack.config.js` is no longer supported
* `package.json` has been updated with new scripts
* `@osjs/cli` no longer handles building
* `npm run watch` and `npm run build` in all repositories
* Packages are now pre-built before publish
* Packages are now entirely installed via npm (no more `src/package`)
* All repos now build their own dist/ code
* This also means that custom webpack building is no more

### Migrate your applications

For a better idea of how to build your app, see the example repo:

https://github.com/os-js/osjs-example-application

The steps are as follows:

* Set up `files`, `devDependencies` and `dependencies` and `scripts` in `package.json`.
* Copy the `.babelrc` file.
* Copy the `webpack.config.js` file and make any appropriate changes.
* Make sure `files` in `metadata.json` matches the bundled output.
* Run `npm run build` to see if it builds

If succeeded, you're done setting up your package. To set up for development, follow these steps:

```
// In your package
npm link

// In OS.js root directory
npm link <your-package-name>
npm package:discover
```

Congratulations. You've migrated your application :)

## 2.x > 3.0

There is no backward compatibility for v2 applications. All APIs have been rewritten and architecture has changed.

If you've made applications using third-party libraries, you can refactor to run on v3.
