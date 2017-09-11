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

getCompany('facebook')
  .map(x => x.name)
  .map(R.toUpper)
//Maybe.None()

getCompany('Small multiples')
  .map(d => d.name)
  .map(R.toUpper)
// Maybe.Some('SMALL MULTIPLES)

const upperName = R.compose(
  R.toUpper,
  d => d.name
)

getCompany('Small multiples')
  .map(upperName)
// Maybe.Some('SMALL MULTIPLES')

getCompany('Small multiples'))
  .map(upperName)
  .orSome(
    'No company found'
  )
// 'SMALL MULTIPLES'

getCompany('facebook')
  .map(upperName)
  .orSome(
    'No company found'
  )
// 'No company found'
