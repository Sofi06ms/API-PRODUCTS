import express from 'express'
import productsRoutes from "./routes/products.routes.js"
const app=express();
//middlewares
//routes
app.use(productsRoutes);
//start server
export default app;