const bcrypt = require('bcrypt');
const { User } = require('../../models/userModel');

/**
 * 
 * @param {email, password} req.body 
 * @description middleware that uses username and password from req.body.data to create a new session.
 * @description the middleware will return a message saying user does not exist.  If user is found the hashed password from database will be 
 * @description to password provided by the client.  If passwords match a session will be created in database
 * 
 * @returns message saying that user was signed in and req.session.user
 */

 const login =  async (req, res, next) => {
    try {
        const { username, password } = req.body.data;
        const findUserInDB = await User.findOne({user: username});
        if (!findUserInDB) return res.status(200).json({message: 'User does not exist'});
        const validatePassword = await bcrypt.compare(password, findUserInDB.password);
        if (validatePassword) {
            req.session.user = {
                userId: findUserInDB._id,
                user: findUserInDB.user,
             }
            return next();
        } else return res.status(200).json({message: 'Incorrect email/password combination'});
    } catch (err) {
        return res.status(500).json({message: 'unknown error'})
    }
}

module.exports = login;