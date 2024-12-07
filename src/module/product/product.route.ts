import { Router } from 'express'
import { productController } from './product.controller'

const productRouter = Router()

productRouter.post('/', productController.createBicycle)
productRouter.get('/', productController.getBicycles)

export default productRouter
