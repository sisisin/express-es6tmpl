/* eslint new-cap:0 */
import express from 'express';
const router = express.Router();

/* GET users listing. */
const getUsers = (req, res, next) => {
	res.send('respond with a resource');
};

router.get('/', getUsers);

export { router as users };
export { getUsers };	// for test
