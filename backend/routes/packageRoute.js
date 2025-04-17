import express from "express";
import { createPackageController, getPackageController, packagePhotoController, getSinglePackageController,packagePhotoOneController,packagePhotoTwoController, bookingController, getOrdersController, deleteBookingController, braintreeTokenController, brainTreePaymentController, requireSignIn } from "../controllers/packagesController.js"
import formidable from "express-formidable";
const router = express.Router();

//routing
//CREATE || METHOD POST 'Following MVC pattern '
router.post('/createPackage',formidable(), createPackageController)

//get products
router.get("/getpackages", getPackageController);

//get photo
router.get("/package-photo/:pid", packagePhotoController);
router.get("/package-photoone/:pid", packagePhotoOneController);
router.get("/package-phototwo/:pid", packagePhotoTwoController);

//single product
router.get("/get-package/:slug", getSinglePackageController);

//booking Route
router.post("/booking", bookingController)

//Order
router.post("/order", getOrdersController)
router.delete("/order/:oid", deleteBookingController)

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);
//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;