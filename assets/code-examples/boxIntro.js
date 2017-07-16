import Box from 'box-lib'
import R from 'ramda'
const myBox = Box(2)

myBox.map(R.multiply(2)) // Box(4)
R.map(R.multiply(2), myBox) // Box(4)

const helloBox = Box('Hello World')
map(R.toUpper, helloBox) // HELLO WORLD
