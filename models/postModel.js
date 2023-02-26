const mongoose = require('mongoose');
const schema = mongoose.Schema;

const dateType = new Date().toLocaleString();
console.log(dateType);


const PostCollection = new schema({
    name: {
        type : String,
        required : true,
    },
    post :{
        type : String,
        required : true,           
    },
    created_at: {
        type: Date,
        default: dateType,
    }
});

module.exports = mongoose.model('User', PostCollection);
