const fs = require('fs')
const ipldC = require("@ipld/car")

async function storeCarFile(filename, client) {
  const inStream = fs.createReadStream(filename)
  const car = await ipldC.CarReader.fromIterable(inStream)
  
  const cid = await client.putCar(car)
  console.log('Stored CAR file! CID:', cid)
  return cid
}

module.exports = storeCarFile