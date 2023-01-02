import { createEnrollment, getEnrollments } from "../controllers/enrollmentController.js";
import { verifyToken } from '../controllers/authController.js';
import express from "express";

const router = express.Router();

router.post("/", verifyToken, createEnrollment);
router.get("/list", verifyToken, getEnrollments);

export default router;