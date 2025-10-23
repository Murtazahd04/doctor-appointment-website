import jwt from "jsonwebtoken";

// user authentication middleware
const authUser = async (req, res, next) => {
  try {
    const token = req.headers.token; // or from authorization header if you use Bearer tokens
    if (!token) {
      return res.json({ success: false, message: "Not Authorized, please login again" });
    }

    // verify token
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Attach to request (safe and works for all routes)
    req.userId = token_decode.id; // Set userId on req, not req.body

    next();
  } catch (error) {
    console.log("Auth error:", error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;