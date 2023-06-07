const { Router } = require('express');
const {
  getAllJournals,
  getJournalById,
  addNewJournal,
} = require('../controllers/journalController');

const router = Router();

// TODO: Create a Journal API
// 1. GET All journals
// 2. GET Journal by  ID
// 3. Add Journal

// Get all journals
router.get('/', getAllJournals);

router.get('/journal/:id', getJournalById);

router.post('/', addNewJournal);

module.exports = router;
