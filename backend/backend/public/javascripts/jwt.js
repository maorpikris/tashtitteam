const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config();

exports.generateAccessToken = generateAccessToken = (username) => {
    return jwt.sign(username, process.env.TOKEN_SECRET)
}
