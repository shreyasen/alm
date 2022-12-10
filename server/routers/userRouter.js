import express from 'express';
import { createUser, authenticateUser, getUser } from '../controllers/userController.js';
import { verifyToken } from '../controllers/authController.js';

const router = express.Router();

router.post('/user', createUser);
router.post('/auth', authenticateUser);
router.get('/user/details', verifyToken, getUser);

export default router;
