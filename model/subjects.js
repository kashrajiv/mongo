const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    subject: {
        required: true,
        type: String
    },
    code: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('SubjectData', dataSchema)