const add = (num1, num2) => num1 + num2
console.log(add(1,2)) // 3
console.log(add(1)) // NaN

const poorMansCurryAdd = num1 => num2 =>
   num1 + num2
const add10 = poorMansCurryAdd(10)
console.log(add10(1)) // 11
console.log(add(10, 1)) // Function

const curriedAdd = curry(add)

const add10 = curriedAdd(10)
console.log(add10(1)) // 11
console.log(curriedAdd(10, 1)) // 11
