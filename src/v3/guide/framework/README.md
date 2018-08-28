---
description: OS.js v3 Frameworks Guide
---

# Frameworks Guide

> Please note that mixing UI frameworks is not recommended. So, if you've set up your application with JSX for Hyperapp, this might conflict.

## React

You can use React (or any other) framework for building UI in your applications.

Install these dependencies (inside the application source folder):

```bash
npm install --save-dev @babel/core @babel/preset-react react react-dom
```

Then, add the following to your `.babelrc` file:

```json
{
  "presets": [
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
```

And finally in your `index.js` file:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>Hello World</div>
    );
  }
}

// ...
  proc.createWindow({})
    .render($content => ReactDOM.render(React.createElement(App), $content));
// ...
```

## Vue

Another alternative is Vue. This guide sets up single-file-component support as well.

Install these dependencies (inside the application source folder):

```bash
npm install --save-dev babel-preset-vue vue vue-loader vue-template-compiler webpack
```

Then, add the following to your `.babelrc` file:

```json
{
  "presets": [
    "babel-preset-vue"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
```

Then, add the following to your `webpack.config.js` file:

```javascript
const {VueLoaderPlugin} = require('vue-loader');
module.exports = {
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
       'vue$': 'vue/dist/vue.esm.js'
     }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }]
  }
};
```

And finally in your `index.js` file (assuming you have your base component named `App.vue`):

```javascript
import Vue from 'vue';
import App from './App.vue';

proc.createWindow({})
  .render(el => {
    new Vue({
      el,
      render: h => h(App)
    });
  });
```

## Misc

To load generic libraries etc. (like jQuery) into OS.js you have two alternatives.

> [warning] Please note that using libraries optimized for bundling is recomended (`import` or `require` in your distro or packages), as some libraries older might pollute the global namespaces and/or styles. Also, including libraries that attach to the global namespace might cause issues when loading different versions.

### Global

If you're planning to share libraries across several applications, etc. this is the recommended way.

Update your `src/client/index.ejs` file to load the libraries:

```html
<head>
  <link rel="stylesheet" type="text/css" href="library.css" />
</head>
<body>
  <script src="library.js"></script>

  <!-- Or an external resource -->
  <script src="https://foo.bar/jazz.js"></script>
</body>
```

then use `copy-webpack-plugin` in your `webpack.config.js` file:

> [info] If you use external resources, skip this step.

```javascript
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {from: 'foo/bar/library.js': to: 'library.js'},
      {from: 'foo/bar/library.css': to: 'library.css'}
    ])
  ]
};
```

### Package

You can also do this via a package, but is only recommended if you're using a single instance.

In your `metadata.json` file, define the resources to use:

```json
{
  "files": [
    // Webpack output files
    "main.js",

    // Your custom libraries
    "library.js",
    "library.css",

    // Or an external resource
    "https://foo.bar/jazz.js"
  ]
}
```

then use `copy-webpack-plugin` in your `webpack.config.js` file:

> [info] If you use external resources, skip this step.

```javascript
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {from: 'foo/bar/library.js': to: 'library.js'},
      {from: 'foo/bar/library.css': to: 'library.css'}
    ])
  ]
};
```
