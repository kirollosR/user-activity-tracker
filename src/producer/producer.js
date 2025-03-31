const kafka = require('kafka-node');
const { client } = require('../infrastructure/kafka');

const Producer = kafka.Producer;
const producer = new Producer(client);

producer.on('ready', () => {
  console.log('Kafka Producer is ready');
});

producer.on('error', (err) => {
  console.error('Producer error:', err);
});

const sendEvent = (event) => {
  const payloads = [
    { topic: 'user-activity', messages: JSON.stringify(event) }
  ];
  producer.send(payloads, (err, data) => {
    if (err) console.error('Error sending to Kafka:', err);
    else console.log('Event sent:', data);
  });
};

module.exports = { sendEvent };