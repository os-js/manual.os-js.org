---
title: Using Vue
layout: layout.html
---

# Using Vue

To use Vue you have to make a couple of changes to the generated package:



## Set up package

Run `npm init` in your package directory.

Then proceed to install the required dependencies:

```
$ npm install --save-dev vue-loader vue-template-compiler vue
```

## Set up webpack

Now, in your generated `webpack.config.js`, set up the babel options:

```javascript
// ...
  osjs.webpack.createPackageConfiguration(metadataFile).then((result) => {
    const webpackConfig = result.config;

    webpackConfig.module.loaders.push({
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
      }
    });

    resolve(webpackConfig);
  }).catch(reject);
// ...
```

## Set up application

Make your component:

```html
<!-- components/App.vue -->
<template>
  <div style="text-align:center">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      text: 'Hello World'
    };
  }

}

</script>
```

Then set up the window:

``` javascript
import Vue from 'vue';
import App from './components/App.vue';

class ApplicationUsingReactWindow extends Window {

  init(wmRef, app) {
    const root = super.init(...arguments);
    const container = document.createElement('div');
    root.appendChild(container);

    new Vue({
      el: container,
      render: (h) => h(App)
    });

    return root;
  }

}
```

**That's it!** You now have a hello world application :)
