import mongoose  from "mongoose";

const PictureSchema = new mongoose.Schema({
    _ids: {
        type: String,
        required: true,
    },
    path: {
        type: Array,
    },
    
},{timestamps: true}
)
const Picture = mongoose.model('Picture',PictureSchema);
export default Picture;