const { Router } = require('express');
const journalController = require('../controllers/journalController');

const router = Router();

// TODO: Create a Journal API
// 1. GET All journals
// 2. GET Journal by  ID
// 3. Add Journal

// Get all journals
router.get('/', journalController.getAllJournals);
router.get('/:id', journalController.getJournalById);
router.post('/', journalController.addNewJournal);

module.exports = router;
