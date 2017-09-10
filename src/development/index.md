---
title: Development
layout: layout.html
---

# Development

This guide will show you how to set up a development enviroment and to contribute changes.

## Environment

You don't have to make any changes to get a development environment up and running.

Just make sure to apply the `--debug` flag on build tasks. You can also use the `--devtool=STR` webpack option to set your sourcemap of choice.

It is **highly recomended** that you use `osjs watch` to build changes as this is much faster and automatically runs whenever you make changes.

```bash
# Core
$ node osjs watch --debug

# Themes
$ node osjs watch --themes --debug

# Package
$ node osjs watch --debug --package=repo/name
```

If you want to use `node-supervisor` to automatically restart the server upon changes, use `./bin/start.sh --debug` (or `./bin/win-start.cmd --debug`) instead of `node osjs run --debug`.

You can also start the server with `--reload` flag. This will make server automatically reload your package server scripts upon change.

See [packages manual](/packages/#development) for more information about package development.

## Files, Modules and Layouts

All of the sources are located in `src/` with exception of the following modules:

* [osjs-build](https://github.com/os-js/osjs-build) - The build system
* [osjs-scheme-loader](https://github.com/os-js/osjs-scheme-loader) - Webpack scheme loader
* [os-js.org](https://github.com/os-js/os-js.org) - Homepage
* [manual.os-js.org](https://github.com/os-js/manual.os-js.org) - Manual Homepage
* [api.os-js.org](https://github.com/os-js/api.os-js.org) - API Documentation Homepage
* [Various packages](https://github.com/os-js)

Brief overview over source folders:

* `conf/` Configuration files
* `server/` Server sources and its module
* `client/` Client scripts and stylesheets
* `themes/` Client themes (fonts, styles, sounds, icons and other assets)
* `templates/` Files used in generation of builds and configurations

## Contributing

Follow normal [Github workflow](https://guides.github.com/introduction/flow/):

- Make a github account
- Fork OS.js on Github to your account
- Clone the newly created repository
- Create a new branch
- Do work, commit and push
- Then open a pull-request on Github (use the `development` branch)

The patch will then be reviewed and finally merged when given the OK.

The submitted changes will be analyzed and tested with various automated soultions, so to prevent errors you should follow the eslint style rules provided.

You can run `node osjs test` to run unit tests and eslint (`node osjs mocha` and `node osjs eslint` respectively).

## Style Guide

Use two spaces for indentation, semicolons and spacing around brackets. A `.eslintrc` end `.editorconfig` is provided for you to plug into your editor or IDE of choice.
