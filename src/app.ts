import express, { Request, Response } from 'express'
import productRouter from './module/product/product.route'
import orderRouter from './module/order/order.route'

const app = express()

// middleware
app.use(express.json())

app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Bi Cycle Store Server is running',
  })
})

export default app
