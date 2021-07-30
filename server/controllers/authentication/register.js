const bcrypt = require('bcrypt');
const { User } = require('../../models/userModel');
const db = require('../../models/storeModel');

/**
 * @author Eric Saldivar
 * @params req.body.data receives username and password from client
 * @description middleware that creates new user in database using bycrpt to hash password
 */


const register = async (req, res, next) => {
	try {
		const postQuery = await db.query('SELECT * FROM "products"');
		console.log(postQuery.rows)

		const saltRounds = 10;
		const {username, password} = req.body.data;
		const hashedPassword = await bcrypt.hash(password, saltRounds);
		const newUser = await User.create({
			'user': username, 
			'password': hashedPassword
		});
        return next();
    } catch(err) {
        console.log('signUp error', err);
        return res.status(500).json({message: 'Failed to create user'});
    }
  }


module.exports = register;