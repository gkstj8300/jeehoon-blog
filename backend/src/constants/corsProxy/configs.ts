import { Config } from './types';

const origin =
    process.env.BACK_END_NODE_ENV === 'production'
        ? process.env.DEFAULT_FRONT_URL
        : process.env.DEV_FRONT_URL;

export const CORS_CONFIG: Config = {
    origin: origin,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
};