const express = require('express');
const router = express.Router();
const register = require('../controllers/authentication/register');
const login = require('../controllers/authentication/login');
const isAlreadyLoggedIn = require('../controllers/authentication/alreadyLoggedIn');

router.post('/register', isAlreadyLoggedIn, register, (req, res) => {
	return res.status(200).json({message: 'You successfully signed up!'});
  });

router.post('/login', isAlreadyLoggedIn, login, (req, res) => {
	return res.status(200).json({message: 'You successfully logged in!'});
  });

module.exports = router;