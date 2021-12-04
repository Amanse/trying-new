import { createReadStream } from 'fs'
import { CarReader } from '@ipld/car'

export async function storeCarFile(filename, client) {
  const inStream = createReadStream(filename)
  const car = await CarReader.fromIterable(inStream)
  
  const cid = await client.putCar(car)
  console.log('Stored CAR file! CID:', cid)
  return cid
}