import { consumer } from './config/kafka';
import { createUser } from './services/userService';

const runConsumer = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: 'kafka-abdulah-wahdi-betest', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            if (message.value) {
                const userData = JSON.parse(message.value.toString());
                await createUser(userData);
            }
        },
    });
};

runConsumer().catch(console.error);
