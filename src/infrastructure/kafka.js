const kafka = require('kafka-node');
const client = new kafka.KafkaClient({ kafkaHost: process.env.KAFKA_BOOTSTRAP_SERVERS});

module.exports = { client };