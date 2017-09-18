const { Maybe } = require('monet')
const R = require('ramda')

const companies = [
  { name: 'Small multiples' },
  { name: 'Google' },
]
//String -> Maybe Object
const getCompany = name =>
  Maybe.fromNull(
    companies.find(x => x.name === name)
  )

getCompany('Small multiples')
  .map(x => x.name)
  .map(x => x.toUppercase())
// Maybe.Some('SMALL MULTIPLES)

getCompany('facebook')
  .map(x => x.name)
  .map(x => x.toUppercase())
//Maybe.None()

const upperName = R.compose(
  x => x.toUppercase(),
  x => x.name
)

getCompany('Small multiples').map(
  upperName
)
// Maybe.Some('SMALL MULTIPLES')

getCompany('Small multiples')
  .map(upperName)
  .orSome('No company found')
// 'SMALL MULTIPLES'

getCompany('facebook')
  .map(upperName)
  .orSome('No company found')
// 'No company found'
