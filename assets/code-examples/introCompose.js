const multiply = curry((x, y) => x * y)

const turnNumberIntoObject = curry(
  (key, number) => ({ [key]: number })
)

const pow = curry((pow, num) =>
  Math.pow(num, pow)
)

const transformNum = num => {
  const numDoubled = multiply(2, num)

  const numDoubledPow2 = pow(
    2,
    numDoubled
  )

  return turnNumberIntoObject(
    'num',
    numDoubledPow2
  )
}

transformNum(10) // { num: 400 }

const transformNum = num =>
  turnNumberIntoObject(
    'num',
    pow(2, multiply(2, num))
  )

transformNum(10) // { num: 400 }
