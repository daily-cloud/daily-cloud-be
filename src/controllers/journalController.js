const journalService = require('../services/journalService');

// Service
const service = new journalService();

// Handler
async function getAllJournals(req, res) {
  const journals = await service.getAllJournalsFirestore();

  res.status(200);
  res.send({ message: 'Journal API', data: journals });
}

module.exports = { getAllJournals };
