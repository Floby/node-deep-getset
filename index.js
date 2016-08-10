exports.get = (object, ...keys) => {
  if (keys.length === 1 && Array.isArray(keys[0])) {
    keys = keys[0]
  }
  let key
  while(key = keys.shift()) {
    try {
      object = object[key]
    } catch(e) {
      return
    }
  }
  return object

}

exports.set = (object, ...keys) => {
  if (typeof object !== 'object') {
    throw Error('deep.set(object, ...keys, value): first argument must be an object, not ' + (typeof object))
  }
  if (!keys || !keys.length) {
    throw Error('deep.set(object, ...keys, value): no keys specified')
  }
  if (keys.length === 1) {
    throw Error('deep.set(object, ...keys, value): no value specified')
  }
  if (keys.length === 2 && Array.isArray(keys[0])) {
    keys = keys[0].concat([keys[1]])
  }
  const value = keys.pop()
  const lastKey = keys.pop()
  let key
  while(key = keys.shift()) {
    if (!object.hasOwnProperty(key)) {
       object[key] = {}
    }
    object = object[key]
  }
  return object[lastKey] = value
}
