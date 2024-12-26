import express from "express";
import registerRest from "../controller/RegisterRest.js"
import SignIn from "../controller/SignIn.js";
const router = express.Router();

router.post("/register", registerRest);
router.post("/signIn", SignIn);

export default router;
