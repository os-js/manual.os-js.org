---
description: This article will explain the installation and upgrade procedures.
full_title: Installation
---

# Installation

Installation is done in a few simple steps and only takes a couple of minutes.

## Requirements

The only dependency is `node 8` or later and `git` is recommended.

A node Docker setup is also provided so you don't need to have node installed locally (or want to have an isolated environment).

Runs in any modern web browser.

## Demo

You can run a demo using Docker without checkout out any source-code:

```bash
docker run -p 8000:8000 osjs/osjs:v3
```

Or check out the [official v3 online demo](https://demo.os-js.org/v3/). *Please note that this might be down for maintainence at times, or running an unstable version.*

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

# Optionally install extra packages:
# For a list of packages see https://manual.os-js.org/v3/resource/official/
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

A Docker setup is also provided (mainly aimed at development). It performs all the necessary steps for you:

```bash
cp .env.example .env
docker-compose up
```

Now open [http://localhost:8000](http://localhost:8000) in your browser to launch OS.js.

## Upgrade

You can list outdated packages with `npm outdated`.

To upgrade, use `npm update`.

It is also recommended that you run `npm run package:discover` afterwards.

**Make sure to read the [migration guide](../guide/deploy/README.md) before you update for any special notices.**

> Releases uses [semantic versioning](https://semver.org/) so if an update has breaking changes the `npm update` command will not upgrade to the latest release. You'll have to do it manually by using `npm install <package>@^<version>`.
