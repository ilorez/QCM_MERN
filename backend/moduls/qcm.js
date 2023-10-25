const mongoose = require('mongoose')
const Schema = mongoose.Schema
const qcmSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    level: {
        type: Number,
        require: true
    },
    questions: {
        type: Array,
        require: true
    }
}, { timestamps: true })
const Qcm = mongoose.model('Qcm', qcmSchema)

module.exports = Qcm;