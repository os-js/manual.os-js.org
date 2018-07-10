# Translate

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
