---
title: Introduction to packages
layout: layout.html
---

# Introduction to packages

To make a package, run `node osjs generate:package --name=REPO/NAME --type=TYPE`.

## Package naming

A package is grouped by a "repository", so prefix your name with ex: `default/MyPackageName` (this will place it inside the default provided repository in `src/packages`).

## Package types

These are the types:

- `application`: The default application. Comes with example window and server API.
- `service`: A service that runs in the background.
- `iframe-application`: An application that opens a window with an iframe.
- `extension`: Generic module that is loaded upon start.

## Package metadata

The package is generated with a metadata file along with the normal sources. This file describes the package and how it is loaded.

| Key                   | Description                                                         | Required | Default             | Restriction |
| --------------------- | ------------------------------------------------------------------- | -------- | ------------------- | ----------- |
| className             | Name of package in client namespace                                 | Yes      |                     |             |
| enabled               | Global enabled state                                                | No       | true                |             |
| singular              | Only allow one running instance                                     | No       | false               |             |
| autostart             | Automatically start on boot                                         | No       | false               |             |
| name                  | A name (title)                                                      | Yes      |                     |             |
| description           | A short description                                                 | Yes      |                     |             |
| category              | A category <sup>1</sup>                                             | No       | other               |             |
| visible               | Used for visibility in application launch menu etc.                 | No       | true                |             |
| icon                  | A icon                                                              | Yes      |                     | Application |
| names                 | A map of locales and translated names                               | No       |                     |             |
| descriptions          | A map of locales and translated descriptions                        | No       |                     |             |
| mime                  | An array of what MIME types is supported                            | No       |                     | Application |
| compability           | An array of what features to check for support                      | No       |                     |             |
| preload               | An array of static resources to load                                | Yes      |                     |             |
| depends               | An array of dependent packages to load first                        | No       |                     |             |
| uses                  | An array of package names that autoload this package                | No       |                     | Extension   |
| spawn.enable          | A boolean to enable the given spawned                               | No       |                     |             |
| spawn.exec            | A path to a node script to spawn on load                            | No       |                     |             |
| build.copy            | An array of filenames to copy into the package dist <sup>2</sup>    | No       |                     |             |
| main.node             | A string that resolves the entry point for node                     | Yes      | server/main.js      |             |
| main.php              | A string that resolves the entry point for PHP                      | Yes      | server/main.php     |             |
| main.webpack          | An array of strings that is used for webpack entries                | Yes      | main.js,main.css    |             |


<sup>1</sup> - Available categories: development, education, games, graphics, network, multimedia, office, system, utilities.

<sup>2</sup> - You can also use alternate formats. Look at the [webpack plugin documentation](https://github.com/kevlened/copy-webpack-plugin) for more information.

## Installation

Usually installing of a package is done like this:

```bash
$ mkdir src/packages/myrepo
$ git clone http://github.com/user/mypackage.git src/packages/myrepo/mypackage
$ node osjs config:add --name=repositories --value=myrepo
$ node osjs build:manifest
$ node osjs build:package --name=myrepo/mypackage
```

You can also use the provided helper scripts:

```bash
# Install a repository with many packages
$ ./bin/add-package-repository.sh myrepo http://github.com/user/myrepo.git

# Or just a single package as described above:
$ ./bin/add-package.sh myrepo mypackage http://github.com/user/mypackage.git
```

For more information on commands see [configuration](/configuration).

## Development

Packages are built with **Webpack** and is written in ES6, so you have a lot of flexibility.

You can watch your package with: `node osjs watch --package=myrepo/mypackage`.

To reload your package in the client, run `OSjs.require('core/process').reload('ApplicationSomething')` where the name is your `className` definition (in the developer tools in your browser).

Look at [development pages](/development) for more information.

## Building

To make OS.js recognize your package, you first have to run `node osjs build:manifest` to add it to the global manifest. You also have to run this command whenever you change your metadata file.

You can run `node osjs build:package --name=REPO/NAME` to manually build your package. You can also put up a watcher with `node osjs watch --package=REPO/NAME`.
