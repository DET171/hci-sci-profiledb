import CORS from 'cors';
import runMiddleware from '../../../plugins/cors.js';

const cors = CORS({
	methods: ['GET'],
});

export default async function handler(req, res) {
	await runMiddleware(req, res, cors);
	res.status(200).json({ name: 'John Doe' });
}
