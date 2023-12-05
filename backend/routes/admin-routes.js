const express = require('express');
const adminRouter = express.Router();

adminRouter.get('/signup',addAdmin);
adminRouter.post('/login',adminLogin);
adminRouter.get('/',addAdmin);
adminRouter.get('/:id',getAdminById);


module.exports = adminRouter;
