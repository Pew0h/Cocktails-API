const Cocktail = require('../models/cocktail.model');
const {slugify} = require("../controller/route.controller");

// Get all cocktails
exports.getCocktails = async function() {
    try{
        return Cocktail.find({});
    }catch (err) {
        throw err;
    }
}

// get add new cocktail
exports.addCocktail = async function(body) {
    const cocktail = new Cocktail({
        name: body.name,
        glass: body.glass,
        category: body.category,
        ingredients: body.ingredients,
        garnish: body.garnish,
        preparation: body.preparation
    });
    try{
        return await cocktail.save();
    }catch (err) {
        throw err;
    }
}

// get cocktail by id
exports.getCocktailById = async function(id) {
    try{
        return await Cocktail.findById(id);
    }catch (err) {
        throw err;
    }
}

// get cocktail by name
exports.getCocktailByName = async function(name) {
    const cocktailName = slugify(name);
    try{
        return await Cocktail.find({name: {$regex: cocktailName, $options: "i"}});
    }catch (err) {
        throw err;
    }
}

// get Cocktail by category
exports.getCocktailByCategory = async function(category) {
    try {
        const categoryName = slugify(category);
        return await Cocktail.find({category: {$regex: categoryName, $options: "i"}});
    } catch (err) {
        throw err;
    }
}

// delete cocktail by id
exports.deleteCocktailById = async function(id) {
    try {
        return await Cocktail.findByIdAndDelete(id);
    } catch (err) {
        throw err;
    }
}

// modify cocktail by id
exports.modifyCocktailById = async function(id, body) {
    try {
        return await Cocktail.findByIdAndUpdate(id, body, {new: true});
    } catch (err) {
        throw err;
    }
}

// get cocktail by glass
exports.getCocktailByGlass = async function(glass) {
    try {
        const glassName = slugify(glass);
        return await Cocktail.find({glass: {$regex: glassName, $options: "i"}});
    } catch (err) {
        throw err;
    }
}

// get cocktail by ingredient alcohol
exports.getCocktailByAlcohol = async function(alcohol) {
    try {
        const alcoholName = slugify(alcohol);
        return await Cocktail.find({ingredients: {$elemMatch: {ingredient: {$regex: alcoholName, $options: "i"}}}});
    } catch (err) {
        throw err;
    }
}
