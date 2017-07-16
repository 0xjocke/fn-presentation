import Maybe from 'somewhere'
import R from 'ramda'
const transformNum = compose(
  pow(2),
  minus(1),
  double
)

const getNumber = () =>
  Math.random() === 0.5
    ? Maybe.nothing
    : Maybe.just(5)

const getTransformNum = compose(
  R.map,
  getNumber
)
const transformNum = getTransformNum()
