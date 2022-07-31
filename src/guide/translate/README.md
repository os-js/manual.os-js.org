---
description: A guide for translating libraries and packages
full_title: Translation Guide
---

# Translation Guide

You can create or modify the translations in OS.js by following this guide.

> Languages are named using the POSIX locale definition, ex: `en_EN` and `nb_NO`.

## Core

Languages are stored individually as `osjs-client/src/locale/{language}.js`. It simply exports a dictionary:

```javascript
export const language {
  key: 'value'
};
```

### Exports

To expose the language to the client, add this to `osjs-client/src/locale/index.js`:

```javascript
export * from './language';
```

### Configuration

Finally you have to add the language to the configuration file in `osjs-client/src/config.js`:

```json
{
  languages: {
    en_EN: 'English',
    nb_NO: 'Norwegian, Norsk (bokmål)',
    lang_LANG: 'Language Name, Native name (variant)'
  },
}
```

## Modules

Core modules usually have translations in `src/locales.js`:

```javascript
export const lang_LANG = {
  key: 'value'
}
```

## Packages

Packages like applications have some translations in `metadata.json`:

```json
{
  "title": {
    "lang_LANG": "value"
  },
  "description": {
    "lang_LANG": "value"
  }
}
```

When packages use local translations you can find them in `locales.js` (usually):

```javascript
export const lang_LANG = {
  key: 'value'
}
```
