const Future = require('fluture')
const axios = require('axios')
const R = require('ramda')

const axiosGet = Future.encaseP(
  axios.get
)

const url =
  'https://api.github.com/users/bachstatter'

const nameLens = R.lensPath([
  'data',
  'name',
])

axiosGet(url)
  .map(R.view(nameLens))
  .fork(console.error, console.log)
//Joachim

axiosGet(url + 'mistake')
  .map(R.view(nameLens))
  .fork(console.error, console.log)
//Error: Request failed with status code 404

axiosGet(url)
  .map(R.view(nameLens))
  .map(x => x + y)
  .fork(console.error, console.log)
//Throws: ReferenceError: y is not defined


const avatarLens = R.lensPath([
  'data',
  'avatar_url'
])

axiosGet(url)
  .map(R.view(avatarLens))
  .chain(axiosGet)
  .fork(console.error, console.log)
// Image data
