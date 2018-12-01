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

## Themes

By default all of the visuals are defined by Themes in the form of Styles, Icons and Sounds.

If you want a completely customized experience you should look into these.

## Stylesheets

The stylesheet in `src/client/index.scss` is for you to customize. You can include or add your own styles here as you see fit.

## Window Styles

If you want to simply customize the already provided styles on a window, you can use the ID, or add a class name to a window:

> [info] The CSS class is on the root window element.

When constructing a window, provide the following option(s):
```
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

```javasctipt
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

## Window Behavior

To customize the window behavior (movement, interactions, etc.), provide your own instance via the service provider:

In your `src/client/index.js` bootstrap file, modify the core provider:

```javascript
osjs.register(CoreServiceProvider, {
  args: {
    windowBehavior: () => new WindowBehavior(osjs)
  }
});
```

Use the `WindowBehavior` class in `@osjs/client` as your base class to extend these feautres.
