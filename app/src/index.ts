import express from 'express';
import userRoute from './routes/userRoute';
import loginRoute from './routes/loginRoute';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use('/user', userRoute);
app.use('/login', loginRoute);

app.use(cors());

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
