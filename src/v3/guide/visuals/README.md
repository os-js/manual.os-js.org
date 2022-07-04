---
description: A guide for customizing visualization
full_title: Visualization Customization Guide
---

# Visualization Customization Guide

This guide will walk through the different ways of customizing OS.js.

## Index File

The `src/client/index.ejs` file can be used to add custom HTML and assets.

## Modules

Most of the visuals are provided by Service Providers. You can replace these to make a fully custom environment.

See your `src/client/index.js` bootstrap file for provider registration and `src/client/index.scss` for the related imported stylesheets.

### Overriding default desktop styles

Since some of the styles can be configured by a user at runtime, some styles are defined in the [client configuration](https://github.com/os-js/osjs-client/blob/master/src/config.js) (see `desktop` section), like desktop and panels.

You can override these by [adding it](../../config/README.md#client) to your `src/client/config.js` file and modifying the values.

> [info] Note, that if users have already customized their settings, the changes to the default configuration won't affect the users. In an [upcoming patch](https://github.com/os-js/osjs-client/issues/52) it will be able to migrate these changes. By default the settings are stored in the browser (`localStorage`) so you can clear these easily.

Example:

```javascript
/* src/client/wallpaper.png */
import wallpaper from './wallpaper.png';

module.exports = {
  desktop: {
    settings: {
      font: 'Roboto',
      theme: 'StandardTheme',
      sounds: 'FreedesktopSounds',
      icons: 'GnomeIcons',
      panels: [{
        position: 'top',
        items: [
          {name: 'menu'},
          {name: 'windows'},
          {name: 'tray'},
          {name: 'clock'}
        ]
      }],
      background: {
        src: wallpaper,
        color: '#000',
        style: 'cover'
      }
    }
  }
};
```

## Themes

By default all of the visuals are defined by Themes in the form of Styles, Icons and Sounds.

If you want a completely customized experience you should look into these.

## Stylesheets

The stylesheet in `src/client/index.scss` is for you to customize. You can include or add your own styles here as you see fit.

### Overriding default initial styles

By using this file you can override the default styles like the background, wallpaper, etc. Example:

```css
.osjs-root {
  background-color: #000;
  background-image: url('./wallpaper.png'); /* src/client/wallpaper.png */
}
```

> [info] The "initial" styles is what is displayed *before* the user has logged in.

## Window Styles

If you want to simply customize the already provided styles on a window, you can use the ID, or add a class name to a window:

> [info] The CSS class is on the root window element.

When constructing a window, provide the following option(s):

```javascript
{
  id: 'MyWindowId',
  attributes: {
    classNames: ['MyWindowClass']
  }
}
```

Then in your `src/client/index.scss` stylesheet:

```css
.Window_MyWindowId {
  /* Styles */
}

.MyWindowClass {
  /* Styles */
}
```

## Window Templates

The base window DOM is constructed by a string with HTML.

You can change this on a per-window basis, or globally.

Add the styles to your client stylesheet file (see above).

### Per window (local)

When constructing a window, provide the following option:

```javascript
{
  // Using a string:
  template: '<div>Your HTML content here</div>',

  // Or using a callback:
  // The original template is added as a string, so you can modify it as you see fit
  template: (win, originalTemplate) => originalTemplate
}
```

### Via configuration (global)

This works just as above, except it is global and added to your `src/client/config.js` file:

```javascript
{
  windows: {
    template: String | Function
  }
}
```

## Window Behaviour

To customize the window behaviour (movement, interactions, etc.), provide your own instance via the service provider:

In your `src/client/index.js` bootstrap file, modify the core provider:

```javascript
osjs.register(CoreServiceProvider, {
  args: {
    windowBehavior: () => new WindowBehavior(osjs)
  }
});
```

Use the `WindowBehavior` class in `@osjs/client` as your base class to extend these features.

## Splash screen

To customize the initial splash screen you can override the internal class in your `src/client/index.js` file:

```javascript
import {Core, Splash} from '@osjs/client';

class CustomSplash extends Splash {
  init() {
    // This is the default, you can override this
    this.$loading
      .appendChild(document.createTextNode('Loading...'));
  }
}

// In your bootstrap add an option to a callback
// to point to the new splash instance.
new Core(config, {
  splash: core => new CustomSplash(core)
});
```
