import express from "express";
import registerRest from "../controller/RegisterRest.js";
import SignIn from "../controller/SignIn.js";
import { verifyOtp } from "../controller/SignIn.js";
import {totalRestaurentRegistered, inactiveRestaurents, activeRestaurents} from "../controller/RestaurentDetails.js";
import validateRestaurantDetails from "../utils/Validation.js";
import validateSignIn from "../utils/SignInValidation.js";
const router = express.Router();

router.post("/register",validateRestaurantDetails, registerRest);
router.post("/signIn", validateSignIn, SignIn);
router.post("/verifyOtp", verifyOtp);
router.get("/getTotalRestaurents", totalRestaurentRegistered);
router.get("/getActiveRestaurents", activeRestaurents);
router.get("/getInActiveRestaurents", inactiveRestaurents);

export default router;
