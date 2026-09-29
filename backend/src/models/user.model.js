import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "username is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      index: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (candidatePassword) {
  this.password = await bcrypt.hash(candidatePassword, 10);
});

const userModel = mongoose.models.User || mongoose.model("User", userSchema);
export default userModel;
