const express = require('express');
const userRouter = express.Router();

userRouter.get('/',getAllUser);
userRouter.post('/signup',signUp);
userRouter.delete('/:id',deleteUser);
userRouter.put('/:id',updateUser);
userRouter.post('/login',logIn);
userRouter.get('/bookings/:id',getBookingUser);
userRouter.get('/:id',getUserById);

module.exports = userRouter;
