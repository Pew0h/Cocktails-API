const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CocktailSchema = new Schema({
    name: {type: String, required: true},
    glass: {type: String, required: true},
    category: {type: String, required: true},
    ingredients: {type: Array, required: true},
    garnish: {type: String, required: true},
    preparation: {type: String, required: true},
},{
    versionKey: false
});

module.exports = mongoose.model('Cocktail', CocktailSchema);
