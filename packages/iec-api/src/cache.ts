import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const redis_url = process.env.REDIS_URL || 'redis://localhost:6379';

let connected = false;

const client = createClient({
    url: redis_url
});

export const setupRedis = async () => {
    if (client.isReady) {
        connected = true;
        return;
    }
    await client.connect().catch((err) => {
        console.error("Unable to connect to Redis url:", redis_url);
        console.error(err.code || err.message || err);
        process.exit(1);
    });
    connected = true;
};

export const closeRedis = async () => {
    if (!client.isReady) return;
    await client.quit().catch((err) => {
        console.error("Unable to quit Redis connection");
        console.error(err.code || err.message || err);
    });
}

export async function getCache(key: string) {
    try {
        await setupRedis();
        let data = await client.get(key);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    } catch (err: any) {
        console.error("Error getting cache:", err.code || err.message || err);
        return null;
    }
}

export async function setCache(key: string, data: any) {
    try {
        await setupRedis();
        await client.set(key, JSON.stringify(data));
    } catch (err: any) {
        console.error("Error setting cache:", err.code || err.message || err);
    }
}

export async function clearCache() {
    try {
        await setupRedis();
        await client.flushAll();
    } catch (err: any) {
        console.error("Error clearing cache:", err.code || err.message || err);
    }
}