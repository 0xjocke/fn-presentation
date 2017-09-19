const Future = require('fluture')
const fetch = require('node-fetch')
const R = require('ramda')

const fetchF = Future.encaseP(fetch)

const url =
  'https://api.github.com/users/bachstatter'

fetchF(url).fork(
  console.error,
  console.log
)
// Response object from github

// toJSON : Response -> Future a b
const toJSON = Future.encaseP(res =>
  res.json()
)

fetchF(url)
  .map(toJSON)
  .fork(console.error, console.log)
// Future json

fetchF(url)
  .chain(toJSON)
  .fork(console.error, console.log)
// JSON

// handleError : Response -> Future a b
const handleError = res =>
  res.ok
    ? Future.of(res)
    : Future.reject(
        Error(res.statusText)
      )

fetchF(url)
  .chain(toJSON)
  .chain(handleError)
  .fork(console.error, console.log)
// JSON

fetchF(url + 'mistake')
  .chain(toJSON)
  .chain(handleError)
  .fork(console.error, console.log)
//Error: Request failed with status code 404

fetchF(url)
  .chain(toJSON)
  .chain(handleError)
  .map(x => x + y)
  .fork(console.error, console.log)
//Throws: ReferenceError: y is not defined

const handleRequest = R.composeK(
  handleError,
  toJSON
)

fetchF(url)
  .chain(handleRequest)
  .fork(console.error, console.log)
// JSON
