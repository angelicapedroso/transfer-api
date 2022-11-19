import express from 'express';
import userRoute from './routes/userRoute';

const app = express();

app.use(express.json());

app.use('/register', userRoute);

app.listen(3335, () => {
  console.log('Server is running on port 3333');
});
