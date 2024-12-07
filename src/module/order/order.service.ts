import Product from '../product/product.model'
import { IOrder } from './order.interface'
import Order from './order.model'

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const { product, quantity } = payload

  const bicycleData = await Product.findById(product)

  if (!bicycleData) {
    throw new Error('Product not found')
  }

  if (bicycleData.quantity < quantity) {
    throw new Error('Insufficient stock')
  }

  bicycleData.quantity -= quantity
  bicycleData.inStock = bicycleData.quantity > 0
  await bicycleData.save()

  const order = await Order.create(payload)
  return order
}

const calculateRevenue = async (): Promise<{ totalRevenue: number }> => {
  const result = await Order.aggregate([
    {
      $lookup: {
        from: 'products', // Product collection name
        localField: 'product',
        foreignField: '_id',
        as: 'productDetails',
      },
    },
    {
      $unwind: '$productDetails',
    },
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: { $multiply: ['$quantity', '$productDetails.price'] },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ])

  return result[0] || { totalRevenue: 0 } 
}

export const orderService = {
  createOrder,
  calculateRevenue,
}
