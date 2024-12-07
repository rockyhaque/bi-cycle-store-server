import { IProduct } from './product.interface'
import Product from './product.model'

const createBicycle = async (payload: IProduct): Promise<IProduct> => {
  const result = await Product.create(payload)
  return result
}

const getBicycles = async (searchTerm?: string): Promise<IProduct[]> => {
  const filter: {
    $or?: { name?: RegExp; brand?: RegExp; type?: RegExp }[]
  } = {}

  if (searchTerm) {
    const regex = new RegExp(searchTerm, 'i')
    filter.$or = [{ name: regex }, { brand: regex }, { type: regex }]
  }

  const result = await Product.find(filter)
  return result
}

export const productService = {
  createBicycle,
  getBicycles,
}
