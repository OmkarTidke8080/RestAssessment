import jwt from "jsonwebtoken";

export const generateAccessToken = async (Email) => {
  const accessToken = jwt.sign({ Email: Email }, "accessSecret", {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ Email: Email }, "refreshSecret", {
    expiresIn: "30m",
  });

  return { accessToken, refreshToken };
};

export const isAuthenticated = async (req, res, next) => {
  try {
    let token = "";
    if (req.headers.cookie) {
      token = req.headers.cookie.split("; ")[0].split("=")[1];
    }

    if (!token) {
      return res.status(404).json({ success: false, msg: "Token not found" });
    }

    const decoded = jwt.verify(token, "accessSecret");
    req.email = decoded.email;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, msg: error.message });
  }
};

export const verifyRefresh = async (Email, token) => {
  try {
    const decoded = jwt.verify(token, "refreshSecret");
    return decoded.Email === Email;
  } catch (error) {
    console.error(error);
    return false;
  }
};

