const kafka = require('kafka-node');
const { client } = require('../infrastructure/kafka');
const { saveActivity } = require('../infrastructure/mongodb');

const Consumer = kafka.Consumer;
const consumer = new Consumer(
  client,
  [{ topic: 'user-activity', partition: 0 }],
  { autoCommit: true }
);

consumer.on('message', async (message) => {
  const event = JSON.parse(message.value);
  const processedEvent = {
    ...event,
    processedAt: new Date(),
  };
  await saveActivity(processedEvent);
  console.log('Processed event:', processedEvent);
});

consumer.on('error', (err) => {
  console.error('Consumer error:', err);
});