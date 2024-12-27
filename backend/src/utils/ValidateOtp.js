import { body, validationResult } from "express-validator";


const validateOtp = [
  body("Email")
    .isEmail()
    .withMessage("Invalid Email format")
    .notEmpty()
    .withMessage("Email is required"),

  body("otp")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("OTP is required")
    .isNumeric()
    .withMessage("OTP should contain only numbers")
    
];

export default validateOtp;