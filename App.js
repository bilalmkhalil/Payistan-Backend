require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./api/users/user.router');
const transactionRouter = require('./api/transactions/transaction.router');

app.use(cors({origin: [ "http://localhost:3333"], credentials: true}));
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/transactions', transactionRouter);

const port = process.env.PORT || 3333;
app.listen(port, ()=> console.log(`Server started on port ${port}...`));