---
description: How to override internal modules
full_title: Override modules
---

# Override modules

here's two ways to easily override the internal npm modules used in the client and/or server.

## Replacement

Your first option is to simply replace the `import` statements in your bootstrap scripts.

Example:

```bash
# In your OS.js installation
cd src/
git clone https://github.com/os-js/osjs-client
cd osjs-client
npm install
```

```javascript
// In `src/client/index.js` replace this:
import {/* some code here */} from '@osjs/client';

// With:
import {/* some code here */} from '../osjs-client/index.js';
```

## Linking

With the `npm link` feature you *override* the paths in `node_modules/` and link them to the actual source-code instead of the distributed builds.

> **[warning] It is highly recommended that you either manage your node installation with [nvm](https://github.com/creationix/nvm) or [modify you npm setup](https://docs.npmjs.com/getting-started/fixing-npm-permissions) to prevent permission errors when using the npm link feature.**

Assuming you've already installed OS.js, this is an example of how you set up linking:

```bash
#
# Somewhere in your filesystem (or use src/ directory)
#

# First check out the code of package @osjs/client
git clone https://github.com/os-js/osjs-client
cd osjs-client

# Install required dependencies
npm install

# Build source (or `npm run watch` in while developing to automatically rebuild)
npm run build

# Then register the package in npm
npm link

#
# In your OS.js root directory
#

# Subscribe to the npm registered package
npm link @osjs/client
```

*Notes*:

1. Using `npm link` will not link its dependencies. You have to do this yourself or use a monorepo uitlity to automate the process.
2. Running `npm install` after linking **will remove the links**
3. You can use [lerna](https://github.com/lerna/lerna) if you're managing a monorepo.

