const { Router } = require('express');
const { getAllArticles } = require('../controllers/articleController');

const router = Router();

router.get('/', getAllArticles);

module.exports = router;
