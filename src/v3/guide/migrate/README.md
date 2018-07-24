# Migration Guide

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
npm build:manifest
```

Congratulations. You've migrated your application :)

## 2.x > 3.0

There is no backward-compability for v2 applications. All APIs have been rewritten and architecture has changed.

If you've made applications using third-party libraries, you can refactor to run on v3.
