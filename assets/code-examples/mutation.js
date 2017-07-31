const company = {
  name: 'Small Multiples',
  location: [1, 2],
}
const company2 = company
company2.name = 'Di Bella'
company2.name // Di Bella
company.name // Di Bella
