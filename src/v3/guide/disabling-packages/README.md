---
description: A guide on how to disable packages
full_title: Disabling packages
---

# Disabling packages

There are several methods for disabling (and hiding) packages:

* [Hiding](#hiding)
* [Discovery](#discovery)
* [Permissions](#permissions)
  * [Configuration](#configuration)
  * [Metadata](#metadata)

## Hiding

To hide packages from application menus, etc. without completely disabling it,
in your `src/client/config.js` file you can add the following options:

> [info] Remember to re-build the client afterwards.

```javascript
export default {
  packages: {
    hidden: ['Draw']
  }
}
```

## Discovery

You can prevent your package(s) from being discovered entirely which has the same
effect as uninstalling.

In your `src/cli/index.js` file, add an array to your configuration with the
package name(s):

> [info] An alternative to this is to rename your package with the suffix `.disabled`
> instead of modifying this file. Ex `Draw.disabled` in your `src/packages` folder.

```javascript
module.exports = {
  disabled: ['Draw']
}
```

Now when you run `npm run package:discover` they will be ignored.

## Permissions

Permissions can either be defined globally via configuration or locally
in a package:

### Configuration

In your `src/client/config.js` file you can add the following options:

> [info] Remember to re-build the client afterwards.

```javascript
export default {
  packages: {
    permissions: {
      Draw: {
        // The `strictGroups` property when set to `false` will check that *some*
        // the groups match, and not *all*.
        strictGroups: true,

        groups: ['a', 'b', 'c']
      }
    }
  }
}
```

### Metadata

If you're a package developer, you can also add an array of groups to your
the `metadata.json` file. Example:

> [info] The `strictGroups` property when set to `false` will check that *some*
> the groups match, and not *all*.

```json
{
  "strictGroups": true,
  "groups": ["a", "b", "c"]
}
```
