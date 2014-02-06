PushoverJS
==========

Simple JavaScript client for "pushover.net".

## About

PushoverJS is a simple native JavaScript wrapper for "pushover.net" allowing you to easily send pushover notifications directly from the client side.

PushoverJS wraps the **Pushover API** (https://pushover.net/api) making it simple to send push notifications to your phone.

## Usage Examples

First include PushoverJS into your web app.

```html
<script src="pushoverJs.js"></script>
```

Using the client is as simple as **creating a client**...

```javascript
// Creating a new instance of PushoverJs
var client1 = new PushoverJs('appToken', 'userKey');
```

...creating a new **message**, chaining options and **send()**ing it off.

```javascript
// Sending your first message
client1.createMessage('Hello World', 'Message Title')
  .send();
```

Messages can be customized easily by chaining attributes like you are used to with most JavaScript frameworks.

```javascript
client1.createMessage('Message body', 'Title')
  .url('http://www.google.com/', 'Google')
  .highPriority()
  .addCurrentTime()
  .playSound(client1.sounds.siren)
  .send();
```

PushoverJS is broken up into two components, (1) The Client and (2) The Message.

## The Client Object
The **Client** is used to create new instances of the **Message** class configured with the AppToken and UserKey (if provided when creating the client).

The following methods can be found on the client.

#### createMessage()
Creates a new instance of the **Message** class/object bound to the AppToken and UserKey provided when creating the **Client**.

#### sounds
Enumeration of possible sounds to play on the users device.

## The Message Object
This is the "meat and potatoes" of **PushoverJS** and is the actual message that will be sent to the client. Once an instance of the **Message** object is created you simply chain on any additional attributes to the message before sending it off with the **send()** call.

The following methods are available on the **Message** object:

#### title(title)
Allows you to change/set the title of the message (if not done when creating the message through the **Client**).

```javascript
var client1 = new PushoverJs('appToken', 'userKey');
// ...
client1.createMessage('body', 'title')
.title('Setting a new title')
.send();
// ...
```

#### message(body)
Allows you to set the body of the message (if not done when creating the message through the **Client**).

```javascript
var client1 = new PushoverJs('appToken', 'userKey');
// ...
client1.createMessage('body', 'title')
.message('Setting a new body for my message...')
.send();
// ...
```

#### url(url[, title])
Add an action URL to your message.

```javascript
var client1 = new PushoverJs('appToken', 'userKey');
// ...
client1.createMessage('body', 'title')
.url('http://www.github.com/', 'Go to GitHub')
.send();
// ...
```

#### consolePre()
Dump the current message to the console (useful for debugging).

```javascript
var client1 = new PushoverJs('appToken', 'userKey');
// ...
client1.createMessage('body', 'title')
.consolePre()
.send();
// ...
```

#### lowPriority()
Set the message priority to low.

```javascript
var client1 = new PushoverJs('appToken', 'userKey');
// ...
client1.createMessage('body', 'title')
.lowPriority()
.send();
// ...
```

#### normalPriority()
Set the message priority to normal.

```javascript
var client1 = new PushoverJs('appToken', 'userKey');
// ...
client1.createMessage('body', 'title')
.normalPriority()
.send();
// ...
```

#### highPriority()
Set the message priority to high.

```javascript
var client1 = new PushoverJs('appToken', 'userKey');
// ...
client1.createMessage('body', 'title')
.highPriority()
.send();
// ...
```

#### addCurrentTime()
Append the current time to the message.

```javascript
var client1 = new PushoverJs('appToken', 'userKey');
// ...
client1.createMessage('body', 'title')
.addCurrentTime()
.send();
// ...
```

#### playSound(sound)
Play a sound on the client device when the message is delivered, the values for the sounds come from the **Client** sounds enumeration.

```javascript
var client1 = new PushoverJs('appToken', 'userKey');
// ...
client1.createMessage('body', 'title')
.playSound(client1.sounds.siren)
.send();
// ...
```

#### userKey(key)
Set the targeted user key for the message.

```javascript
var client1 = new PushoverJs('appToken', 'userKey');
// ...
client1.createMessage('body', 'title')
.userKey('targetUserKey')
.send();
// ...
```

#### send([waitForSend])
Send the message to the client. If a bool with the value of true is added to the send method the executing thread is blocked until the message has been sent.

```javascript
var client1 = new PushoverJs('appToken', 'userKey');
// ...
client1.createMessage('body', 'title')
.playSound(client1.sounds.siren)
.send();
// ...
```

## Known Issues
#### CORS Error on push notification send
This is due to the fact that the server sends down a **Access-Control-Allow-Origin** header as part of the response when sending a message. 

I still need to do a bit of work around this to see if I can suppress the error (or resolve the issue programatically), also this issue is dependant on the web browser you are using to (Google Chrome is the most strict).
