---
description: OS.js v3 Translation Guide
---

# Translation Guide

You can create or modify the translations in OS.js by following this guide.

> Languages are named using the POSIX locale definition, ex: `en_EN` and `nb_NO`.

## Language files

Languages are stored individually as `osjs-client/src/locale/{language}.js`. It simply exports a dictionary:

```javascript
export const language {
  key: 'value'
};
```

## Exports

To expose the language to the client, add this to `osjs-client/src/locale/index.js`:

```javascript
export * from './language';
```

## Configuration

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
