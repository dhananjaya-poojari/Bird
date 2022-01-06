import express from 'express';
import multer from "multer";
var router = express.Router();

import { createBirdData,getAllBirdData }  from '../Logic/BirdsBusinessLogic.js'
var upload = multer();
/* GET home page. */
router.get('/', getAllBirdData);

router.post('/', upload.single('file'), createBirdData);

export default router;
