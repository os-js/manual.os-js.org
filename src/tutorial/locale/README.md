---
description: This tutorial explains how to use the localization APIs.
full_title: Locale Tutorial
---

# Locale Tutorial

This tutorial explains how to use the localization APIs.

The provided localization functions will use the user's locale settings or fall back to the default configuration.

## Usage

### Strings

#### Core

To get translations from the OS.js client:

```javascript
const {translate} = core.make('osjs/locale');

const translated = translate('foo', 1, 2, 3);
console.log(translated);
```

#### Custom

Or create your own:

```javascript
const {translatable} = core.make('osjs/locale');

const translate = translatable({
  en_EN: {
    hello: 'Hello {0}'
  }
});

const translated = translate('hello', 'World');
console.log(translated); // => "Hello World"
```

### Date and Time

You can also get formatted date and time:

```javascript
const {format} = core.make('osjs/locale');

const formatted = format(new Date(), 'fullDate');
console.log(formatted);
```

The built-in formats are: `shortDate`, `mediumDate`, `longDate`, `fullDate`, `shortTime`, `longTime`.
