const mongoose = require('mongoose');
/*
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
         
        })
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error : ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}
module.exports = connectDB
*/


//const url = "mongodb://localhost:27017/voluntegreen"
const url = "mongodb+srv://todo:<password>@cluster0.5fs6yep.mongodb.net/?retryWrites=true&w=majority"
const db=mongoose.connect(url, {            
    useUnifiedTopology: true,
    useNewUrlParser: true})
db.then(()=>{
    console.log("database connect!!");
} ).catch ((error)=>{console.log(error)}) 
    
module.exports = db
