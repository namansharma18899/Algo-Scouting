import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'], // Replace with your Kafka broker(s) configuration
  logLevel: logLevel.ERROR, // Adjust log level as needed
});

const producer = kafka.producer();

const produceMessage = async () => {
  await producer.connect();

  const topic = 'purchases'; // Replace with your desired Kafka topic
  const message = {
    key: 'my-key',
    value: 'Hello, Kafka!',
  };

  await producer.send({
    topic,
    messages: [message],
  });

  await producer.disconnect();
};

produceMessage()
  .then(() => console.log('Message sent successfully.'))
  .catch((error) => console.error('Error sending message:', error));
