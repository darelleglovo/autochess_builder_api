const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const raceSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    buffInfo: {
        level: {type: Number, required: true},
        heroQty: {type: Number, required: true},
        description: {type: String, required: true}
    }
})
raceSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Race', raceSchema);