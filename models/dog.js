const dynamoose = require('dynamoose')
const Schema = dynamoose.Schema
const ObjectId = require('bson-objectid')
const populate = require('../utils/populate')

let Dog = new Schema({
  id: {
    type: String,
    default: () => ObjectId(),
    hashKey: true
  },
  name: {
    type: String
  },
  filho: {
    type: String,
    ref: 'Dog'
  }
})

module.exports = dynamoose.model('Dog', populate(Dog))
