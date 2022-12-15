import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';

dotenv.config();
//mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
  console.log('Conectado a la DB')
  })
  .catch(error => {
  console.log(error.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.use((error, req, res, next) => {
  res.status(500).send({ message: error.message});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
})