const JournalService = require('../services/JournalService');

// Service
const service = new JournalService();

// Handler
async function getAllJournals(req, res) {
  try {
    const uid = req.user.uid;
    const { month, year } = req.query;

    const journals = await service.getAllJournals(uid, { month, year });

    if (journals) {
      res.status(200);
      res.send({
        status: 'success',
        message: 'Journals retrieved successfully',
        journals,
      });
    } else {
      res.status(404).json({ message: 'Journal not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
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

async function addNewJournal(req, res) {
  try {
    const { uid } = req.user;
    const { activity, content, mood } = req.body;

    // Check if request body is empty
    if (!activity || !content || !mood) {
      res.status(400).send({
        status: 'error',
        message: 'Please provide journal data!',
      });

      return;
    }

    const data = {
      userId: uid,
      activity,
      content,
      mood,
    };

    const journalId = await service.addNewJournal(data);

    res.status(201).send({
      status: 'success',
      message: 'Journal added successfully',
      journalId,
    });
  } catch (error) {
    res.status(500);
    res.send({
      status: 'error',
      message: 'Internal server error',
    });
  }
}

async function checkJournalToday(req, res) {
  try {
    const { uid } = req.user;

    const hasUploadedJournal = await service.checkJournalToday(uid);

    if (hasUploadedJournal) {
      res.status(200).send({
        status: 'success',
        message: 'Journal found',
        hasUploadedJournal,
      });
    } else {
      res.status(404).send({
        status: 'error',
        message: 'Journal not found',
        hasUploadedJournal,
      });
    }
  } catch (error) {
    res.status(500).send({ message: 'Internal server error', error });
  }
}

module.exports = {
  getAllJournals,
  getJournalById,
  addNewJournal,
  checkJournalToday,
};
