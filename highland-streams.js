const fs = require('fs')
const highland = require('highland')
highland(fs.createReadStream('customers.csv', 'utf8'))
  .split('')
  .map(line => line.split(','))
  .map(parts => ({
    name: parts[0],
    numPurchases: parts[1]
  }))
  .filter(customer => customer.numPurchases > 2)
  .map(customer => customer.name)
  .each(x => console.log('each: ', x))
