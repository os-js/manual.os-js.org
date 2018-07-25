# Development

## Introduction

For development you need `git`, `node` and `npm` (see installation requirements).

> Note: **It is highly recommended that you either manage your node installation with [nvm](https://github.com/creationix/nvm) or [modify you npm setup](https://docs.npmjs.com/getting-started/fixing-npm-permissions) to prevent permission errors when using the npm link feature.**

## Testing

Use the provided `.eslintrc` and `.stylelint` files to keep consistent code styles.

All official packages provides running one or more of these tasks:

* `npm run eslint` - ESLint pass
* `npm run stylelint` - Stylelint pass
* `npm run test` - Jest unit tests

## Building

All official packages provides running one or more of these tasks:

* `npm run build` Build changes once
* `npm run watch` Watch and build changes automatically

## Environment

Using the required tools (above) you can set up a development enviroment in a couple of minutes.

You can set `development` configuration entry in configuration to enable extra development features, like automatic reloading of your applications when builds are run.

## Naming

OS.js has a format for naming different modules etc.:

* `osjs-<project>-application` - Application package
* `osjs-<project>-provider` -  Service Provider module
* `osjs-<project>-adapter` - Adapters used ex. in a service provider
* `osjs-<project>-theme` - Theme package
* `osjs-<project>-cli` - CLI Plugin
* `osjs-<project>` - Core modules

Official packages are scoped with `@osjs/<project>-<suffix>`.

### Module

With the `npm link` feature you can replace the different modules of OS.js with local source-code. If you for example want to make changes to the `@osjs/client` you can check out its sources, run the linking and then make any changes you may want.

Assuming you've already installed OS.js, this is an example of how you set up linking:

```bash
# First check out the code of package @osjs/client
git clone https://github.com/os-js/osjs-client
cd osjs-client

# Then register the package in npm
npm link

# Finally in your OS.js root subscribe to the npm registered package
npm link @osjs/client
```

> Notes:
> 1. Windows users might have to apply `{resolve: {symlinks:false}}` to the Webpack configuration. Some users have reported some dependencies fail to resolve properly with symlink resolution enabled if nested deeply.
> 2. Note that the linking only applies to the package, not its dependencies. To also change the packages dependencies, you have to link these as well.

### Packages

Packages work as above. They come in form of a npm package that you either install or link.

Each time you add/remove (or change the `metadata.json`) a package you need to run `npm run package:discover` to update the global package manifest.

```bash
# Check out the example
git clone https://github.com/os-js/osjs-example-application.git src/osjs-example-application
cd src/osjs-example-application

# Make changes
edit metadata.json
edit index.js

# Build source changes (or you can run `npm run watch` in the background)
npm run build

# Link your npm package just as with a Module
npm link

# Go back to the OS.js root directory and discover installed and linked packages
cd ../../
npm run package:discover
```

> Notes:
> 1. Package name **must be unique**.
> 2. You can use `npm run package:create` to create a new package from a wizard instead of cloning manually.
> 3. The `package:discover` task creates a file named `packages.json` and creates symlinks inside the `dist/{apps|themes}` directories to `{package}/dist`.

### Server

You can launch the server with [Nodemon](http://nodemon.io/) to automatically reload upon changes as the `npm run watch` tasks does not apply here.

## Contributing

Using the documentation above, you have everything you need to make changes.

> To submitt changes into the official repositories need a [Github](https://github.com) account.

This is the basic workflow for making submissions:

* [Fork](https://help.github.com/articles/fork-a-repo/) the repository you want to make changes to
* Clone repository
* *Create a new branch* (from up-to-date `master`)
* **Test your work** (see above)
* Commit your work
* Create a [pull request](https://help.github.com/articles/about-pull-requests/)

It is important to write [good commit messages](https://github.com/erlang/otp/wiki/writing-good-commit-messages), having a clean git history and using the provided linter configurations. This saves a lot of time when reviewing the work and things gets merged faster.
