let strictEquals = (a, b) => {
  let typeA = typeof a
  let typeB = typeof b

  if (a == b && typeA == typeB) {
    return true
  } else {
    return false
  }
}

module.exports = strictEquals
