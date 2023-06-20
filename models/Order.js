import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    _idUser: {
      type: String,
      required: true,
    },
    orderItem: {
      type: Array,
    },
    DiaChiGiaoHang: String,
    ChiPhiVanChuyen: Number,
    TongTien: Number,
    TrangThai: {
      type: String,
      default: "Đã đặt",
    },
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", OrderSchema);
export default Order;
