const mongoose = require('mongoose')

const url = "mongodb+srv://GLynn:feixin@cluster0.2uezytu.mongodb.net/voluntegreen"

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