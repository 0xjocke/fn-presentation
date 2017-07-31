const {curry} = require('ramda')
const getNumber = () =>
  Promise.resolve(1)

const doubleNumberIfNeeded = curry(
  (shouldDouble, num) =>
    shouldDouble ? num * 2 : num
)

const turnNumberIntoObject = curry(
  (key, number) => ({ [key]: number })
)

getNumber()
  .then(doubleNumberIfNeeded(true))
  .then(
    turnNumberIntoObject(
      'doubledNumber'
    )
  )
// {doubledNumber: 2}
