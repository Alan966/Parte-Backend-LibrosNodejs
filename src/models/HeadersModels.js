const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const headersSchema = new Schema({
    name: {
        type: String,
        trim:true,
        required: true,
        maxlength:32
    },
    image:{
        data: Buffer,
        contentType: String
    }
},
{timestamps: true}
);

module.exports = mongoose.model('Headers', headersSchema);