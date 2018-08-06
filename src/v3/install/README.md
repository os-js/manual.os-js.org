# Installation

Installation is done in a few simple steps and only takes a couple of minutes.

## Requirements

The only dependency is `node 8` or later (and `git` is recommended).

## Demo

You can run a demo using docker without checkout out any source-code:

```bash
docker run -p 8000:8000 osjs/osjs-v3:demo
```

## Setup

Make sure to read the [deployment guide](../guide/deploy/README.md) if you plan on installing this on a remote server.

*When you're done, OS.js is set up by default to run on [http://localhost:8000](http://localhost:8000).*

> NOTE: Do not use "sudo" or an administrator user for the setup procedure.

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

# Build the distribution
npm run build

# And finally start the server
npm run serve
```

### Docker Setup

A Docker setup is also provided (mainly aimed at development). It performs all the necessary steps for you, including installation of some default packages:

```bash
cp .env.example .env
docker-compose up
```

## Upgrade

To upgrade, use `npm update` or manually update dependencies defined in the `package.json` file.

You can list outdated modules with `npm outdated`.
