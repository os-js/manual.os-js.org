---
description: A guide on how to set up OS.js on EvenNode
full_title: EvenNode Hosting Guide
---

# EvenNode Hosting Guide

This guide shows how to configure and deploy OS.js on [EvenNode hosting](https://www.evennode.com/docs/node).

## Prepare

EvenNode has a couple of requirements in order for OS.js server to launch properly:

### Add startup script

In your `package.json` file, add `start` entry to the `scripts` section:

```json
{
  "scripts": {
    "start": "npm run build && npm run package:discover -- --copy && node src/server/index.js"
  }
}
```

This will build, copy applications and start the server on deployment.

### Modify server port

In your `src/server/config.js` file, add the `port` entry:

```javascript
const path = require('path');
const root = path.resolve(__dirname, '../../');

module.exports = {
  root,
  public: path.resolve(root, 'dist'),

  // This is the new required entry
  port: process.env.PORT
}
```

### Modify dependencies

EvenNode installs packages from `package.json` in [production mode](https://www.evennode.com/docs/node-modules). So this means you'll have to move the dependencies in `devDependencies` to `dependencies` before deploying.

Example, from:

```json
{
  "devDependencies": {
    "a": "1.2.3"
  },
  "dependencies": {
    "b": "1.2.3"
  }
}
```

to:

```json
{
  "dependencies": {
    "a": "1.2.3",
    "b": "1.2.3"
  }
}
```

## Deploy

Follow EvenNode [git deployment guide](https://www.evennode.com/docs/git-deployment) or transfer the installation [via ftp](https://www.evennode.com/docs/ftp-access).
