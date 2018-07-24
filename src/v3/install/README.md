# Installation

Installation is done in a few simple steps and only takes a couple of minutes.

## Requirements

The only dependency is `node 8` or later (and `git` is recommended).

## Setup

Make sure to read the [deployment guide](../guide/deploy/README.md) if you plan on installing this on a remote server.

When you're done, OS.js is set up by default to run on [http://localhost:8000](http://localhost:8000).

> NOTE: Do not use "sudo" for any of these commands.

Clone the base repository (or download latest release) and install node modules:

```bash
git clone -b v3 --single-branch https://github.com/os-js/OS.js.git
cd OS.js
npm install
```

### Manual Setup

Install themes and packages:

```bash
npm install --save @osjs/standard-theme
npm install --save @osjs/filemanager-application

npm run package:discover
npm run build:manifest
```

Then proceed with building:

```bash
npm run build
```

And finally start the server:

```bash
npm run serve
```

### Docker Setup

A Docker setup is also provided, which is set up by default to perform the above steps.

```bash
cp .env.example .env
edit .env
docker-compose up
```

## Upgrade

To upgrade, use `npm update` or manually update dependencies defined in the `package.json` file.

You can list outdated modules with `npm outdated`.
