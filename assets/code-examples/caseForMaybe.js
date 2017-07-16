const transformNum = compose(
  pow(2),
  minus(1),
  double
)

const getNumber = () =>
  Math.random() === 0.5 ? undefined : 5

const number = getNumbers()
const transformedNumber =
  number === undefined
    ? transformNum(number)
    : undefined
