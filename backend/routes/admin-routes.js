const express = require('express');
const adminRouter = express.Router();
const {getAllUser} = require('../controllers/admin-controller');


adminRouter.get('/signup',addAdmin);
adminRouter.post('/login',adminLogin);
adminRouter.get('/',addAdmin);
adminRouter.get('/:id',getAdminById);


module.exports = adminRouter;
