# Notification

Notifications are popup messages that can display a brief message.

## Usage

You can spawn a notification using:

```javascript
core.make('osjs/notification', {
  message: 'Hello World',
  onclick: () => console.log('Clicked!')
})
```
