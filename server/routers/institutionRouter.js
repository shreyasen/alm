import express from 'express';
import { searchInstitution } from '../controllers/institutionController.js';

const router = express.Router();

router.get('/search', searchInstitution);

export default router;
