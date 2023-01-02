import express from 'express';
import { findCourse } from '../controllers/courseController.js';
import { verifyToken } from '../controllers/authController.js';

const router = express.Router();

router.get("/code/:code", verifyToken, findCourse);

export default router;