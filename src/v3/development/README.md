# Development

## Introduction

For development you need `git`, `node` and `npm` (see installation requirements).

Use the provided `.eslintrc` and `.csslintrc` files to keep consistent code styles.

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

Assuming you've already installed OS.js, this is how you set up linking:

```bash
# Somewhere in your project folder
git clone https://github.com/os-js/osjs-client
cd osjs-client
npm link

# In your OS.js installation
npm link @osjs/client
```

> Notes:
> 1. Windows users might have to apply `{symlinks:false}` to the webpack (`createWebpack()`) configuration files. Some users have reported some dependencies fail to resolve properly with symlink resolution enabled.
> 2. Note that the linking only applies to the package, not its dependencies. To also change the packages dependencies, you have to link these as well.
> 3. It is recommended that you set up npm to install global packages as your own [system user](https://docs.npmjs.com/files/npmrc#files) to avoid using root.

You can now run `npm watch:dist` to automatically rebuild changes, or alternatively manually run `npm build:dist`.

### Packages

OS.js packages (applications and themes) are set up in `src/packages/`. Usually packages are installed via the [CLI](../guide/CLI/README.md) but you can freely create or place folders in here manually.

For an example [see the provided application example](https://github.com/os-js/osjs-example-application).

Each time you add/remove (or change the `metadata.json`) a package you need to run `npm run build:manifest` to update the global package manifest.

```bash
# Check out the example
git clone https://github.com/os-js/osjs-example-application.git src/packages/MyApplication

# Set your own name and title, etc.
edit src/packages/MyApplication/metadata.json
edit src/packages/MyApplication/index.js

# Update global manifest
npm run build:manifest
```

> Notes:
> 1. Package name **must be unique**.

You can now run `npm run watch:dist` to automatically watch and rebuild changes, or alternatively manually run `npm build:dist` (or `npm run build:dist -- --application=PackageName`).

### Server

You can launch the server with [Nodemon](http://nodemon.io/) to automatically reload upon changes as the `npm run watch` tasks does not apply here.

## Contributing

Using the documentation above, you have everything you need to make changes.

> To submitt changes into the official repositories need a [Github](https://github.com) account.

This is the basic workflow for making submissions:

* [Fork](https://help.github.com/articles/fork-a-repo/) the repository you want to make changes to
* Clone repository
* **Create a new branch** (from up-to-date `master`)
* Commit your work
* Create a [pull request](https://help.github.com/articles/about-pull-requests/)

It is important to write [good commit messages](https://github.com/erlang/otp/wiki/writing-good-commit-messages), having a clean git history and using the provided linter configurations. This saves a lot of time when reviewing the work and things gets merged faster.
