const mongoose = require('mongoose')


const {Schema} = mongoose

    const userPageSchema = new Schema ({
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true

        },
      
        
        createdAt: {
            type: Date,
            default: Date.now()
        }
    })



const userpage = mongoose.model("userpage", userPageSchema)

module.exports = userpage