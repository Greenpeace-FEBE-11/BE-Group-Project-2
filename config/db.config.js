const mongoose = require('mongoose')

const url = "mongodb://localhost:27017/voluntegreen"

async function connect(){
      try {
          await mongoose.connect(url,  {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
          
        })
      } catch (error) {
          console.log(error);
      }
}

const db = connect()

module.exports = db