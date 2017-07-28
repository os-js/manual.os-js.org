---
title: Installation
layout: layout.html
---

# Preparation

To install **OS.js** you need these dependencies installed:

* Node v6 or newer
* Git

*Debian and Ubuntu users, you'll need the `nodejs-legacy` package*.

## Installation

```bash
$ git clone https://github.com/os-js/OS.js.git
$ cd OS.js
$ npm install
$ node osjs build
$ node osjs run
```

Add `--debug` to the osjs commands to run with extended development support.

## Upgrading

```bash
$ git pull
$ npm install
$ node osjs build
```

*Remember to restart the server afterwards*.

## Using a Webserver

OS.js ships with an internal HTTP server for node (see [reverse-proxy](/configuration/#reverse-proxy)), but if you're planning on using the PHP server you need to configure your webserver.

To generate a sample configuration, run:

```bash
# Apache
$ node osjs generate:config --type=htaccess --env=prod
$ node osjs generate:config --type=apache --env=prod

# Lighttpd
$ node osjs generate:config --type=lighttpd --env=prod

# Nginx
$ node osjs generate:config --type=nginx --env=prod
```

## Standalone builds

If you want to build OS.js completely standalone (to run from ex `file://`), simply use the `--standalone` flag when building and the `dist` directory is directly ready for usage.
