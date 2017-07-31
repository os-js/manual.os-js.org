---
title: Using React
layout: layout.html
---

# Using React

To use React you have to make a couple of changes to the generated package:



## Set up package

Run `npm init` in your package directory.

Then proceed to install the required dependencies:

```
$ npm install --save-dev webpack
$ npm install --save-dev babel-preset-react
$ npm install --save-dev react
$ npm install --save-dev react-dom
```

## Set up webpack

Now, in your generated `webpack.config.js`, set up the babel options:

```javascript
// ...
  osjs.webpack.createPackageConfiguration(metadataFile, {
    babelOptions: {
      presets: ['react']
    }
  })
// ...
```

## Set up window

Now, you'll have to modify the window's init method:

``` javascript
// Import required dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Root component
export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
      <h1>Hello World</h1>
      </div>);
  }
}

// Window instance
class ApplicationUsingReactWindow extends Window {

  init(wmRef, app) {
    const root = super.init(...arguments);

    ReactDOM.render(<App />, root);

    return root;
  }

}
```

**That's it!** You now have a hello world application :)
