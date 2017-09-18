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
  x => x.toUppercase(),
  x => x.name
)

parseJson(json)
  .map(upperName)
  .cata(
    console.error,
    console.log
  )
// SMALL MULTIPLES

parseJson(invalidJson)
  .map(upperName)
  .cata(
    console.error,
    console.log
  )
// SyntaxError: ...
