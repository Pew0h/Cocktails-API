const User = require('../models/user.model');
const bcrypt = require("bcrypt");

// connect user with jwt
exports.connectUserWithJwt = async function(user) {
    try {
        return await User.findOne({email: user.email});
    } catch (err) {
        throw err;
    }
}

// sign up user with jwt
exports.signUpUserWithJwt = async function(body) {
    try {
        const userExist = await User.findOne({email: body.email});
        if(userExist) return null;

        const user = new User(body);
        user.password = await bcrypt.hash(user.password, 10);
        await user.save();
        return user;
    } catch (err) {
        throw err;
    }
}
