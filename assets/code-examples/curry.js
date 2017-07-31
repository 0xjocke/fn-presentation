const add = (num1, num2) => num1 + num2
add(1, 2) // 3
add(1) // NaN

const poorMansCurryAdd = num1 => num2 =>
  num1 + num2
const add10 = poorMansCurryAdd(10)
add10(1) // 11
add(10, 1) // Function

const curriedAdd = curry(add)

const add10 = curriedAdd(10)
add10(1) // 11
curriedAdd(10, 1) // 11
