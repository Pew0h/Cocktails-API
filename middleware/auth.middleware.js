const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                res.status(403).send({ message: "Invalid token" });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
};
