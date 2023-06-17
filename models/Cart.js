import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    _idUser: {
      type: String,
      required: true,
    },
    cartItem: {
      type: Array,
    },
  },
  { timestamps: true }
);
const Cart = mongoose.model("Cart", CartSchema);
export default Cart;
