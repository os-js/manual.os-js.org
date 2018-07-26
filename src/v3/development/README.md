# Development

## Introduction

For development you need `git`, `node` and `npm` (see installation requirements).

> Note: **It is highly recommended that you either manage your node installation with [nvm](https://github.com/creationix/nvm) or [modify you npm setup](https://docs.npmjs.com/getting-started/fixing-npm-permissions) to prevent permission errors when using the npm link feature.**

## Docker

If you're using Docker, you do your work normally on the local filesystem, but when performing commands and tasks related to building and dependency management, you have to run them within the context of the container:

```
# Watch for changes
docker-compose exec osjs npm run watch
```

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
#
# Somewhere in your filesystem (or use src/ directory)
#

# First check out the code of package @osjs/client
git clone https://github.com/os-js/osjs-client
cd osjs-client

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
> 1. Windows users might have to apply `{resolve: {symlinks:false}}` to the Webpack configuration. Some users have reported some dependencies fail to resolve properly with symlink resolution enabled if nested deeply.
> 2. Note that the linking only applies to the package, not its dependencies. To also change the packages dependencies, you have to link these as well.

### Packages

You can use `npm run package:create` to create a new package from a wizard.

Packages require a special entry in the `package.json` file in order for discovery to work:

```json
{
  "osjs": {
    "type": "package"
  }
}
```

Packages work in the same way as general modules, except there's an extra CLI command you have to run:

```bash
#
# Somewhere in your filesystem (or use src/ directory)
#

# Check out the @osjs/example-application package
git clone https://github.com/os-js/osjs-example-application.git
cd osjs-example-application

# Build source (or `npm run watch` in while developing to automatically rebuild)
npm run build

# Link your npm package just as with a Module
npm link

#
# In your OS.js root directory
#

# Subscribe to the npm registered package
npm link @osjs/example-application

# Finally, discover installed and linked packages
npm run package:discover
```

> Notes:
> 1. Each time you add/remove (or change the `metadata.json`) a package you need to run `npm run package:discover` to update the global package manifest.
> 2. Package name **must be unique**.
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

## Publishing

It is recommended that you distribute your modules and packages in a compiled form. The official npm packages does this and delivers the files in a `dist/` directory.

Using `NODE_ENV=production` is recommended to avoid bloat and allow for proper tree-shaking, etc.

You can distribute the sources in addition, but it all depends on the target (ES vs commonjs etc).
