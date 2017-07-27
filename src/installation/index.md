---
title: Installation
layout: layout.html
---

# Preparation

To install **OS.js** you need these dependencies installed:

* Node v6 or newer
* Git

*Debian and Ubuntu users, you'll need the `nodejs-legacy` package*.

# Installation

```bash
$ git clone https://github.com/os-js/OS.js.git
$ cd OS.js
$ npm install
$ node osjs build
$ node osjs run
```

Add `--debug` to the osjs commands to run with extended development support.

# Upgrading

```bash
$ git pull
$ npm install
$ node osjs build
```

*Remember to restart the server afterwards*.
