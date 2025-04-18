import express from "express"
import { registerController , loginController} from "../controllers/authController.js";


const router = express.Router();

//routing
//REGISTER || METHOD POST 'Following MVC pattern '
router.post('/register', registerController)

//LOGIN || METHOD POST 
router.post('/login', loginController );


export default router; 