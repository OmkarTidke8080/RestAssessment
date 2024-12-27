import { body, validationResult } from "express-validator";


const validateRestaurantDetails = [
  body("NameOfBusiness")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Name of Business is required")
    .isLength({ max: 50 })
    .withMessage("Name of Business length should be less than 50 characters")
    .matches(/^[A-Za-z\s]*$/)
    .withMessage("Name of Business should not contain special characters"),

  body("OwnerName")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Owner Full Name is required")
    .isLength({ max: 50 })
    .withMessage("Owner Full Name length should be less than 50 characters")
    .matches(/^[A-Za-z\s]*$/)
    .withMessage("Owner Full Name should not contain special characters"),

  body("MobileNumber")
    .isNumeric()
    .withMessage("Mobile Number should contain only numeric values")
    .isLength({ min: 10, max: 10 })
    .withMessage("Mobile Number should be exactly 10 digits"),

  body("Email")
    .isEmail()
    .withMessage("Invalid Email format")
    .notEmpty()
    .withMessage("Email is required"),

  body("GST")
    .isString()
    .trim(),
    // .matches(/^[0-9A-Z]{15}$/)
    // .withMessage("GST must be a valid 15-character alphanumeric string"),

  body("Address")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Address is required")
    .isLength({ max: 100 })
    .withMessage("Address length should be less than 100 characters"),

  body("DateOfJoining")
    .isISO8601()
    .withMessage("Date Of Joining must be a valid date in YYYY-MM-DD format"),

  body("DateOfExpiry")
    .isISO8601()
    .withMessage("Date Of Expiry must be a valid date in YYYY-MM-DD format"),

  body("Password")
    .isString()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),

  body("NumberOfBranches")
    .isNumeric()
    .withMessage("Number of Branches must be a numeric value")
    .optional(),

  body("Status")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Status is required")
    .isIn(["Active", "Inactive"])
    .withMessage("Status must be either 'Active' or 'Inactive'"),

  body("SubscriptionPlan")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Subscription Plan is required"),
];

export default validateRestaurantDetails;