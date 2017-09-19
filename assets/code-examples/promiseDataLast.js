const { curry } = require('ramda')
const getNumber = () =>
  Promise.resolve(1)

const multiply = curry((x, y) => x * y)

const turnNumberIntoObject = curry(
  (key, number) => ({ [key]: number })
)

getNumber()
  .then(multiply(2))
  .then(turnNumberIntoObject('num'))
// { num: 2 }
