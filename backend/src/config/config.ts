import dotenv from 'dotenv';

dotenv.config();

const mySqlconfig = {
    development: {
        username: process.env.MYSQL_LOCAL_USERNAME || 'root',
        password: process.env.MYSQL_LOCAL_PASSWORD || '',
        database: process.env.MYSQL_LOCAL_SCHEMA || '',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_ROOT_PASSWORD,
        database: process.env.MYSQL_DATABASE || 'dataschema',
        host: process.env.MYSQL_HOST || '127.0.0.1',
        dialect: 'mysql',
        port: 3306,
    },
};

export default mySqlconfig;