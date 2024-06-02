import { createClient } from 'redis';

const redisClient = createClient({ url: 'redis://redis:6379' });

export const connectToRedis = async () => {
    await redisClient.connect();
    console.log('Connected to Redis');
};

export const getCache = async (key: string) => {
    return await redisClient.get(key);
};

export const setCache = async (key: string, value: string) => {
    await redisClient.set(key, value);
};

export const delCache = async (key: string) => {
    await redisClient.del(key);
};
