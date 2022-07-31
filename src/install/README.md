---
description: This article will explain the installation and upgrade procedures.
full_title: Installation
---

# Installation

Installation is done in a few simple steps and only takes a couple of minutes.

1. [Requirements](#requirements)
2. [Demo](#demo)
3. [Setup](#setup)
    1. [Manual Setup](#manual-setup)
    2. [Docker Setup](#docker-setup)
4. [Upgrade](#upgrade)
5. [Remove Packages](#remove-packages)

## Requirements

The only dependency is **[Node 12](https://nodejs.org/en/)** or later and *[git](https://git-scm.com/)* as an optional recommendation.

**[Docker](https://www.docker.com/)** is supported so you don't have to install node onto your system.

Runs in any modern web browser.

## Demo

You can run a demo using Docker without checking out any source-code:

```bash
docker run -p 8000:8000 osjs/osjs:v3
```

Or check out the [official online demo](https://demo.os-js.org/). *Please note that this might be down for maintenance at times, or running an unstable version.*

## Setup

Clone the official boilerplate [repository](https://github.com/os-js/OS.js) (or download and extract a [compressed version](https://github.com/os-js/OS.js/releases) of latest release).

> **[info] The official repository is intended for you to use as a boilerplate to create your own installations/distributions of OS.js. You can safely remove the `.git` directory afterwards if you used git, as well as modify the structure and included files as you see fit.**

```bash
git clone -b master --single-branch https://github.com/os-js/OS.js.git
cd OS.js
```

> Use any (GUI) application you want to clone or download & extract the boilerplate onto your system instead of performing the commands above.
> Note that the rest of the process is usually done via the terminal (or command-line), so make sure that you're inside the installation directory
> before proceeding.

You can now proceed with using one of two methods: [Manual](#manual-setup) or [Docker](#docker-setup).

Make sure to read the [deployment guide](../guide/deploy/README.md) if you plan on installing in a production environment.

### Manual Setup

To install you have to run a couple of commands to set up your installations/distribution:

> **[warning] Do not run any of these commands as a "sudo" or "admin" user. This can cause issues with file permissions as might leave you open to security vulnerabilities.**

```bash
# Install dependencies
npm install

# Optionally install extra packages:
# For a list of packages see https://manual.os-js.org/resource/official/
npm install @osjs/example-application

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

> [info] Note that when running under this environment; all internal CLI commands have to be executed within the docker context, ex: `docker-compose exec osjs npm <command>`.

```bash
docker-compose up
```

Now open [http://localhost:8000](http://localhost:8000) in your browser to launch OS.js.

## Upgrade

You can list outdated packages with `npm outdated`.

To upgrade, use `npm update`.

It is also recommended that you run `npm run package:discover` afterwards.

> Releases uses [semantic versioning](https://semver.org/) so if an update has breaking changes the `npm update` command will not upgrade to the latest release.
> You'll have to do it manually by using `npm install <package>@^<version>`.
> **Make sure to read the [migration guide](../guide/migrate/README.md) before you update for any special notices.**

## Remove Packages

Depending on how you installed your package(s), this is the procedure:

1. `npm remove packagename` or `rm -rf src/packages/PackageName`
2. `npm run package:discover`

You can also [disable packages](../guide/disabling-packages/README.md).
