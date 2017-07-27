const { Either } = require('monet')
const R = require('ramda')

//String -> Either Object
const parseJson = json => {
  try {
    return Either.Right(
      JSON.parse(json)
    )
  } catch (error) {
    return Either.Left(error)
  }
}

const json =
  '{"name": "Small Multiples"}'

const invalidJson =
  '{name: "Small Multiples"}'

const upperName = R.compose(
  R.toUpper,
  R.prop('name')
)

parseJson(json)
  .map(upperName)
  .cata(
    err => console.error(err),
    x => console.log(x)
  )
// SMALL MULTIPLES

parseJson(invalidJson)
  .map(upperName)
  .cata(
    err => console.error(err),
    x => console.log('value: ', x)
  )
// SyntaxError: ...
