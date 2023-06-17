import mongoose from "mongoose";

const UserSchame = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
        },
        hoten:{
            type: String,
        },
        hinhanh:{
            type: String,
            default: "",
        },
        SDT:{
            type: String,
        },
        diachi:{
            type: String,
        },
        gioitinh:{
            type: String,
        },
        email:{
            type: String,
        },
        role:{
            type: String,
            default: "user",
        },

        
    },{timestamps: true}
    );
const User = mongoose.model('User',UserSchame);
export default User;
