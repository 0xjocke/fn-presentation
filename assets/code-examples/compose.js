const transformNum = x =>
  compose(pow(2), minus(1), double)(x)

transformNum(10) // 361

const transformNum = compose(
  pow(2),
  minus(1),
  double
)

transformNum(10) // 361

const doubleThenMinusOne = compose(
  minus(1),
  double
)

const transformNum = compose(
  pow(2),
  doubleThenMinusOne
)

transformNum(10) // 361
