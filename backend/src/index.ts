import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan'; 
import bodyParser from 'body-parser';
import sequelize from './models';
import { CORS_CONFIG } from './constants/corsProxy';

dotenv.config();

const app = express();
const port = process.env.PORT || 3012;

app.use(cors(CORS_CONFIG));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(process.env.BACK_END_NODE_ENV === 'production' ? morgan('combined') : morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use('/images', express.static('src/assets/images'));

sequelize
    .query('SET FOREIGN_KEY_CHECKS = 0')
    .then(() => {
        sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
    })
    .then(() => {
        sequelize.sync({ force: false })
    })
    .then(() => {
        console.log('db 연결');
    })
    .catch((err) => {
        console.error(err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((error: CustomError, req: Request, res: Response, next: NextFunction) => {
//     console.error(error);
//     res.status(error.code || 500);
//     res.json({ message: error.message || ERROR_MESSAGE.default_error });
// });

// 기본 라우트
app.get('/', (req, res) => {
    res.json({ message: 'Backend API is running' });
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});