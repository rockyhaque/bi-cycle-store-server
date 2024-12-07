import { Request, Response } from 'express'
import { orderService } from './order.service'

const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const orderData = req.body
    const newOrder = await orderService.createOrder(orderData)

    res.json({
      message: 'Order created successfully',
      status: true,
      data: newOrder,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Failed to create order',
      error,
    })
  }
}

const calculateRevenue = async (req: Request, res: Response): Promise<void> => {
  try {
    const revenue = await orderService.calculateRevenue()

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: revenue,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Failed to calculate revenue',
      error,
    })
  }
}

export const orderController = {
  createOrder,
  calculateRevenue,
}
