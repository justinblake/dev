var mongoose = require('mongoose');

var puppySchema = mongoose.Schema({
    name: String,
    age: Number,
    breed: {
        type: String,
        required: true
    },
    // username: {
    //     type: String,
    //     required: true,
    //     lowercase: true,
    //     unique: true,
    //     minlength: 3
    // },
    fixed: Boolean,
    owners: {
        type:[String],
        required: true
    }
});

module.exports = mongoose.model('Puppy', puppySchema);
