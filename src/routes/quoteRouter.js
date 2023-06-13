const { Router } = require('express');

const { getQuoteOfTheDay } = require('../controllers/quoteController');

const router = Router();

router.get('/', getQuoteOfTheDay);

module.exports = router;
