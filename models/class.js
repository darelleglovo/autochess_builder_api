const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const classSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    buffInfo: {
        level: {type: Number, required: true},
        heroQty: {type: Number, required: true},
        description: {type: String, required: true}
    }
})
classSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Class', classSchema);