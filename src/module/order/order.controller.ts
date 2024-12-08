import { Request, Response } from 'express'
import { orderService } from './order.service'

const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const orderData = req.body
    const newOrder = await orderService.createOrder(orderData)

    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: newOrder,
    })
  } catch (error: unknown) {
    let statusCode = 400

    let errorMessage = 'Something went wrong'
    if (error instanceof Error) {
      errorMessage = error.message
      if (error.message === 'Product not found') {
        statusCode = 404
      } else if (error.message === 'Insufficient stock') {
        statusCode = 422
      }
    }

    res.status(statusCode).json({
      message: errorMessage,
      status: false,
      error: error instanceof Error ? error.name : 'Unknown Error',
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
  } catch (error: unknown) {
    res.status(500).json({
      message: 'Failed to calculate revenue',
      status: false,
      error: error instanceof Error ? error.message : 'Internal Server Error',
    })
  }
}

export const orderController = {
  createOrder,
  calculateRevenue,
}
