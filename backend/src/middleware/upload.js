import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const uploadFile = async (filepath) => {
  try {
    const result = await cloudinary.uploader.upload(filepath);
    return result;
  } catch (error) {
    console.log(error);
  }
};
