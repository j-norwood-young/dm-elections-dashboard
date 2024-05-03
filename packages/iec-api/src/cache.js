import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const redis_url = process.env.REDIS_URL || 'redis://localhost:6379';

let connected = false;

const client = createClient({
    url: redis_url
});

/**
 * Sets up the Redis connection.
 * @returns {Promise<void>} A promise that resolves when the Redis connection is set up.
 */
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

/**
 * Closes the Redis connection.
 * @returns {Promise<void>} A promise that resolves when the Redis connection is closed.
 */
export const closeRedis = async () => {
    if (!client.isReady) return;
    await client.quit().catch((err) => {
        console.error("Unable to quit Redis connection");
        console.error(err.code || err.message || err);
    });
}

/**
 * Retrieves data from the cache.
 * @param {string} key - The cache key.
 * @returns {Promise<any>} A promise that resolves with the cached data, or null if the data is not found.
 */
export async function getCache(key) {
    try {
        await setupRedis();
        let data = await client.get(key);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    } catch (err) {
        console.error("Error getting cache:", err.code || err.message || err);
        return null;
    }
}

/**
 * Sets data in the cache.
 * @param {string} key - The cache key.
 * @param {any} data - The data to be cached.
 * @returns {Promise<void>} A promise that resolves when the data is successfully set in the cache.
 */
export async function setCache(key, data) {
    try {
        await setupRedis();
        await client.set(key, JSON.stringify(data));
    } catch (err) {
        console.error("Error setting cache:", err.code || err.message || err);
    }
}

/**
 * Clears the cache.
 * @returns {Promise<void>} A promise that resolves when the cache is successfully cleared.
 */
export async function clearCache() {
    try {
        await setupRedis();
        await client.flushAll();
    } catch (err) {
        console.error("Error clearing cache:", err.code || err.message || err);
    }
}