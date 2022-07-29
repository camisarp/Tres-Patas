const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
    const authHeader = req.get("authorization");

    try {
        if (!authHeader) {
            return res.status(401).send("Access Denied: Log in!");
        }
        const token = authHeader.split(" ")[1];
//        console.log(token);

        jwt.verify(token, process.env.SECRET)
        next()
    } catch (error) {
        res.status(401).send(error.message)
    }
}

module.exports = {
    auth
};