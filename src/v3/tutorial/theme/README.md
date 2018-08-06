# Theme Tutorial

A theme consists of a set of icons and styles. It is installed as a package (just as applications).

## Usage

Use the [official standard theme](https://github.com/os-js/osjs-standard-theme) or [official standard icons](https://github.com/os-js/osjs-gnome-icons) as a base or as a template.

> Please note that if you're making a copy of the standard theme, all the scripts and dependencies must remain intact from the original `package.json` file.

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
