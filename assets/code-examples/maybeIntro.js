const { Maybe } = require('monet')

Maybe.Some(2)
Maybe.None()

const myMaybe = Maybe.of(2)
myMaybe.map(num => num * 2)
// Maybe.Some(4)
