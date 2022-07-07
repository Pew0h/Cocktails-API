# Cocktail API
## Installation
```bash
npm install
```
Vous allez devoir de plus, installer les jeux des donnés (aller dans IMPORT_DATA_MONGODB) puis ajouter <b>cocktails.json</b> et <b>users.json</b> dans votre mongodb

## Configuration
Go to .env file and set the following variables:

```bash
MONGODB_URL='YOUR MONGO DB URL'
ACCESS_TOKEN_SECRET='YOUR TOKEN SECRET FOR JWT'
PORT='YOUR LISTEN PORT'
```

## Usage
```bash
npm start
```
## Routes Auth
### Inscription d'un utilisateur
```bash
[POST] http://127.0.0.1:PORT/signup
```
Et veuillez rentrer dans le body :
```bash
{
    "email" : "votre_email",
    "username": "votre_username"
    "password" : "votre_mot_de_passe"
}
```
Si tout se passe bien vous allez recevoir un message de succès concernant la création de l'utilisateur + votre token.
### Connexion d'un utilisateur
```bash
[POST] http://127.0.0.1:PORT/login
```
Et veuillez rentrer dans le body :
```bash
{
    "email" : "votre_email",
    "password" : "votre_mot_de_passe"
}
```
Si tout se passe bien vous allez recevoir votre token.

## Routes Cocktails
### Liste des cocktails
```bash
[GET] http://127.0.0.1:PORT/cocktails
```
Retourne la liste des cocktails
### Ajouter un cocktail
```bash
[POST] http://127.0.0.1:PORT/cocktails
```
Et veuillez rentrer dans le body par exemple :
```bash
{
    "name" : "Chocolat chaud",
    "glass" : "Tasse",
    "category" : "Pour le matin",
    "ingredients" : [{
        "unit" : "cl",
        "amount" : "5",
        "ingredient" : "Lait",
        "label" : "Lait de vache"
    }, 
    {
        "unit" : "g",
        "amount" : "20",
        "ingredient" : "Chocolat en poudre",
        "label" : "Benco"
    }],
    "garnish" : "Mousse de lait",
    "preparation" : "Touille touille"
}
```
### Obtenir un cocktail avec son id
```bash
[GET] http://127.0.0.1:PORT/cocktails/:id
```
Retourne le cocktail avec l'id passé en paramètre

### Modifier un cocktail
```bash
[PATCH] http://127.0.0.1:PORT/cocktails/:id
```
Et veuillez rentrer dans le body par exemple :
```bash
{
    "name" : "Chocolat froid"
}
```

### Supprimer un cocktail
```bash
[DELETE] http://127.0.0.1:PORT/cocktails/:id
```

### Obtenir les cocktails en filtrant par le nom (CASE INSENSITIVE)
```bash
[GET] http://127.0.0.1:PORT/name/:name
```
Retourne les cocktails avec le nom passé en paramètre

### Obtenir les cocktails en filtrant par la catégorie (CASE INSENSITIVE)
```bash
[GET] http://127.0.0.1:PORT/category/:category
```
Retourne les cocktails avec la catégorie passée en paramètre

### Obtenir les cocktails en filtrant par la boisson (alcool) (CASE INSENSITIVE)
```bash
[GET] http://127.0.0.1:PORT/alchol/:alcohol
```
Retourne les cocktails avec la boisson (alcool) passée en paramètre

### Obtenir les cocktails en filtrant par le type de verre (CASE INSENSITIVE)
```bash
[GET] http://127.0.0.1:PORT/glass/:glass
```
Retourne les cocktails avec le type de verre passé en paramètre

