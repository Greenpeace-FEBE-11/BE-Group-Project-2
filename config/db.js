const mongoose = require('mongoose')

const DB_URL = "mongodb://localhost:27017/voluntegreen"

const db = mongoose.connect(DB_URL)

db.
then(()=>{
    console.log("database connected");

})
.catch((err)=>{
    console.log(err);
})



module.exports = db