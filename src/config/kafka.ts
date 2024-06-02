import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'user-service',
    brokers: ['kafka:9092']
});

export const consumer = kafka.consumer({ groupId: 'kafka-group-abdulah-wahdi-betest' });
export const producer = kafka.producer();

export const connectToKafka = async () => {
    await consumer.connect();
    await producer.connect();
    console.log('Connected to Kafka');
};
