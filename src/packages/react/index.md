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
$ npm install --save-dev babel-preset-react react react-dom
```

## Set up webpack

Now, in your generated `webpack.config.js`, set up the babel options:

```javascript
// ...
  osjs.webpack.createPackageConfiguration(metadataFile, {
    babelOptions: {
      presets: ['es2015', 'react']
    }
  })
// ...
```

## Set up application

Make your component:

```javascript
// components/App.jsx
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
      <h1>Hello World</h1>
      </div>);
  }
}

```

Then set up the window:

``` javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

class ApplicationUsingReactWindow extends Window {

  init(wmRef, app) {
    const root = super.init(...arguments);

    ReactDOM.render(React.createElement(App), root);

    return root;
  }

}
```

**That's it!** You now have a hello world application :)
