---
title: Themes Guide
layout: layout.html
---

# Themes Guide

Below are some basic instructions on how to add your own themes. It is highly recommended that you use an overlay instead of adding/modifying the main source-code.

To update your changes, run:

```bash
$ node osjs build:config
$ node osjs build:themes
```

## Styles

```bash
$ cp -r src/themes/styles/default src/themes/styles/mytheme
$ edit src/themes/styles/mytheme/metadata.json
$ edit src/themes/styles/mytheme/style.less
$ node osjs config:add --name=themes.styles --value=mytheme
```

## Icons

```bash
$ cp -r src/themes/icons/default src/themes/icons/mytheme
$ edit src/themes/icons/mytheme/metadata.json
$ node osjs config:add --name=themes.icons --value=mytheme
```

## Sounds

```bash
$ cp -r src/themes/sounds/default src/themes/sound/mytheme
$ edit src/themes/sound/mytheme/metadata.json
$ node osjs config:add --name=themes.sounds --value=mytheme
```

## Fonts

See the included font theme for an example on how to set up.

```bash
$ cp -r src/themes/fonts/Karla src/themes/fonts/MyTheme
$ node osjs config:add --name=themes.fonts --value=MyTheme
```

