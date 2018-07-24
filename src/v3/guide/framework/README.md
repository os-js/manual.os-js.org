# Frameworks

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
