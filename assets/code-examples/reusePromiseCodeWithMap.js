const getNumbers = () => [1, 2, 3]
getNumbers()
  .map(multiply(2))
  .map(turnNumberIntoObject('num'))
// [{ num: 2 }, ...]
