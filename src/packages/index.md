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

| Key                   | Description                                               | Required | Default             | Restriction |
| --------------------- | --------------------------------------------------------- | -------- | ------------------- | ----------- |
| className             | Name of package in client namespace                       | Yes      |                     |             |
| enabled               | Global enabled state                                      | No       | true                |             |
| singular              | Only allow one running instance                           | No       | false               |             |
| autostart             | Automatically start on boot                               | No       | false               |             |
| name                  | A name (title)                                            | Yes      |                     |             |
| description           | A short description                                       | Yes      |                     |             |
| category              | A category                                                | No       | other               |             |
| visible               | Used for visibility in application launch menu etc.       | No       | true                |             |
| icon                  | A icon                                                    | Yes      |                     | Application |
| splash                | Show the loading splash when launching                    | No       | true                |             |
| names                 | A map of locales and translated names                     | No       |                     |             |
| descriptions          | A map of locales and translated descriptions              | No       |                     |             |
| mime                  | An array of what MIME types is supported                  | No       |                     | Application |
| compability           | An array of what features to check for support            | No       |                     |             |
| preload               | An array of static resources to load (see below)          | Yes      |                     |             |
| depends               | An array of dependent packages to load first              | No       |                     |             |
| uses                  | An array of package names that autoload this package      | No       |                     | Extension   |
| spawn                 | A path to a node script to spawn on load                  | No       |                     |             |
| build.copy            | An array of filenames to copy into the package dist       | No       |                     |             |

## Development

Packages are built with **Webpack** and is written in ES6, so you have a lot of flexibility.

## Building

To make OS.js recognize your package, you first have to run `node osjs build:manifest` to add it to the global manifest. You also have to run this command whenever you change your metadata file.

You can run `node osjs build:package --name=REPO/NAME` to manually build your package. You can also put up a watcher with `node osjs watch --package=REPO/NAME`.
