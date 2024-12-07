import { model, Schema } from 'mongoose'
import { IProduct } from './product.interface'

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Please provide the bicycle name'],
    },
    brand: {
      type: String,
      required: [true, 'Please provide the bicycle brand'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide the bicycle price'],
      min: [0, 'Price must be a positive number'],
    },

    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      required: [true, 'Please provide the bicycle type'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description of the bicycle'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please provide the quantity of the bicycle'],
      min: [0, 'Quantity cannot be less than 0'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'Please specify if the bicycle is in stock'],
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Product = model<IProduct>('Product', productSchema)

export default Product
