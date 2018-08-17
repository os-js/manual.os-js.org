---
description: OS.js v3 Installation Manual
---

# Installation

Installation is done in a few simple steps and only takes a couple of minutes.

## Requirements

The only dependency is `node 8` or later and `git` is recommended.

A node Docker setup is also provided so you don't need to have node installed locally (or want to have an isolated environment).

Runs in any modern web browser (minimum target is IE10+).

## Demo

You can run a demo using Docker without checkout out any source-code:

```bash
docker run -p 8000:8000 osjs/osjs-v3:demo
```

## Setup

Make sure to read the [deployment guide](../guide/deploy/README.md) if you plan on installing in a production environment.

> **[warning] Do not use "sudo" or an administrator user for the setup procedure.**

Clone the base repository (or download a compressed version of latest release):

```bash
git clone -b v3 --single-branch https://github.com/os-js/OS.js.git
cd OS.js
```

### Manual Setup

To install locally you have to run a couple of commands to set up your distribution:

```bash
# Install dependencies
npm install

# Install a selection of themes and applications
# The default setup only comes with the theme(s)
npm install --save @osjs/example-application

# Discover installed packages
npm run package:discover

# Build the client bundle
npm run build

# And finally start the server
npm run serve
```

Now open [http://localhost:8000](http://localhost:8000) in your browser to launch OS.js.

### Docker Setup

A Docker setup is also provided (mainly aimed at development). It performs all the necessary steps for you, including installation of some default packages:

```bash
cp .env.example .env
docker-compose up
```

Now open [http://localhost:8000](http://localhost:8000) in your browser to launch OS.js.

## Upgrade

To upgrade, use `npm update` or `npm install package@version` to manually update a selection of packages.

You can list outdated packages with `npm outdated`.
