const journalService = require('../services/journalService');

// Service
const service = new journalService();

// Handler
async function getAllJournals(req, res) {
  try {
    const uid = req.user.uid;

    const journals = await service.getAllJournals(uid);

    if (journals) {
      res.status(200);
      res.send({
        status: 'success',
        journals: journals,
      });
    } else {
      res.status(404).json({ message: 'Journal not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function getJournalById(req, res) {
  try {
    const { id } = req.params;

    const journal = await service.getJournalById(id);

    if (!journal) {
      res.status(404).send({ status: 'error', message: 'Journal not found' });
    }

    res.status(200).send({
      status: 'success',
      message: 'Journal retrieved successfully',
      journal,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
}

// async function addNewJournal(req, res) {

// }

module.exports = { getAllJournals, getJournalById };
