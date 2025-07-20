import {registerUser,userLogin} from '../controler/usercontroler.js';
import exp from 'express';


const router=exp.Router();


router.post('/register',registerUser);
router.post('/login',userLogin);

export default router;


