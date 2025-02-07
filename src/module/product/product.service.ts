import QueryBuilder from '../../builder/QueryBuilder'
import { IProduct } from './product.interface'
import Product from './product.model'

const createBicycle = async (payload: IProduct): Promise<IProduct> => {
  const result = await Product.create(payload)
  return result
}

//* Without Query Builder
// const getBicycles = async (searchTerm?: string): Promise<IProduct[]> => {
//   const filter: {
//     $or?: { name?: RegExp; brand?: RegExp; type?: RegExp }[]
//   } = {}

//   if (searchTerm) {
//     const regex = new RegExp(searchTerm, 'i')
//     filter.$or = [{ name: regex }, { brand: regex }, { type: regex }]
//   }

//   const result = await Product.find(filter)
//   return result
// }

//* With Query Builder
const getBicycles = async (
  query: Record<string, unknown>
): Promise<IProduct[]> => {
  const queryBuilder = new QueryBuilder(Product.find(), query)
    .search(['name', 'brand', 'type'])
    .filter()
    .paginate()
    .sort()
    .select()

  return await queryBuilder.modelQuery
}

const getSpecificBicycle = async (productId: string) => {
  const result = await Product.findById(productId)
  return result
}

const updateBicycle = async (productId: string, data: IProduct) => {
  const result = await Product.findByIdAndUpdate(productId, data, {
    new: true,
  })
  return result
}

const deleteBicycle = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId)
  return result
}

export const productService = {
  createBicycle,
  getBicycles,
  getSpecificBicycle,
  updateBicycle,
  deleteBicycle,
}
