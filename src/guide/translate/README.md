# Translate

You can create or modify the translations in OS.js by following this guide.

## Language files

Languages are stored individually as `osjs-client/src/locale/{language}.js`. It simply exports a dictionary:

```javascript
export default {
  key: 'value'
};
```

## Exports

To expose the language to the client, add this to `osjs-client/src/locale/index.js`:

```javascript
import language from './language';

export {language};
```
