var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({status: 'Ok', message: 'Welcome to our api!'})
})

router.use('/cat', require('./cat'))
router.use('/dog', require('./dog'))

module.exports = router
