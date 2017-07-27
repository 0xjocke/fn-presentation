const { Maybe } = require('monet')
const R = require('ramda')

const list = [
  { name: 'Small multiples' },
  { name: 'Google' },
]
//String -> Maybe String
const getCompany = name =>
  Maybe.fromNull(
    list.find(x => x.name === name)
  )

const SMU = getCompany(
  'Small multiples'
)
const FB = getCompany('facebook')

FB.map(R.prop('name')).map(R.toUpper)
//Maybe.None()

SMU.map(R.prop('name')).map(R.toUpper)
// Maybe.Just('SMALL MULTIPLES)

const upperName = R.compose(
  R.toUpper,
  R.prop('name')
)

R.map(upperName, SMU)
// Maybe.Just('SMALL MULTIPLES')

R.map(upperName, FB)
//Maybe.None()

R.map(upperName, SMU).orSome(
  'No company found'
)
// 'SMALL MULTIPLES'

R.map(upperName, FB).orSome(
  'No company found'
)
// 'No company found'
