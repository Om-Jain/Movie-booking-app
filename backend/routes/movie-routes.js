const express = require('express');
const movieRouter = express.Router();

movieRouter.get('/',getAllMovie);
movieRouter.post('/add',addMovie);
movieRouter.get('/:id',getmovieById);


module.exports = movieRouter;
