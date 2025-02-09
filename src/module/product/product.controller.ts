import { Request, Response } from 'express'
import { productService } from './product.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { StatusCodes } from 'http-status-codes'

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

const getBicycles = catchAsync(async (req, res) => {
  const result = await productService.getBicycles(req.query)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Bicycles retrieved successfully',
    data: result,
  })
})

const getSpecificBicycle = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId
    const result = await productService.getSpecificBicycle(productId)
    res.send({
      message: 'Bicycle retrieved successfully',
      status: true,
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Failed to get specific bicycle',
      error,
    })
  }
}

const updateBicycle = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId
    const body = req.body
    const result = await productService.updateBicycle(productId, body)
    res.send({
      message: 'Bicycle updated successfully',
      status: true,
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Failed to update Bicycle',
      error,
    })
  }
}

const deleteBicycle = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId
    await productService.deleteBicycle(productId)
    res.send({
      message: 'Bicycle deleted successfully',
      status: true,
      data: {},
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Failed to delete Bicycle',
      error,
    })
  }
}

export const productController = {
  createBicycle,
  getBicycles,
  getSpecificBicycle,
  updateBicycle,
  deleteBicycle,
}
