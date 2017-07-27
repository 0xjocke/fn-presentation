const { Either } = require('monet')

Either.Right() // Success
Either.Left() // Failure

const eitherTest = fnReturningEither()

eitherTest.isRight()
eitherTest.isLeft()
