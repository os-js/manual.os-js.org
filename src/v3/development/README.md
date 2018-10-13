---
description: OS.js v3 Development Manual
---

# Development

This article will walk you through the development process of OS.js modules and packages.

1. [Introduction](#introduction)
    1. [Webpack](#webpack)
    2. [Docker](#docker)
    3. [Testing](#testing)
2. [Bulding](#building)
    1. [Environment](#environment)
    2. [Server](#server)
3. [Naming](#naming)
4. [Modules](#modules)
    1. [Replacement](#replacement)
    2. [Linking](#linking)
5. [Packages](#packages)
    1. [Next steps](#next-steps)
6. [Contributing](#contributing)
7. [Publishing](#publishing)
    1. [npm](#npm)
    2. [git](#git)

## Introduction

Before beginning read the [overview article](../resource/overview/README.md). You also need to familiarize yourself with the following technologies:

* [ES6](https://github.com/lukehoban/es6features)
* [Sass CSS](https://sass-lang.com/)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [Nodejs](https://nodejs.org/en/)
* [npm](https://docs.npmjs.com/)
* [git](https://git-scm.com/)

### Webpack

OS.js uses Webpack 4 for building and bundling by default with Babel 7 and Sass CSS.

These are some of the plugins and loaders used throughout codebases:

* [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
* [copy-webpack-plugin](https://www.npmjs.com/package/copy-webpack-plugin)
* [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
* [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)
* [babel-loader](https://github.com/babel/babel-loader)
* [file-loader](https://github.com/webpack-contrib/file-loader)
* [sass-loader](https://github.com/webpack-contrib/sass-loader)
* [css-loader](https://github.com/webpack-contrib/css-loader)

### Docker

If you're using Docker, you do your work normally on the local filesystem, but when performing commands and tasks related to building and dependency management, you have to run them within the context of the container:

```
# Watch for changes
docker-compose exec osjs npm run watch
```

### Testing

Use the provided `.eslintrc` and `.stylelint` files to keep consistent code styles.

All official packages provides running one or more of these tasks:

* `npm run eslint` - ESLint pass
* `npm run stylelint` - Stylelint pass
* `npm run test` - Jest unit tests

## Building

All official packages provides running one or more of these tasks:

* `npm run build` Build changes once
* `npm run watch` Watch and build changes automatically

As described above, building is done using [Webpack](#webpack).

### Environment

Using the required tools (above) you can set up a development environment in a couple of minutes.

Make sure to set the `NODE_ENV=production` environmental variable if you're compiling for a production environment.

By default the configurations are set to development mode, which will reload your applications and stylesheets whenever the distribution is rebuilt.

### Server

You can launch the server with [nodemon](http://nodemon.io/) to automatically reload upon changes as the `npm run watch` tasks does not apply here.

## Naming

OS.js has a format for naming projects:

* `osjs-<project>-application` - Application package
* `osjs-<project>-provider` -  Service Provider module
* `osjs-<project>-auth` - Authentication adapter
* `osjs-<project>-settings` - Settings storage adapter
* `osjs-<project>-adapter` - VFS Adapters
* `osjs-<project>-theme` - Theme package
* `osjs-<project>-icons` - Icons package
* `osjs-<project>-sounds` - Sounds package
* `osjs-<project>-cli` - CLI Plugin
* `osjs-<project>` - Core modules

Official projects are scoped with `@osjs/<project>-<suffix>`.

## Modules

The OS.js client and server are split up into several modules provided by `npm packages` (see `package.json`).

You can place your own modules inside the `src/` if you don't want to work with npm.

To make your own module(s), you can use the CLI Wizard:

* `npm run make:provider` - See [Service Provider Tutorial](../tutorial/provider/README.md)
* `npm run make:auth` - See [Authentication Tutorial](../tutorial/auth/README.md)
* `npm run make:settings` - See [Settings Tutorial](../tutorial/settings/README.md)
* `npm run make:vfs` - See [VFS Tutorial](../tutorial/vfs/README.md)


If you want to modify the official modules (which are installed via `npm`) you have two choices which are explained in detail below:

1. Replace the module by checking out local source-code
2. Override module with local source-code using `npm link`

### Replacement

Your first option is to simply replace the `import` statements in your bootstrap scripts.

Example:

```bash
# In your OS.js installation
cd src/
git clone https://github.com/os-js/osjs-client
cd osjs-client
npm install
```

```javascript
// In `src/client/index.js` replace this:
import {/* some code here */} from '@osjs/client';

// With:
import {/* some code here */} from '../osjs-client/index.js';
```

### Linking

With the `npm link` feature you *override* the paths in `node_modules/` and link them to the actual source-code instead of the distributed builds.

> **[warning] It is highly recommended that you either manage your node installation with [nvm](https://github.com/creationix/nvm) or [modify you npm setup](https://docs.npmjs.com/getting-started/fixing-npm-permissions) to prevent permission errors when using the npm link feature.**

Assuming you've already installed OS.js, this is an example of how you set up linking:

```bash
#
# Somewhere in your filesystem (or use src/ directory)
#

# First check out the code of package @osjs/client
git clone https://github.com/os-js/osjs-client
cd osjs-client

# Install required dependencies
npm install

# Build source (or `npm run watch` in while developing to automatically rebuild)
npm run build

# Then register the package in npm
npm link

#
# In your OS.js root directory
#

# Subscribe to the npm registered package
npm link @osjs/client
```

> Notes:
> 2. Using `npm link` will not link its dependencies. You have to do this yourself or use a monorepo uitlity to automate the process.
> 3. Running `npm install` after linking **will remove the links**

## Packages

You can use `npm run make:application` to create a new [application package](../tutorial/application/README.md) package from a wizard.

*Themes are not covered in this section. See tutorials in menu.*

The standard official packages are provided via *npm packages*, but the directory `src/pacakges` is also included (this is where the package wizard places the files).

To set up package discovery paths, see [CLI Guide](../guide/cli/README.md#custom-package-discovery-paths).

> Packages installed in `node_modules/` always have the lowest priority, and discovery paths are prioritized by their order. This way you can replace officially installed packages without removing them from `package.json`.

Packages require a special entry in the `package.json` file in order for discovery to work:

```json
{
  "osjs": {
    "type": "package"
  }
}
```

In this example we clone the example application repository instead of creating a new one:

```bash
# In your OS.js root folder
git clone https://github.com/os-js/osjs-example-application.git src/packages/Example
cd src/packages/Example
npm install
npm run build
```

Then run the discovery command:

```bash
# In your OS.js root folder
npm run package:discover
```

> Notes:
> 1. Each time you add/remove (or modify the metadata) a package you need to run `npm run package:discover` to update the global package manifest.
> 2. Package name **must be unique**.
> 3. The `package:discover` task creates a file named `packages.json` and creates symlinks inside the `dist/{apps|themes}` directories to `{package}/dist`.
> 4. OS.js expects you to output your bundles etc. in  a directory called `dist/` (which is default in Webpack).

### Next steps

Now that you have your package set up, look at the Tutorial section in the menu on how to proceed with implementing features.

If you're developing an application, these are the relevant articles in order:

1. [Overview](../resource/overview/README.md)
2. [Core Tutorial](../tutorial/core/README.md)
3. [Application Tutorial](../tutorial/application/README.md)
4. [Window Tutorial](../tutorial/window/README.md)
4. [GUI Tutorial](../tutorial/gui/README.md)

## Contributing

Using the documentation above, you have everything you need to make changes.

> [info] To submit changes into the official repositories need a [github](https://github.com) account.

This is the basic workflow for making submissions:

* [Fork](https://help.github.com/articles/fork-a-repo/) the repository you want to make changes to
* Clone repository
* *Create a new branch* (from up-to-date `master`)
* **Test your work** (see above)
* Commit your work
* Create a [pull request](https://help.github.com/articles/about-pull-requests/)

It is important to write [good commit messages](https://github.com/erlang/otp/wiki/writing-good-commit-messages), having a clean git history and using the provided linter configurations. This saves a lot of time when reviewing the work and things gets merged faster.

## Publishing

It is recommended that you distribute your modules and packages in a compiled form.

The official npm packages does this and delivers the files in a `dist/` directory.

Using `NODE_ENV=production` is recommended to avoid bloat and allow for proper tree-shaking, etc.

You can distribute the sources in addition, but it all depends on the target (ES vs commonjs etc).

### npm

This is a typical setup of `package.json` that distributes only the runtime files and metadata.

```json
{
  "scripts": {
    "build": "webpack",
    "watch": "webpack --watch",
    "test": "jest",
    "eslint": "eslint *.js",
    "stylelint": "stylelint index.scss src/**/*.scss",
    "prepublishOnly": "npm run test && npm run eslint && npm run stylelint && rm ./dist/* && NODE_ENV=production npm run build"
  },

  "files": [
    "dist/",
    "server.js",
    "metadata.json"
  ],

  // These are not required for packages
  "main": "dist/main.js",
  "style": "dist/main.css"
}
```

This ensures that all your tests are valid before you publish your final pack.

You can run `tar tvf $(npm pack)` to confirm what files are published before actually running `npm publish`.

### git

You can also distribute via git, where everything in the npm section above still applies.

A disadvantage using git for deployment is that you have to create a specific branch to avoid users downloading unwanted files and sources.

