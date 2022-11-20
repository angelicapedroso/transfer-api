import express from 'express';
import userRoute from './routes/userRoute';
import loginRoute from './routes/loginRoute';

const app = express();

app.use(express.json());

app.use('/register', userRoute);
app.use('/login', loginRoute);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
