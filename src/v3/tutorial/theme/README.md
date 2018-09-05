---
description: OS.js v3 Theme Tutorial
---

# Theme Tutorial

This tutorial will demonstrate how to create your own theme(s).

## Usage

The theme authentication service provides some API methods:

```javascript
const theme = core.make('osjs/theme');
theme.resource('file'); // Gets an URI to a theme resource (current theme)
theme.icon('name'); // Gets an URI to a icon theme image (current theme)
```

## Creation

A theme consists of a set of icons and styles. It is installed as a package (just as applications).

Use the [official standard theme](https://github.com/os-js/osjs-standard-theme) or [official standard icons](https://github.com/os-js/osjs-gnome-icons) as a base or as a template.

> Please note that if you're making a copy of the standard theme, all the scripts and dependencies must remain intact from the original `package.json` file.

> You can use the standard theme(s) as your base and customize it to your linking, just like `@osjs/standard-dark-theme`

## Metadata

The `metadata.json` file describes your theme:

```json
{
  "type": "theme",
  //"type": "icons",

  // The unique name
  "name": "MyTheme",

  // A map of localized titles
  "title": {
    "en_EN": "My Theme"
  },

  // A map of localized descriptions
  "description": {
    "en_EN": "My Theme"
  }
}
```

### npm

Please note that your `package.json` file that your application is published with contains this section for the package discovery to work:

```json
{
  "osjs": {
    "type": "package"
  }
}
```

## Styles

The `@osjs/client`, `@osjs/gui` etc. libraries comes with the base styles for basic layout but does not contain any actual colors, effects, etc.

All of the relevant elements have their own classes prefixed with `osjs-`.

The `@osjs/standard-theme` package is a good starting place if you want to make your own styles.

## Icons

The icons follow the [GNOME Icon naming spec](https://developer.gnome.org/icon-naming-spec/) and are by default in `48x48` png format.
