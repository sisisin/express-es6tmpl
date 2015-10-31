/* eslint new-cap:0 */
import express from 'express';
const router = express.Router();

/* GET home page. */

const getIndex = (req, res, next) => {
	res.render('index', { 'title': 'Express' });
};

router.get('/', getIndex);

export { router as routes };
export { getIndex };	// for test
