// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client
const pubsub = new PubSub();

/**
 * TODO(developer): Uncomment the following lines to run the sample.
 */
const subscriptionName = 'url-responses-test';
const timeout = 60;

// References an existing subscription
const subscription = pubsub.subscription(subscriptionName);

// Create an event handler to handle messages
let messageCount = 0;
const messageHandler = message => {
  console.log(`Received message ${message.id}:`);
  console.log(`\tData: ${message.data}`);
  console.log(`\tAttributes: ${message.attributes}`);
  messageCount += 1;

  message.ack();
};

// Listen for new messages until timeout is hit
subscription.on(`message`, messageHandler);

// setTimeout(() => {
//   subscription.removeListener('message', messageHandler);
//   console.log(`${messageCount} message(s) received.`);
// }, timeout * 1000);