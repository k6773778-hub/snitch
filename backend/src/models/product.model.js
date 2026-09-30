import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Owner is required"],
      ref: "User",
    },
    productImage: {
      type: String,
      required: [true, "Product Image is required"],
    },
    productName: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    productDescription: {
      type: String,
      required: [true, "Product Description is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price for the product is required"],
    },
    category: {
      type: String,
      enum: [],
      required: [true, "Product category is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
    },
    descount: {
      type: Number,
    },
    inStock: {
      type: Boolean,
      required: [true, "Product Stock availability is missing"],
    },
  },
  {
    timestamps: true,
  },
);

const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default productModel;
