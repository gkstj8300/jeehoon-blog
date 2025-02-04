import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface CustomRequestType extends Request {
    user?: JwtPayload;
}

export interface CustomError extends Error {
    status?: number;
    code?: number;
}

export interface EnvConfig {
    database: string;
    username: string;
    password: string | null | undefined;
    host: string;
}

export interface Config {
    [env: string]: EnvConfig;
}