const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB= async ()=>{
    const MONGO_URI = process.env.MONGO_CONNECTION_STRING;
    try{
        await mongoose.connect(MONGO_URI);
        // await mongoose.connect(MONGO_URI,{
        //     useNewUrlParse:true,
        //     useUnifiedTopology:true,
        // })
        console.log('Database connection Successfully')
    }catch(err){
        console.log(err);
        process.exit;
    }
}

module.exports = connectDB;