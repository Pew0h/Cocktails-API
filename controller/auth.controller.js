const authService = require('../services/auth.service');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// connect user with jwt
exports.connectUserWithJwt = async function(req, res) {
    try {
        const user = await authService.connectUserWithJwt(req.body);
        if(user){
            const matchPassword = await bcrypt.compare(req.body.password, user.password);
            if(!matchPassword){
                return res.status(401).send({message: 'Invalid password'});
            }else{
                const accessToken = jwt.sign(JSON.stringify(user), process.env.ACCESS_TOKEN_SECRET);
                return res.status(200).send({token: accessToken});
            }
        }else{
            if (!req.body.email || !req.body.password){
                return res.status(400).send({message: 'Email and password are required'});
            }else{
                return res.status(404).send({message: 'User not found'});
            }
        }
    } catch (err) {
        return res.status(404).send(err);
    }
}

// sign up user with jwt
exports.signUpUserWithJwt = async function(req, res) {
    try {
        const user = await authService.signUpUserWithJwt(req.body);
        if(user){
            const accessToken = jwt.sign(JSON.stringify(user), process.env.ACCESS_TOKEN_SECRET);
            return res.status(200).send({message: "User created", token: accessToken});
        }
        else if(user == null){
            return res.status(404).send({message: 'Email already exist'});
        }
        else{
            return res.status(404).send({message: 'Impossible to create user'});
        }
    } catch (err) {
        return res.status(404).send({message: 'Impossible to create user, try again'});
    }
}
