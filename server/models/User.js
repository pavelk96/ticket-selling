const {Schema, model} = require('mongoose');

const schema = new Schema({
    email: {type: String, required:true, unique: true},
    password: {type: String, required: true},
    favoriteFilms: [{ type: Array, ref: 'favoriteFilms' }]
});

module.exports = model('User', schema)