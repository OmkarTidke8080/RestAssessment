import express from "express";
import registerRest from "../controller/RegisterRest.js";
import SignIn from "../controller/SignIn.js";
import { verifyOtp } from "../controller/SignIn.js";
import {totalRestaurentRegistered, inactiveRestaurents, activeRestaurents} from "../controller/RestaurentDetails.js";
import validateRestaurantDetails from "../utils/Validation.js";
import validateSignIn from "../utils/SignInValidation.js";
const router = express.Router();

import multer from "multer";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const app = express();

// Set up a __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

// Multer disk storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public")); // Specify the folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Keep the original file name
  },
});

// Multer upload configuration
const upload = multer({
  storage: storage,
  limits: { fileSize: 100000000 },
});


router.post(
  "/register",
  validateRestaurantDetails,
  upload.array("Rest_Images"),
  registerRest
);
router.post("/signIn", validateSignIn, SignIn);
router.post("/verifyOtp", verifyOtp);
router.get("/getTotalRestaurents", totalRestaurentRegistered);
router.get("/getActiveRestaurents", activeRestaurents);
router.get("/getInActiveRestaurents", inactiveRestaurents);

export default router;
