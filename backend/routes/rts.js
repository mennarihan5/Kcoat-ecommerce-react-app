//import router
const router = require('express').Router();

const {home} = require('../controllers/users')
router.get('/', home)
module.exports = router;