const getNumbers = () => [1, 2, 3]
getNumbers()
  .map(doubleNumberIfNeeded(true))
  .map(
    turnNumberIntoObject(
      'doubledNumber'
    )
  )
// [{ doubledNumber: 2 }, ...]
