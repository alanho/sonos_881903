const {PubSub} = require('@google-cloud/pubsub');

const subscriptionName = 'url-responses';
const timeout = 60;

exports.get_radio_url = (req, res) => {
  const pubsub = new PubSub();
  const subscription = pubsub.subscription(subscriptionName);

  var channel = req.query.station || '903';

  const messageHandler = message => {
    message.ack();
    console.log(`Message received: ${message.data}`)

    res.setHeader('Location', message.data);
    res.status(302);
    res.send('');

    subscription.removeListener('message', messageHandler);
  };
  subscription.on(`message`, messageHandler);

  const dataBuffer = Buffer.from(channel);
  pubsub
    .topic('requests')
    .publish(dataBuffer)
    .then( messageId => {
      console.log(`Message ${messageId} published.`);
    });
};