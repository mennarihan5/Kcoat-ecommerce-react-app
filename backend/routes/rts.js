//import router
const router = require('express').Router();

const {mid} = require('../middleware/mdw')
const {insertCus} = require('../controllers/customerControl')
const {verifyAuth} = require ('../middleware/auth')
const {home, about, login, details} = require('../controllers/users')



router.get('/', mid, home)
router.get('/about', login)
router.get('/details', verifyAuth, details)
router.get('/register', insertCus);


module.exports = {router};