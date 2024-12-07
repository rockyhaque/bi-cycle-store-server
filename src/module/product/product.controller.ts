import { Request, Response } from 'express'
import { productService } from './product.service'

const createBicycle = async (req: Request, res: Response) => {
  try {
    const payload = req.body
    const result = await productService.createBicycle(payload)
    res.json({
      message: 'Bicycle created successfully',
      status: true,
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Failed to create the bicycle',
      error,
    })
  }
}

const getBicycles = async(req: Request, res: Response) => {
  try {
    const {searchTerm} = req.query
    const result = await productService.getBicycles(searchTerm as string)
    res.send({
      message: 'Bicycles retrieved successfully',
      status: true,
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Failed to get the bicycles',
      error,
    })
  }
}

export const productController = {
  createBicycle, getBicycles
}
