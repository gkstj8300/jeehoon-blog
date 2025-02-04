import { Sequelize } from "sequelize";
import { Config as ConfigProps } from "../config/type";
import mySqlconfig from '../config/config';
import { initUser, User } from './users';
import { initRefreshToken, RefreshToken } from './refreshTokens';

const configs: ConfigProps = mySqlconfig;
console.log('configs ============ ', configs);
const env = process.env.BACK_END_NODE_ENV === 'production' ? 'production' : 'development';
const config = configs[env];

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password === null ? undefined : config.password,
    {
        host: config.host,
        dialect: 'mysql',
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    },
);

initUser(sequelize);
initRefreshToken(sequelize);

function setupAssociations(): void {
    RefreshToken.belongsTo(User, { foreignKey: 'userId' });
}

setupAssociations();

export default sequelize;

