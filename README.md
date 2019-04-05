# Package

Package repackages outgoing messages, encapsulating the original message as a .data property and adding additional properties for information like message type and datetime sent: 

```js
  // bus.publish('my:event', { my: 'event' });
  {
    my: 'event'
  };
```
becomes
```js
  {
    data: {
      my: 'event'
    }
    , datetime: 'Wed, 04 Sep 2013 19:31:11 GMT'
    , type: 'my:event'
  };
```