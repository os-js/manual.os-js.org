# Development

## Introduction

For development you need `git`, `node` and `npm` (see installation requirements).

Use the provided `.eslintrc` and `.csslintrc` files to keep consistent code styles.

## Environment

Using the required tools (above) you can set up a development enviroment in a couple of minutes.

You can set `development` configuration entry in configuration to enable extra development features, like automatic reloading of your applications when builds are run.

### Modules

To develop on the npm module sources, you'll have to the `npm link` feature.

> NOTE: Windows users might have to apply `{symlinks:false}` to the webpack (`createWebpack()`) configuration files. Some users have reported some dependencies fail to resolve properly with symlink resolution enabled.

Assuming you've already installed OS.js, this is how you set up linking:

```bash
# Somewhere in your project folder
git clone https://github.com/os-js/osjs-client
cd osjs-client
npm link

# In your OS.js installation
npm link @osjs/client
```

> Please note that linking also applies to any OS.js dependencies inside these modules, so you'll have to repeat this process there as well.

You can now run `npm watch:dist` to automatically rebuild changes.

### Packages

It's recommended that you use `git` to develop packages (applications and themes).

Simply clone your repositories into `src/packages`, run `npm run build:manifest` to make packages visible to client and `npm run watch:dist` to automatically rebuild changes.

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
