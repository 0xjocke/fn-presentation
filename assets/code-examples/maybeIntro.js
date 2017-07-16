import Maybe from 'somewhere'

const myMaybe = Maybe(2)
//If we want to tranform the value inside the maube we call map
// We call something else if we want to unwrap in.
myMaybe.map(num => num)
