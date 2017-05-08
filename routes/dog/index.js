var express = require('express')
var router = express.Router()
var Dog = require('../../models/dog')

/* GET home page. */
router.route('/')
  .get((req, res, next) => {
    return Dog.scan().exec()
      .then((dogs) => res.json({status: 'Ok', objects: dogs}))
      .catch(console.log)
  })
  .post((req, res, next) => {
    return Dog.create(req.body)
      .then((dog) => res.json({status: 'Ok', object: dog}))
      .catch(console.log)
  })

router.route('/:id')
.get((req, res, next) => {
  return Dog.get(req.params.id)
    .then(dog => dog.populate({
      path: 'filho',
      model: 'Dog',
      populate: {
        path: 'filho',
        model: 'Dog',
        populate: {
          path: 'filho',
          model: 'Dog'
        }
      }
    }))
    .then((dog) => res.json({status: 'Ok', object: dog}))
    .catch(console.log)
})

module.exports = router
