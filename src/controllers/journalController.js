const journalService = require('../services/journalService');

// Service
const service = new journalService();

// Handler
async function getAllJournals(req, res) {
  const uid = req.user.uid;

  console.log(req.query);

  const journals = await service.getAllJournals(uid);

  res.status(200);
  res.send({ journals });
}

async function getJournalById(req, res) {}

async function addNewJournal(req, res) {}

module.exports = { getAllJournals, getJournalById, addNewJournal };
