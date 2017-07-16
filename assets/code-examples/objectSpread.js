const company = {
  name: 'Small Multiples',
  location: [1, 2],
}
const company2 = {
  ...company,
  name: 'Di Bella',
}
const company3 = Object.assign(
  {},
  company,
  { name: 'Di Bella' }
)
console.log(company1.name) // Small Multiples
console.log(company2.name) // Di Bella
console.log(company3.name) // Di Bella
