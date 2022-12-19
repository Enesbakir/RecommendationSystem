const express = require('express');
const moviesController= require('../controllers/movieController');

const router = express.Router();

router.get('/',moviesController.getMovies);
router.get('/:id',moviesController.getMovie)
router.post('/',moviesController.addMovieToUser);
router.get('/genre/:id',moviesController.getMoviesByGenre);

module.exports=router; 