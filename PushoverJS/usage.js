// todo: complete usage examples
var client1 = new PushoverJs(pushoverConfig.appToken, pushoverConfig.userKey);

client1.createMessage()
  .title('Message Title')
  .message('Hello World')
  .url('http://www.google.com/', 'Google')
  .highPriority()
  .addCurrentTime()
  .playSound(client1.sounds.siren)
  .pre()
  .send();

setTimeout(function () {
  console.log('hrere');
}, 4000);