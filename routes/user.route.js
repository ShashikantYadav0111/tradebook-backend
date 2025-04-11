import express from 'express';
import { getUserbyTraderId, getUserbyUsername, login, register} from '../controllers/user.controller.js'

const router = express.Router();


router.post('/register',register);
router.post('/login',login);
router.get('/get/:traderId',getUserbyTraderId);
router.get('/get/:username',getUserbyUsername);

export default router;