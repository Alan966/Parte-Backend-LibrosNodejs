const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

const imagesSchema = new Schema({
    name:{
        type:String,
        trim:true,
        require:true,
        maxlength:32
    },
    headers:{
        type: ObjectId,
        ref: 'Headers',
        require:true
    },
    image:{
        data: Buffer,
        contentType:String
    }
},{
    timestamps: true
},{
    collection: 'Images'
});

module.exports = mongoose.model('Images', imagesSchema);