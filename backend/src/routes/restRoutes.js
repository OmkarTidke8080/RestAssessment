import express from "express";
import registerRest from "../controller/RegisterRest.js"
import SignIn from "../controller/SignIn.js";
import { verifyOtp } from "../controller/SignIn.js";
import  {totalRestaurentRegistered}  from "../controller/ResaturentDetails.js";
const router = express.Router();

router.post("/register", registerRest);
router.post("/signIn", SignIn);
router.post("/verifyOtp", verifyOtp);
router.get("/getTotalRestaurents",totalRestaurentRegistered)

export default router;
