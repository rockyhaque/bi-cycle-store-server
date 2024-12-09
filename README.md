# Bi-Cycle Store Management System

An Express application with TypeScript, integrating MongoDB with Mongoose to manage a Bicycle Store. Ensure data integrity using Mongoose schema validation.

> Live Link ➡️ https://bi-cycle-elite.vercel.app

## Features

### Bicycle Management

- Add new bicycles with details like name, brand, price, type, and availability.
- Retrieve all bicycles or filter using search terms (e.g., type, brand, name).
- View details of a specific bicycle by its ID.
- Update bicycle information such as price, quantity, or stock status.
- Delete a bicycle from the inventory.

### Order Management

- Place orders for bicycles with email, product, quantity, and total price.
- Validate stock availability before order creation.
- Automatically reduce inventory when an order is placed.

### Inventory Management

- Update product inventory dynamically.
- Mark a product as out of stock when the quantity reaches zero.
- Handle insufficient stock scenarios with proper error messages.

### Revenue Calculation

- Calculate total revenue generated from all orders.
- Leverage MongoDB aggregation pipelines for efficient revenue computation.

### Error Handling

- Comprehensive error handling for product unavailability and insufficient stock.
- Detailed, user-friendly error responses.
- Missing or invalid data.

## Tech Stack

- **Frontend:** Not included in this project (can be integrated later).
- **Backend:** Node.js, Express.js, TypeScript.
- **Database:** MongoDB with Mongoose.
- **Other Tools:** ESLint, Prettier, Nodemon

## Getting Started

### Project Structure
![Code Example](https://i.ibb.co.com/T1FBRwF/carbon-3.png)


### Prerequisites

- Node.js (v14 or above)
- MongoDB (running instance locally or in the cloud)
- Git

## Installation

1. Clone the Repository

   ```
   https://github.com/rockyhaque/bi-cycle-store-server
   ```

   ```
   cd bicycle-order-management
   ```

2. Install Dependencies

   ```
   npm install
   ```

3. Set Up Environment Variables Create a `.env` file in the root directory and include the following:

   ```
   PORT=5000
   ```

   ```
   MONGO_URI=mongodb://localhost:27017
   ```

4. Run the Application Start the server in development mode:

   ```
   npm run dev
   ```

## API Endpoints

### Bicycles

1. Create a Bicycle

   - Endpoint: `POST /api/products`
   - Request Body:

     ```
     {
        "name": "Trail Blazer 2000",
        "brand": "TrailMasters",
        "price": 300,
        "type": "Mountain",
        "description": "A durable mountain bike built for rugged trails and outdoor adventures.",
        "quantity": 15,
        "inStock": true
     }

     ```

   - Response: Success message with created bicycle details.

2. Get All Bicycles

   - Endpoint: `GET /api/products`
   - Query: `?searchTerm=type` (optional)
   - Response: A list of all bicycles.

3. Get a Specific Bicycle

   - Endpoint: `GET /api/products/:productId`
   - Response: Details of the specific bicycle.

4. Update a Bicycle

   - Endpoint: `PUT /api/products/:productId`
   - Request Body: Fields to update (e.g., `price`, `quantity`).
   - Response: Success message with updated bicycle details.

5. Delete a Bicycle
   - Endpoint: `DELETE /api/products/:productId`
   - Response: Success message confirming the deletion.

### Orders

1.  Place an Order - Endpoint: POST `/api/orders` - Request Body:

    - Endpoint: `POST /api/orders`
    - Request Body:

        ```
        {
        "email": "customer@example.com",
        "product": "648a45e5f0123c45678d9012",
        "quantity": 2,
        "totalPrice": 600
        }
        ```
    - Response: Success message with order details.

2. Calculate Revenue
    - Endpoint: `GET /api/orders/revenue`
    - Response: Total revenue from all orders

## Error Response Example
### Validation Error

```
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "price": {
        "message": "Price must be a positive number",
        "type": "min",
        "value": -10
      }
    }
  }
}

```

### Resource Not Found
```
{
  "message": "Bicycle not found",
  "success": false,
  "error": "ResourceNotFound"
}
```

## Contributing
1. Fork the repository.
2. Create a new branch:

    ```
    git checkout -b feature-name
    ```
3. Commit and push changes:
    ```
    git commit -m "Add feature-name"
    ```
    ```
    git push origin feature-name
    ```
4. Open a pull request.

## Contact
For inquiries, reach out to rockyhaque71@gmail.com