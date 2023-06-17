import mongoose  from "mongoose";

const OrderSchema = new mongoose.Schema({
    _idUser: {
        type: String,
        required: true,
    },
    _idNguoiban: {
        type: String,
        required: true,
    },
    _idSp: {
        type: String,
        required: true,
    },
    
    SoLuong: Number,
   
    DiaChiGiaoHang: String,
    ChiPhiVanChuyen: Number,
    Tongtien: Number,
    TrangThai: {
        type: String,
        default: "Đang chờ xác nhận",
    }
},{timestamps: true}
)
const Order = mongoose.model('Order',OrderSchema);
export default Order;