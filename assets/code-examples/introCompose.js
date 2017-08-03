const double = x => x * 2
const minus = curry(
  (numberToSubtract, x) =>
    x - numberToSubtract
)
const pow = curry((pow, num) =>
  Math.pow(num, pow)
)

const transformNum = num => {
  const numDoubled = double(num)
  const numDoubledMinusOne = minus(
    1,
    numDoubled
  )
  return pow(2, numDoubledMinusOne)
}

transformNum(10) // 361

const transformNum = num =>
  pow(2, minus(1, double(num)))

transformNum(10) // 361
