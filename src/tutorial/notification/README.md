# Notification

Notifications are popup messages that can display a brief message.

![Example](example.png)

## Usage

You can spawn a notification using:

```javascript
core.make('osjs/notification', {
  message: 'Hello World',
  icon: 'icon.src',
  onclick: () => console.log('Clicked!')
})
```
