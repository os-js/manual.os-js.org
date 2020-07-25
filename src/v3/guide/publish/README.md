---
description: How to publish npm packages
full_title: Publishing
---

# Publishing

It is recommended that you distribute your modules and packages in a compiled form.

The official npm packages does this and delivers the files in a `dist/` directory.

Using `NODE_ENV=production` is recommended to avoid bloat and allow for proper tree-shaking, etc.

You can distribute the sources in addition, but it all depends on the target (ES vs commonjs etc).

## npm

This is a typical setup of `package.json` that distributes only the runtime files and metadata.

```json
{
  "scripts": {
    "build": "webpack",
    "watch": "webpack --watch",
    "test": "jest",
    "eslint": "eslint *.js",
    "stylelint": "stylelint index.scss src/**/*.scss",
    "prepublishOnly": "npm run test && npm run eslint && npm run stylelint && rm ./dist/* && NODE_ENV=production npm run build"
  },

  "files": [
    "dist/",
    "server.js",
    "metadata.json"
  ],

  // These are not required for packages
  "main": "dist/main.js",
  "style": "dist/main.css"
}
```

This ensures that all your tests are valid before you publish your final pack.

You can run `tar tvf $(npm pack)` to confirm what files are published before actually running `npm publish`.

## git

You can also distribute via git, where everything in the npm section above still applies.

A disadvantage using git for deployment is that you have to create a specific branch to avoid users downloading unwanted files and sources.

