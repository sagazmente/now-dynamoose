var dynamoose = require('dynamoose')
var ObjectId = require('bson-objectid')

// Create cat model with default options
var Cat = dynamoose.model('Cat', {
  id: {
    type: String,
    default: ObjectId()
  },
  name: String
})

module.exports = Cat
