---
description: How to override internal modules
full_title: Override modules
---

# Override modules

This article demonstrates three different methods of overriding npm packages in the client and/or server.

1. [Local checkout](#local-checkout)
3. [Git submodules](#git-submodules)
2. [Linking](#linking)

## Local checkout

You can check out sources of a module inside your distribution/installation and then modify the bootstrap script imports to easily override modules for development purposes.

First do a checkout of the module sources:

> Note that you don't have to use git in this case. You can also download and extract an archived version.

```bash
# In your OS.js installation
cd src/
git clone https://github.com/os-js/osjs-client
cd osjs-client
npm install
```

Then modify your imports in the bootstrap scripts (ex. `src/client/index.js`):

> In the server, `require` is used instead of `import`, but with similar patterns.

```javascript
// Replace
import {/* some code here */} from '@osjs/client';

// With
import {/* some code here */} from '../osjs-client/index.js';
```

## Git submodules

This is basically the same as [linking](#linking), except that it's managed with git [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules), and not npm package installations.

A good option if you want to maintain your own distribution without having to modify any of the bootstrap scripts.

```bash
# In your OS.js root directory, set up the submodule
git submodule add https://github.com/os-js/osjs-client src/osjs-client
cd src/osjs-client
npm install
npm run build

# Then back inside the root directory
npm install --save file:src/osjs-client
```

## Linking

With the `npm link` feature you override the paths in `node_modules/` and link them to the actual source-code instead of the distributed builds.

Mostly useful if you have a large development environment (multiple distros and test setups, etc) that does not rely on [git submodules](#git-submodules). This has some chaveats:

1. Using `npm link` will not deep-link dependencies
2. Running `npm install` after linking **will reset the links** to the original npmjs sources
3. Without a tool like [lerna](https://github.com/lerna/lerna) managing a huge codebase might be a bit of a pain of linking is used througout

> **[warning] It is highly recommended that you either manage your node installation with [nvm](https://github.com/creationix/nvm) or [modify you npm setup](https://docs.npmjs.com/getting-started/fixing-npm-permissions) to prevent permission errors when using the npm link feature.**

Assuming you've already installed OS.js, this is an example of how you set up linking:

> Note that you don't have to use git in this case. You can also download and extract an archived version.

```bash
# Somewhere outside your installation
git clone https://github.com/os-js/osjs-client
cd osjs-client
npm install
npm run build
npm link

# Then inside the OS.js root directory
npm link @osjs/client
```
