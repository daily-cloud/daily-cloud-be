const QuoteService = require('../services/QuoteService');

const service = new QuoteService();

async function getQuoteOfTheDay(req, res) {
  const quote = await service.getQuoteOfTheDay();

  if (!quote) {
    res.status(404);
    res.send({ status: 'error', message: 'No quotes found' });
    return;
  }

  res.status(200);
  res.send({
    status: 'success',
    message: 'Quote retrieved successfully',
    quote,
  });
}

module.exports = { getQuoteOfTheDay };
