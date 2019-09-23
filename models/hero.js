const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const heroSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    class: [{type: String, required: true}],
    race: [{type: String, required: true}],

})
heroSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Hero', heroSchema);