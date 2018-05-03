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
