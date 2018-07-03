# Customizing Login

You can customize the login screen both visually and functionally.

You can also override it entirely by providing your own handler.

![Login Screen Example](example.png)

## Basics

In your client configuration you can override certain aspects of the login:

```json
{
  auth: {
    ui: {
      title: 'Welcome to Company',
      stamp: 'custom-build version 1234'
    }
  }
}
```

## Adding fields

You can set your own fields:

```json
{
  auth: {
    ui: {
      fields: [{
        tagName: 'input',
        attributes: {
          name: 'username',
          type: 'text',
          placeholder: 'Username'
        }
      }, {
        tagName: 'input',
        attributes: {
          name: 'password',
          type: 'password',
          placeholder: 'Password'
        }
      }, {
        tagName: 'select',
        attributes: {
          name: 'provider'
        },
        choices: [{
          value: 'company-1',
          label: 'Company 1'
       }, {
          value: 'company-2',
          label: 'Company 2'
       }]
      }, {
        tagName: 'input',
        attributes: {
          type: 'submit',
          value: 'Login'
        }
      }]
    }
  }
}
```

## Customizing styles

By default the login container uses the DOM id `#osjs-login`, which you can override in your configuration:

```json
{
  auth: {
    ui: {
      id: 'custom-osjs-login'
    }
  }
}
```

You can now add your own styles to `src/client/index.scss`.

## Logo

You can also add a logo via configuration and customize via css:

![Login Logo Example](example2.png)

```json
{
  auth: {
    ui: {
      logo: {
        position: 'top', // top, bottom, left, right
        src: require('../logo.png')
      }
    }
  }
}
```

```css
.osjs-login-logo {
 /* Your style here */
}
```
