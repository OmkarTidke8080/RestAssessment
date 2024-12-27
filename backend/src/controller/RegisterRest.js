import Rest from "../model/restModel.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import { uploadFile } from "../middleware/upload.js";

const saltRounds = 10;
import { generateAccessToken } from "../middleware/auth.js";

// Function to generate unique 6-digit RestId
const generateUniqueRestId = async () => {
  let id;
  let exists = true;
  while (exists) {
    id = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit number
    exists = await Rest.exists({ RestId: id }); // Check if it exists in the database
  }
  return id;
};

const registerRest = async (req, res) => {
  console.log("called");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Ensure files are uploaded
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({
      success: false,
      msg: "No images uploaded. Please upload at least one image.",
    });
  }

  const uploadedImages = [];

  try {
    for (const file of req.files) {
      const upload = await uploadFile(file.path); 
      uploadedImages.push(upload.secure_url);
    }

    const restDetails = {
      ...req.body,
      Rest_Images: uploadedImages, 
    };
    console.log(restDetails);

    // Hash the password
    restDetails.Password = await bcrypt.hash(restDetails.Password, saltRounds);

    // Generate unique RestId
    restDetails.RestId = await generateUniqueRestId();

    // Create a new restaurant instance
    const restaurent = new Rest(restDetails);
    console.log(restDetails);

    // Generate access tokens
    const tokens = await generateAccessToken(req.body.Email);

    // Set cookies for access and refresh tokens
    res.cookie("accessToken", tokens.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
      secure: true,
      sameSite: "Strict",
    });
    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: true,
      sameSite: "Strict",
    });

    // Save the new restaurant document
    await restaurent.save();

    // Respond with success message and restaurent data
    res.status(200).json({
      message: "OTP sent successfully",
      restaurent,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to register" });
  }
};

export default registerRest;
