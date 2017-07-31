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
company1.name // Small Multiples
company2.name // Di Bella
company3.name // Di Bella
