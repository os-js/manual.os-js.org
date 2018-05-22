# Frameworks

> Please note that mixing UI frameworks is not recommended. So, if you've set up your application with JSX for Hyperapp, this might conflict.

## React

You can use React (or any other) framework for building UI in your applications.

Install these dependencies (inside the application source folder):

```
npm install --save-dev @babel/core @babel/preset-react react react-dom
```

Then, add the following to your `webpack.js` file:

```javascript
module.exports = (options, {createWebpack}) => createWebpack(__dirname, {
  babel: {
    presets: [
      require.resolve('@babel/preset-react')
    ]
  },
  // ... the rest of your file here ...
});
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

```
npm install --save-dev babel-preset-vue vue vue-loader vue-template-compiler webpack
```

Then, add the following to your `webpack.js` file:

```javascript
const {VueLoaderPlugin} = require('vue-loader');
module.exports = (options, {createWebpack}) => {
  const config = createWebpack(__dirname, {
    outputPath: path.resolve(options.dist.packages, metadata.name),
    babel: {
      presets: [
        require.resolve('babel-preset-vue')
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ],
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }],
    entry: {
      index: [
        path.resolve(__dirname, 'index.js'),
        path.resolve(__dirname, 'index.scss')
      ]
    }
  });
  config.resolve.alias = {
    'vue$': 'vue/dist/vue.esm.js'
  };
  return config;
};
```

And finally in your `index.js` file (assuming you have your base component named `App.vue`):

```
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
