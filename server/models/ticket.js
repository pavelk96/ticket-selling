const {Schema, model} = require('mongoose');

const Film = new Schema({
    filmId:  String,
    placesTaken: {type: Array, ref: 'favoriteFilms'},});

module.exports = model('Film', Film)