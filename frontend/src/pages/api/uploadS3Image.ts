import fs from 'fs';
import { S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import formidable from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
	api: {
		bodyParser: false,
	},
};

const s3 = new S3Client({
	region: process.env.AWS_S3_REGION || '',
	credentials: {
		accessKeyId: process.env.AWS_S3_ACCESS_KEY || '',
		secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY || '',
	},
});

const uploadS3Image = async (req: NextApiRequest, res: NextApiResponse) => {
	const form = formidable({ multiples: true });

	form.parse(req, async (err, fields, files) => {
		if (err) {
			return res.status(500).json({ status: 'fail', data: err });
		}

		const fileArray = Array.isArray(files.file)
			? files.file
			: [files.file].filter(Boolean);

		const promises = fileArray.map(async file => {
			if (!file) {
				return Promise.reject(new Error('파일이 없습니다.'));
			}

			const filename = file.originalFilename?.split('.');
			const extension = filename?.pop();
			const key = `posts/${
				Date.now() + Math.floor(Math.random() * 1000)
			}.${extension}`;

			const upload = new Upload({
				client: s3,
				params: {
					Bucket: process.env.AWS_S3_BUCKET_NAME,
					Key: key,
					Body: fs.createReadStream(file.filepath),
				},
			});

			await upload.done();

			return {
				url: `https://${process.env.AWS_CLOUDFRONT_DOMAIN}/${key}`,
				name: file.originalFilename,
			};
		});

		try {
			const urls = await Promise.all(promises);
			res.status(200).json({ status: 'success', urls });
		} catch (uploadError) {
			res.status(500).json({ status: 'fail', data: uploadError });
		}
	});
};

export default uploadS3Image;
