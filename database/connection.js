mongoose = require("mongoose");
require('dotenv').config();
const connectionString = process.env.CONNECTIONSTRING;

const connectDB = async () =>{
    try{
        await mongoose.connect(connectionString,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log("database conected...");
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connectDB;