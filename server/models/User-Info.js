const {Schema, model} = require('mongoose');

const schema = new Schema({
    id: {type: String, unique: true, ref: "id"},
    favoriteFilms: { type: Array, ref: 'favoriteFilms' }
});

module.exports = model('UserInfo', schema)