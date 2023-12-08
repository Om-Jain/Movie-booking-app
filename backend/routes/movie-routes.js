const express = require('express');
const movieRouter = express.Router();
const {getAllUser} = require('../controllers/movie-controller');

movieRouter.get('/',getAllMovie);
movieRouter.post('/add',addMovie);
movieRouter.get('/:id',getmovieById);


module.exports = movieRouter;
