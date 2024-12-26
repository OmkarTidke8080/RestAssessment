 import Rest from "../model/restModel.js";
 import bcrypt from "bcrypt"
 const saltRounds = 10;

 import { generateAccessToken } from "../middleware/auth.js";
 
 const registerRest = async (req, res) => {

  const  restDetails  = req.body;
  console.log(restDetails);

  try {
    restDetails.Password = await bcrypt.hash(restDetails.Password, saltRounds);

    const restaurent = new Rest(restDetails);

   const tokens = await generateAccessToken(req.body.Email);
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

    await restaurent.save();

    res.status(200).json({
      message:"OTP sent successfully",
      restaurent
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to register" });
  }
};

export default registerRest