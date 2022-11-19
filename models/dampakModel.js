const mongoose = require('mongoose');

const dampakSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    tanggal: {
        type: Date,
        default: Date.now,
    }
})

const Dampak = mongoose.model('Dampak', dampakSchema)

module.exports = Dampak