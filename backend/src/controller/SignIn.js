import Rest from "../model/restModel.js";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../middleware/auth.js";
// import { validationResult } from "express-validator";

export const SignIn = async (req, res) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }
  try {
    const user = await Rest.findOne({
      Email: req.body.Email,
    });

    if (!user) {
      return res.status(404).json({
        msg: "Email not found",
      });
    } else {
      const isMatch = bcrypt.compare(req.body.Password, user.Password);

      if (isMatch) {
        const tokens = await generateAccessToken(req.body.Email);
        const accessToken = tokens.accessToken;
        const refreshToken = tokens.refreshToken;

        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          maxAge: 60 * 60 * 1000, // 1 hour
          secure: true,
          sameSite: "Strict",
        });
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000, // 1 day
          secure: true,
          sameSite: "Strict",
        });

        return res.status(200).json({
          msg: "Sign in successful",
        });
      } else {
        return res.status(400).json({
          msg: "Invalid credentials",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Server error",
      error: error.message,
    });
  }
};

export default SignIn;
