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

The first option is to override the modules from within your installation/distribution.

> Note that you don't have to use git in this case. You can also download and extract an archived version.

```bash
# In your OS.js installation
cd src/
git clone https://github.com/os-js/osjs-client
cd osjs-client
npm install
npm run build

# Then back inside the root directory
npm install --save file:src/osjs-client
npm run build
```

## Git submodules

Same as above, except that the overrided modules are kept in separate repositories using Git [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

```bash
# In your OS.js root directory, set up the submodule
git submodule add https://github.com/os-js/osjs-client src/osjs-client
cd src/osjs-client
npm install
npm run build

# Then back inside the root directory
npm install --save file:src/osjs-client
npm run build
```

## Linking

With the `npm link` feature you override the paths in `node_modules/` from any directory on your computer. Useful if you don't plan on distributing your sorces like in [local checkout](#local-checkout) or [Git submodules](#git-submodules).

> **[warning] It is highly recommended that you either manage your node installation with [nvm](https://github.com/creationix/nvm) or [modify you npm setup](https://docs.npmjs.com/getting-started/fixing-npm-permissions) to prevent permission errors when using the npm link feature.**

This comes with a few gotchas:

1. Using `npm link` will not deep-link dependencies
2. Running `npm install` after linking **will reset the links** to the original npmjs sources
3. Without a tool like [lerna](https://github.com/lerna/lerna) managing a huge codebase might be a bit of a pain of linking is used throughout

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
npm run build
```
