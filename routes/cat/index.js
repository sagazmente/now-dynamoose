var express = require('express')
var router = express.Router()
var Cat = require('../../models/cat')

/* GET home page. */
router.route('/')
  .get((req, res, next) => {
    Cat.scan().exec()
      .then((cats) => res.json({status: 'Ok', objects: cats}))
      .catch(console.log)
  })
  .post((req, res, next) => {
    let cat = new Cat({name: req.body.name})
    cat.save()
      .then((cat) => res.json({status: 'Ok', object: cat}))
      .catch(console.log)
  })

router.route('/:id')
.get((req, res, next) => {
  Cat.get(req.params.id)
      .then((cat) => res.json({status: 'Ok', object: cat}))
      .catch(console.log)
})

module.exports = router
