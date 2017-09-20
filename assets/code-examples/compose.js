const transformNum = x =>
  compose(
    turnNumberIntoObject('num'),
    pow(2),
    multiply(2)
  )(x)

transformNum(10) // { num: 400 }

const transformNum = compose(
  turnNumberIntoObject('num'),
  pow(2),
  multiply(2)
)

transformNum(10) // { num: 400 }

const doublePow2 = compose(
  pow(2),
  multiply(2)
)

const transformNum = compose(
  turnNumberIntoObject('num'),
  doublePow2
)

transformNum(10) // { num: 400 }
