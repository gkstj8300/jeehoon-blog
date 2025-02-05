import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { configs } from './config';

/* eslint-disable @typescript-eslint/no-explicit-any */
const fetchData = async (url: any, headers = {}) => {
	try {
		const response = await axios.get(url, { headers });
		return response.data;
	} catch (error) {
		throw new Error("에러 발생");
	}
};

configs.forEach(config => {
	const app = express();
	app.use(cors());
	
	app.use('/ttb/api', async (request, response, next) => {
		if (request.method.toLowerCase() !== 'get') {
			console.error(`Error: unknown method: ${request.method}`);
		}
		try {
			const data = await fetchData(`${request.originalUrl}`);
			response.json(data);
		} catch (error) {
			console.error(error);
			next(error);
			return;
		}
	});

	app.listen(config.port);
	console.log(`Listening port: ${config.port}`);
})

