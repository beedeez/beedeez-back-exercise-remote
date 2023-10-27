import { DB_HOST, DB_PORT, DB_DATABASE, REDIS_URL } from '@config';
import IORedis from 'ioredis';

export const dbConnection = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

export const getRedisClient = () => {
  return new IORedis(REDIS_URL, {
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
  });
};
