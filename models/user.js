const mongoose = require('mongoose');
const {Schema} = mongoose;

//Schema
const userSchema = new Schema({
    id: Number,
    name: String
},
{
    timestamps: false 
}
)

module.exports = mongoose.model("User", userSchema)