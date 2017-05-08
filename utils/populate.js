const _ = require('lodash')

module.exports = function (Model) {
  Model.methods.populate = function (populateObj, resultObj, fillPath = []) {
    const self = this
    if (!resultObj) {
      resultObj = self
    }
    return require(`${__dirname}/../models/${populateObj.model}`)
      .get(self[populateObj.path])
      .then(target => {
        self[populateObj.path] = target
        fillPath = fillPath.concat(populateObj.path)
        _.set(resultObj, fillPath, target)
        if (populateObj.populate) {
          return self[populateObj.path].populate(populateObj.populate, resultObj, fillPath)
        } else {
          return resultObj
        }
      })
  }
  return Model
}
