function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object)
  newobj.key = value
  return newObj
}
