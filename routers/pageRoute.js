const express = require('express');
const pageController= require('../controllers/pageController');

const router = express.Router();

router.get('/',pageController.getIndexPage);
router.get('/tv',pageController.getTvPage);
router.get('/celebs',pageController.getCelebsPage);
router.get('/index',pageController.getIndexPage);



module.exports=router;