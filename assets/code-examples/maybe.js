const { Maybe } = require('monet')
const R = require('ramda')

const companies = [
  { name: 'Small multiples' },
  { name: 'Google' },
]
//String -> Maybe String
const getCompany = name =>
  Maybe.fromNull(
    companies.find(x => x.name === name)
  )

const SMU = getCompany(
  'Small multiples'
)
const FB = getCompany('facebook')

FB
  .map(x => x.name)
  .map(R.toUpper)
//Maybe.None()

SMU
  .map(d => d.name)
  .map(R.toUpper)
// Maybe.Some('SMALL MULTIPLES)

const upperName = R.compose(
  R.toUpper,
  d => d.name
)

R.map(upperName, SMU)
// Maybe.Some('SMALL MULTIPLES')

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
