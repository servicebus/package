# @servicebus/package
[![Build Status](https://travis-ci.org/servicebus/package.svg?branch=master)](https://travis-ci.org/servicebus/package)
[![codecov](https://codecov.io/gh/servicebus/package/branch/master/graph/badge.svg)](https://codecov.io/gh/servicebus/package)

Middleware that packages outgoing messages into a standard format.

```
var newMessage = {
    data: message
  , datetime: message.datetime || new Date().toUTCString()
  , type: message.type || queueName
};
```