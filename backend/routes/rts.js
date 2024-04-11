//import router
const router = require('express').Router();

const {mid} = require('../middleware/mdw')
const {insertCus} = require('../controllers/customerControl')
const {home, about, login} = require('../controllers/users')



router.get('/', mid, home)
router.get('/about', login)
router.get('/register', insertCus)


module.exports = {router};