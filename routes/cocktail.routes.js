const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/auth.middleware');
const cocktailController = require('../controller/cocktail.controller');

// Get all cocktails
router.get('/cocktails', authenticateJWT, cocktailController.getCocktails);

// Add a new cocktail
router.post('/cocktails', authenticateJWT, cocktailController.addCocktail);

// Get cocktail by id
router.get('/cocktails/:id', authenticateJWT, cocktailController.getCocktailById);

// get cocktail by name
router.get('/cocktails/name/:name', authenticateJWT, cocktailController.getCocktailByName);

// get cocktail by category
router.get('/cocktails/category/:category', authenticateJWT, cocktailController.getCocktailByCategory);

// delete cocktail by id
router.delete('/cocktails/:id', authenticateJWT, cocktailController.deleteCocktailById);

// modify cocktail by id
router.patch('/cocktails/:id', authenticateJWT, cocktailController.modifyCocktailById);

// get cocktail by glass
router.get('/cocktails/glass/:glass', authenticateJWT, cocktailController.getCocktailByGlass);

// get cocktail by alcohol
router.get('/cocktails/alcohol/:alcohol', authenticateJWT, cocktailController.getCocktailByAlcohol);

module.exports = router;
