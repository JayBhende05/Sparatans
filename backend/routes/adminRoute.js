import express from "express"
import { createPackageController, deletePackageController,getAllBookingController,getSinglePackageController} from "../controllers/adminController.js";
import {generateReceipt} from "../controllers/receiptController.js"
import formidable from "express-formidable";
import { deleteBookingController } from "../controllers/packagesController.js";
// import { getSinglePackageController } from "../controllers/packagesController.js";
// import { getAllPackageController } from "../controllers/packagesController.js";

const router = express.Router();

//routing
//REGISTER || METHOD POST 'Following MVC pattern '
router.post('/createpackage', formidable(), createPackageController)
// router.get('/getpackage', getAllPackageController)

//LOGIN || METHOD POST 
// router.post('/login', loginController );
router.delete("/deletepackage/:pid", deletePackageController)
router.delete("/cancelBooking/:oid", deleteBookingController)

//single product
router.get("/getpackage/:slug", getSinglePackageController);

router.get("/getallbookings", getAllBookingController);

router.get('/receipt/:bookingId', 
  
  generateReceipt
);

export default router; 