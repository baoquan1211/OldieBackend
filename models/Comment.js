import mongoose  from "mongoose";

const CommentSchema = new mongoose.Schema({
    _idUser: {
        type: String,
        required: true,
    },
    _idSp: {
        type: String,
        required: true,
    },
    Diem: Number,
    Cmt: String,
    
},{timestamps: true}
)
const Comment = mongoose.model('Comment',CommentSchema);
export default Comment;