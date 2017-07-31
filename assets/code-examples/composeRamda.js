import {
  map,
  filter,
  sum,
} from 'ramda'

const numbers = [1, 2, 3]

const transformNum = compose(
  pow(2),
  minus(1),
  double
)

const isOdd = n => n % 2 !== 0

const transformOdd = compose(
  sum,
  map(transformNum),
  filter(isOdd)
)
transformOdd(numbers) // 26
