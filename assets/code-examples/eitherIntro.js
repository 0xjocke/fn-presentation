const { Either } = require('monet')

Either.Left() // Failure
Either.Right() // Success

const eitherTest = fnReturningEither()

eitherTest.isLeft()
eitherTest.isRight()
