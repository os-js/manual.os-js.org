---
title: Concepts
layout: layout.html
---

# Concepts

## Build System

The build system consits of two parts: A *task runner* (Ygor) and *Webpack*.

All tasks are run via the `osjs` tool, but the build process itself takes place in Webpack.

The build setup can be changed with the configuration system (explained below).

## Configuration System

The configuration is managed with JSON files in `src/conf`. These are prefixed with a number because they are loaded in sequence and merged together, which produces an entire tree.

You can manipulate the settings by changing the supplied files, adding your own, or use the `osjs` tool.

Please note that Arrays are not merged together.

For more information [look in the configuration manual](/configuration).

## Client

The client is the main application that runs in a browser environment.

It's built using Webpack and ES6, so everything is separated into individual modules.

The "client" contains all core APIs, and the main graphical environment (window manager and desktop) is in a separate package which is launched upon boot (by default the "default/CoreWM" package).

## Server

A HTTP server to host the client files and server APIs. Is a available in two flavors: Node (Express) and PHP.

**Please note that the PHP server is missing some features and might be moved into a separate project**.

## Modules

Both the server and client can be extended via modules. These come in several types:

* **Connection** Establishes connection and handles requests
* **Authenticator** Handles authentication, user groups and other user things
* **Storage** Handles settings and general storage (like sessions and settings)
* **Middleware** Handles HTTP requests on the server
* **Service** A service running alongside server
* **VFS Transport** For manipulating files from a certain source or filesystem
* **Themes** Visual stylings etc

You can find more information about these in the menu.

## Packages

There are several types of packages:

* **Application** A normal application
* **Service** An application that runs in the background
* **Extension** Can be used to extend or hook into the internal APIs
* **Iframe** An application with a dedicated iframe window

All packages has a metadata file (`metadata.json`) that contains information about the package in general and also what files it should use.

The package metadata files are built into a final *manifest file* that the client uses to populate its Package Manager.

For more information [look in the packages manual](/packages).

## Overlays

Instead of making changes to the base repository, you can very easily add overlays to include your own code and packages, etc.

An overlay is organized just like in `src/` and will be loaded into the build/configuration system automatically once added.

An example overlay [is available on Github](https://github.com/andersevenrud/osjs-example-overlay).

For more information on configuration [look in the configuration manual](/configuration/#adding-overlays).
