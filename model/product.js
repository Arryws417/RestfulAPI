//import mongose
import mongoose from "mongoose";

//membuat schema
const product = mongoose.schema({
    title: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    }
});

//mengexport model
export default mongoose.model('products',product)
