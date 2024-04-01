//import router
const router = require('express').Router();

const {insertCus} = require('../controllers/customerControl')
const {home} = require('../controllers/users')



router.get('/', home)
router.get('/register', insertCus)


module.exports = router;