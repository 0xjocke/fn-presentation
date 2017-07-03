const curry = require('curry')
const getNumber = () => Promise.resolve(1)

const doubleNumberIfNeeded = curry(
    (shouldDouble, number) =>
        shouldDouble ? num * 2 : num
)

const turnNumberIntoObject = curry(
    (key, number) =>
        ({[key]: number })
)

const doubleNumberAtKey = (key) =>
    getNumber()
        .then(doubleNumberIfNeeded(true))
        .then(turnNumberIntoObject(key))

doubleNumberAtKey('doubledNumber')
// {doubledNumber: 2}
