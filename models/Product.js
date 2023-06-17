import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    _idUser: {
      type: String,
      required: true,
    },
    TenSp: String,
    LoaiSp: String,
    HangSanXuat: String,
    SoLuong: Number,
    SoSpDaBan: {
      type: Number,
      defaul: 0,
    },
    Mota: String,
    HinhAnh: Array,
    TinhTrang: String,
    Gia: Number,
    DiaChi: String,
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", ProductSchema);
export default Product;
