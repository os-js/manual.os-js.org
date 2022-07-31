---
description: This tutorial will demonstrate how to create your own theme(s).
full_title: Theme Tutorial
---

# Theme Tutorial

This tutorial will demonstrate how to create your own theme(s).

## Usage

The theme authentication service provides some API methods:

```javascript
const theme = core.make('osjs/theme');
theme.resource('file'); // Gets an URI to a theme resource (current theme)
theme.icon('name'); // Gets an URI to a icon theme image (current theme)

const sounds = core.make('osjs/sounds');
sounds.resouce('file'); // Gets an URI to a sound theme resource (current theme)
sounds.play('file'); // Plays a sound
```

## Creation

A theme consists of a set of icons, styles and sounds. It is installed as a package (just as applications).

Use the [official standard theme](https://github.com/os-js/osjs-standard-theme), [official standard icons](https://github.com/os-js/osjs-gnome-icons) or [official standard sounds](https://github.com/os-js/osjs-freedesktop-sounds) as a base or as a template.

> Please note that if you're making a copy of the standard theme, all the scripts and dependencies must remain intact from the original `package.json` file.

> See `@osjs/standard-dark-theme` for an example of how to extend the standard theme.

## Metadata

The `metadata.json` file describes your theme and contains a list of files that is required to load it.

> Remember to run `npm run package:discover` after you change your metadata.

```json
{
  "type": "theme",
  //"type": "icons",
  //"type": "sounds",

  // The unique name
  "name": "MyTheme",

  // A map of localized titles
  "title": {
    "en_EN": "My Theme"
  },

  // A map of localized descriptions
  "description": {
    "en_EN": "My Theme"
  },

  // Load these files when launching (usually generated with Webpack)
  "files": [
    "main.js",
    "main.css"
  ]
}
```

### npm

Please note that your `package.json` file that your theme is published with contains this section for the package discovery to work:

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

The icons follow the [Freedesktop Icon naming spesification](https://specifications.freedesktop.org/icon-naming-spec/icon-naming-spec-latest.html) and are by default in `48x48` png format.

## Sounds

The sounds follow the [Freedesktop Sound naming spesification](http://0pointer.de/public/sound-naming-spec.html) and are prided in both Ogg and MP3 formats.

