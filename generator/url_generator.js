const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();
const radioURL = require('./radiourl');

const subscriptionName = 'url-requests';
const timeout = 60;

const subscription = pubsub.subscription(subscriptionName);

subscription.on(`message`, message => {
  console.log(`Message received ${message.data}`);

  var channel = message.data;

  radioURL(channel)
    .then((url) => {
      console.log(`Publishing ${url}`);

      const dataBuffer = Buffer.from(url);
      var pub = new PubSub();
      pub
        .topic('responses')
        .publish(dataBuffer)
        .then( messageId => {
          message.ack();
          console.log(`Message ${messageId} published.`);
        })
        .catch( err => {
          console.log(`Error publishing ${err}`);
        });
    });
});
