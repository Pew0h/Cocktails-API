const cocktailService = require('../services/cocktail.service');

// get cocktails
exports.getCocktails = async function(req, res) {
    try{
        const cocktails = await cocktailService.getCocktails();
        return res.status(200).send(cocktails);
    }catch (err) {
        return res.status(404).send(err);
    }
}

// add cocktail
exports.addCocktail = async function(req, res) {
    try{
        const cocktails = await cocktailService.addCocktail(req.body);
        return res.status(201).send(cocktails);
    }catch (err) {
        return res.status(404).send(err);
    }
}
// get cocktail by id
exports.getCocktailById = async function(req, res) {
    try{
        const cocktail = await cocktailService.getCocktailById(req.params.id);
        if(cocktail){
            return res.status(200).send(cocktail);
        }else{
            return res.status(404).send({message: 'Cocktail not found'});
        }
    }catch (err) {
        return res.status(400).send(err);
    }
}

// get cocktail by name
exports.getCocktailByName = async function(req, res) {
    try{
        const cocktail = await cocktailService.getCocktailByName(req.params.name);
        return res.status(200).send(cocktail);
    }catch (err) {
        return res.status(404).send(err);
    }
}

// get cocktail by category
exports.getCocktailByCategory = async function(req, res) {
    try {
        const cocktail = await cocktailService.getCocktailByCategory(req.params.category);
        return res.status(200).send(cocktail);
    } catch (err) {
        return res.status(404).send(err);
    }
}

// delete cocktail by id
exports.deleteCocktailById = async function(req, res) {
    try {
        const cocktailDeleted = await cocktailService.deleteCocktailById(req.params.id);
        if (cocktailDeleted) {
            return res.status(200).json({message: 'Cocktail deleted'});
        }else{
            return res.status(404).json({message: 'Cocktail not found'});
        }
    } catch (err) {
        return res.status(400).send(err);
    }
}

// modify cocktail by id
exports.modifyCocktailById = async function(req, res) {
    try {
        const cocktail = await cocktailService.modifyCocktailById(req.params.id, req.body);
        return res.status(200).send(cocktail);
    } catch (err) {
        return res.status(404).send(err);
    }
}

// get cocktail by glass
exports.getCocktailByGlass = async function(req, res) {
    try {
        const cocktail = await cocktailService.getCocktailByGlass(req.params.glass);
        return res.status(200).send(cocktail);
    } catch (err) {
        return res.status(404).send(err);
    }
}

// get cocktail by alcohol
exports.getCocktailByAlcohol = async function(req, res) {
    try {
        const cocktail = await cocktailService.getCocktailByAlcohol(req.params.alcohol);
        return res.status(200).send(cocktail);
    } catch (err) {
        return res.status(404).send(err);
    }
}

