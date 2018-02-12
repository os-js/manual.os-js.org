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

## Set up broadcasting between two applications that cannot directly communicate with each other using the default eventBus

Note: To explain this clearly, we have the "broadcaster" application as AppA, and the "receiver/listener" application as AppB.

In AppA's main.js add: 

``` javascript
const Process = OSjs.require('core/process');
... 
    const vue = new Vue({
      el: container,
      render: h => h(App), 
      methods: {
        broadcast(n, args) {
          Process.message(n, args, {source: app});
        }
      }
    });
```
Above, we're adding the OSJS Process so it's accessible to the Vue instance declared. In the Vue instance, we add the method `broadcast` that will be called by the child component(s). The method will then make use of OSJS's broadcasting system and notify other packages/applications.

Now, let's say you want to have the event be triggered by a button click: 

``` javascript
  methods: {
    clickAction(m) {
      this.$root.broadcast('highlight-node-event', m._id);
    }
  }
```
The button press calls `clickAction` and submits an object *m*. This method now calls the root Vue object and uses its "global" `broadcast` method.

The event has been sent out at this point. Now, for AppB to receive the event; we need to register one or more events. Having this inside the main.js file of AppB we can separate OSJS concerns from VueJS.

``` javascript
    /**
     * Register events
     */
    ["highlight-node-event"].forEach(n =>
      app._on(n, (...args) => {
        vue.$emit(n, ...args);
      })
    );
```
Here *app* is the OSJS instance of AppB, which will send an `$emit` call within the root Vue component. Finally, in the child component where the event is to be captured we add: 

``` javascript
  mounted() {
    this.$root.$on("highlight-node-event", id => {
      if (id == this.model._key) {
        this.highlight = true;
      } else {
        this.highlight = false;
      }
    });
  },
```
Above, we check to see if the object passed in matches up with the local this.model's _key property. If true, then the node to highlight is lit up using the computed check.






**That's it!** You now have a hello world application :)
