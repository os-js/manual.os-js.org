---
description: An introduction into development and related utilities
---

# Development

This article will walk you through the development process of OS.js modules and packages.

1. [Introduction](#introduction)
2. [Naming conventions](#naming-conventions)
3. [Building](#building)
4. [Testing](#testing)
5. [Developing Modules](#developing-modules)
6. [Developing Packages](#developing-packages)

## Introduction

Before beginning read the [overview article](../resource/overview/README.md) to familiarize yourself with the
architecture and involved technologies.

With a standard [installation](../install/README.md) you get a fully working development environment out of the box.

> [info] Note that by default package extensions (applications, themes, etc.) are built separately from your installation/distribution.
> Make sure to run commands inside the **correct directory**

If you're using Docker (`docker-compose`) for your environment, you have to execute CLI commands within the Docker image context. Example:

```shell
docker-compose exec osjs npm run watch
```

## Naming conventions

The following list contains the naming convention for modules and packages (in `git` and `npm`):

> [warning] Names are unique

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

Official projects are scoped with `@osjs/<project>-<suffix>` when published onto npmjs.

If you want to publish a module or package, look at the [publish guide](../guide/publish/README.md).

## Building

These are the default provided commands for performing build actions:

* `npm run build` Build changes once
* `npm run watch` Watch and build changes automatically

To produce a production build, prefix your command with ex: `NODE_ENV=production npm run <task>`.

## Testing

These are the default provided commands for performing test actions:

* `npm run test` - Run all tests and linters
* `npm run eslint` - [ESLint](https://eslint.org/) pass
* `npm run stylelint` - [Stylelint](https://stylelint.io/) pass
* `npm run jest` - [Jest](https://jestjs.io/) unit tests

## Developing Modules

The OS.js client and server are split up into several modules provided by `npm` packages (see `package.json`).

To override these modules follow the [modules guide](../guide/modules/README.md).

To make your own module(s), you can use the CLI Wizard:

* `npm run make:provider` - Service Provider - See [Service Provider Tutorial](../tutorial/provider/README.md)
* `npm run make:auth` - Authentication Adapter - See [Authentication Tutorial](../tutorial/auth/README.md)
* `npm run make:settings` - Settings Adapter - See [Settings Tutorial](../tutorial/settings/README.md)
* `npm run make:vfs` - VFS Adapter - See [VFS Tutorial](../tutorial/vfs/README.md)

For custom CLI tasks see [CLI Guide](../guide/cli/#custom-tasks)

## Developing Packages

Packages are usually installed via `npm` (within `node_modules`) but can also be placed into `src/packages`. To set up custom package discovery paths, see [CLI Guide](../guide/cli/README.md#custom-package-discovery-paths).

> [info] Packages installed in `node_modules/` always have the lowest priority, and discovery paths are prioritized by their order (ascending). This means you can replace `npm` installed packages without removing them from `package.json` itself.

Run `npm run make:application` to create a new [application package](../tutorial/application/README.md) package from a wizard using the standard template. Or an [Iframe application](../tutorial/iframe/README.md) with `npm run make:iframe-application`.

```bash
# Create a new application from template
npm run make:application

# Discover all packages to make it visible in the client
npm run package:discover
```
