import express, { Request, Response } from 'express'
import productRouter from './module/product/product.route'
import orderRouter from './module/order/order.route'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import userRouter from './module/user/user.route'
import authRouter from './module/auth/auth.route'

const app = express()

// middleware
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Bi Cycle Store Server is running',
  })
})

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
})

// Global Error Handler
app.use(globalErrorHandler)

export default app
