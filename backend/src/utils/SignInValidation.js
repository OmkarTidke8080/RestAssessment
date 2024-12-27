import { body, validationResult } from "express-validator";


const validateSignIn = [
 
  body("Email")
    .isEmail()
    .withMessage("Invalid Email format")
    .notEmpty()
    .withMessage("Email is required"),

  body("Password")
    .isString()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),

];

export default validateSignIn;