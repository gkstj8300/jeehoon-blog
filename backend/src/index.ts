import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan'; 
import bodyParser from 'body-parser';
import { CORS_CONFIG } from './constants/corsProxy/configs';

dotenv.config();

const app = express();
const port = process.env.PORT || 3012;

app.use(cors(CORS_CONFIG));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(process.env.BACK_END_NODE_ENV === 'production' ? morgan('combined') : morgan('dev'));

// 기본 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 기본 라우트
app.get('/', (req, res) => {
    res.json({ message: 'Backend API is running' });
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});