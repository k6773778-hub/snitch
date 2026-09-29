import userModel from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const {fullName, email, password} = req.body;
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to register",
      success: false,
    });
  }
};
