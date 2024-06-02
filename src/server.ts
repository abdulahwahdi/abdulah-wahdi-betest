import app from './app';
import { connectToKafka } from './config/kafka';
import { connectToRedis } from './config/redis';
import { connectToDb } from './config/db';

const PORT = process.env.PORT || 3000;

async function startServer() {
    await connectToDb();
    await connectToKafka();
    await connectToRedis();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer();
